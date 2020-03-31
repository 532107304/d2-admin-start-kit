module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        //配置
        'indent': 'off',//关闭自定义缩进
        "vue/html-indent": ["error", 4], //模板缩进多少个空格，默认是2个
        //"vue/script-indent": ["error", 4], //script模板缩进
        'indent': ['error', 4, {
            'SwitchCase': 1
        }],//设置所有空格都是4个
        // 不限制标签自动闭合any 是自定义
        "vue/html-self-closing": ["error", {
            "html": {
                "void": "any",
                "normal": "any",
                "component": "any"
            },
            "svg": "always",
            "math": "always"
        }]
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                jest: true
            }
        }
    ]
}
