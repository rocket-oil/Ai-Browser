"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/html";
exports.ids = ["pages/api/html"];
exports.modules = {

/***/ "(api-node)/./lib/browser.js":
/*!************************!*\
  !*** ./lib/browser.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   withPage: () => (/* binding */ withPage)\n/* harmony export */ });\n/* harmony import */ var chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chrome-aws-lambda */ \"chrome-aws-lambda\");\n/* harmony import */ var chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0__);\n\nlet pCore = null;\nlet pFull = null;\nasync function launchBrowser() {\n    const isProd = \"development\" === 'production';\n    // 第一次调用时再加载，减少包体积\n    if (!pCore) pCore = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! puppeteer-core */ \"puppeteer-core\"));\n    if (!pFull) pFull = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! puppeteer */ \"puppeteer\"));\n    if (isProd) {\n        // 生产：Vercel/Serverless 上用 chrome-aws-lambda 提供的 Chromium\n        const executablePath = await (chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0___default().executablePath);\n        return pCore.launch({\n            args: (chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0___default().args),\n            defaultViewport: (chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0___default().defaultViewport),\n            executablePath,\n            headless: (chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0___default().headless)\n        });\n    } else {\n        // 本地：用完整版 puppeteer，自动下载的 Chromium\n        return pFull.launch({\n            headless: true\n        });\n    }\n}\n// 通用页面操作\nasync function withPage({ url, action }) {\n    const browser = await launchBrowser();\n    const page = await browser.newPage();\n    const logs = [];\n    page.on('console', (msg)=>logs.push(msg.text()));\n    page.on('pageerror', (err)=>logs.push(err.message));\n    await page.goto(url, {\n        waitUntil: 'networkidle2',\n        timeout: 0\n    });\n    const result = await action(page);\n    await browser.close();\n    return {\n        result,\n        logs\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL2xpYi9icm93c2VyLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QztBQUN6QyxJQUFJQyxRQUFRO0FBQ1osSUFBSUMsUUFBUTtBQUVaLGVBQWVDO0lBQ2IsTUFBTUMsU0FBU0Msa0JBQXlCO0lBRXhDLGtCQUFrQjtJQUNsQixJQUFJLENBQUNKLE9BQU9BLFFBQVEsTUFBTSw0SEFBd0I7SUFDbEQsSUFBSSxDQUFDQyxPQUFPQSxRQUFRLE1BQU0sa0hBQW1CO0lBRTdDLElBQUlFLFFBQVE7UUFDVix5REFBeUQ7UUFDekQsTUFBTUUsaUJBQWlCLE1BQU1OLHlFQUF1QjtRQUNwRCxPQUFPQyxNQUFNTSxNQUFNLENBQUM7WUFDbEJDLE1BQU1SLCtEQUFhO1lBQ25CUyxpQkFBaUJULDBFQUF3QjtZQUN6Q007WUFDQUksVUFBVVYsbUVBQWlCO1FBQzdCO0lBQ0YsT0FBTztRQUNMLG1DQUFtQztRQUNuQyxPQUFPRSxNQUFNSyxNQUFNLENBQUM7WUFDbEJHLFVBQVU7UUFDWjtJQUNGO0FBQ0Y7QUFFQSxTQUFTO0FBQ0YsZUFBZUMsU0FBUyxFQUFFQyxHQUFHLEVBQUVDLE1BQU0sRUFBRTtJQUM1QyxNQUFNQyxVQUFVLE1BQU1YO0lBQ3RCLE1BQU1ZLE9BQU8sTUFBTUQsUUFBUUUsT0FBTztJQUNsQyxNQUFNQyxPQUFPLEVBQUU7SUFFZkYsS0FBS0csRUFBRSxDQUFDLFdBQVdDLENBQUFBLE1BQU9GLEtBQUtHLElBQUksQ0FBQ0QsSUFBSUUsSUFBSTtJQUM1Q04sS0FBS0csRUFBRSxDQUFDLGFBQWFJLENBQUFBLE1BQU9MLEtBQUtHLElBQUksQ0FBQ0UsSUFBSUMsT0FBTztJQUVqRCxNQUFNUixLQUFLUyxJQUFJLENBQUNaLEtBQUs7UUFBRWEsV0FBVztRQUFnQkMsU0FBUztJQUFFO0lBQzdELE1BQU1DLFNBQVMsTUFBTWQsT0FBT0U7SUFDNUIsTUFBTUQsUUFBUWMsS0FBSztJQUVuQixPQUFPO1FBQUVEO1FBQVFWO0lBQUs7QUFDeEIiLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGVuYm8vRGVza3RvcC9wcm9qZWN0L2FpLWJyb3dzZXIvaGVhZGxlc3MtZGVtby9saWIvYnJvd3Nlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hyb21pdW0gZnJvbSAnY2hyb21lLWF3cy1sYW1iZGEnO1xubGV0IHBDb3JlID0gbnVsbDtcbmxldCBwRnVsbCA9IG51bGw7XG5cbmFzeW5jIGZ1bmN0aW9uIGxhdW5jaEJyb3dzZXIoKSB7XG4gIGNvbnN0IGlzUHJvZCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XG5cbiAgLy8g56ys5LiA5qyh6LCD55So5pe25YaN5Yqg6L2977yM5YeP5bCR5YyF5L2T56evXG4gIGlmICghcENvcmUpIHBDb3JlID0gYXdhaXQgaW1wb3J0KCdwdXBwZXRlZXItY29yZScpO1xuICBpZiAoIXBGdWxsKSBwRnVsbCA9IGF3YWl0IGltcG9ydCgncHVwcGV0ZWVyJyk7XG5cbiAgaWYgKGlzUHJvZCkge1xuICAgIC8vIOeUn+S6p++8mlZlcmNlbC9TZXJ2ZXJsZXNzIOS4iueUqCBjaHJvbWUtYXdzLWxhbWJkYSDmj5DkvpvnmoQgQ2hyb21pdW1cbiAgICBjb25zdCBleGVjdXRhYmxlUGF0aCA9IGF3YWl0IGNocm9taXVtLmV4ZWN1dGFibGVQYXRoO1xuICAgIHJldHVybiBwQ29yZS5sYXVuY2goe1xuICAgICAgYXJnczogY2hyb21pdW0uYXJncyxcbiAgICAgIGRlZmF1bHRWaWV3cG9ydDogY2hyb21pdW0uZGVmYXVsdFZpZXdwb3J0LFxuICAgICAgZXhlY3V0YWJsZVBhdGgsXG4gICAgICBoZWFkbGVzczogY2hyb21pdW0uaGVhZGxlc3MsXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgLy8g5pys5Zyw77ya55So5a6M5pW054mIIHB1cHBldGVlcu+8jOiHquWKqOS4i+i9veeahCBDaHJvbWl1bVxuICAgIHJldHVybiBwRnVsbC5sYXVuY2goe1xuICAgICAgaGVhZGxlc3M6IHRydWUsXG4gICAgfSk7XG4gIH1cbn1cblxuLy8g6YCa55So6aG16Z2i5pON5L2cXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gd2l0aFBhZ2UoeyB1cmwsIGFjdGlvbiB9KSB7XG4gIGNvbnN0IGJyb3dzZXIgPSBhd2FpdCBsYXVuY2hCcm93c2VyKCk7XG4gIGNvbnN0IHBhZ2UgPSBhd2FpdCBicm93c2VyLm5ld1BhZ2UoKTtcbiAgY29uc3QgbG9ncyA9IFtdO1xuXG4gIHBhZ2Uub24oJ2NvbnNvbGUnLCBtc2cgPT4gbG9ncy5wdXNoKG1zZy50ZXh0KCkpKTtcbiAgcGFnZS5vbigncGFnZWVycm9yJywgZXJyID0+IGxvZ3MucHVzaChlcnIubWVzc2FnZSkpO1xuXG4gIGF3YWl0IHBhZ2UuZ290byh1cmwsIHsgd2FpdFVudGlsOiAnbmV0d29ya2lkbGUyJywgdGltZW91dDogMCB9KTtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYWN0aW9uKHBhZ2UpO1xuICBhd2FpdCBicm93c2VyLmNsb3NlKCk7XG5cbiAgcmV0dXJuIHsgcmVzdWx0LCBsb2dzIH07XG59Il0sIm5hbWVzIjpbImNocm9taXVtIiwicENvcmUiLCJwRnVsbCIsImxhdW5jaEJyb3dzZXIiLCJpc1Byb2QiLCJwcm9jZXNzIiwiZXhlY3V0YWJsZVBhdGgiLCJsYXVuY2giLCJhcmdzIiwiZGVmYXVsdFZpZXdwb3J0IiwiaGVhZGxlc3MiLCJ3aXRoUGFnZSIsInVybCIsImFjdGlvbiIsImJyb3dzZXIiLCJwYWdlIiwibmV3UGFnZSIsImxvZ3MiLCJvbiIsIm1zZyIsInB1c2giLCJ0ZXh0IiwiZXJyIiwibWVzc2FnZSIsImdvdG8iLCJ3YWl0VW50aWwiLCJ0aW1lb3V0IiwicmVzdWx0IiwiY2xvc2UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api-node)/./lib/browser.js\n");

