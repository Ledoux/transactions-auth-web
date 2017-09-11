'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transactionsInterfaceWeb = require('transactions-interface-web');

var _transactionsUserState = require('transactions-user-state');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TourButton = function TourButton(_ref) {
  var className = _ref.className,
      onTourClick = _ref.onTourClick,
      text = _ref.text;

  return _react2.default.createElement(
    _transactionsInterfaceWeb.Button,
    { className: className || 'button button--alive button--cta',
      onClick: onTourClick },
    text
  );
};

exports.default = (0, _transactionsUserState.TourButton)(TourButton);