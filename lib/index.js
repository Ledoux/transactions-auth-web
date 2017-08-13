'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ComponentsByComponentName = require('./react/components').default;
var PageComponentsByComponentName = require('./react/pages').default;

var transactionsUserWeb = Object.assign({}, ComponentsByComponentName, PageComponentsByComponentName);

exports.default = transactionsUserWeb;