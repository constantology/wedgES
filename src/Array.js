	!function() {
		var f = {
			every : function every( fn, ctx ) {
				var a = O( this ), i = -1, l = a.length >>> 0;
				while ( ++i < l ) if ( i in a && !fn.call( ctx, a[i], i, a ) ) return F;
				return T;
			},
			forEach : function forEach( fn, ctx ) {
				var a = O( this ), i = -1, l = a.length >>> 0;
				while ( ++i < l ) !( i in a ) || fn.call( ctx, a[i], i, a );
			},
			filter : function filter( fn, ctx ) {
				return AP.reduce.call( this, function( v, o, i, a ) {
					!fn.call( ctx, o, i, a ) || v.push( o );
					return v;
				}, [] );
			},
			indexOf : function indexOf( o, i ) {
				var a = O( this ), l = a.length >>> 0;
				if ( l === 0 ) return -1;
				i = isNaN( i ) ? 0 : i < 0 ? ( l + i - 1 ) : i ? ( i - 1 ) : -1;
				while ( ++i < l ) if ( i in a && a[i] === o ) return i;
				return -1;
			},
			lastIndexOf : function lastIndexOf( o, i ) {
				var a = O( this ), l = a.length >>> 0, n;
				if ( l === 0 ) return -1;
				i = isNaN( i ) ? l : i < 0 ? ( l + i ) : i;
				n = slice.call( a, 0, i ).reverse().indexOf( o );
				return ( n < 0 ) ? n : i - n - 1;
			},
			map : function map( fn, ctx ) {
				return AP.reduce.call( this, function( v, o, i, a ) {
					v.push( fn.call( ctx, o, i, a ) );
					return v;
				}, [] );
			},
			reduce : function reduce( fn ) {
				var a = O( this ), i = -1, l = a.length >>> 0, val;
				arguments.length > 1 ? ( val = arguments[1] ) : ( val = a[0], i = 0 );
				while ( ++i < l ) !( i in a ) || ( val = fn.call( U, val, a[i], i, a ) );
				return val;
			},
			reduceRight : function reduceRight( fn ) {
				var a = O( this ), l = a.length >>> 0, val;
				if ( arguments.length < 2 ) {
					do {
						if ( l in a ) { val = a[l--]; break; }
						if ( --l < 0 ) throw new TypeError();
					} while( T );
				}
				else val = arguments[1];
				while ( --l >= 0 ) !( i in a ) || ( val = fn.call( U, val, a[l], l, a ) );
				return val;
			},
			some : function some( fn, ctx ) {
				var a = O( this ), i = -1, l = a.length >>> 0;
				while ( ++i < l ) if ( i in a && fn.call( ctx, a[i], i, a ) ) return T;
				return F;
			}
		}, n;

		A.isArray || ( A.isArray = function isArray( a ) { return tostr( a ) == '[object Array]'; } );

		for ( n in f ) !has( f, n ) || O[defProp]( AP, n, { enumerable : F, value : f[n] } );
	}();
