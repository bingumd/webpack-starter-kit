import { entry, output, optimization, resolve } from './options'
import * as plugins from './plugins'
import * as loaders from './loaders'

export default {
    entry,
    output,
    // prettier-ignore
    module: {
        rules: [
            loaders.scripts,
            loaders.nunjucks,
            loaders.styles,
            loaders.images,
            loaders.fonts
        ],
    },
    // prettier-ignore
    plugins: [
        plugins.MiniCssExtract,
        plugins.Copy,
        plugins.SVGSpritemap,
        ...plugins.HtmlPages()
    ],
    optimization,
    resolve,
}
