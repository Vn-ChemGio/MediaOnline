module.exports = {
    presets: [ 'module:metro-react-native-babel-preset' ],
    plugins: [ 'react-native-reanimated/plugin',
        [
            'module-resolver',
            {
                root: [ './' ],
                alias: {
                    /**
                     * Regular expression is used to match all files
                     * inside `./src` directory and map each `.src/folder/[..]`
                     * to `~folder/[..]` path
                     */
                    '^~(.+)': './src/\\1',
                },
                extensions: [
                    '.ios.js',
                    '.android.js',
                    '.js',
                    '.jsx',
                    '.json',
                    '.tsx',
                    '.ts',
                    '.native.js',
                    '.png',
                    '.jpg'
                ],
            }
        ],
        ["module:react-native-dotenv", {
            allowUndefined: true,
            moduleName: "@env",
            path:'.env'
        }]
    ],
    env: {
        production: {
            plugins: ['react-native-paper/babel'],
        },
    },
};
