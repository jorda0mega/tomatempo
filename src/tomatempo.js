var Start = React.createClass({
	handleClick: function(){
		this.props.startTimer(5);
	},
	render: function(){
		return (
			React.createElement("input", {
				"type": "button", 
				"value": "Start",
				"onClick": this.handleClick
			})
		);
	}
});

var Stop = React.createClass({
	handleClick: function(){
		this.props.stopTimer();
	},
	render: function(){
		return (
			React.createElement("input",{
				"type": "button",
				"value": "Stop",
				"onClick": this.handleClick
			})
		);
	}
})

var Timer = React.createClass({
	render: function(){
		return React.createElement("div", {}, this.props.timer)
	}
});

var App = React.createClass({
	getInitialState: function(){
		return {timer: 25}
	},
	startTimer: function(){
		this.setState({timer: 0});
	},
	stopTimer: function(){
		this.setState({timer: 25});
	},
  	render: function() {
  		return (
  	  		React.createElement("table", 
  	  			{},
  	  			React.createElement("tr", 
  	  				{}, 
  	  				[
  	  					React.createElement("td",
  	  						{},
  	  						React.createElement(Timer, {timer: this.state.timer})),
  	  					React.createElement("td",
  	  						{},
  	  						React.createElement(Start, {startTimer: this.startTimer})),
  	  					React.createElement("td",
  	  						{},
  	  						React.createElement(Stop, {stopTimer: this.stopTimer}))

  	  				]))
    	);
  	}
});




React.render(React.createElement(App, null), document.getElementById("tomatempo"));