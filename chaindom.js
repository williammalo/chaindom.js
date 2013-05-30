(function(){
	var i=arguments.length;
	while(i--){
		//chainify
		(function(b,a){for(a in b=b.prototype)(function(c,d){b[a]=function(){d=c.apply(this,arguments);return d==undefined?this:d}})(b[a])})(arguments[i]);
		//propertize
		(function(d){d.prototype.prop=function(a,c,b){if(void 0!==c)this[a]=c;else for(b in a)this[b]=a[b];return this}})(arguments[i]);
	}
})(CSSStyleDeclaration,DOMTokenList,Node,Element,CanvasRenderingContext2D)
