	!function() {
		var f = {
			every : function every( fn, ctx ) {
				var i = -1, l = this.length; ctx || ( ctx = this );
				while ( ++i < l ) if ( !fn.call( ctx, this[i], i, this ) ) return F;
				return T;
			},
			forEach : function forEach( fn, ctx ) {
				var i = -1, l = this.length; ctx || ( ctx = this );
				while ( ++i < l ) fn.call( ctx, this[i], i, this );
			},
			filter : function filter( fn, ctx ) {
				ctx || ( ctx = this );
				return this.reduce( function( v, o, i, a ) {
					!fn.call( ctx, o, i, a ) || v.push( o );
					return v;
				}, [] );
			},
			indexOf : function indexOf( o, i ) {
	            var l = this.length;
	            i = isNaN( i ) ? 0 : i < 0 ? ( l + i - 1 ) : i ? ( i - 1 ) : -1;
	            while ( ++i < l ) if ( this[i] === o ) return i;
	            return -1;
	        },
			lastIndexOf : function lastIndexOf( o, i ) {
	            var l = this.length, n;
	            i = isNaN( i ) ? l : i < 0 ? ( l + i ) : i;
	            n = this.slice( 0, i ).reverse().indexOf( o );
	            return ( n < 0 ) ? n : i - n - 1;
	        },
			map : function map( fn, ctx ) {
				ctx || ( ctx = this );
				return this.reduce( function( v, o, i, a ) {
					v.push( fn.call( ctx, o, i, a ) );
					return v;
				}, [] );
			},
	        reduce : function reduce( fn, val ) {
	            var i = -1, l = this.length;
	            while ( ++i < l ) val = fn.call( this, val, this[i], i, this );
	            return val;
	        },
			reduceRight : function reduceRight( fn, val ) {
	            var l = this.length;
	            while ( --l >= 0 ) val = fn.call( this, val, this[l], l, this );
	            return val;
	        },
			some : function some( fn, ctx ) {
				var i = -1, l = this.length; ctx || ( ctx = this );
				while ( ++i < l ) if ( fn.call( ctx, this[i], i, this ) ) return T;
				return F;
			}
		}, n;

		A.isArray || ( A.isArray = function isArray( a ) { return tostr( a ) == '[object Array]'; } );

		for ( n in f ) !has( f, n ) || O.defineProperty( AP, n, { enumerable : F, value : f[n] } );
	}();
