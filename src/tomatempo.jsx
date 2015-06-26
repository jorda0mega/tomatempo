var React = require("react");
var mui = require('material-ui'),
		RaisedButton = mui.RaisedButton;

let Dialog = mui.Dialog;
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var Start = React.createClass({
	getInitialState: function(){
		return {width: 50};
	},
	handleClick: function(){
		this.props.startTimer();
	},
	render: function(){
		return (
			<RaisedButton label="Start" onClick={this.handleClick} />
		);
	}
});

var Stop = React.createClass({
	handleClick: function(){
		this.props.stopTimer();
	},
	render: function(){
		return (
			<RaisedButton label="Stop" onClick={this.handleClick} />
		);
	}
});

var Timer = React.createClass({
	render: function(){
		return (
			<label className="mui-floating-action-button-container">
				<span className="mui-floating-action-button-label">{this.props.timer}</span>
			</label>
		);
		// return <div>{this.props.timer}</div>
	}
});

var App = React.createClass({
	getInitialState: function(){
		// this will come from the DB
		return {timer: 25}
	},
	childContextTypes: {
		muiTheme: React.PropTypes.object
	},
	getChildContext: function(){
		return {
			muiTheme: ThemeManager.getCurrentTheme()
		};
	},
	decrementTimer: function(interval){
		if(this.state.timer > 0){
			this.setState({timer: this.state.timer - interval});
		}
		else{
			clearInterval(this.countdown);
		}
	},
	startTimer: function(){
		var self = this;
		if(!self.countdown){
			self.countdown = setInterval(function(){
				self.decrementTimer(1);
			}, 1000);
		}
	},
	stopTimer: function(){
		if(this.countdown){
			clearInterval(this.countdown);
			this.setState({timer: 25});
			this.countdown = undefined;
		}
	},
	render: function() {
		return (
			<div id="tomatempo">
				<div>
					<Timer timer={this.state.timer} />
				</div>
				<div>
					<Start startTimer={this.startTimer} />
					<Stop stopTimer={this.stopTimer} />
				</div>
			</div>
		);
	}
});

React.render(React.createElement(App, null), document.body);
