(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "../pkg/libwasm_torrentfile_tools.js":
/*!*******************************************!*\
  !*** ../pkg/libwasm_torrentfile_tools.js ***!
  \*******************************************/
/*! exports provided: __wbg_set_wasm, humanize_size, timestamp_to_string, process_file, __wbindgen_object_drop_ref, __wbindgen_string_new, __wbg_new_abda76e883ba8a5f, __wbg_stack_658279fe44541cf6, __wbg_error_f851667af71bcfc6, __wbg_result_77ceeec1e3a16df7, __wbg_buffer_12d079cc21e14bdb, __wbg_new_63b92bc8671ed464, __wbg_set_a47bac70306a19a7, __wbg_length_c20a40f15020d68a, __wbindgen_debug_string, __wbindgen_throw, __wbindgen_memory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _libwasm_torrentfile_tools_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libwasm_torrentfile_tools_bg.wasm */ \"../pkg/libwasm_torrentfile_tools_bg.wasm\");\n/* harmony import */ var _libwasm_torrentfile_tools_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libwasm_torrentfile_tools_bg.js */ \"../pkg/libwasm_torrentfile_tools_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_wasm\", function() { return _libwasm_torrentfile_tools_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_set_wasm\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"humanize_size\", function() { return _libwasm_torrentfile_tools_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"humanize_size\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"timestamp_to_string\", function() { return _libwasm_torrentfile_tools_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"timestamp_to_string\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"process_file\", function() { return _libwasm_torrentfile_tools_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"process_file\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return _libwasm_torrentfile_tools_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_drop_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return _libwasm_torrentfile_tools_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_string_new\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_abda76e883ba8a5f\", function() { return _libwasm_torrentfile_tools_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_new_abda76e883ba8a5f\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_stack_658279fe44541cf6\", function() { return _libwasm_torrentfile_tools_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_stack_658279fe44541cf6\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_error_f851667af71bcfc6\", function() { return _libwasm_torrentfile_tools_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_error_f851667af71bcfc6\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_result_77ceeec1e3a16df7\", function() { return _libwasm_torrentfile_tools_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_result_77ceeec1e3a16df7\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_buffer_12d079cc21e14bdb\", function() { return _libwasm_torrentfile_tools_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_buffer_12d079cc21e14bdb\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_63b92bc8671ed464\", function() { return _libwasm_torrentfile_tools_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_new_63b92bc8671ed464\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_a47bac70306a19a7\", function() { return _libwasm_torrentfile_tools_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_set_a47bac70306a19a7\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_length_c20a40f15020d68a\", function() { return _libwasm_torrentfile_tools_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_length_c20a40f15020d68a\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_debug_string\", function() { return _libwasm_torrentfile_tools_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_debug_string\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _libwasm_torrentfile_tools_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_memory\", function() { return _libwasm_torrentfile_tools_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_memory\"]; });\n\n\n\nObject(_libwasm_torrentfile_tools_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_set_wasm\"])(_libwasm_torrentfile_tools_bg_wasm__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n//# sourceURL=webpack:///../pkg/libwasm_torrentfile_tools.js?");

/***/ }),

/***/ "../pkg/libwasm_torrentfile_tools_bg.js":
/*!**********************************************!*\
  !*** ../pkg/libwasm_torrentfile_tools_bg.js ***!
  \**********************************************/
