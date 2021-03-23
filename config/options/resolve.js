/**
 * These options change how modules are resolved.
 *
 * @see https://webpack.js.org/configuration/resolve
 *
 * @author bingumd <bingumd@gmail.com>
 * @since 0.1.0
 */

import { paths } from '../store'

export default {
    alias: {
        '@': `${paths.scripts}`,
        '@styles': `${paths.styles}`,
        '../fonts': `${paths.public}/fonts`,
        '../images': `${paths.public}/images`,
    },
}
