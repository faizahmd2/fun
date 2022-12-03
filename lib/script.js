"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var baseUrls = {
  datamuseMatch: 'https://api.datamuse.com',
  wikiSearch: 'https://en.wikipedia.org/w/rest.php/v1',
  catsApi: 'https://api.thecatapi.com/v1'
};
var MATCHES_DATA_MAX_LIMIT = 10;
var DEFINITION = document.getElementById('definition');
var LOADING = document.getElementById('loading');
var ANIMAL_PIC_LOADING = document.getElementById('animal-pic-loading');
var SHOW_ANIMAL = document.getElementById('show_animal');
var ANIMAL_INFO_CONTAINER = document.getElementById('animal_info_container');
var isWordSearch = false;

// Right Panel
SHOW_ANIMAL.addEventListener('click', function () {
  debouncedShowAnimal();
});

// Define the debounced function
var debouncedShowAnimal = debounce(loadAnimalInfo, 1500);
function loadAnimalInfo() {
  return _loadAnimalInfo.apply(this, arguments);
}
function _loadAnimalInfo() {
  _loadAnimalInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var url, res, data;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            ANIMAL_PIC_LOADING.style.display = 'block';
            _context5.prev = 1;
            url = baseUrls.catsApi + '/images/search';
            _context5.next = 5;
            return fetch(url);
          case 5:
            res = _context5.sent;
            _context5.next = 8;
            return res.json();
          case 8:
            data = _context5.sent;
            if (!(data && data[0] && data[0]['url'])) {
              _context5.next = 11;
              break;
            }
            return _context5.abrupt("return", showAnimal(data[0]));
          case 11:
            ANIMAL_PIC_LOADING.style.display = 'none';
            _context5.next = 17;
            break;
          case 14:
            _context5.prev = 14;
            _context5.t0 = _context5["catch"](1);
            ANIMAL_PIC_LOADING.innerText = 'Failed Loading Image !!';
          case 17:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 14]]);
  }));
  return _loadAnimalInfo.apply(this, arguments);
}
;
function showAnimal(animal) {
  ANIMAL_INFO_CONTAINER.innerHTML = getAnimalHTML(animal);
  ANIMAL_PIC_LOADING.style.display = 'none';
  SHOW_ANIMAL.innerText = 'One More';
}
function getAnimalHTML(animal) {
  return "<img id=\"animal_img_link\" src=\"".concat(animal.url, "\" alt=\"\">");
}

