module.exports = {
"extends": "airbnb",
"parser": "babel-eslint",
"rules":{
    "no-console": "off", // 开启console
    "semi":["error", "never"],// 配置不开启分号;
    "react/prefer-stateless-function":0,// 关闭react 无状态不能使用继承
    "react/jsx-filename-extension":0,// 关闭JSX已.js 扩展的命名验证
    "react/prop-types":0, // 关闭节点属性类型检测
    "import/prefer-default-export":0,
    "max-len":0,
    "arrow-body-style":0,
    "react/no-array-index-key":0,//关闭react Key不能为数据键
    "object-curly-newline": ["error", {
      "ObjectExpression": {
        "multiline":true, // 如果属性内或属性之间存在换行符需要换行
        "consistent":true // 要求无论是花括号还是两者都不直接包含换行符
      },
      "ObjectPattern": { "multiline": true }
    }]
  }
}