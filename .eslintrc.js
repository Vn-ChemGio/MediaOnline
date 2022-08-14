module.exports = {
    root: true,
    //extends: '@react-native-community',
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/no-shadow': ['error'],
                'no-shadow': 'off',
                'no-undef': 'off',
                'sort-imports': [
                    'error',
                    {
                        ignoreCase: false,
                        ignoreDeclarationSort: true,
                        ignoreMemberSort: false,
                        memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'],
                    },
                ],
                'object-property-newline': [
                    'error',
                    {
                        allowAllPropertiesOnSameLine: true,
                        allowMultiplePropertiesPerLine: true,
                    },
                ],

                'object-curly-spacing': [
                    'error',
                    'always',
                    {
                        arraysInObjects: true,
                        objectsInObjects: true,
                    },
                ],
                '@typescript-eslint/object-curly-spacing': [
                    'error',
                    'always',
                    {
                        arraysInObjects: true,
                        objectsInObjects: true,
                    },
                ]
            },
        },
    ],
};
