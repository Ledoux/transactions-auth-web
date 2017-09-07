'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transactionsInterfaceWeb = require('transactions-interface-web');

var _TourButton = require('./TourButton');

var _TourButton2 = _interopRequireDefault(_TourButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TourSlide = function TourSlide(_ref) {
  var email = _ref.email,
      firstName = _ref.firstName,
      helpersCollectionName = _ref.helpersCollectionName,
      imageUrl = _ref.imageUrl,
      lastName = _ref.lastName,
      modeName = _ref.modeName,
      path = _ref.path,
      tour = _ref.tour;

  return _react2.default.createElement(
    'div',
    { className: 'tour-slide' },
    _react2.default.createElement(
      'div',
      { className: 'tour-slide__left md-col md-col-6' },
      _react2.default.createElement(
        'div',
        { className: 'tour-slide__left__title' },
        _react2.default.createElement(
          'i',
          null,
          ' ',
          firstName,
          ' ',
          lastName,
          ' '
        ),
        modeName && _react2.default.createElement(
          'span',
          null,
          '(',
          _react2.default.createElement(
            'b',
            null,
            modeName
          ),
          ')'
        )
      ),
      _react2.default.createElement(_TourButton2.default, {
        email: email,
        helpersCollectionName: helpersCollectionName,
        path: path,
        text: 'login'
      })
    ),
    _react2.default.createElement(
      'div',
      { className: 'tour-slide__right md-col md-col-6 flex justify-center' },
      _react2.default.createElement(_transactionsInterfaceWeb.Avatar, { className: 'avatar tour-slide__right__avatar',
        imageUrl: imageUrl
      })
    )
  );
};

exports.default = TourSlide;