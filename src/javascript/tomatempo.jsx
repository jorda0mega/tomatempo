require("less/tomatempo.less");
var React = require("react");
var mui = require('material-ui');
var RaisedButton = mui.RaisedButton;

var Start = React.createClass({
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
		cx = React.addons.classSet;

		divTable = cx({
			"display": "table",
			"width": "100%",
			"table-layout": "fixed"
		});

		divRow = cx({
			"display": "table-cell",
			"text-align": "center"
		});

		return (
			<div>
				<div>
					<Timer timer={this.state.timer} />
				</div>
				<div className={divTable} >
					<Start startTimer={this.startTimer} className={divRow} />
					<Stop stopTimer={this.stopTimer} className={divRow} />
				</div>
			</div>
			);
	}
});

React.render(React.createElement(App, null), document.getElementById("tomatempo"));
