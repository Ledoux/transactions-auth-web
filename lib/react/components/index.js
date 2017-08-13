'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _LogoutLink = require('./LogoutLink');

var _LogoutLink2 = _interopRequireDefault(_LogoutLink);

var _SignForm = require('./SignForm');

var _SignForm2 = _interopRequireDefault(_SignForm);

var _TourButton = require('./TourButton');

var _TourButton2 = _interopRequireDefault(_TourButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComponentsByComponentName = { LogoutLink: _LogoutLink2.default,
  SignForm: _SignForm2.default,
  TourButton: _TourButton2.default
};

exports.default = ComponentsByComponentName;