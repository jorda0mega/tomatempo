var Start = React.createClass({
	handleClick: function(){
		this.props.startTimer(5);
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
