// Webpack Plugins
import merge from 'webpack-merge'

// Internal dependencies
import common from './config/common'
import development from './config/development'
import production from './config/production'
import { isDev } from './config/store'

// Export webpack config
export default () => merge(common, isDev ? development : production)
