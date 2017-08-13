const ComponentsByComponentName = require('./react/components').default
const PageComponentsByComponentName = require('./react/pages').default

const transactionsUserWeb = Object.assign({},
  ComponentsByComponentName,
  PageComponentsByComponentName
)

export default transactionsUserWeb
