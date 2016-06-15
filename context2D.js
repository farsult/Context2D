// Context2D may be freely distributed under the MIT license.

(function(global){

global.Context2D = function(id){
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext('2d');
};

// Settings
Context2D.prototype.size = function(w, h){
     this.canvas.width = w;
     this.canvas.height = h;
};
Context2D.prototype.setStyle = function(obj){
     for(i in obj){
        this.ctx[i] = obj[i];
     }; 
     return this;
};  

// Drawing Paths
Context2D.prototype.fill = function(){
     this.ctx.fill.apply(this.ctx, arguments);
     return this;
};
Context2D.prototype.stroke = function(){
     this.ctx.stroke.apply(this.ctx, arguments);
     return this;
};

// Paths
Context2D.prototype.beginPath = function(){
     this.ctx.beginPath.apply(this.ctx, arguments);
     return this;
};
Context2D.prototype.arc = function(){
     this.ctx.arc.apply(this.ctx, arguments);
     return this;
};
Context2D.prototype.moveTo = function(){
     this.ctx.moveTo.apply(this.ctx, arguments);
     return this.crx;
};
Context2D.prototype.lineTo = function(){
     this.ctx.lineTo.apply(this.ctx, arguments);
     return this;
};
Context2D.prototype.arcTo = function(){
     this.ctx.arcTo.apply(this.ctx, arguments);
     return this;
};
Context2D.prototype.rect = function(){
     this.ctx.rect.apply(this.ctx, arguments);
     return this;
};
Context2D.prototype.isPointInPath = function(){
	this.ctx.isPointInPath.apply(this.ctx, arguments);
	return this;
};
Context2D.prototype.bezierCurveTo = function(){
	this.ctx.bezierCurveTo.apply(this.ctx, arguments);
	return this;
};
Context2D.prototype.clip = function(){
	this.ctx.clip.apply(this.ctx, arguments);
	return this;
};
Context2D.prototype.quadraticCurveTo = function(){
	this.ctx.quadraticCurveTo.apply(this.ctx, arguments);
	return this;
};
Context2D.prototype.closePath = function(){
 	this.ctx.closePath.apply(this.ctx, arguments);
 	return this;
};

// Shapes
Context2D.prototype.rect = function(){
	this.ctx.rect.apply(this.ctx, arguments);
	return this;
};
Context2D.prototype.fillRect = function(){
	this.ctx.fillRect.apply(this.ctx, arguments);
	return this;
};
Context2D.prototype.strokeRect = function(){
	this.ctx.strokeRect.apply(this.ctx, arguments);
	return this;
};
Context2D.prototype.clearRect = function(){
	this.ctx.clearRect.apply(this.ctx, arguments);
	return this;
};
Context2D.prototype.trgl = function(x0, y0, x1, y1, x2, y3){
     this.ctx.moveTo(x0, y0);
     this.ctx.lineTo(x1, y1);
     this.ctx.lineTo(x2, y3);
     this.ctx.closePath();
     return this;
};
Context2D.prototype.r_trgl = function(x0, y0, x1, y1){
     this.ctx.moveTo(x0, y0);
     this.ctx.lineTo(x1, y1);
     this.ctx.lineTo(x0, y1) 
     this.ctx.closePath();
     return this;
};

// Transformations
Context2D.prototype.scale = function(){
     this.ctx.scale.apply(this.ctx, arguments);
     return this;
};
Context2D.prototype.rotate = function(){
     this.ctx.rotate.apply(this.ctx, arguments);
     return this;
};
Context2D.prototype.translate = function(){
     this.ctx.translate.apply(this.ctx, arguments);
     return this;
}; 
Context2D.prototype.transform = function(){
     this.ctx.transform.apply(this.ctx, arguments);
     return this;
};
Context2D.prototype.setTransform = function(){
     this.ctx.setTransform.apply(this.ctx, arguments);
     return this;
};

// Drawing Text
Context2D.prototype.fillText = function(){
     this.ctx.fillText.apply(this.ctx, arguments);
     return this;
};
Context2D.prototype.strokeText = function(){
	 this.ctx.strokeText.apply(this.ctx, arguments);
	 return this;
};
Context2D.prototype.measureText = function(){
     this.ctx.measureText.apply(this.ctx, arguments);
     return this;
};

// Drawing Image
Context2D.prototype.drawImage = function(){
     this.ctx.drawImage.apply(this.ctx, arguments);
     return this;
};

// Gradients and Patterns
Context2D.prototype.createLinearGradient = function(){
	this.ctx.createLinearGradient.apply(this.ctx, arguments);
	return this;
};	
Context2D.prototype.createPattern = function(){
	this.ctx.createPattern.apply(this.ctx, arguments);
	return this;
};	
Context2D.prototype.createRadialGradient = function(){
	this.ctx.createRadialGradient.apply(this.ctx, arguments);
	return this;
};	
Context2D.prototype.addColorStop = function(){
	this.ctx.addColorStop.apply(this.ctx, arguments);
	return this;
};

// Canvas State
Context2D.prototype.save = function(){
     this.ctx.save.apply(this.ctx, arguments);
     return this;
};
Context2D.prototype.restore = function(){
     this.ctx.restore.apply(this.ctx, arguments);
     return this;
};
Context2D.prototype.reset = function(){
     this.ctx
};

// Pixel Manipulation
Context2D.prototype.createImageData = function(){
     this.ctx.createImageData.apply(this.ctx, arguments);
     return this;
};
Context2D.prototype.getImageData = function(){
     this.ctx.getImageData.apply(this.ctx, arguments);
     return this;
};
Context2D.prototype.putImageData = function(){
     this.ctx.putImageData.apply(this.ctx, arguments);
     return this;
};

}(this));