'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Controls = function (_React$Component) {
  _inherits(Controls, _React$Component);

  function Controls() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Controls);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Controls.__proto__ || Object.getPrototypeOf(Controls)).call.apply(_ref, [this].concat(args))), _this), _this.start = function () {
      if (!_this.props.isRunning) {
        _this.props.runningState(true);
        _this.watch = setInterval(function () {
          return _this.props.start();
        }, 10);
      }
    }, _this.stop = function () {
      _this.props.runningState(false);
      clearInterval(_this.watch);
    }, _this.reset = function () {
      if (!_this.props.isRunning) {
        _this.props.reset();
      }
    }, _this.save = function () {
      _this.props.save();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Controls, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'nav',
        { className: 'controls' },
        React.createElement(
          'a',
          { href: '#', className: 'button', id: 'start', onClick: this.start },
          'Start'
        ),
        React.createElement(
          'a',
          { href: '#', className: 'button', id: 'stop', onClick: this.stop },
          'Stop'
        ),
        React.createElement(
          'a',
          { href: '#', className: 'button', id: 'reset', onClick: this.reset },
          'Reset'
        ),
        React.createElement(
          'a',
          { href: '#', className: 'button', id: 'save', onClick: this.save },
          'Save'
        )
      );
    }
  }]);

  return Controls;
}(React.Component);

Controls.propTypes = {
  isRunning: React.PropTypes.bool.isRequired,
  runningState: React.PropTypes.func.isRequired,
  start: React.PropTypes.func.isRequired,
  reset: React.PropTypes.func.isRequired,
  save: React.PropTypes.func.isRequired
};
