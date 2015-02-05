var Start = React.createClass({displayName: "Start",
	handleClick: function(){
		this.props.startTimer();
	},
	render: function(){
		return (
			React.createElement("input", {type: "button", value: "Start", onClick: this.handleClick})
		);
	}
});

var Stop = React.createClass({displayName: "Stop",
	handleClick: function(){
		this.props.stopTimer();
	},
	render: function(){
		return (
			React.createElement("input", {type: "button", value: "Stop", onClick: this.handleClick})
		);
	}
})

var Timer = React.createClass({displayName: "Timer",
	render: function(){
		return React.createElement("div", null, this.props.timer)
	}
});

var App = React.createClass({displayName: "App",
	getInitialState: function(){
		return {timer: 25}
	},
	decrementTimer: function(interval){
		if(this.state.timer > 0){
			this.setState({timer: this.state.timer - interval});
		}
		else{
			clearInterval(this.countdown);
			alert("holla son!");
		}
	},
	startTimer: function(){
		var self = this;
		self.countdown = setInterval(function(){
			self.decrementTimer(1);
		}, 1000);
	},
	stopTimer: function(countdown){
		this.setState({timer: 25});
	},
  	render: function() {
  		return (
				React.createElement("table", null, 
					React.createElement("tr", null, 
						React.createElement("td", null, 
							React.createElement(Timer, {timer: this.state.timer})
						), 
						React.createElement("td", null, 
							React.createElement(Start, {startTimer: this.startTimer})
						), 
						React.createElement("td", null, 
							React.createElement(Stop, {stopTimer: this.stopTimer})
						)
					)
				)
    	);
  	}
});

React.render(React.createElement(App, null), document.getElementById("tomatempo"));
