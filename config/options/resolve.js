/**
 * These options change how modules are resolved
 *
 * @see https://webpack.js.org/configuration/resolve
 *
 * @author bingumd <bingumd@gmail.com>
 * @since 0.1.0
 */

import { paths } from '../store'

export const resolve = {
    alias: {
        '@': `${paths.scripts}`,
        'public': `${paths.public}`,
    },
}
