require("less/tomatempo.less");
require("TweenLite.min.js");
require("gsap-react-plugin");
var React = require("react");
var mui = require('material-ui');
var styles = require("javascript/tomatempo-styles.js");

var RaisedButton = mui.RaisedButton;
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var Start = React.createClass({
	getInitialState: function(){
		return {width: 50};
	},
	handleClick: function(){
		this.props.startTimer();
		TweenLite.to(this, 1, {state: {width: 100}});
      // this.setState({width:"50px"});
    },
    render: function(){
    	return (
    		<RaisedButton label="Start" onClick={this.handleClick} style={{width: this.state.width }} />
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
})

var Timer = React.createClass({
	render: function(){
		return <div>{this.props.timer}</div>
	}
});

var App = React.createClass({
	getInitialState: function(){
		// this will come from the DB
		return {timer: 25}
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
			<div>
			<div>
			<Timer timer={this.state.timer} />
			</div>
			<div style={styles.buttonContainer}>
			<Start startTimer={this.startTimer} style={styles.button} />
			<Stop stopTimer={this.stopTimer} style={styles.button} />
			</div>
			</div>
			);
	}
});

React.render(React.createElement(App, null), document.getElementById("tomatempo"));
