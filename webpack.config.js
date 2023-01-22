import path from 'path';

// eslint-disable-next-line no-undef
module.exports = {
    mode: 'none',
    entry: {
        // eslint-disable-next-line no-undef
        app: path.join(__dirname, 'src', 'index.tsx')
    },
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            }
        ],
    },
    output: {
        filename: '[name].js',
        // eslint-disable-next-line no-undef
        path: path.resolve(__dirname, 'dist')
    }
}