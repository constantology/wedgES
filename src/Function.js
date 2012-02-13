// conforms to: http://es5.github.com/#x15.3.4.5
	Function[PROTO].bind || O[defProp]( Function[PROTO], 'bind', function() {
		return { enumerable : F, value : function bind( ctx ) {
			var args = slice.call( arguments, 1 ), fn = this;
			function bound() { return fn.apply( ( this instanceof bound ? this : ctx || root ), args.concat( slice.call( arguments ) ) ); }
			bound[PROTO] = O.create( fn[PROTO] );
			return bound;
		} };
	}() );