// Left Panel Search
autocomplete(document.getElementById("search-text"));
function autocomplete(inp) {
  var currentFocus;

  // execute a function when someone writes in the text field
  inp.addEventListener("input", function () {
    debouncedSearchInput.bind(this)();
  });

  // Define the debounced function
  var debouncedSearchInput = debounce(onSearchInput, 500);
  function onSearchInput() {
    return _onSearchInput.apply(this, arguments);
  } // execute a function presses a key on the keyboard
  function _onSearchInput() {
    _onSearchInput = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var a, b, i, val, getMatches, arr;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              val = this.value; // close any already open lists of autocompleted values 
              closeAllLists();
              if (!(!val || val.length < 3)) {
                _context2.next = 4;
                break;
              }
              return _context2.abrupt("return", false);
            case 4:
              _context2.next = 6;
              return loadMatches(val);
            case 6:
              getMatches = _context2.sent;
              arr = _toConsumableArray(getMatches);
              currentFocus = -1;

              // Remove Definition (if opened)
              removeDefinition();

              // create a DIV element that will contain the items (values)
              a = document.createElement("DIV");
              a.setAttribute("id", this.id + "autocomplete-list");
              a.setAttribute("class", "autocomplete-items");

              // append the DIV element as a child of the autocomplete container
              this.parentNode.appendChild(a);
              for (i = 0; i < arr.length; i++) {
                // check if the item starts with the same letters as the text field value
                if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                  // create a DIV element for each matching element
                  b = document.createElement("DIV");

                  // make the matching letters bold
                  b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                  b.innerHTML += arr[i].substr(val.length);

                  // insert an input field that will hold the current array item's value
                  b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";

                  // execute a function when someone clicks on the item value (DIV element)
                  b.addEventListener("click", /*#__PURE__*/function () {
                    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
                      var definition;
                      return _regeneratorRuntime().wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              // insert the value for the autocomplete text field 
                              inp.value = this.getElementsByTagName("input")[0].value;

                              // close the list of autocompleted values (or any other open lists of autocompleted values
                              closeAllLists();

                              // Get definition of selected match through wikiMedia api
                              _context.next = 4;
                              return getWikiDefinition(inp.value);
                            case 4:
                              definition = _context.sent;
                              showDefinition(definition);
                            case 6:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee, this);
                    }));
                    return function (_x3) {
                      return _ref.apply(this, arguments);
                    };
                  }());
                  a.appendChild(b);
                }
              }
            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));
    return _onSearchInput.apply(this, arguments);
  }
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");

    // Highlight matches on key up/down
    if (e.keyCode == 40 && (currentFocus++ || true) || e.keyCode == 38 && (currentFocus-- || true)) {
      addActive(x);
    }

    // On Keyboard Enter, simulate a click on the "active" item 
    if (e.keyCode == 13 && currentFocus > -1 && x) x[currentFocus].click();
  });

  // Highlight match text
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }

  // Remove Highlighted match text
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }

  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  function getWikiDefinition(_x) {
    return _getWikiDefinition.apply(this, arguments);
  } // API Integration
  function _getWikiDefinition() {
    _getWikiDefinition = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(word) {
      var def, res, data;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              def = 'NA';
              LOADING.style.display = 'block';
              _context3.prev = 2;
              _context3.next = 5;
              return fetch("".concat(baseUrls.wikiSearch, "/search/page?q=").concat(word, "&limit=2"));
            case 5:
              res = _context3.sent;
              _context3.next = 8;
              return res.json();
            case 8:
              data = _context3.sent;
              if (data && data.pages && data.pages.length && data.pages[0].excerpt) {
                def = "<div><b>Description :</b> ".concat(data.pages[0].description, ".</div>\n                <br>\n                <b>Detail : </b>").concat(data.pages[0].excerpt, ".");
              }
              _context3.next = 15;
              break;
            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](2);
              console.error(_context3.t0);
            case 15:
              _context3.prev = 15;
              LOADING.style.display = 'none';
              return _context3.abrupt("return", def);
            case 19:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[2, 12, 15, 19]]);
    }));
    return _getWikiDefinition.apply(this, arguments);
  }
  function loadMatches(_x2) {
    return _loadMatches.apply(this, arguments);
  }
  function _loadMatches() {
    _loadMatches = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(search) {
      var url, res, data;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              url = baseUrls.datamuseMatch + '/sug?' + 's=' + search;
              if (MATCHES_DATA_MAX_LIMIT) url += '&max=' + MATCHES_DATA_MAX_LIMIT;
              if (!isWordSearch) url += '&v=enwiki';
              _context4.next = 6;
              return fetch(url);
            case 6:
              res = _context4.sent;
              _context4.next = 9;
              return res.json();
            case 9:
              data = _context4.sent;
              if (!(data && data.length)) {
                _context4.next = 12;
                break;
              }
              return _context4.abrupt("return", data.map(function (el) {
                return el.word;
              }));
            case 12:
              return _context4.abrupt("return", []);
            case 15:
              _context4.prev = 15;
              _context4.t0 = _context4["catch"](0);
              console.error(_context4.t0);
              return _context4.abrupt("return", []);
            case 19:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 15]]);
    }));
    return _loadMatches.apply(this, arguments);
  }
  function reset() {
    inp.value = '';
    removeDefinition();
  }
  function showDefinition(definition) {
    DEFINITION.style.display = 'block';
    DEFINITION.innerHTML = definition;
  }
  function removeDefinition() {
    DEFINITION.innerHTML = '';
    DEFINITION.style.display = 'none';
  }
  document.getElementById('searchBy').addEventListener('change', function () {
    reset();
    isWordSearch = this.checked;
    if (isWordSearch) {
      inp.placeholder = 'Search word meaning...';
    } else {
      inp.placeholder = 'Search for definition...';
    }
  });
  document.getElementById('reset').addEventListener('click', reset);
}

// Debounce
function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    }, wait);
    if (callNow) func.apply(context, args);
  };
}