'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transactionsInterfaceWeb = require('transactions-interface-web');

var _transactionsUserState = require('transactions-user-state');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LogoutLink = function LogoutLink(_ref) {
  var afterShowModal = _ref.afterShowModal,
      className = _ref.className,
      closeModal = _ref.closeModal,
      showModal = _ref.showModal,
      signPath = _ref.signPath;

  return _react2.default.createElement(
    _transactionsInterfaceWeb.Link,
    { className: className || 'logout-link',
      onClick: function onClick() {
        showModal(_react2.default.createElement(
          'div',
          { className: 'center' },
          _react2.default.createElement(
            'div',
            { className: 'mb2 h1' },
            'Are you sure you want to log out ?'
          ),
          _react2.default.createElement(
            'div',
            { className: 'flex justify-center' },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'form',
                { method: 'post', action: signPath + '/logout' },
                _react2.default.createElement(
                  _transactionsInterfaceWeb.Button,
                  { className: 'button button--alive mr2', type: 'submit' },
                  'Yes'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                _transactionsInterfaceWeb.Button,
                { className: 'button button--alive', onClick: closeModal },
                'No'
              )
            )
          )
        ));
        afterShowModal && afterShowModal();
      }
    },
    '(logout)'
  );
};

exports.default = (0, _transactionsUserState.LogoutLink)(LogoutLink);