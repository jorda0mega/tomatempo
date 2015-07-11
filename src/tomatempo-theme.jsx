let mui = require("material-ui"),
		Colors = mui.Styles.Colors,
		ThemeManager = new mui.Styles.ThemeManager(),
		Spacing = mui.Styles.Spacing,
	  ColorManipulator = mui.Utils.ColorManipulator;

let TomatempoTheme = {
	spacing: Spacing,
	contentFontFamily: 'Roboto, sans-serif',
	getPalette() {
		return {
			primary1Color: Colors.orange600,
			primary2Color: Colors.red700,
			primary3Color: Colors.orange300,
			accent1Color: Colors.deepOrangeA200,
			accent2Color: Colors.deepOrangeA400,
			accent3Color: Colors.deepOrangeA100,
			textColor: Colors.grey100
		};
	},
	getComponentThemes(palette, spacing){
		spacing = spacing || Spacing;
		let obj = {
			dropDownMenu:{
				accentColor: palette.primary2Color
			},
			toolbar: {
				backgroundColor: palette.primary2Color
			},
			flatButton: {
				color: palette.primary2Color,
				textColor: palette.textColor
			}
		};

		return obj;
	}
};

module.exports = TomatempoTheme;