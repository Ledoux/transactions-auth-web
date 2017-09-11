'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _transactionsUserState = require('transactions-user-state');

var _transactionsInterfaceWeb = require('transactions-interface-web');

var _LogoutLink = require('../components/LogoutLink');

var _LogoutLink2 = _interopRequireDefault(_LogoutLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AccountPage = function AccountPage(props) {
  var active = props.active,
      api = props.api,
      email = props.email,
      dispatch = props.dispatch,
      fields = props.fields,
      firstName = props.firstName,
      id = props.id,
      lastName = props.lastName,
      request = props.request,
      signPath = props.signPath,
      showModalWarning = props.showModalWarning,
      state = props.state;
  var isUpload = state.isUpload;

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
        { className: 'button account-page__control__button',
          onClick: function onClick() {
            return undefined.setState({ isUpload: false });
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
        { className: 'button account-page__picture__button',
          onClick: function onClick() {
            return undefined.setState({ isUpload: true });
          }
        },
        isUpload ? _react2.default.createElement(
          _transactionsInterfaceWeb.Uploader,
          { className: 'uploader account-page__picture__button--uploader',
            fileName: firstName + '-' + lastName,
            isWithDate: true,
            onUpload: function onUpload(json) {
              undefined.setState({ isUpload: false });
              json.url && request('PUT', [{
                collectionName: 'users',
                query: { id: id },
                update: { 'local.imageUrl': json.url }
              }]);
            } },
          _react2.default.createElement(
            'p',
            { className: 'account-page__picture__button--uploader__text' },
            'Drop an image or click to select a file to upload'
          )
        ) : _react2.default.createElement(_transactionsInterfaceWeb.Avatar, {
          className: 'avatar account-page__picture__button--avatar',
          id: id })
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
        { className: 'button',
          onClick: function onClick() {
            apiFetch(signPath + '/ask-activate-account');
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
            props[key]
          )
        );
      })
    )
  );
};

exports.default = (0, _transactionsUserState.AccountPage)(AccountPage);