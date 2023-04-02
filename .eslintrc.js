module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["eslint:recommended"],
    parserOptions: {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    rules: {
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "no-duplicate-imports": 2,
        "no-var": 2,
        "prefer-const": 2,
        "linebreak-style": 0,
        "semi": "error",
    },
    globals: {
        process: true,
        console: true,
        module: true,
    },
    ignorePatterns: ["build/**/*.js" ]
};
