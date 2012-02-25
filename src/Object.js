// some of this file is based on: https://github.com/kriskowal/es5-shim
	!function() {
		function add( p, n, f ) { typeof p[n] != 'undefined' || ( p[n] = f ); }

		function defproptest( o ) {
			var k = 'wedgES';
			try { return k in O[defProp]( o, k, {} ); }
			catch( e ) {}
		}

		var _proto_   = '__proto__',
			access    = !has( OP, '__defineGetter__' ) ? N : {
				dget : OP.__defineGetter__, dset : OP.__defineSetter__,
				lget : OP.__lookupGetter__, lset : OP.__lookupSetter__
			},
			defprop,
			f, get    = 'get', n,
			noenum    = { // <- taken from: https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/keys
				constructor    : T, hasOwnProperty : T, isPrototypeOf : T, propertyIsEnumerable : T,
				toLocaleString : T, toString       : T, valueOf       : T
			},
			noenumbug = !( { toString : N } ).propertyIsEnumerable( 'toString' ),
			set = 'set', value = 'value';

		f = {
			create : function create( o ) {
				arguments.length === 1 || err( new Error( 'Object.create() shim only accepts one parameter.' ) );
				function K() {}; K[PROTO] = o;
				return new K;
			},
			defineProperty : function defineProperty( o, k, d ) {
				var proto;

				if ( defprop ) {
					try { return defprop.call( O, o, k, d ); }
					catch ( e ) {}
				}

				if ( has( d, value ) ) {
					if ( access && ( access.lget.call( o, k ) || access.lset.call( o, k ) ) ) {
						proto      = o[_proto_];
						o[_proto_] = OP; delete o[k];
						o[k]       = d[value];
						o[_proto_] = proto;
					}
					else o[k]      = d[value];
				}
				else if ( !access && ( isFn( d[get] ) || isFn( d[set] ) ) )
					err( new TypeError( 'User Agent does not support getter and setter accesors.' ) );
				else {
					has( d, get ) || access.dget.call( o, k, d[get] );
					has( d, set ) || access.dset.call( o, k, d[set] );
				}
				return o;
			},
			defineProperties : function defineProperties( o, d ) {
				for ( var k in d ) !( has( d, k ) && k != _proto_ ) || O.defineProperty( o, k, d[k] );
				return o;
			},
			getOwnPropertyDescriptor : function getOwnPropertyDescriptor( o, k ) {
				if ( !has( o, k ) ) return;
				var d = { enumerable : T, configurable : T }, g, proto, s;

				if ( access ) {
					proto = o[_proto_];
					o[_proto_] = OP;

					g = access.lget.call( o, k );
					s = access.lset.call( o, k );

					o[_proto_] = proto;

					if ( g || s ) {
						!g || ( d[get] = g );
						!s || ( d[set] = s );
					}
					return d;
				}

				d[value] = o[k];
				return d;
			},
			getOwnPropertyNames : function getOwnPropertyNames( o ) {
				var k, keys = [];
				for ( k in o ) keys.push( k );
				return keys;
			},
			getPrototypeOf : function getPrototypeOf( o ) { return o[_proto_] || o.constructor[PROTO] || OP; },
			keys : function keys( o ) {
				var k, keys = [];
				for ( k in o ) !has( o, k ) || keys.push( k );
				if ( noenumbug ) for ( k in noenum ) !has( o, k ) || keys.push( k );
				return keys;
			},
			values : function values( o ) {
				var k, values = [];
				for ( k in o ) !has( o, k ) || values.push( o[k] );
				return values;
			}
		};

		!O[defProp]
		|| ( defproptest( {} ) && defproptest( document.createElement( 'div' ) ) )
		|| ( defprop = O[defProp], O[defProp] = f.defineProperty );

		for ( n in f ) ( has( f, n ) && has( OP, n ) ) || add( O, n, f[n] );
	}();
