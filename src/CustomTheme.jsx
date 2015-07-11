let Colors = require('node_modules/material-ui/src/styles/colors');
let Spacing = require('node_modules/material-ui/src/styles/spacing');
let ColorManipulator = require('node_modules/material-ui/utils/color-manipulator');

let CustomTheme = {
	spacing: Spacing,
	contentFontFamily: 'Roboto, sans-serif',
	getPalette(){
	},
	getComponentThemes(palette, spacing){
		spacing = spacing || Spacing;
		let obj = {
			raisedButton: {
				color: Colors.blue600
			}
		};
	}
};

module.exports = CustomTheme;