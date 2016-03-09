import express                from 'express';
import logger                 from 'morgan';
import webpack                from 'webpack';
import config                 from '../../webpack.config.dev';
import webpackDevMiddleware   from 'webpack-dev-middleware';
import webpackHotMiddleware   from 'webpack-hot-middleware';
import useMiddleware          from '../server/use-middleware';

const app = express();
const compiler = webpack(config);
const webpackDev = webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
});
const webpackHot = webpackHotMiddleware(compiler);

app.use(logger('dev'));
app.use(webpackDev);
app.use(webpackHot);

export default useMiddleware(app);
