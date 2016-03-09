import express                          from 'express';
import compression                      from 'compression';
import createRender4r                   from 'create-render-4r';
import routes                           from 'universal/routes'
import loadStore                        from 'universal/load-store';
import layoutHtml                       from './layout-html';

export default function useMiddleware(app) {
  const nodeEnv = process.env.NODE_ENV || 'development';

  app.use(compression());
  app.use(express.static('public'));

  if (nodeEnv === 'production') {
    app.use(function(req, res, next) {
      var proto = req.headers["x-forwarded-proto"];
      if (proto === "https") {
        return next();
      }
      res.redirect("https://" + req.headers.host + req.url);
    });
  }

  const universalRender = createRender4r({
    routes, loadStore, layoutHtml
  })
  app.use(universalRender);

  app.use(logErrors);
  app.use(clientErrorHandler);
  app.use(errorHandler);

  return app;
}


function logErrors(err, req, res, next) {
  console.error(req.id, err.stack);
  next(err);
}

function clientErrorHandler(err, req, res, next) {
  var isJSON = req.headers['content-type'] === 'application/json';
  if (isJSON) {
    res.status(500);
    res.send({ error: err.message });
  } else {
    next(err);
  }
}

function errorHandler(err, req, res, next) {
  res.status(500);
  res.send(err.message);
}
