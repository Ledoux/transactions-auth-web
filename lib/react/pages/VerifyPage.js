'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transactionsInterfaceWeb = require('transactions-interface-web');

var _transactionsUserState = require('transactions-user-state');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VerifyPage = function VerifyPage(_ref) {
  var code = _ref.code,
      state = _ref.state;
  var error = state.error,
      loading = state.loading,
      success = state.success;

  return _react2.default.createElement(
    'main',
    { className: 'page verify-page main' },
    _react2.default.createElement(
      'h1',
      { className: 'verify-page__title h2 center' },
      'Account Status'
    ),
    (!code || error) && _react2.default.createElement(
      'div',
      { className: 'mb2' },
      'Something went wrong. Please try opening your activation link from your email again, and otherwise, please contact us.'
    ),
    loading && _react2.default.createElement(
      'div',
      { className: 'mb2' },
      'activating...'
    ),
    !error && success && _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: 'mb2' },
        'Account activated!'
      ),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_transactionsInterfaceWeb.Icon, { className: 'verify-page__icon', icon: 'user' })
      ),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _transactionsInterfaceWeb.Button,
          {
            className: 'button button--primary',
            onClick: function onClick() {
              // actually we cannot here use href='/'
              // because we need to do a full refresh in order to
              // reset the __INITIAL_STATE__ with the good user
              window.location.assign('/');
            }
          },
          'Go to your home'
        )
      )
    )
  );
};

exports.default = (0, _transactionsUserState.VerifyPage)(VerifyPage);