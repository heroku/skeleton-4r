import express                           from 'express';
import logger                            from 'morgan';
import uuid                              from 'node-uuid';
import useMiddleware                     from './use-middleware';

const app = express();

app.use((req, res, next) => {
  req.id = uuid.v4();
  next();
});
logger.token('id', req => req.id );
app.use(logger(':id :remote-addr :date[iso] :method :url '
  +'HTTP/:http-version :status :response-time ms - :res[content-length]'));

export default useMiddleware(app);
