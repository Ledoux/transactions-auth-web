'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transactionsInterfaceWeb = require('transactions-interface-web');

var _transactionsUserState = require('transactions-user-state');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SignForm = function SignForm(_ref) {
  var data = _ref.data,
      email = _ref.email,
      endpoint = _ref.endpoint,
      firstName = _ref.firstName,
      handleChangeValue = _ref.handleChangeValue,
      handleClickCheckValue = _ref.handleClickCheckValue,
      lastName = _ref.lastName,
      message = _ref.message,
      password = _ref.password,
      returnMessage = _ref.returnMessage,
      returnTo = _ref.returnTo,
      routePath = _ref.routePath;

  var isSignup = endpoint === 'signup';
  var isSignin = endpoint === 'signin';
  var action = _path2.default.join(routePath, endpoint);
  return _react2.default.createElement(
    'form',
    { className: 'sign-form p3',
      method: 'post',
      action: action },
    _react2.default.createElement('input', { type: 'hidden', name: 'returnTo', value: returnTo }),
    isSignup && _react2.default.createElement(
      'div',
      { className: 'sign-form__entry' },
      _react2.default.createElement(
        'p',
        { className: 'sign-form__entry__field' },
        'First Name'
      ),
      _react2.default.createElement('input', { className: 'sign-form__entry__input field',
        name: 'firstName',
        type: 'text',
        value: firstName,
        onChange: function onChange(event) {
          return handleChangeValue(event, 'firstName');
        },
        required: true })
    ),
    isSignup && _react2.default.createElement(
      'div',
      { className: 'sign-form__entry' },
      _react2.default.createElement(
        'p',
        { className: 'sign-form__entry__field' },
        'Last Name'
      ),
      _react2.default.createElement('input', { className: 'sign-form__entry__input field',
        name: 'lastName',
        type: 'text',
        value: lastName,
        onChange: function onChange(event) {
          return handleChangeValue(event, 'lastName');
        },
        required: true })
    ),
    _react2.default.createElement(
      'div',
      { className: 'sign-form__entry' },
      _react2.default.createElement(
        'p',
        { className: 'sign-form__entry__field' },
        'Email'
      ),
      _react2.default.createElement('input', { className: 'sign-form__entry__input field',
        name: 'email',
        type: 'text',
        value: email,
        onChange: function onChange(event) {
          return handleChangeValue(event, 'email');
        },
        required: true })
    ),
    _react2.default.createElement(
      'div',
      { className: 'sign-form__entry' },
      _react2.default.createElement(
        'p',
        { className: 'sign-form__entry__field' },
        'Password'
      ),
      _react2.default.createElement('input', { className: 'sign-form__entry__input mb1',
        name: 'password',
        type: 'password',
        value: password,
        onChange: function onChange(event) {
          return handleChangeValue(event, 'password');
        },
        required: true }),
      isSignin && _react2.default.createElement(
        _transactionsInterfaceWeb.Link,
        { href: '/forgot-password' + (email ? '?email=' + encodeURIComponent(email) : '') },
        'Forgot Password ?'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'sign-form__message center' },
      message
    ),
    _react2.default.createElement(
      'div',
      { className: 'sign-form__submit center' },
      _react2.default.createElement(
        _transactionsInterfaceWeb.Button,
        { className: 'button button--alive button--cta',
          type: 'submit' },
        isSignin && 'Sign In',
        isSignup && 'Sign Up'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'sign-form__option center' },
      isSignin && _react2.default.createElement(
        'div',
        { className: 'center' },
        'No account?',
        ' ',
        _react2.default.createElement(
          _transactionsInterfaceWeb.Link,
          { className: 'link',
            href: '/signup' },
          'Sign up'
        )
      ),
      isSignup && _react2.default.createElement(
        'div',
        { className: 'center' },
        'Already have an account?',
        ' ',
        _react2.default.createElement(
          _transactionsInterfaceWeb.Link,
          { href: '/signin' + (returnTo ? '?returnTo=' + returnTo : '') },
          'Sign In'
        )
      )
    )
  );
};

exports.default = (0, _transactionsUserState.SignForm)(SignForm);