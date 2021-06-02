import { devServer } from './options'
import FriendlyErrorsPlugin from 'friendly-errors-webpack-plugin'

export default {
    devServer,
    target: 'web',
    mode: 'development',
    devtool: 'inline-source-map',
    stats: { all: false, colors: true, timings: true },
    plugins: [new FriendlyErrorsPlugin()],
}
