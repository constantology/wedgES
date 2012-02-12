!function(root) {
    function err(e) {
        throw e;
    }
    function has(o, k) {
        return OP.hasOwnProperty.call(o, k);
    }
    function isFn(fn) {
        return typeof fn == "function";
    }
    function tostr(o) {
        return OP.toString.call(o);
    }
    var A = Array, F = !1, N = null, O = Object, PROTO = "prototype", T = !0, U, AP = A[PROTO], OP = O[PROTO], slice = AP.slice;
    !function() {
        function add(p, n, f) {
            typeof p[n] != "undefined" || (p[n] = f);
        }
        var _proto_ = "__proto__", access = !has(OP, "__defineGetter__") ? N : {
            dget : OP.__defineGetter__,
            dset : OP.__defineSetter__,
            lget : OP.__lookupGetter__,
            lset : OP.__lookupSetter__
        }, f, get = "get", n, noenum = {
            constructor : T,
            hasOwnProperty : T,
            isPrototypeOf : T,
            propertyIsEnumerable : T,
            toLocaleString : T,
            toString : T,
            valueOf : T
        }, noenumbug = !{
            toString : N
        }.propertyIsEnumerable("toString"), set = "set", value = "value";
        f = {
            create : function create(o) {
                arguments.length === 1 || err(new Error("Object.create() shim only accepts one parameter."));
                function K() {}
                K[PROTO] = o;
                return new K;
            },
            defineProperty : function defineProperty(o, k, d) {
                var proto;
                if (has(d, value)) {
                    if (access && (access.lget.call(o, k) || access.lset.call(o, k))) {
                        proto = o[_proto_];
                        o[_proto_] = OP;
                        delete o[k];
                        o[k] = d[value];
                        o[_proto_] = proto;
                    } else o[k] = d[value];
                } else if (!access && (isFn(d[get]) || isFn(d[set]))) err(new TypeError("User Agent does not support getter and setter accesors.")); else {
                    has(d, get) || access.dget.call(o, k, d[get]);
                    has(d, set) || access.dset.call(o, k, d[set]);
                }
                return o;
            },
            defineProperties : function defineProperties(o, d) {
                for (var k in d) !(has(d, k) && k != _proto_) || O.defineProperty(o, k, d[k]);
                return o;
            },
            getOwnPropertyDescriptor : function getOwnPropertyDescriptor(o, k) {
                if (!has(o, k)) return;
                var d = {
                    enumerable : T,
                    configurable : T
                }, g, proto, s;
                if (access) {
                    proto = o[_proto_];
                    o[_proto_] = OP;
                    g = access.lget.call(o, k);
                    s = access.lset.call(o, k);
                    o[_proto_] = proto;
                    if (g || s) {
                        !g || (d[get] = g);
                        !s || (d[set] = s);
                    }
                    return d;
                }
                d[value] = o[k];
                return d;
            },
            getOwnPropertyNames : function getOwnPropertyNames(o) {
                var k, keys = [];
                for (k in o) keys.push(k);
                return keys;
            },
            getPrototypeOf : function getPrototypeOf(o) {
                return o[_proto_] || o.constructor[PROTO] || OP;
            },
            keys : function keys(o) {
                var k, keys = [];
                for (k in o) !has(o, k) || keys.push(k);
                if (noenumbug) for (k in noenum) !has(o, k) || keys.push(k);
                return keys;
            },
            values : function values(o) {
                var k, values = [];
                for (k in o) !has(o, k) || values.push(o[k]);
                return values;
            }
        };
        for (n in f) !has(f, n) || add(O, n, f[n]);
    }();
    !function() {
        var f = {
            every : function every(fn, ctx) {
                var i = -1, l = this.length;
                ctx || (ctx = this);
                while (++i < l) if (!fn.call(ctx, this[i], i, this)) return F;
                return T;
            },
            forEach : function forEach(fn, ctx) {
                var i = -1, l = this.length;
                ctx || (ctx = this);
                while (++i < l) fn.call(ctx, this[i], i, this);
            },
            filter : function filter(fn, ctx) {
                ctx || (ctx = this);
                return this.reduce(function(v, o, i, a) {
                    !fn.call(ctx, o, i, a) || v.push(o);
                    return v;
                }, []);
            },
            indexOf : function indexOf(o, i) {
                var l = this.length;
                i = isNaN(i) ? 0 : i < 0 ? l + i - 1 : i ? i - 1 : -1;
                while (++i < l) if (this[i] === o) return i;
                return -1;
            },
            lastIndexOf : function lastIndexOf(o, i) {
                var l = this.length, n;
                i = isNaN(i) ? l : i < 0 ? l + i : i;
                n = this.slice(0, i).reverse().indexOf(o);
                return n < 0 ? n : i - n - 1;
            },
            map : function map(fn, ctx) {
                ctx || (ctx = this);
                return this.reduce(function(v, o, i, a) {
                    v.push(fn.call(ctx, o, i, a));
                    return v;
                }, []);
            },
            reduce : function reduce(fn, val) {
                var i = -1, l = this.length;
                while (++i < l) val = fn.call(this, val, this[i], i, this);
                return val;
            },
            reduceRight : function reduceRight(fn, val) {
                var l = this.length;
                while (--l >= 0) val = fn.call(this, val, this[l], l, this);
                return val;
            },
            some : function some(fn, ctx) {
                var i = -1, l = this.length;
                ctx || (ctx = this);
                while (++i < l) if (fn.call(ctx, this[i], i, this)) return T;
                return F;
            }
        }, n;
        A.isArray || (A.isArray = function isArray(a) {
            return tostr(a) == "[object Array]";
        });
        for (n in f) !has(f, n) || O.defineProperty(AP, n, {
            enumerable : F,
            value : f[n]
        });
    }();
    !function() {
        function now() {
            return new Date / 1;
        }
        function toISOString() {
            return (n - ~this.getUTCMonth() * 10 + this.toUTCString() + n + this / 1).replace(re, format);
        }
        var D = Date, DP = D[PROTO], format = "$3-$1-$2T$4.$5Z", iso = "toISOString", n = 1e3, re = /1(..).*?(\d\d)\D+(\d+).(\S+).*(...)/;
        "now" in D || (D.now = now);
        iso in DP || O.defineProperty(DP, iso, {
            enumerable : F,
            value : toISOString
        });
    }();
    Function[PROTO].bind || O.defineProperty(Function[PROTO], "bind", function() {
        return {
            enumerable : F,
            value : function bind(ctx) {
                var args = slice.call(arguments, 1), fn = this;
                function bound() {
                    return fn.apply(this instanceof bound ? this : ctx || root, args.concat(slice.call(arguments)));
                }
                bound[PROTO] = O.create(fn[PROTO]);
                return bound;
            }
        };
    }());
    !function() {
        var SP = String[PROTO], f = {
            trimLeft : function trimLeft() {
                return this.replace(/^\s+/gm, "");
            },
            trimRight : function trimRight() {
                return this.replace(/\s+$/gm, "");
            },
            trim : function trim() {
                return this.trimLeft().trimRight();
            }
        }, n;
        for (n in f) !has(f, n) || O.defineProperty(SP, n, {
            enumerable : F,
            value : f[n]
        });
    }();
}(this);