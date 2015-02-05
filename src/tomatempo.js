var Start = React.createClass({
	handleClick: function(){
		this.props.startTimer();
	},
	render: function(){
		return (
			<input type="button" value="Start" onClick={this.handleClick} />
		);
	}
});

var Stop = React.createClass({
	handleClick: function(){
		this.props.stopTimer();
	},
	render: function(){
		return (
			<input type="button" value="Stop" onClick={this.handleClick} />
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
			console.info("holla son!");
		}
	},
	startTimer: function(){
		var self = this;
		self.countdown = setInterval(function(){
			self.decrementTimer(1);
		}, 1000);
	},
	stopTimer: function(){
		clearInterval(this.countdown);
		this.setState({timer: 25});
	},
  	render: function() {
  		return (
				<table>
					<tr>
						<td>
							<Timer timer={this.state.timer} />
						</td>
						<td>
							<Start startTimer={this.startTimer} />
						</td>
						<td>
							<Stop stopTimer={this.stopTimer} />
						</td>
					</tr>
				</table>
    	);
  	}
});

React.render(React.createElement(App, null), document.getElementById("tomatempo"));
