module.exports = {
    useTabs: false,
    printWidth: 100,
    singleQuote: true,
    arrowParens: 'avoid',
    trailingComma: 'all',
    endOfLine: 'lf',
    semi: false,
    overrides: [
        {
            files: ['package.json', 'package-lock.json', '*.md'],
            options: {
                printWidth: 80,
                singleQuote: false,
                tabWidth: 2,
                trailingComma: 'none',
                useTabs: false,
            },
        },
    ],
}
