module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ["plugin:vue/essential", "eslint:recommended"],

  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/html-quotes': 'error',
    'vue/camelcase': 'error',
    'vue/eqeqeq': 'error',
    'vue/no-unused-components': 'off',
    'vue/no-irregular-whitespace': 'error',     // 不允许不规则的空白
    'vue/script-indent': 'error',
    'indent': [2, 2],                     // 强制使用一致的缩进
    'eqeqeq': [2, 'always'],              // 要求使用 === 和 !==
    'semi': [2, 'never'],                 // 语句强制分号结尾 'always' 、 语句不要分号结尾 'never'
    'quotes': [2, 'single'],              // 强制使用一致的反勾号、双引号或单引号
    'no-trailing-spaces': 'error',        // 禁用行尾空格
    'no-spaced-func': 'error',            // 函数调用时 禁止 function 标识符和圆括号之间有空格
    'curly': ['error', 'multi-line'],     // if、else if、else、for、while强制使用大括号，但允许在单行中省略大括号。
    'comma-dangle': [2, 'never'],         // 要求或禁止使用尾随逗号；最后一个属性是不需要逗号 错误：{ a: 1, b: 1, }
    'arrow-spacing': ["error", { 'before': true, 'after': true }],         // =>的前/后括号
    'space-before-function-paren': ['error', 'always'],                    // (默认) 要求在参数的 ( 前面有一个空格。
    'lines-around-comment': ['error', { 'beforeBlockComment': true }],     // 强制注释周围有空行
    'no-mixed-spaces-and-tabs': 'error',                                   // 禁止使用 空格 和 tab 混合缩进
    'array-bracket-spacing': ['error', 'never'],                           // 数组紧贴括号部分不允许包含空格。
    'block-spacing': ['error', 'never'],                                   // 单行代码块中紧贴括号部分不允许包含空格。
    'no-multi-spaces': 2,                                                  // 禁止多个空格
    'no-multiple-empty-lines': [2, {                                       // 禁止多个空行
      'max': 1
    }],
    "no-unused-vars": ["error", { "vars": "all", "args": "none", "ignoreRestSiblings": false }]
  }

};
