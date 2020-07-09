var rgb = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
};

var wb = {
    white: "#FFFFFF",
    black: "#000000"
};

// Adding an empty object as target we can preserve the values
// of rgb and wb
var colors = Object.assign({}, rgb, wb);

console.log(colors);
