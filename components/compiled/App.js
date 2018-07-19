'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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

    _this.format = function (times) {
      function pad0(value) {
        var result = value.toString();
        if (result.length < 2) {
          result = '0' + result;
        }
        return result;
      }

      return pad0(times.minutes) + ':' + pad0(times.seconds) + ':' + pad0(Math.floor(times.miliseconds));
    };

    _this.resetTime = function () {
      _this.setState(function (_ref4) {
        var times = _ref4.times;

        times.minutes = 0;
        times.seconds = 0;
        times.miliseconds = 0;
      });
    };

    _this.saveScore = function () {
      var scores = [].concat(_toConsumableArray(_this.state.scores), [{
        id: _this.state.scores.length,
        value: _this.format(_this.state.times)
      }]);
      _this.setState({ scores: scores });

      // console.log(scores[scores.length - 1]);
    };

    _this.clearScoresList = function () {
      _this.setState({ scores: [] });
    };

    _this.state = {
      running: false,
      times: {
        minutes: 0,
        seconds: 0,
        miliseconds: 0
      },
      scores: []
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
          save: this.saveScore
        }),
        React.createElement(Stopwatch, {
          times: this.state.times,
          format: this.format
        }),
        React.createElement(ScoresTable, {
          scores: this.state.scores
        }),
        React.createElement(ClearListButton, {
          clearList: this.clearScoresList
        })
      );
    }
  }]);

  return App;
}(React.Component);
