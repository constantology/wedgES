	!function() {
		function now() { return new Date() / 1; }
// taken from: https://gist.github.com/1044533
		function toISOString() { return ( n - ( ~this.getUTCMonth() * 10 ) + this.toUTCString() + n + ( this / 1 ) ).replace( re, format ); }

		var D = Date, DP = D[PROTO], format = '$3-$1-$2T$4.$5Z', iso = 'toISOString', n = 1e3, re = /1(..).*?(\d\d)\D+(\d+).(\S+).*(...)/;

		'now' in D  || ( D.now = now );

		 iso  in DP || O[defProp]( DP, iso, { enumerable : F, value : toISOString } );
	}();
