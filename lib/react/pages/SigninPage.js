'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _transactionsInterfaceWeb = require('transactions-interface-web');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SigninPage = function SigninPage(_ref) {
  var data = _ref.data,
      message = _ref.message;

  return _react2.default.createElement(
    'main',
    { className: 'page signin-page main' },
    _react2.default.createElement(
      'p',
      { className: 'signin-page__title' },
      'Log to your account!'
    ),
    _react2.default.createElement(_transactionsInterfaceWeb.SignForm, { endpoint: 'signin', data: data, message: message })
  );
};

function mapStateToProps(_ref2) {
  var flash = _ref2.flash;

  return { data: flash && flash.signinData,
    message: flash && flash.signinMessage
  };
}
exports.default = (0, _reactRedux.connect)(mapStateToProps)(SigninPage);