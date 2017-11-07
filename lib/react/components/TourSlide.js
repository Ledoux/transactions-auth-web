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

var vowelTest = /^[aeiou]$/i;

var TourSlide = function TourSlide(_ref) {
  var email = _ref.email,
      firstName = _ref.firstName,
      imageUrl = _ref.imageUrl,
      isAvailable = _ref.isAvailable,
      isPreview = _ref.isPreview,
      lastName = _ref.lastName,
      modeName = _ref.modeName,
      path = _ref.path,
      tour = _ref.tour;

  return _react2.default.createElement(
    'div',
    { className: 'tour-slide flex items-center justify-center' },
    isPreview && _react2.default.createElement(
      'div',
      { className: 'tour-slide__preview' },
      _react2.default.createElement(
        'div',
        { className: 'tour-slide__preview__left md-col md-col-6 mb3' },
        _react2.default.createElement(
          'div',
          { className: 'tour-slide__preview__left__title' },
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
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'tour-slide__preview__right md-col md-col-6 flex justify-center' },
        _react2.default.createElement(_transactionsInterfaceWeb.Avatar, { className: 'avatar tour-slide__preview__right__avatar',
          imageUrl: imageUrl })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'tour-slide__signin' },
      _react2.default.createElement(
        'div',
        { className: 'tour-slide__signin__available' },
        isAvailable ? '' : 'Not yet available'
      ),
      _react2.default.createElement(_TourButton2.default, { disabled: !isAvailable,
        email: email,
        modeName: modeName,
        path: path,
        text: 'take a tour as ' + (vowelTest.test(modeName[0]) ? 'an' : 'a') + ' ' + modeName })
    )
  );
};

exports.default = TourSlide;