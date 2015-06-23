require("styles/tomatempo.styles");
require("gsap-react-plugin");
var ReactStyle = require("react-style");
var React = require("react");
var mui = require('material-ui');

var RaisedButton = mui.RaisedButton,
    Paper = mui.Paper,
	  kEnhancedButton = mui.EnhancedButton;
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

// var appStyle = ReactStyle({
// 	marginLeft: "auto",
// 	marginRight: "auto"
// });

// var buttonContainerStyle = ReactStyle({
// 	marginLeft: "30%",
// 	marginTop: "70%"
// });

var Start = React.createClass({
	getInitialState: function(){
		return {width: 50};
	},
	handleClick: function(){
		this.props.startTimer();
		TweenLite.to(this, 1, {state: {width: 100}});
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
})

var Timer = React.createClass({
	render: function(){
		return (
			<Paper 
				zDepth={1} 
				circle={true} 
				rounded={true} 
				className="mui-floating-action-button" 
				innerClassName="mui-floating-action-button-inner">
				<EnhancedButton className="mui-floating-action-button-container">
					<span className="mui-floating-action-button-label">{this.props.timer}</span>
				</EnhancedButton>
			</Paper>
		);
		// return <div>{this.props.timer}</div>
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
			<div id="tomatempo" style={appStyle}>
				<div>
					<Timer timer={this.state.timer} />
				</div>
				<div style={buttonContainerStyle}>
					<Start startTimer={this.startTimer} />
					<Stop stopTimer={this.stopTimer} />
				</div>
			</div>
		);
	}
});

ReactStyle.inject();
React.render(React.createElement(App, null), document.body);
