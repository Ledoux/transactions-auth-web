'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transactionsUserState = require('transactions-user-state');

var _SignForm = require('../components/SignForm');

var _SignForm2 = _interopRequireDefault(_SignForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SigninPage = function SigninPage(_ref) {
  var api = _ref.api,
      data = _ref.data,
      message = _ref.message,
      returnTo = _ref.returnTo;

  return _react2.default.createElement(
    'main',
    { className: 'page signin-page main' },
    _react2.default.createElement(
      'p',
      { className: 'signin-page__title' },
      'Log to your account!'
    ),
    _react2.default.createElement(_SignForm2.default, { data: data,
      endpoint: 'signin',
      message: message,
      returnTo: returnTo,
      routePath: api && api.signPath })
  );
};

exports.default = (0, _transactionsUserState.SigninPage)(SigninPage);