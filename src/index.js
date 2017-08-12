const ComponentsByComponentName = require('./react/components').default
const PageComponentsByComponentName = require('./react/pages').default

const transactionsAuthWeb = Object.assign({},
  ComponentsByComponentName,
  PageComponentsByComponentName
)

export default transactionsAuthWeb
