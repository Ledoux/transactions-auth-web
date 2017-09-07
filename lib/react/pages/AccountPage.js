'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _transactionsInterfaceState = require('transactions-interface-state');

var _transactionsInterfaceWeb = require('transactions-interface-web');

var _transactionsReduxRequest = require('transactions-redux-request');

var _LogoutLink = require('../components/LogoutLink');

var _LogoutLink2 = _interopRequireDefault(_LogoutLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AccountPage = function (_Component) {
  _inherits(AccountPage, _Component);

  function AccountPage() {
    _classCallCheck(this, AccountPage);

    var _this = _possibleConstructorReturn(this, (AccountPage.__proto__ || Object.getPrototypeOf(AccountPage)).call(this));

    _this.state = { isUpload: false };
    return _this;
  }

  _createClass(AccountPage, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          active = _props.active,
          api = _props.api,
          email = _props.email,
          dispatch = _props.dispatch,
          fields = _props.fields,
          firstName = _props.firstName,
          id = _props.id,
          lastName = _props.lastName,
          request = _props.request,
          signPath = _props.signPath,
          showModalWarning = _props.showModalWarning;
      var isUpload = this.state.isUpload;

      return _react2.default.createElement(
        'main',
        { className: 'page account-page main' },
        _react2.default.createElement(
          'div',
          { className: 'account-page__title' },
          firstName,
          ' ',
          lastName,
          ' ',
          _react2.default.createElement(_LogoutLink2.default, {
            className: 'logout-link account-page__logout',
            signPath: api.signPath
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'account-page__control' },
          isUpload && _react2.default.createElement(
            _transactionsInterfaceWeb.Button,
            {
              className: 'button account-page__control__button',
              onClick: function onClick() {
                return _this2.setState({ isUpload: false });
              }
            },
            'Cancel'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'account-page__picture' },
          _react2.default.createElement(
            _transactionsInterfaceWeb.Button,
            {
              className: 'button account-page__picture__button',
              onClick: function onClick() {
                return _this2.setState({ isUpload: true });
              }
            },
            isUpload ? _react2.default.createElement(
              _transactionsInterfaceWeb.Uploader,
              {
                className: 'uploader account-page__picture__button--uploader',
                fileName: firstName + '-' + lastName,
                isWithDate: true,
                onUpload: function onUpload(json) {
                  _this2.setState({ isUpload: false });
                  json.url && request('PUT', [{
                    collectionName: 'users',
                    query: { id: id },
                    update: { 'local.imageUrl': json.url }
                  }]);
                }
              },
              _react2.default.createElement(
                'p',
                { className: 'account-page__picture__button--uploader__text' },
                'Drop an image or click to select a file to upload'
              )
            ) : _react2.default.createElement(_transactionsInterfaceWeb.Avatar, {
              className: 'avatar account-page__picture__button--avatar',
              id: id
            })
          )
        ),
        _react2.default.createElement('div', { className: 'account-page__upload' }),
        !active && _react2.default.createElement(
          'div',
          { className: 'account-page__activation' },
          _react2.default.createElement(
            'p',
            { className: 'account-page__activation__title' },
            'We see that your account is not yet activated. Please click on the button below to have a new activation mail at ',
            email
          ),
          _react2.default.createElement(
            _transactionsInterfaceWeb.Button,
            {
              className: 'button',
              onClick: function onClick() {
                (0, _transactionsInterfaceState.apiFetch)(signPath + '/ask-activate-account');
                showModalWarning('happy', 'We sent you a new activation email at ' + email);
              } },
            'Send Mail'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'account-page__setting' },
          fields.map(function (_ref, index) {
            var key = _ref.key,
                name = _ref.name;
            return _react2.default.createElement(
              'div',
              { key: index, className: 'account-page__setting__field' },
              _react2.default.createElement(
                'div',
                { className: 'account-page__setting__field__key col col-5' },
                name
              ),
              _react2.default.createElement(
                'div',
                { className: 'account-page__setting__field__value col col-5' },
                _this2.props[key]
              )
            );
          })
        )
      );
    }
  }]);

  return AccountPage;
}(_react.Component);

AccountPage.defaultProps = { api: { signPath: '/sign' },
  fields: [{
    key: 'firstName',
    name: 'First Name'
  }, {
    key: 'lastName',
    name: 'Last Name'
  }, {
    key: 'email',
    name: 'Email'
  }]
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var _ref2$user = _ref2.user,
      active = _ref2$user.active,
      email = _ref2$user.email,
      firstName = _ref2$user.firstName,
      id = _ref2$user.id,
      lastName = _ref2$user.lastName;

  return { active: active,
    email: email,
    firstName: firstName,
    id: id,
    lastName: lastName
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, { request: _transactionsReduxRequest.request,
  showModalWarning: _transactionsInterfaceState.showModalWarning
})(AccountPage);