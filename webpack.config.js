import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
    devtool: 'hidden-source-map',
    entry: './src/index.ts',
    externals: ['axios'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.min.js',
        library: {
            type: 'module',
        },
        globalObject: 'this',
        libraryTarget: 'module',
        module: true,
        environment: {
            module: true,
        },
    },
    experiments: {
        outputModule: true,
    },
    resolve: {
        extensions: ['.ts'],
    },
    module: {
        rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    plugins: [new CleanWebpackPlugin()],
};
