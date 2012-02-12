function err( e ) { throw e; }
function has( o, k ) { return OP.hasOwnProperty.call( o, k ); }
function isFn( fn ) { return typeof fn == 'function'; }
function tostr( o ) { return OP.toString.call( o ); }

var A  = Array, F = !1, N = null, O = Object, PROTO = 'prototype', T = !0, U,
	AP = A[PROTO], OP = O[PROTO], slice = AP.slice;
