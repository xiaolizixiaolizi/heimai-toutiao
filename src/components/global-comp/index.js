

// 实现自动化导入。
const context = require.context('./', true, /\.js$/)

const res = {}
context.keys().forEach(filePath => {
  if (filePath === './index.js') return
  let key = filePath.match(/\/(.*)\//)[1]
  let value = context(filePath).default
  res[key] = value

})
export default res