import webpack from 'webpack';
import { compose } from 'compose-middleware';

export default function createWebpackMiddleware(configPath) {
    const config = require(configPath).default;
    const compiler = webpack(config);
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    return compose([
        webpackDevMiddleware(compiler, {
            noInfo: true,
            publicPath: config.output.publicPath,
        }),
        webpackHotMiddleware(compiler, {
            log: false,
            path: '/__webpack_hmr',
            heartbeat: 10 * 1000,
        }),
    ]);
}