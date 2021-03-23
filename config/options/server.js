/**
 * Spin up a server for quick development.
 *
 * @see https://webpack.js.org/configuration/dev-server
 *
 * @author bingumd <bingumd@gmail.com>
 * @since 0.1.0
 */

import isWindows from 'is-windows'

export default {
    host: process.env.HOST || (isWindows ? '127.0.0.1' : '0.0.0.0'),
    port: process.env.PORT || 8080,
    open: true,
}
