/**
 * A webpack plugin to simplifies creation of HTML files
 * to serve your webpack bundles.
 *
 * @see https://webpack.js.org/plugins/html-webpack-plugin/
 *
 * @author bingumd <bingumd@gmail.com>
 * @since 0.1.0
 */

import fs from 'fs'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { paths } from '../store'

const data = `${paths.views}/data/data.js`

// prettier-ignore
export default () => fs.readdirSync(`${paths.views}`, {
    withFileTypes: true,
})
.filter(dirent => dirent.isFile())
.map( dirent => new HtmlWebpackPlugin({
    filename: dirent.name,
    template: `${paths.views}/${dirent.name}`,
    inject: 'body',
    templateParameters: fs.existsSync(data) && require(data),
}))
