# Context2D

## Features
 - [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D) improved
 - Chain methods
 - Write all style properties inside of an object and set them using *.setStyle(obj)*
 - Two additional shapes: 
   - *.trgl(x0, y0, x1, y1, x2, y2)* - 3 points triangle
   - *.rtrgl(x0, y0, x1, y1)* - right triangle
   
## Installation
 Download `context2D.js` and include it in your index.html file.
 
## Usage
Create a new Context2D(id) object 
```js
var c = new Context2D('canvas');
```
set the size of the canvas if needed, defaults to 300x150
```js
c.size(window.innerWidth, window.innerHeight);
```
set the style
 ```js
  c.setStyle({
   fillStyle: "red",
   strokeStyle: "green",
   lineWidth: 10
});
```
draw something
```js
c.beginPath().rect(10, 10, 50, 50).stroke();
```
## Canvas API
https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D

## License
MIT





