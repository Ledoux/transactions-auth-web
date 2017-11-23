'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transactionsInterfaceWeb = require('transactions-interface-web');

var _transactionsUserState = require('transactions-user-state');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TourButton = function TourButton(_ref) {
  var className = _ref.className,
      disabled = _ref.disabled,
      modeName = _ref.modeName,
      onTourClick = _ref.onTourClick,
      text = _ref.text;

  return _react2.default.createElement(
    _transactionsInterfaceWeb.Button,
    { className: (0, _classnames2.default)(className || 'button button--alive button--cta', {
        'button--disabled': disabled
      }),
      disabled: disabled,
      id: 'button--' + modeName,
      onClick: onTourClick },
    text
  );
};

exports.default = (0, _transactionsUserState.TourButton)(TourButton);