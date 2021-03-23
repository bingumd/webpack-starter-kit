// Import dependencies
import { devServer } from './options'
import FriendlyErrorsPlugin from 'friendly-errors-webpack-plugin'

// Export development config
export default {
    devServer,
    mode: 'development',
    devtool: 'inline-source-map',
    stats: { all: false, colors: true, timings: true },
    plugins: [new FriendlyErrorsPlugin()],
}
