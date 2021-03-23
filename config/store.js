// Import dependencies
import path from 'path'

// Get the development mode
export const isDev = process.env.NODE_ENV === 'development'

// Get the current working directory
export const cwd = process.cwd()

// Get the project paths
export const paths = {
    src: path.resolve(cwd, 'src'),
    dist: path.resolve(cwd, 'dist'),
    scripts: path.resolve(cwd, 'src/scripts'),
    styles: path.resolve(cwd, 'src/styles'),
    views: path.resolve(cwd, 'src/views'),
    public: path.resolve(cwd, 'src/public'),
}
