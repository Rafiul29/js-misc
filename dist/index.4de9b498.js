// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2Rsls":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "2751c5c64de9b498";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"4pp4s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _lenis = require("@studio-freight/lenis");
var _lenisDefault = parcelHelpers.interopDefault(_lenis);
const intro = document.querySelector(".intro");
const introLogo = document.querySelectorAll(".intro-logo");
window.addEventListener("DOMContentLoaded", function() {
    //logo appearing
    setTimeout(()=>{
        introLogo.forEach((logo, i)=>{
            setTimeout(()=>{
                logo.classList.add("active");
            }, 500 * (i + 1));
        });
        // logo disapearing
        setTimeout(()=>{
            introLogo.forEach((logo, i)=>{
                setTimeout(()=>{
                    logo.classList.remove("active");
                    logo.classList.add("fade");
                }, 50 * (i + 1));
            });
        }, 2000);
        // screen disappearing
        setTimeout(()=>{
            intro.style.top = "-100vh";
        }, 2500);
    });
});
// smooth scrolling
const lenis = new (0, _lenisDefault.default)({
    duration: 1.2,
    easing: (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical",
    smooth: true
});
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
//cutom cursor
const inneCursor = document.querySelector(".inner-cursor");
const outerCursor = document.querySelector(".outer-cursor");
const links = document.querySelectorAll("a");
document.addEventListener("mousemove", function(e) {
    const x = e.clientX;
    const y = e.clientY;
    inneCursor.style.left = `${x}px`;
    inneCursor.style.top = `${y}px`;
    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;
});
links.forEach((link)=>{
    console.log(link);
    link.addEventListener("mouseover", function() {
        inneCursor.classList.add("grow");
    });
    link.addEventListener("mouseleave", function() {
        inneCursor.classList.remove("grow");
    });
});

},{"@studio-freight/lenis":"ggVJc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ggVJc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>a);
var _tinyEmitter = require("tiny-emitter");
var _tinyEmitterDefault = parcelHelpers.interopDefault(_tinyEmitter);
var _virtualScroll = require("virtual-scroll");
var _virtualScrollDefault = parcelHelpers.interopDefault(_virtualScroll);
function e(t, i) {
    for(var e = 0; e < i.length; e++){
        var o = i[e];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
    }
}
function o(t, i, o) {
    return i && e(t.prototype, i), o && e(t, o), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t;
}
function r() {
    return r = Object.assign ? Object.assign.bind() : function(t) {
        for(var i = 1; i < arguments.length; i++){
            var e = arguments[i];
            for(var o in e)Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        }
        return t;
    }, r.apply(this, arguments);
}
function n(t, i) {
    return n = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, i) {
        return t.__proto__ = i, t;
    }, n(t, i);
}
function s(t, i) {
    var e = t % i;
    return e < 0 && (e += i), e;
}
var l = [
    "duration",
    "easing"
], c = /*#__PURE__*/ function() {
    function t() {}
    var i = t.prototype;
    return i.to = function(t, i) {
        var e = this, o = void 0 === i ? {} : i, n = o.duration, s = void 0 === n ? 1 : n, c = o.easing, a = void 0 === c ? function(t) {
            return t;
        } : c, h = function(t, i) {
            if (null == t) return {};
            var e, o, r = {}, n = Object.keys(t);
            for(o = 0; o < n.length; o++)i.indexOf(e = n[o]) >= 0 || (r[e] = t[e]);
            return r;
        }(o, l);
        this.target = t, this.fromKeys = r({}, h), this.toKeys = r({}, h), this.keys = Object.keys(r({}, h)), this.keys.forEach(function(i) {
            e.fromKeys[i] = t[i];
        }), this.duration = s, this.easing = a, this.currentTime = 0, this.isRunning = !0;
    }, i.stop = function() {
        this.isRunning = !1;
    }, i.raf = function(t) {
        var i = this;
        if (this.isRunning) {
            this.currentTime = Math.min(this.currentTime + t, this.duration);
            var e = this.easing(this.progress);
            this.keys.forEach(function(t) {
                var o = i.fromKeys[t];
                i.target[t] = o + (i.toKeys[t] - o) * e;
            }), 1 === e && this.stop();
        }
    }, o(t, [
        {
            key: "progress",
            get: function() {
                return this.currentTime / this.duration;
            }
        }
    ]), t;
}(), a = /*#__PURE__*/ function(t) {
    var e, r;
    function l(e) {
        var o, r, n, s, l = void 0 === e ? {} : e, a = l.duration, h = void 0 === a ? 1.2 : a, u = l.easing, p = void 0 === u ? function(t) {
            return Math.min(1, 1.001 - Math.pow(2, -10 * t));
        } : u, d = l.smooth, f = void 0 === d || d, v = l.mouseMultiplier, g = void 0 === v ? 1 : v, w = l.smoothTouch, m = void 0 !== w && w, y = l.touchMultiplier, b = void 0 === y ? 2 : y, S = l.direction, N = void 0 === S ? "vertical" : S, O = l.gestureDirection, z = void 0 === O ? "vertical" : O, R = l.infinite, W = void 0 !== R && R, M = l.wrapper, T = void 0 === M ? window : M, k = l.content, j = void 0 === k ? document.body : k;
        (s = t.call(this) || this).onWindowResize = function() {
            s.wrapperWidth = window.innerWidth, s.wrapperHeight = window.innerHeight;
        }, s.onWrapperResize = function(t) {
            var i = t[0];
            if (i) {
                var e = i.contentRect;
                s.wrapperWidth = e.width, s.wrapperHeight = e.height;
            }
        }, s.onContentResize = function(t) {
            var i = t[0];
            if (i) {
                var e = i.contentRect;
                s.contentWidth = e.width, s.contentHeight = e.height;
            }
        }, s.onVirtualScroll = function(t) {
            var i = t.deltaY, e = t.deltaX, o = t.originalEvent, r = !!o.composedPath().find(function(t) {
                return t.hasAttribute && t.hasAttribute("data-lenis-prevent");
            });
            o.ctrlKey || r || (s.smooth = o.changedTouches ? s.smoothTouch : s.options.smooth, s.stopped ? o.preventDefault() : s.smooth && 4 !== o.buttons && (s.smooth && o.preventDefault(), s.targetScroll -= "both" === s.gestureDirection ? e + i : "horizontal" === s.gestureDirection ? e : i, s.scrollTo(s.targetScroll)));
        }, s.onScroll = function(t) {
            s.isScrolling && s.smooth || (s.targetScroll = s.scroll = s.lastScroll = s.wrapperNode[s.scrollProperty], s.notify());
        }, window.lenisVersion = "0.2.19", s.options = {
            duration: h,
            easing: p,
            smooth: f,
            mouseMultiplier: g,
            smoothTouch: m,
            touchMultiplier: b,
            direction: N,
            gestureDirection: z,
            infinite: W,
            wrapper: T,
            content: j
        }, s.duration = h, s.easing = p, s.smooth = f, s.mouseMultiplier = g, s.smoothTouch = m, s.touchMultiplier = b, s.direction = N, s.gestureDirection = z, s.infinite = W, s.wrapperNode = T, s.contentNode = j, s.wrapperNode.addEventListener("scroll", s.onScroll), s.wrapperNode === window ? (s.wrapperNode.addEventListener("resize", s.onWindowResize), s.onWindowResize()) : (s.wrapperHeight = s.wrapperNode.offsetHeight, s.wrapperWidth = s.wrapperNode.offsetWidth, s.wrapperObserver = new ResizeObserver(s.onWrapperResize), s.wrapperObserver.observe(s.wrapperNode)), s.contentHeight = s.contentNode.offsetHeight, s.contentWidth = s.contentNode.offsetWidth, s.contentObserver = new ResizeObserver(s.onContentResize), s.contentObserver.observe(s.contentNode), s.targetScroll = s.scroll = s.lastScroll = s.wrapperNode[s.scrollProperty], s.animate = new c;
        var H = (null == (o = navigator) || null == (r = o.userAgentData) ? void 0 : r.platform) || (null == (n = navigator) ? void 0 : n.platform) || "unknown";
        return s.virtualScroll = new (0, _virtualScrollDefault.default)({
            el: s.wrapperNode,
            firefoxMultiplier: 50,
            mouseMultiplier: s.mouseMultiplier * (H.includes("Win") ? .84 : .4),
            useKeyboard: !1,
            touchMultiplier: s.touchMultiplier,
            useTouch: !0,
            passive: !1
        }), s.virtualScroll.on(s.onVirtualScroll), s;
    }
    r = t, (e = l).prototype = Object.create(r.prototype), e.prototype.constructor = e, n(e, r);
    var a = l.prototype;
    return a.start = function() {
        this.stopped = !1;
    }, a.stop = function() {
        this.stopped = !0, this.animate.stop();
    }, a.destroy = function() {
        var t;
        this.wrapperNode === window && this.wrapperNode.removeEventListener("resize", this.onWindowResize), this.wrapperNode.removeEventListener("scroll", this.onScroll), this.virtualScroll.destroy(), null == (t = this.wrapperObserver) || t.disconnect(), this.contentObserver.disconnect();
    }, a.raf = function(t) {
        var i = t - (this.now || 0);
        this.now = t, !this.stopped && this.smooth && (this.lastScroll = this.scroll, this.animate.raf(.001 * i), this.scroll === this.targetScroll && (this.lastScroll = this.scroll), this.isScrolling && (this.setScroll(this.scroll), this.notify()), this.isScrolling = this.scroll !== this.targetScroll);
    }, a.setScroll = function(t) {
        var i = this.infinite ? s(t, this.limit) : t;
        "horizontal" === this.direction ? this.wrapperNode.scrollTo(i, 0) : this.wrapperNode.scrollTo(0, i);
    }, a.notify = function() {
        var t = this.infinite ? s(this.scroll, this.limit) : this.scroll;
        this.emit("scroll", {
            scroll: t,
            limit: this.limit,
            velocity: this.velocity,
            direction: this.direction,
            progress: t / this.limit
        });
    }, a.scrollTo = function(t, i) {
        var e = void 0 === i ? {} : i, o = e.offset, r = void 0 === o ? 0 : o, n = e.immediate, s = void 0 !== n && n, l = e.duration, c = void 0 === l ? this.duration : l, a = e.easing, h = void 0 === a ? this.easing : a;
        if (null != t) {
            var u;
            if ("number" == typeof t) u = t;
            else if ("top" === t || "#top" === t) u = 0;
            else if ("bottom" === t) u = this.limit;
            else {
                var p;
                if ("string" == typeof t) p = document.querySelector(t);
                else {
                    if (null == t || !t.nodeType) return;
                    p = t;
                }
                if (!p) return;
                var d = 0;
                if (this.wrapperNode !== window) {
                    var f = this.wrapperNode.getBoundingClientRect();
                    d = "horizontal" === this.direction ? f.left : f.top;
                }
                var v = p.getBoundingClientRect();
                u = ("horizontal" === this.direction ? v.left : v.top) + this.scroll - d;
            }
            u += r, this.targetScroll = this.infinite ? u : Math.max(0, Math.min(u, this.limit)), !this.smooth || s ? (this.scroll = this.lastScroll = this.targetScroll, this.setScroll(this.targetScroll)) : this.animate.to(this, {
                duration: c,
                easing: h,
                scroll: this.targetScroll
            });
        }
    }, o(l, [
        {
            key: "scrollProperty",
            get: function() {
                return this.wrapperNode === window ? "horizontal" === this.direction ? "scrollX" : "scrollY" : "horizontal" === this.direction ? "scrollLeft" : "scrollTop";
            }
        },
        {
            key: "limit",
            get: function() {
                return "horizontal" === this.direction ? this.contentWidth - this.wrapperWidth : this.contentHeight - this.wrapperHeight;
            }
        },
        {
            key: "velocity",
            get: function() {
                return this.scroll - this.lastScroll;
            }
        }
    ]), l;
}((0, _tinyEmitterDefault.default));

},{"tiny-emitter":"2GwCf","virtual-scroll":"36ZkR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2GwCf":[function(require,module,exports) {
function E() {
// Keep this empty so it's easier to inherit from
// (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}
E.prototype = {
    on: function(name, callback, ctx) {
        var e = this.e || (this.e = {});
        (e[name] || (e[name] = [])).push({
            fn: callback,
            ctx: ctx
        });
        return this;
    },
    once: function(name, callback, ctx) {
        var self = this;
        function listener() {
            self.off(name, listener);
            callback.apply(ctx, arguments);
        }
        listener._ = callback;
        return this.on(name, listener, ctx);
    },
    emit: function(name) {
        var data = [].slice.call(arguments, 1);
        var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
        var i = 0;
        var len = evtArr.length;
        for(i; i < len; i++)evtArr[i].fn.apply(evtArr[i].ctx, data);
        return this;
    },
    off: function(name, callback) {
        var e = this.e || (this.e = {});
        var evts = e[name];
        var liveEvents = [];
        if (evts && callback) {
            for(var i = 0, len = evts.length; i < len; i++)if (evts[i].fn !== callback && evts[i].fn._ !== callback) liveEvents.push(evts[i]);
        }
        // Remove event from queue to prevent memory leak
        // Suggested by https://github.com/lazd
        // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910
        liveEvents.length ? e[name] = liveEvents : delete e[name];
        return this;
    }
};
module.exports = E;
module.exports.TinyEmitter = E;

},{}],"36ZkR":[function(require,module,exports) {
!function(e, t) {
    module.exports = t();
}(this, function() {
    var e = 0;
    function t(t) {
        return "__private_" + e++ + "_" + t;
    }
    function i(e, t) {
        if (!Object.prototype.hasOwnProperty.call(e, t)) throw new TypeError("attempted to use private field on non-instance");
        return e;
    }
    function n() {}
    n.prototype = {
        on: function(e, t, i) {
            var n = this.e || (this.e = {});
            return (n[e] || (n[e] = [])).push({
                fn: t,
                ctx: i
            }), this;
        },
        once: function(e, t, i) {
            var n = this;
            function o() {
                n.off(e, o), t.apply(i, arguments);
            }
            return o._ = t, this.on(e, o, i);
        },
        emit: function(e) {
            for(var t = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[e] || []).slice(), n = 0, o = i.length; n < o; n++)i[n].fn.apply(i[n].ctx, t);
            return this;
        },
        off: function(e, t) {
            var i = this.e || (this.e = {}), n = i[e], o = [];
            if (n && t) for(var s = 0, h = n.length; s < h; s++)n[s].fn !== t && n[s].fn._ !== t && o.push(n[s]);
            return o.length ? i[e] = o : delete i[e], this;
        }
    };
    var o = n;
    o.TinyEmitter = n;
    var s, h = "virtualscroll", r = t("options"), a = t("el"), l = t("emitter"), u = t("event"), c = t("touchStart"), d = t("bodyTouchAction");
    return function() {
        function e(e) {
            var t = this;
            Object.defineProperty(this, r, {
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, a, {
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, l, {
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, u, {
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, c, {
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, d, {
                writable: !0,
                value: void 0
            }), this._onWheel = function(e) {
                var n = i(t, r)[r], o = i(t, u)[u];
                o.deltaX = e.wheelDeltaX || -1 * e.deltaX, o.deltaY = e.wheelDeltaY || -1 * e.deltaY, s.isFirefox && 1 === e.deltaMode && (o.deltaX *= n.firefoxMultiplier, o.deltaY *= n.firefoxMultiplier), o.deltaX *= n.mouseMultiplier, o.deltaY *= n.mouseMultiplier, t._notify(e);
            }, this._onMouseWheel = function(e) {
                var n = i(t, u)[u];
                n.deltaX = e.wheelDeltaX ? e.wheelDeltaX : 0, n.deltaY = e.wheelDeltaY ? e.wheelDeltaY : e.wheelDelta, t._notify(e);
            }, this._onTouchStart = function(e) {
                var n = e.targetTouches ? e.targetTouches[0] : e;
                i(t, c)[c].x = n.pageX, i(t, c)[c].y = n.pageY;
            }, this._onTouchMove = function(e) {
                var n = i(t, r)[r];
                n.preventTouch && !e.target.classList.contains(n.unpreventTouchClass) && e.preventDefault();
                var o = i(t, u)[u], s = e.targetTouches ? e.targetTouches[0] : e;
                o.deltaX = (s.pageX - i(t, c)[c].x) * n.touchMultiplier, o.deltaY = (s.pageY - i(t, c)[c].y) * n.touchMultiplier, i(t, c)[c].x = s.pageX, i(t, c)[c].y = s.pageY, t._notify(e);
            }, this._onKeyDown = function(e) {
                var n = i(t, u)[u];
                n.deltaX = n.deltaY = 0;
                var o = window.innerHeight - 40;
                switch(e.keyCode){
                    case 37:
                    case 38:
                        n.deltaY = i(t, r)[r].keyStep;
                        break;
                    case 39:
                    case 40:
                        n.deltaY = -i(t, r)[r].keyStep;
                        break;
                    case 32:
                        n.deltaY = o * (e.shiftKey ? 1 : -1);
                        break;
                    default:
                        return;
                }
                t._notify(e);
            }, i(this, a)[a] = window, e && e.el && (i(this, a)[a] = e.el, delete e.el), s || (s = {
                hasWheelEvent: "onwheel" in document,
                hasMouseWheelEvent: "onmousewheel" in document,
                hasTouch: "ontouchstart" in document,
                hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
                hasPointer: !!window.navigator.msPointerEnabled,
                hasKeyDown: "onkeydown" in document,
                isFirefox: navigator.userAgent.indexOf("Firefox") > -1
            }), i(this, r)[r] = Object.assign({
                mouseMultiplier: 1,
                touchMultiplier: 2,
                firefoxMultiplier: 15,
                keyStep: 120,
                preventTouch: !1,
                unpreventTouchClass: "vs-touchmove-allowed",
                useKeyboard: !0,
                useTouch: !0
            }, e), i(this, l)[l] = new o, i(this, u)[u] = {
                y: 0,
                x: 0,
                deltaX: 0,
                deltaY: 0
            }, i(this, c)[c] = {
                x: null,
                y: null
            }, i(this, d)[d] = null, void 0 !== i(this, r)[r].passive && (this.listenerOptions = {
                passive: i(this, r)[r].passive
            });
        }
        var t = e.prototype;
        return t._notify = function(e) {
            var t = i(this, u)[u];
            t.x += t.deltaX, t.y += t.deltaY, i(this, l)[l].emit(h, {
                x: t.x,
                y: t.y,
                deltaX: t.deltaX,
                deltaY: t.deltaY,
                originalEvent: e
            });
        }, t._bind = function() {
            s.hasWheelEvent && i(this, a)[a].addEventListener("wheel", this._onWheel, this.listenerOptions), s.hasMouseWheelEvent && i(this, a)[a].addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions), s.hasTouch && i(this, r)[r].useTouch && (i(this, a)[a].addEventListener("touchstart", this._onTouchStart, this.listenerOptions), i(this, a)[a].addEventListener("touchmove", this._onTouchMove, this.listenerOptions)), s.hasPointer && s.hasTouchWin && (i(this, d)[d] = document.body.style.msTouchAction, document.body.style.msTouchAction = "none", i(this, a)[a].addEventListener("MSPointerDown", this._onTouchStart, !0), i(this, a)[a].addEventListener("MSPointerMove", this._onTouchMove, !0)), s.hasKeyDown && i(this, r)[r].useKeyboard && document.addEventListener("keydown", this._onKeyDown);
        }, t._unbind = function() {
            s.hasWheelEvent && i(this, a)[a].removeEventListener("wheel", this._onWheel), s.hasMouseWheelEvent && i(this, a)[a].removeEventListener("mousewheel", this._onMouseWheel), s.hasTouch && (i(this, a)[a].removeEventListener("touchstart", this._onTouchStart), i(this, a)[a].removeEventListener("touchmove", this._onTouchMove)), s.hasPointer && s.hasTouchWin && (document.body.style.msTouchAction = i(this, d)[d], i(this, a)[a].removeEventListener("MSPointerDown", this._onTouchStart, !0), i(this, a)[a].removeEventListener("MSPointerMove", this._onTouchMove, !0)), s.hasKeyDown && i(this, r)[r].useKeyboard && document.removeEventListener("keydown", this._onKeyDown);
        }, t.on = function(e, t) {
            i(this, l)[l].on(h, e, t);
            var n = i(this, l)[l].e;
            n && n[h] && 1 === n[h].length && this._bind();
        }, t.off = function(e, t) {
            i(this, l)[l].off(h, e, t);
            var n = i(this, l)[l].e;
            (!n[h] || n[h].length <= 0) && this._unbind();
        }, t.destroy = function() {
            i(this, l)[l].off(), this._unbind();
        }, e;
    }();
});

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["2Rsls","4pp4s"], "4pp4s", "parcelRequiree6f6")

//# sourceMappingURL=index.4de9b498.js.map
