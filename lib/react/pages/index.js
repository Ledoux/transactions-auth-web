'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AccountPage = require('./AccountPage');

var _AccountPage2 = _interopRequireDefault(_AccountPage);

var _SigninPage = require('./SigninPage');

var _SigninPage2 = _interopRequireDefault(_SigninPage);

var _SignupPage = require('./SignupPage');

var _SignupPage2 = _interopRequireDefault(_SignupPage);

var _VerifyPage = require('./VerifyPage');

var _VerifyPage2 = _interopRequireDefault(_VerifyPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageComponentsByComponentName = { AccountPage: _AccountPage2.default,
  SigninPage: _SigninPage2.default,
  SignupPage: _SignupPage2.default,
  VerifyPage: _VerifyPage2.default
};

exports.default = PageComponentsByComponentName;