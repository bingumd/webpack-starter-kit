/**
 * This webpack plugin generates a single SVG spritemap
 * containing multiple <symbol> elements from all .svg
 * files in a directory.
 *
 * @see https://github.com/cascornelissen/svg-spritemap-webpack-plugin
 *
 * @author bingumd <bingumd@gmail.com>
 * @since 0.1.0
 */

import SVGSpritemapPlugin from 'svg-spritemap-webpack-plugin'
import { paths } from '../store'

export default new SVGSpritemapPlugin(`${paths.public}/svg/**/*.svg`, {
    output: {
        filename: 'assets/images/symbol.svg',
        svgo: {
            plugins: [{ removeTitle: true }, { removeStyleElement: true }],
        },
    },
    sprite: {
        prefix: 'icon-',
    },
})
