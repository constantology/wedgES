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
    var A = Array, F = !1, N = null, O = Object, PROTO = "prototype", T = !0, U, AP = A[PROTO], OP = O[PROTO], defProp = "defineProperty", slice = AP.slice;
    !function() {
        function add(p, n, f) {
            typeof p[n] != "undefined" || (p[n] = f);
        }
        function defproptest(o) {
            var k = "wedgES";
            try {
                return k in O[defProp](o, k, {});
            } catch (e) {}
        }
        var _proto_ = "__proto__", access = !has(OP, "__defineGetter__") ? N : {
            dget : OP.__defineGetter__,
            dset : OP.__defineSetter__,
            lget : OP.__lookupGetter__,
            lset : OP.__lookupSetter__
        }, defprop, f, get = "get", n, noenum = {
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
                if (defprop) {
                    try {
                        return defprop.call(O, o, k, d);
                    } catch (e) {}
                }
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
        !O[defProp] || defproptest({}) && defproptest(document.createElement("div")) || (defprop = O[defProp], O[defProp] = f.defineProperty);
        for (n in f) has(f, n) && has(OP, n) || add(O, n, f[n]);
    }();
    !function() {
        var f = {
            every : function every(fn, ctx) {
                var a = O(this), i = -1, l = a.length >>> 0;
                while (++i < l) if (i in a && !fn.call(ctx, a[i], i, a)) return F;
                return T;
            },
            forEach : function forEach(fn, ctx) {
                var a = O(this), i = -1, l = a.length >>> 0;
                while (++i < l) !(i in a) || fn.call(ctx, a[i], i, a);
            },
            filter : function filter(fn, ctx) {
                return AP.reduce.call(this, function(v, o, i, a) {
                    !fn.call(ctx, o, i, a) || v.push(o);
                    return v;
                }, []);
            },
            indexOf : function indexOf(o, i) {
                var a = O(this), l = a.length >>> 0;
                if (l === 0) return -1;
                i = isNaN(i) ? 0 : i < 0 ? l + i - 1 : i ? i - 1 : -1;
                while (++i < l) if (i in a && a[i] === o) return i;
                return -1;
            },
            lastIndexOf : function lastIndexOf(o, i) {
                var a = O(this), l = a.length >>> 0, n;
                if (l === 0) return -1;
                i = isNaN(i) ? l : i < 0 ? l + i : i;
                n = slice.call(a, 0, i).reverse().indexOf(o);
                return n < 0 ? n : i - n - 1;
            },
            map : function map(fn, ctx) {
                return AP.reduce.call(this, function(v, o, i, a) {
                    v.push(fn.call(ctx, o, i, a));
                    return v;
                }, []);
            },
            reduce : function reduce(fn) {
                var a = O(this), i = -1, l = a.length >>> 0, val;
                arguments.length > 1 ? val = arguments[1] : (val = a[0], i = 0);
                while (++i < l) !(i in a) || (val = fn.call(U, val, a[i], i, a));
                return val;
            },
            reduceRight : function reduceRight(fn) {
                var a = O(this), l = a.length >>> 0, val;
                if (arguments.length < 2) {
                    do {
                        if (l in a) {
                            val = a[l--];
                            break;
                        }
                        if (--l < 0) throw new TypeError;
                    } while (T);
                } else val = arguments[1];
                while (--l >= 0) !(i in a) || (val = fn.call(U, val, a[l], l, a));
                return val;
            },
            some : function some(fn, ctx) {
                var a = O(this), i = -1, l = a.length >>> 0;
                while (++i < l) if (i in a && fn.call(ctx, a[i], i, a)) return T;
                return F;
            }
        }, n;
        A.isArray || (A.isArray = function isArray(a) {
            return tostr(a) == "[object Array]";
        });
        f.forEach.call(O.keys(f), function(k) {
            has(AP, k) || O[defProp](AP, k, {
                enumerable : F,
                value : f[k]
            });
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
        iso in DP || O[defProp](DP, iso, {
            enumerable : F,
            value : toISOString
        });
    }();
    Function[PROTO].bind || O[defProp](Function[PROTO], "bind", function() {
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
        O.keys(f).forEach(function(k) {
            has(SP, k) || O[defProp](SP, k, {
                enumerable : F,
                value : f[k]
            });
        });
    }();
}(this);