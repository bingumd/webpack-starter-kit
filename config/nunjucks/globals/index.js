/**
 * This Webpack loader compiles Nunjucks templates.
 *
 * @see https://github.com/ogonkov/nunjucks-loader#globals
 *
 * @author bingumd <bingumd@gmail.com>
 * @since 0.1.0
 *
 * ! @note Using ES modules syntax is not yet possible.
 */

const path = require('path')

module.exports = {
    symbol: path.resolve(__dirname, './symbol.js'),
}
