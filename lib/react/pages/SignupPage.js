'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _transactionsInterfaceWeb = require('transactions-interface-web');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SignupPage = function SignupPage(_ref) {
  var data = _ref.data,
      message = _ref.message;

  return _react2.default.createElement(
    'main',
    { className: 'page signup-page main' },
    _react2.default.createElement(
      'p',
      { className: 'signup-page__title' },
      'Become a fact-checker !'
    ),
    _react2.default.createElement(_transactionsInterfaceWeb.SignForm, { endpoint: 'signup', data: data, message: message })
  );
};

function mapStateToProps(_ref2) {
  var flash = _ref2.flash;

  return { data: flash && flash.signupData,
    message: flash && flash.signupMessage
  };
}
exports.default = (0, _reactRedux.connect)(mapStateToProps)(SignupPage);