/***/ }),

/***/ "(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fhtml&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fhtml.js&middlewareConfigBase64=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fhtml&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fhtml.js&middlewareConfigBase64=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages-api/module.compiled */ \"(api-node)/./node_modules/next/dist/server/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(api-node)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api-node)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/api/html.js */ \"(api-node)/./pages/api/html.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_html_js__WEBPACK_IMPORTED_MODULE_3__, 'default'));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_html_js__WEBPACK_IMPORTED_MODULE_3__, 'config');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/html\",\n        pathname: \"/api/html\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    userland: _pages_api_html_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtcm91dGUtbG9hZGVyL2luZGV4LmpzP2tpbmQ9UEFHRVNfQVBJJnBhZ2U9JTJGYXBpJTJGaHRtbCZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTJGYXBpJTJGaHRtbC5qcyZtaWRkbGV3YXJlQ29uZmlnQmFzZTY0PWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDRTtBQUMxRDtBQUNnRDtBQUNoRDtBQUNBLGlFQUFlLHdFQUFLLENBQUMsK0NBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sZUFBZSx3RUFBSyxDQUFDLCtDQUFRO0FBQ3BDO0FBQ08sd0JBQXdCLHlHQUFtQjtBQUNsRDtBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZO0FBQ1osQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzQVBJUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL3BhZ2VzLWFwaS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC90ZW1wbGF0ZXMvaGVscGVyc1wiO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vcGFnZXMvYXBpL2h0bWwuanNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgaGFuZGxlciAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgJ2RlZmF1bHQnKTtcbi8vIFJlLWV4cG9ydCBjb25maWcuXG5leHBvcnQgY29uc3QgY29uZmlnID0gaG9pc3QodXNlcmxhbmQsICdjb25maWcnKTtcbi8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSByb3V0ZSBtb2R1bGUgdGhhdCB3aWxsIGJlIGNvbnN1bWVkLlxuZXhwb3J0IGNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IFBhZ2VzQVBJUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLlBBR0VTX0FQSSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2h0bWxcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9odG1sXCIsXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlbid0IHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgYnVuZGxlUGF0aDogJycsXG4gICAgICAgIGZpbGVuYW1lOiAnJ1xuICAgIH0sXG4gICAgdXNlcmxhbmRcbn0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWdlcy1hcGkuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fhtml&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fhtml.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api-node)/./pages/api/html.js":
/*!***************************!*\
  !*** ./pages/api/html.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/browser */ \"(api-node)/./lib/browser.js\");\n\nasync function handler(req, res) {\n    if (req.method !== 'POST') return res.status(405).end();\n    const { url } = req.body;\n    if (!url) return res.status(400).json({\n        error: '缺少 URL'\n    });\n    try {\n        const { result: html, logs } = await (0,_lib_browser__WEBPACK_IMPORTED_MODULE_0__.withPage)({\n            url,\n            action: (page)=>page.content()\n        });\n        res.status(200).json({\n            html,\n            logs\n        });\n    } catch (e) {\n        res.status(500).json({\n            error: e.toString()\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL3BhZ2VzL2FwaS9odG1sLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTZDO0FBRTlCLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUM1QyxJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUSxPQUFPRCxJQUFJRSxNQUFNLENBQUMsS0FBS0MsR0FBRztJQUNyRCxNQUFNLEVBQUVDLEdBQUcsRUFBRSxHQUFHTCxJQUFJTSxJQUFJO0lBQ3hCLElBQUksQ0FBQ0QsS0FBSyxPQUFPSixJQUFJRSxNQUFNLENBQUMsS0FBS0ksSUFBSSxDQUFDO1FBQUVDLE9BQU87SUFBUztJQUV4RCxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxRQUFRQyxJQUFJLEVBQUVDLElBQUksRUFBRSxHQUFHLE1BQU1iLHNEQUFRQSxDQUFDO1lBQUVPO1lBQUtPLFFBQVFDLENBQUFBLE9BQVFBLEtBQUtDLE9BQU87UUFBRztRQUNwRmIsSUFBSUUsTUFBTSxDQUFDLEtBQUtJLElBQUksQ0FBQztZQUFFRztZQUFNQztRQUFLO0lBQ3BDLEVBQUUsT0FBT0ksR0FBRztRQUNWZCxJQUFJRSxNQUFNLENBQUMsS0FBS0ksSUFBSSxDQUFDO1lBQUVDLE9BQU9PLEVBQUVDLFFBQVE7UUFBRztJQUM3QztBQUNGIiwic291cmNlcyI6WyIvVXNlcnMvY2hlbmJvL0Rlc2t0b3AvcHJvamVjdC9haS1icm93c2VyL2hlYWRsZXNzLWRlbW8vcGFnZXMvYXBpL2h0bWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2l0aFBhZ2UgfSBmcm9tICcuLi8uLi9saWIvYnJvd3Nlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgIT09ICdQT1NUJykgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5lbmQoKTtcbiAgY29uc3QgeyB1cmwgfSA9IHJlcS5ib2R5O1xuICBpZiAoIXVybCkgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6ICfnvLrlsJEgVVJMJyB9KTtcblxuICB0cnkge1xuICAgIGNvbnN0IHsgcmVzdWx0OiBodG1sLCBsb2dzIH0gPSBhd2FpdCB3aXRoUGFnZSh7IHVybCwgYWN0aW9uOiBwYWdlID0+IHBhZ2UuY29udGVudCgpIH0pO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgaHRtbCwgbG9ncyB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IGUudG9TdHJpbmcoKSB9KTtcbiAgfVxufSJdLCJuYW1lcyI6WyJ3aXRoUGFnZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJlbmQiLCJ1cmwiLCJib2R5IiwianNvbiIsImVycm9yIiwicmVzdWx0IiwiaHRtbCIsImxvZ3MiLCJhY3Rpb24iLCJwYWdlIiwiY29udGVudCIsImUiLCJ0b1N0cmluZyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api-node)/./pages/api/html.js\n");

/***/ }),

/***/ "chrome-aws-lambda":
/*!************************************!*\
  !*** external "chrome-aws-lambda" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("chrome-aws-lambda");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "puppeteer":
/*!****************************!*\
  !*** external "puppeteer" ***!
  \****************************/
/***/ ((module) => {

module.exports = import("puppeteer");;

/***/ }),

/***/ "puppeteer-core":
/*!*********************************!*\
  !*** external "puppeteer-core" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("puppeteer-core");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fhtml&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fhtml.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();