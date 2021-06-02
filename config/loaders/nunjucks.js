/**
 * This Webpack loader compiles Nunjucks templates
 *
 * @see https://github.com/ogonkov/nunjucks-loader
 *
 * @author bingumd <bingumd@gmail.com>
 * @since 0.1.0
 */

import { paths } from '../store'

export const nunjucks = {
    test: /\.(html|njk)$/,
    use: [
        {
            loader: 'simple-nunjucks-loader',
            options: {
                searchPaths: `${paths.views}`,
                globals: require('../nunjucks/globals'),
            },
        },
    ],
}
