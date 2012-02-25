	!function() {
		var SP = String[PROTO], f = {
			trimLeft  : function trimLeft()  { return this.replace( /^\s+/gm, '' ); },
			trimRight : function trimRight() { return this.replace( /\s+$/gm, '' ); },
			trim      : function trim()      { return this.trimLeft().trimRight();  }
		}, n;

		O.keys( f ).forEach( function( k ) { has( SP, k ) || O[defProp]( SP, k, { enumerable : F, value : f[k] } ); } );
	}();
