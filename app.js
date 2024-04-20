//  Styles from the :root element
var styles = window.getComputedStyle(document.documentElement);
// Get current color set in `--main-color` variable
var color = styles.getPropertyValue('--main-color');
// Replace the color with a new value; now all elements using
// `--main-color` will be updated with the new color value. Handy! document
documentElement.styles.setProperty('--main-color', 'hotpink');