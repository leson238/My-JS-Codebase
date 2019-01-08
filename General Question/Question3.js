// Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.
const toRGB = (str) => {
  return parseInt(str,16);
};
const hexToRGB = (hex) => {
  let hexRed = hex.substring(1,3);
  let hexGreen = hex.substring(3,5);
  let hexBlue = hex.substring(5,7);
  return console.log(toRGB(hexRed) + "," + toRGB(hexGreen) + "," + toRGB(hexBlue));
};

const toHex = (num) => {
  return num.toString(16);
};
const rgbToHex = (r,g,b) => {
  return console.log("#" + toHex(r) + toHex(g) + toHex(b));
}
