'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterRedux = require('react-router-redux');

var _transactionsInterfaceWeb = require('transactions-interface-web');

var _TourSlide = require('../components/TourSlide');

var _TourSlide2 = _interopRequireDefault(_TourSlide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToursSection = function ToursSection(_ref) {
  var users = _ref.users,
      path = _ref.path;

  var slides = users && users.sort(function (a, b) {
    return a.sortIndex - b.sortIndex;
  });
  return _react2.default.createElement(
    _transactionsInterfaceWeb.Section,
    { extraClass: 'tours-section center' },
    _react2.default.createElement(
      'p',
      { className: 'tours-section__title h1 bold mb2' },
      'Take a tour'
    ),
    _react2.default.createElement(_transactionsInterfaceWeb.Carousel, {
      slides: slides,
      slideRenderFn: function slideRenderFn(props) {
        return _react2.default.createElement(_TourSlide2.default, _extends({ path: path
        }, props));
      }
    })
  );
};

exports.default = ToursSection;