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

var SignupPage = function SignupPage(_ref) {
  var data = _ref.data,
      message = _ref.message,
      returnTo = _ref.returnTo,
      signPath = _ref.signPath;

  return _react2.default.createElement(
    'main',
    { className: 'page signup-page main' },
    _react2.default.createElement(
      'p',
      { className: 'signup-page__title' },
      'Sign Up !'
    ),
    _react2.default.createElement(_SignForm2.default, { data: data,
      endpoint: 'signup',
      message: message,
      returnTo: returnTo,
      routePath: signPath })
  );
};

exports.default = (0, _transactionsUserState.SignupPage)(SignupPage);