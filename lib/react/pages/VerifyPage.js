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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VerifyPage = function (_Component) {
  _inherits(VerifyPage, _Component);

  function VerifyPage(props) {
    _classCallCheck(this, VerifyPage);

    var _this = _possibleConstructorReturn(this, (VerifyPage.__proto__ || Object.getPrototypeOf(VerifyPage)).call(this, props));

    _this.state = {
      loading: false,
      success: false
    };
    return _this;
  }

  _createClass(VerifyPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var _props = this.props,
          setActiveUser = _props.setActiveUser,
          signPath = _props.signPath;

      var code = (window.location.search.match(/code=([^&]*)/) || [null, null])[1];
      if (!code) {
        return;
      }
      this.setState({
        code: code,
        loading: true
      });
      (0, _transactionsInterfaceState.apiFetch)(signPath + '/activate-account', {
        method: 'post',
        body: JSON.stringify({ code: code })
      }).then(function (_ref) {
        var error = _ref.error,
            user = _ref.user;

        if (error) {
          _this2.setState({
            loading: false,
            error: error
          });
          return;
        }
        _this2.setState({
          loading: false,
          success: true
        });
        setActiveUser();
      }).catch(function (err) {
        _this2.setState({
          loading: false,
          error: err
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          code = _state.code,
          error = _state.error,
          loading = _state.loading,
          success = _state.success;

      return _react2.default.createElement(
        'main',
        { className: 'page verify-page main' },
        _react2.default.createElement(
          'h1',
          { className: 'verify-page__title h2 center' },
          'Account Status'
        ),
        (!code || error) && _react2.default.createElement(
          'div',
          { className: 'mb2' },
          'Something went wrong. Please try opening your activation link from your email again, and otherwise, please contact us.'
        ),
        loading && _react2.default.createElement(
          'div',
          { className: 'mb2' },
          'activating...'
        ),
        !error && success && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'mb2' },
            'Account activated!'
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_transactionsInterfaceWeb.Icon, { className: 'verify-page__icon', icon: 'user' })
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              _transactionsInterfaceWeb.Button,
              {
                className: 'button button--primary',
                onClick: function onClick() {
                  // actually we cannot here use href='/'
                  // because we need to do a full refresh in order to
                  // reset the __INITIAL_STATE__ with the good user
                  window.location.assign('/');
                }
              },
              'Go to your home'
            )
          )
        )
      );
    }
  }]);

  return VerifyPage;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(null, { setActiveUser: _transactionsInterfaceState.setActiveUser })(VerifyPage);