module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2015,
        sourceType: 'module'
    },
    env: {
        browser: true,
        node: true
    },
    extends: [
        'standard', // js표준방식으로 검사
        'plugin:vue/essential' // 뷰 문법 검사
    ],
    plugins: [
        'vue'
    ],
    rules: {
        'no-new': 0
    }
}