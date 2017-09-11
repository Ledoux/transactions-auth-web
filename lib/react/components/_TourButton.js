'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouterRedux = require('react-router-redux');

var _transactionsInterfaceState = require('transactions-interface-state');

var _transactionsInterfaceWeb = require('transactions-interface-web');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TourButton = function (_Component) {
  _inherits(TourButton, _Component);

  function TourButton() {
    _classCallCheck(this, TourButton);

    var _this = _possibleConstructorReturn(this, (TourButton.__proto__ || Object.getPrototypeOf(TourButton)).call(this));

    _this.handleTourRequest = _this._handleTourRequest.bind(_this);
    return _this;
  }

  _createClass(TourButton, [{
    key: '_handleTourRequest',
    value: function _handleTourRequest() {
      var _props = this.props,
          email = _props.email,
          helpersCollectionName = _props.helpersCollectionName,
          push = _props.push,
          userEmail = _props.userEmail;

      if (email === userEmail) {
        push({
          search: (0, _transactionsInterfaceState.getUpdatedSearchString)({
            helpersCollectionName: helpersCollectionName
          })
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleTourRequest();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.handleTourRequest();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          className = _props2.className,
          email = _props2.email,
          path = _props2.path,
          text = _props2.text;

      return _react2.default.createElement(
        _transactionsInterfaceWeb.Button,
        {
          className: className || 'button button--alive button--cta',
          onClick: function onClick() {
            console.log('email', email, path);
            (0, _transactionsInterfaceState.apiFetch)(path, {
              method: 'POST',
              body: JSON.stringify({
                email: email
              })
            }).then(function (result) {
              return console.log(result);
            });
          }
        },
        text
      );
    }
  }]);

  return TourButton;
}(_react.Component);

TourButton.defaultProps = {
  text: 'Take a tour'
};

function mapStateToProps(_ref) {
  var email = _ref.user.email;

  return { userEmail: email };
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, { push: _reactRouterRedux.push })(TourButton);