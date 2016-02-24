module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true,
            "modules": true
        }
    },
    "rules": {
        "indent": [2, 2, {"SwitchCase": 1}],
        "linebreak-style": [
            2,
            "windows"
        ],
        "quotes": [
            2,
            "double"
        ],
        "semi": [
            2,
            "never"
        ]
    }
};
