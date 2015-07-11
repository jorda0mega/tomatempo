var React = require("react");
var mui = require('material-ui'),
	injectTapEventPlugin = require("react-tap-event-plugin"),
	FlatButton = mui.FlatButton,
	RaisedButton = mui.RaisedButton,
	Toolbar = mui.Toolbar,
	ToolbarGroup = mui.ToolbarGroup,
	DropDownMenu = mui.DropDownMenu,
	FontIcon = mui.FontIcon,
	ToolbarSeparator = mui.ToolbarSeparator,
	LinearProgress = mui.LinearProgress,
	TomatempoTheme = require("./tomatempo-theme.jsx");

let Dialog = mui.Dialog;
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

injectTapEventPlugin();

var filterOptions = [
	{ payload: '1', text: 'All Broadcasts' },
	{ payload: '2', text: 'All Voice' },
	{ payload: '3', text: 'All Text' },
	{ payload: '4', text: 'Complete Voice' },
	{ payload: '5', text: 'Complete Text' },
	{ payload: '6', text: 'Active Voice' },
	{ payload: '7', text: 'Active Text' },
];

var Start = React.createClass({
	getInitialState: function(){
		return {width: 50};
	},
	handleClick: function(){
		this.props.startTimer();
	},
	render: function(){
		return (
			<FlatButton label="Start" onClick={this.handleClick} style={{marginTop: "10px"}} />
		);
	}
});

var Stop = React.createClass({
	handleClick: function(){
		this.props.stopTimer();
	},
	render: function(){
		return (
			<FlatButton label="Stop" onClick={this.handleClick} style={{margin: "5px"}} />
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
		ThemeManager.setTheme(TomatempoTheme);
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
	//componentWillMount() {
	//	ThemeManager.setComponentThemes({
	//		dropDownMenu:{
	//			accentColor: Colors.red700
	//		},
	//		toolbar: {
	//			backgroundColor: Colors.red700
	//		}
	//	});
	//},
	incrementTimer: function(interval){
		if(this.state.timer > 0){
			this.setState({timer: this.state.timer + interval});
		}
		else{
			clearInterval(this.countdown);
		}
	},
	startTimer: function(){
		var self = this;
		if(!self.countdown){
			self.countdown = setInterval(function(){
				self.incrementTimer(1);
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
			<div id="tomatempo" style={{fontFamily: "'Roboto', sans-serif"}}>
				<div>
					<Timer timer={this.state.timer} />
				</div>
				<div>
					<Toolbar style={{borderRadius: "3px 3px 0px 0px"}}>
						<ToolbarGroup key={0} float="left">
							<DropDownMenu menuItems={filterOptions} labelStyle={{color:Colors.grey100}}/>
						</ToolbarGroup>
						<ToolbarGroup key={1} float="right">
							<FlatButton label="Start" onClick={this.startTimer} hoverColor={Colors.red900}/>
						</ToolbarGroup>
					</Toolbar>
					<LinearProgress mode="determinate" value={this.state.timer} style={{borderRadius:"0px 0px 3px 3px"}}/>
				</div>
			</div>
		);
	}
});

React.render(React.createElement(App, null), document.body);