/*! exports provided: __wbg_set_wasm, humanize_size, timestamp_to_string, process_file, __wbindgen_object_drop_ref, __wbindgen_string_new, __wbg_new_abda76e883ba8a5f, __wbg_stack_658279fe44541cf6, __wbg_error_f851667af71bcfc6, __wbg_result_77ceeec1e3a16df7, __wbg_buffer_12d079cc21e14bdb, __wbg_new_63b92bc8671ed464, __wbg_set_a47bac70306a19a7, __wbg_length_c20a40f15020d68a, __wbindgen_debug_string, __wbindgen_throw, __wbindgen_memory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_wasm\", function() { return __wbg_set_wasm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"humanize_size\", function() { return humanize_size; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"timestamp_to_string\", function() { return timestamp_to_string; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"process_file\", function() { return process_file; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_abda76e883ba8a5f\", function() { return __wbg_new_abda76e883ba8a5f; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_stack_658279fe44541cf6\", function() { return __wbg_stack_658279fe44541cf6; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_error_f851667af71bcfc6\", function() { return __wbg_error_f851667af71bcfc6; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_result_77ceeec1e3a16df7\", function() { return __wbg_result_77ceeec1e3a16df7; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_buffer_12d079cc21e14bdb\", function() { return __wbg_buffer_12d079cc21e14bdb; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_63b92bc8671ed464\", function() { return __wbg_new_63b92bc8671ed464; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_a47bac70306a19a7\", function() { return __wbg_set_a47bac70306a19a7; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_length_c20a40f15020d68a\", function() { return __wbg_length_c20a40f15020d68a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_debug_string\", function() { return __wbindgen_debug_string; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_memory\", function() { return __wbindgen_memory; });\nlet wasm;\nfunction __wbg_set_wasm(val) {\n    wasm = val;\n}\n\n\nconst heap = new Array(128).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet heap_next = heap.length;\n\nfunction dropObject(idx) {\n    if (idx < 132) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8Memory0 = null;\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    ptr = ptr >>> 0;\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction debugString(val) {\n    // primitive types\n    const type = typeof val;\n    if (type == 'number' || type == 'boolean' || val == null) {\n        return  `${val}`;\n    }\n    if (type == 'string') {\n        return `\"${val}\"`;\n    }\n    if (type == 'symbol') {\n        const description = val.description;\n        if (description == null) {\n            return 'Symbol';\n        } else {\n            return `Symbol(${description})`;\n        }\n    }\n    if (type == 'function') {\n        const name = val.name;\n        if (typeof name == 'string' && name.length > 0) {\n            return `Function(${name})`;\n        } else {\n            return 'Function';\n        }\n    }\n    // objects\n    if (Array.isArray(val)) {\n        const length = val.length;\n        let debug = '[';\n        if (length > 0) {\n            debug += debugString(val[0]);\n        }\n        for(let i = 1; i < length; i++) {\n            debug += ', ' + debugString(val[i]);\n        }\n        debug += ']';\n        return debug;\n    }\n    // Test for built-in\n    const builtInMatches = /\\[object ([^\\]]+)\\]/.exec(toString.call(val));\n    let className;\n    if (builtInMatches.length > 1) {\n        className = builtInMatches[1];\n    } else {\n        // Failed to match the standard '[object ClassName]'\n        return toString.call(val);\n    }\n    if (className == 'Object') {\n        // we're a user defined class or Object\n        // JSON.stringify avoids problems with cycles, and is generally much\n        // easier than looping through ownProperties of `val`.\n        try {\n            return 'Object(' + JSON.stringify(val) + ')';\n        } catch (_) {\n            return 'Object';\n        }\n    }\n    // errors\n    if (val instanceof Error) {\n        return `${val.name}: ${val.message}\\n${val.stack}`;\n    }\n    // TODO we could test for more things here, like `Set`s and `Map`s.\n    return className;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length, 1) >>> 0;\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len, 1) >>> 0;\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n        ptr = realloc(ptr, len, offset, 1) >>> 0;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nlet cachedInt32Memory0 = null;\n\nfunction getInt32Memory0() {\n    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {\n        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);\n    }\n    return cachedInt32Memory0;\n}\n/**\n* @param {number} size\n* @returns {any}\n*/\nfunction humanize_size(size) {\n    const ret = wasm.humanize_size(size);\n    return takeObject(ret);\n}\n\n/**\n* @param {bigint} timestamp\n* @returns {any}\n*/\nfunction timestamp_to_string(timestamp) {\n    const ret = wasm.timestamp_to_string(timestamp);\n    return takeObject(ret);\n}\n\n/**\n* @param {FileReader} file_reader\n* @returns {any}\n*/\nfunction process_file(file_reader) {\n    const ret = wasm.process_file(addHeapObject(file_reader));\n    return takeObject(ret);\n}\n\nfunction handleError(f, args) {\n    try {\n        return f.apply(this, args);\n    } catch (e) {\n        wasm.__wbindgen_exn_store(addHeapObject(e));\n    }\n}\n\nfunction __wbindgen_object_drop_ref(arg0) {\n    takeObject(arg0);\n};\n\nfunction __wbindgen_string_new(arg0, arg1) {\n    const ret = getStringFromWasm0(arg0, arg1);\n    return addHeapObject(ret);\n};\n\nfunction __wbg_new_abda76e883ba8a5f() {\n    const ret = new Error();\n    return addHeapObject(ret);\n};\n\nfunction __wbg_stack_658279fe44541cf6(arg0, arg1) {\n    const ret = getObject(arg1).stack;\n    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);\n    const len1 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len1;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr1;\n};\n\nfunction __wbg_error_f851667af71bcfc6(arg0, arg1) {\n    let deferred0_0;\n    let deferred0_1;\n    try {\n        deferred0_0 = arg0;\n        deferred0_1 = arg1;\n        console.error(getStringFromWasm0(arg0, arg1));\n    } finally {\n        wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);\n    }\n};\n\nfunction __wbg_result_77ceeec1e3a16df7() { return handleError(function (arg0) {\n    const ret = getObject(arg0).result;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_buffer_12d079cc21e14bdb(arg0) {\n    const ret = getObject(arg0).buffer;\n    return addHeapObject(ret);\n};\n\nfunction __wbg_new_63b92bc8671ed464(arg0) {\n    const ret = new Uint8Array(getObject(arg0));\n    return addHeapObject(ret);\n};\n\nfunction __wbg_set_a47bac70306a19a7(arg0, arg1, arg2) {\n    getObject(arg0).set(getObject(arg1), arg2 >>> 0);\n};\n\nfunction __wbg_length_c20a40f15020d68a(arg0) {\n    const ret = getObject(arg0).length;\n    return ret;\n};\n\nfunction __wbindgen_debug_string(arg0, arg1) {\n    const ret = debugString(getObject(arg1));\n    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);\n    const len1 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len1;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr1;\n};\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\nfunction __wbindgen_memory() {\n    const ret = wasm.memory;\n    return addHeapObject(ret);\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/libwasm_torrentfile_tools_bg.js?");

/***/ }),

/***/ "../pkg/libwasm_torrentfile_tools_bg.wasm":
/*!************************************************!*\
  !*** ../pkg/libwasm_torrentfile_tools_bg.wasm ***!
  \************************************************/
/*! exports provided: memory, humanize_size, timestamp_to_string, process_file, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_free, __wbindgen_exn_store */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./libwasm_torrentfile_tools_bg.js */ \"../pkg/libwasm_torrentfile_tools_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/libwasm_torrentfile_tools_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var wasm_torrentfile_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wasm-torrentfile-tools */ \"../pkg/libwasm_torrentfile_tools.js\");\n/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mustache */ \"./node_modules/mustache/mustache.js\");\n/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mustache__WEBPACK_IMPORTED_MODULE_1__);\n__webpack_require__(/*! bootstrap */ \"./node_modules/bootstrap/dist/js/bootstrap.esm.js\");\n\n\n\nlet template = `\n    <div class='mt-5'>\n        <table class='table table-hover table-striped'>\n            <tbody class=''>\n                <tr><th>General Info</th></tr>\n                <tr><td>Name</td><td>{{file_data.info.name}}</td></tr>\n                <tr><td>Type</td><td>{{#extra.is_single}}Single File{{/extra.is_single}}{{^extra.is_single}}Multiple Files{{/extra.is_single}}</td></tr>\n                <tr><td>Privacy</td><td>{{#file_data.info.private}}Private Torrent{{/file_data.info.private}}{{^file_data.info.private}}Public Torrent{{/file_data.info.private}}</td></tr>\n                <tr><td>Info hash (MD5)</td><td>{{extra.info_hash.md5}}</td></tr>\n                <tr><td>Info hash (SHA1)</td><td>{{extra.info_hash.sha1}}</td></tr>\n                <tr><td>Encoding</td><td><p>{{file_data.encoding}}</p></td></tr>\n                <tr><td>Create Date</td><td>{{{file_data.creation_date_hr}}}</td></tr>\n                <tr><td>Created By</td><td>{{{file_data.created by}}}</td></tr>\n                <tr><td>Comment</td><td><p>{{file_data.comment}}</p></td></tr>\n                <tr><td>Stored MD5 Sum</td><td>{{file_data.info.md5sum}}</td></tr>\n                <tr><td>Total Size</td><td>{{ extra.total_size }} ({{extra.total_size_hr}})</td></tr>\n                <tr><td>Files Count</td><td>{{ extra.files_count }}</td></tr>\n                <tr><td>Piece Length</td><td>{{{ file_data.info.piece length }}} ({{{ file_data.info.piece_length_hr }}})</td></tr>\n                <tr><td>Piece Count</td><td>{{{ extra.pieces_count }}}</td></tr>\n                <tr><td>Merkle Root</td><td>{{{ file_data.info.root hash }}}</td></tr>\n                <tr><th>Trackers</th></tr>\n                <tr><td>Main</td><td>{{{ file_data.announce }}}</td></tr>\n                <tr><td>Alternatives</td><td>\n                    <ul>\n                    {{#file_data.announce-list}}\n                    <li>{{.}}</li>\n                    {{/file_data.announce-list}}\n                    </ul>\n                </td></tr>\n                {{#file_data.httpseeds}}\n                <tr><th>HTTP Seeds</th></tr><td>\n                    <ul>\n                    {{#file_data.httpseeds}}\n                    <li>{{.}}</li>\n                    {{/file_data.httpseeds}}\n                    </ul>\n                </td></tr>\n                {{/file_data.httpseeds}}\n            </tbody>\n        </table>\n    </div>\n`\n\n\nasync function run() {\n\n    const fileInput = document.getElementById('file-input');\n    fileInput.addEventListener('change', async (event) => {\n        const file = event.target.files[0];\n        const fileReader = new FileReader();\n\n        fileReader.onloadend = async () => {\n            const result = await Object(wasm_torrentfile_tools__WEBPACK_IMPORTED_MODULE_0__[\"process_file\"])(fileReader);\n            let o = JSON.parse(result);\n            o.extra.total_size_hr = Object(wasm_torrentfile_tools__WEBPACK_IMPORTED_MODULE_0__[\"humanize_size\"])(o.extra.total_size);\n            o.file_data.info.piece_length_hr = Object(wasm_torrentfile_tools__WEBPACK_IMPORTED_MODULE_0__[\"humanize_size\"])(o.file_data.info['piece length']);\n            o.file_data.creation_date_hr = Object(wasm_torrentfile_tools__WEBPACK_IMPORTED_MODULE_0__[\"timestamp_to_string\"])(BigInt(o.file_data['creation date']));\n            window.console.log(o);\n\n            var output = mustache__WEBPACK_IMPORTED_MODULE_1___default.a.render(template, o);\n            document.getElementById('result').innerHTML = output;\n\n        };\n\n        fileReader.readAsArrayBuffer(file);\n    });\n}\n\nrun();\n\n// wasm.greet();\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

}]);