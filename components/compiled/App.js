'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.changeRunningState = function (value) {
      _this.setState({ running: value });
    };

    _this.calculate = function () {
      _this.setState(function (_ref) {
        var times = _ref.times;
        times.miliseconds += 1;
      });
      if (_this.state.times.miliseconds >= 100) {
        _this.setState(function (_ref2) {
          var times = _ref2.times;

          times.seconds += 1;
          times.miliseconds = 0;
        });
      }
      if (_this.state.times.seconds >= 60) {
        _this.setState(function (_ref3) {
          var times = _ref3.times;

          times.minutes += 1;
          times.seconds = 0;
        });
      }
    };

    _this.resetTime = function () {
      _this.setState(function (_ref4) {
        var times = _ref4.times;

        times.minutes = 0;
        times.seconds = 0;
        times.miliseconds = 0;
      });
    };

    _this.changeSaveState = function (value) {
      _this.setState({ saveState: value });
    };

    _this.saveScore = function (score) {
      _this.setState({ saveState: false });
      _this.setState({ savedScore: score });
      console.log(score);
    };

    _this.state = {
      running: false,
      times: {
        minutes: 0,
        seconds: 0,
        miliseconds: 0
      },
      saveState: false,
      savedScore: ''
    };
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'stopwatchApp' },
        React.createElement(Controls, {
          isRunning: this.state.running,
          runningState: this.changeRunningState,
          start: this.calculate,
          reset: this.resetTime,
          save: this.changeSaveState
        }),
        React.createElement(Stopwatch, {
          times: this.state.times,
          saveState: this.state.saveState,
          saveScore: this.saveScore
        }),
        React.createElement(ScoresTable, {
          savedScore: this.state.savedScore
        })
      );
    }
  }]);

  return App;
}(React.Component);
