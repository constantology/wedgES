	!function() {
		var SP = String[PROTO], f = {
			trimLeft  : function trimLeft()  { return this.replace( /^\s+/gm, '' ); },
			trimRight : function trimRight() { return this.replace( /\s+$/gm, '' ); },
			trim      : function trim()      { return this.trimLeft().trimRight();  }
		}, n;

		for ( n in f ) !has( f, n ) || O[defProp]( SP, n, { enumerable : F, value : f[n] } );
	}();
