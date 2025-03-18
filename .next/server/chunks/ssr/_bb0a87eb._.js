module.exports = {

"[project]/.next-internal/server/app/countries/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/loading.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/loading.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/countries/error.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/countries/error.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/services/countries.service.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
// Not all the types are used, but are available if
// it is asked in case we need to work with absolutely all of them
__turbopack_context__.s({
    "getCountries": (()=>getCountries)
});
async function getCountries() {
    const res = await fetch('https://restcountries.com/v3.1/all');
    if (!res.ok) {
        throw new Error('Error fetching countries');
    }
    const data = await res.json();
    return data.map((country)=>{
        const capitalSummary = country.capital ? country.capital.join(', ') : '';
        const languagesSummary = country.languages ? Object.values(country.languages).join(', ') : '';
        const nativeNamesSummary = country.name.nativeName ? Object.values(country.name.nativeName).map((nativeObj)=>nativeObj.common).join(', ') : '';
        const translationsNamesSummary = country.translations ? Object.entries(country.translations).map(([lang, translation])=>`${lang}: ${translation.official}`).join('\n') : '';
        return {
            ...country,
            nativeNamesSummary,
            capitalSummary,
            languagesSummary,
            translationsNamesSummary
        };
    });
}
}}),
"[project]/src/types/search-params.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "resolveSearchParams": (()=>resolveSearchParams)
});
async function resolveSearchParams(searchParams) {
    const resolved = await searchParams;
    return {
        filterColumn: resolved.filterColumn,
        filterValue: resolved.filterValue,
        sortColumn: resolved.sortColumn,
        sortOrder: resolved.sortOrder,
        page: resolved.page,
        columns: resolved.columns,
        itemsPerPage: resolved.itemsPerPage
    };
}
}}),
"[project]/src/components/search-bar/search-bar.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const SearchBar = ({ defaultValue, name, placeholder })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: "text",
        defaultValue: defaultValue,
        name: name,
        placeholder: placeholder,
        className: "border border-gray-300 rounded p-2 autofill:bg-yellow-200"
    }, void 0, false, {
        fileName: "[project]/src/components/search-bar/search-bar.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = SearchBar;
}}),
"[project]/src/components/filter-form/filter-form.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FilterForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$search$2d$bar$2f$search$2d$bar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/search-bar/search-bar.tsx [app-rsc] (ecmascript)");
;
;
function FilterForm({ allColumns, filterColumn, filterValue, selectedColumns, itemsPerPage, sortColumn, sortOrder }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        method: "get",
        className: "mb-4 flex flex-col gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4 items-end flex-wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row  gap-4 ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: 'filterColumn',
                                        className: 'block font-semibold mb-1',
                                        children: "Filter Column:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/filter-form/filter-form.tsx",
                                        lineNumber: 28,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        id: 'filterColumn',
                                        name: 'filterColumn',
                                        defaultValue: filterColumn,
                                        className: 'border border-gray-300 rounded p-2',
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: 'all',
                                                children: "(All)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/filter-form/filter-form.tsx",
                                                lineNumber: 37,
                                                columnNumber: 29
                                            }, this),
                                            allColumns.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: col.key,
                                                    children: col.header
                                                }, col.key, false, {
                                                    fileName: "[project]/src/components/filter-form/filter-form.tsx",
                                                    lineNumber: 39,
                                                    columnNumber: 31
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/filter-form/filter-form.tsx",
                                        lineNumber: 31,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/filter-form/filter-form.tsx",
                                lineNumber: 27,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: 'filterValue',
                                        className: 'block font-semibold mb-1',
                                        children: "Filter Value:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/filter-form/filter-form.tsx",
                                        lineNumber: 46,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$search$2d$bar$2f$search$2d$bar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        defaultValue: filterValue,
                                        name: 'filterValue',
                                        placeholder: 'Enter search term...'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/filter-form/filter-form.tsx",
                                        lineNumber: 49,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/filter-form/filter-form.tsx",
                                lineNumber: 45,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/filter-form/filter-form.tsx",
                        lineNumber: 26,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row  gap-4 ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: 'sortColumn',
                                        className: 'block font-semibold mb-1',
                                        children: "Sort Column:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/filter-form/filter-form.tsx",
                                        lineNumber: 58,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        id: 'sortColumn',
                                        name: 'sortColumn',
                                        defaultValue: sortColumn,
                                        className: 'border border-gray-300 rounded p-2',
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: 'none',
                                                children: "(None)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/filter-form/filter-form.tsx",
                                                lineNumber: 67,
                                                columnNumber: 29
                                            }, this),
                                            allColumns.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: col.key,
                                                    children: col.header
                                                }, col.key, false, {
                                                    fileName: "[project]/src/components/filter-form/filter-form.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 31
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/filter-form/filter-form.tsx",
                                        lineNumber: 61,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/filter-form/filter-form.tsx",
                                lineNumber: 57,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: 'sortOrder',
                                        className: 'block font-semibold mb-1',
                                        children: "Sort Order:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/filter-form/filter-form.tsx",
                                        lineNumber: 76,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        id: 'sortOrder',
                                        name: 'sortOrder',
                                        defaultValue: sortOrder,
                                        className: 'border border-gray-300 rounded p-2',
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: 'asc',
                                                children: "Ascending"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/filter-form/filter-form.tsx",
                                                lineNumber: 86,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: 'desc',
                                                children: "Descending"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/filter-form/filter-form.tsx",
                                                lineNumber: 87,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/filter-form/filter-form.tsx",
                                        lineNumber: 80,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/filter-form/filter-form.tsx",
                                lineNumber: 75,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/filter-form/filter-form.tsx",
                        lineNumber: 56,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/filter-form/filter-form.tsx",
                lineNumber: 25,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4 items-end justify-between flex-wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold",
                                children: "Display Columns:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/filter-form/filter-form.tsx",
                                lineNumber: 95,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4 flex-wrap",
                                children: allColumns.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                name: "columns",
                                                value: col.key,
                                                defaultChecked: selectedColumns.length > 0 ? selectedColumns.includes(col.key) : true,
                                                className: "border border-gray-300 rounded "
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/filter-form/filter-form.tsx",
                                                lineNumber: 99,
                                                columnNumber: 33
                                            }, this),
                                            col.header
                                        ]
                                    }, col.key, true, {
                                        fileName: "[project]/src/components/filter-form/filter-form.tsx",
                                        lineNumber: 98,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/filter-form/filter-form.tsx",
                                lineNumber: 96,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/filter-form/filter-form.tsx",
                        lineNumber: 94,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flew-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "itemsPerPage",
                                className: "block font-semibold mb-1 mr-2",
                                children: "Items Per Page:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/filter-form/filter-form.tsx",
                                lineNumber: 114,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                id: "itemsPerPage",
                                name: "itemsPerPage",
                                defaultValue: String(itemsPerPage),
                                className: "border border-gray-300 rounded p-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "5",
                                        children: "5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/filter-form/filter-form.tsx",
                                        lineNumber: 123,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "10",
                                        children: "10"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/filter-form/filter-form.tsx",
                                        lineNumber: 124,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "15",
                                        children: "15"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/filter-form/filter-form.tsx",
                                        lineNumber: 125,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "20",
                                        children: "20"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/filter-form/filter-form.tsx",
                                        lineNumber: 126,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/filter-form/filter-form.tsx",
                                lineNumber: 117,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/filter-form/filter-form.tsx",
                        lineNumber: 113,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "p-2 bg-terciary hover:bg-secondary text-white rounded  cursor-pointer ",
                        children: "Apply Filters"
                    }, void 0, false, {
                        fileName: "[project]/src/components/filter-form/filter-form.tsx",
                        lineNumber: 132,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/filter-form/filter-form.tsx",
                lineNumber: 93,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/filter-form/filter-form.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/components/pagination/pagination.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
;
;
function getPageNumbers(currentPage, totalPages, maxVisible = 7) {
    const pages = [];
    if (totalPages <= maxVisible) {
        for(let i = 1; i <= totalPages; i++){
            pages.push(i);
        }
    } else {
        // Always show first page
        pages.push(1);
        const windowSize = maxVisible - 2; // excluding first and last page
        let start = Math.max(currentPage - Math.floor(windowSize / 2), 2);
        let end = start + windowSize - 1;
        if (end >= totalPages) {
            end = totalPages - 1;
            start = end - windowSize + 1;
        }
        if (start > 2) {
            pages.push("...");
        }
        for(let i = start; i <= end; i++){
            pages.push(i);
        }
        if (end < totalPages - 1) {
            pages.push("...");
        }
        pages.push(totalPages);
    }
    return pages;
}
const Pagination = ({ currentPage, totalPages, baseUrl })=>{
    const pages = getPageNumbers(currentPage, totalPages);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: 'mt-4 flex justify-center',
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: 'flex list-none',
            children: pages.map((page, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: 'mx-1',
                    children: typeof page === "number" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: `${baseUrl}&page=${page}`,
                        className: `px-3 py-1 border rounded hover:bg-secondary transition ${page === currentPage ? "bg-secondary text-white" : "bg-terciary text-white"}`,
                        children: page
                    }, void 0, false, {
                        fileName: "[project]/src/components/pagination/pagination.tsx",
                        lineNumber: 56,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: 'px-3 py-1',
                        children: "..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/pagination/pagination.tsx",
                        lineNumber: 65,
                        columnNumber: 15
                    }, this)
                }, index, false, {
                    fileName: "[project]/src/components/pagination/pagination.tsx",
                    lineNumber: 54,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/pagination/pagination.tsx",
            lineNumber: 52,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/pagination/pagination.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Pagination;
}}),
"[project]/src/utils/filter-and-paginate.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "filterAndPaginate": (()=>filterAndPaginate)
});
function filterAndPaginate({ data, allColumns, searchParams, getValueByKey = defaultGetValueByKey }) {
    const filterColumn = searchParams.filterColumn || 'all';
    const filterValue = (searchParams.filterValue || '').toLowerCase();
    const sortColumn = searchParams.sortColumn || 'none';
    const sortOrder = searchParams.sortOrder === 'desc' ? 'desc' : 'asc';
    const currentPage = searchParams.page ? Number(searchParams.page) : 1;
    const parsedItemsPerPage = searchParams.itemsPerPage ? Number(searchParams.itemsPerPage) : 5;
    const itemsPerPage = isNaN(parsedItemsPerPage) || parsedItemsPerPage <= 0 ? 5 : parsedItemsPerPage;
    let selectedColumns = [];
    if (searchParams.columns) {
        if (Array.isArray(searchParams.columns)) {
            selectedColumns = searchParams.columns.filter(Boolean);
        } else {
            selectedColumns = searchParams.columns.split(',').filter(Boolean);
        }
    }
    const columnsToDisplay = selectedColumns.length > 0 ? allColumns.filter((col)=>selectedColumns.includes(col.key)) : allColumns;
    let filteredData = data;
    if (filterValue) {
        if (filterColumn !== 'all') {
            filteredData = filteredData.filter((item)=>{
                const value = getValueByKey(item, filterColumn);
                return String(value).toLowerCase().includes(filterValue);
            });
        } else {
            filteredData = filteredData.filter((item)=>columnsToDisplay.some((col)=>{
                    const value = getValueByKey(item, col.key);
                    return String(value).toLowerCase().includes(filterValue);
                }));
        }
    }
    if (sortColumn !== 'none') {
        filteredData.sort((a, b)=>{
            const aVal = getValueByKey(a, sortColumn);
            const bVal = getValueByKey(b, sortColumn);
            const aStr = String(aVal).toLowerCase();
            const bStr = String(bVal).toLowerCase();
            if (aStr < bStr) return sortOrder === 'asc' ? -1 : 1;
            if (aStr > bStr) return sortOrder === 'asc' ? 1 : -1;
            return 0;
        });
    }
    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = filteredData.slice(startIndex, startIndex + itemsPerPage);
    function buildBaseUrl() {
        const params = new URLSearchParams();
        if ("TURBOPACK compile-time truthy", 1) params.set('filterColumn', filterColumn);
        if (filterValue) params.set('filterValue', filterValue);
        if (sortColumn && sortColumn !== 'none') {
            params.set('sortColumn', sortColumn);
            params.set('sortOrder', sortOrder);
        }
        if (selectedColumns.length > 0) params.set('columns', selectedColumns.join(','));
        params.set('itemsPerPage', String(itemsPerPage));
        return `?${params.toString()}`;
    }
    return {
        columnsToDisplay,
        currentItems,
        currentPage,
        totalPages,
        buildBaseUrl,
        filterColumn,
        filterValue,
        selectedColumns,
        itemsPerPage,
        sortColumn,
        sortOrder
    };
}
function defaultGetValueByKey(obj, keyPath) {
    if (!keyPath.includes('.')) {
        return obj[keyPath];
    }
    const parts = keyPath.split('.');
    let value = obj;
    for (const part of parts){
        if (typeof value === 'object' && value !== null) {
            value = value[part];
        } else {
            return undefined;
        }
    }
    return value;
}
}}),
"[project]/src/components/truncated-text/truncated-text.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/truncated-text/truncated-text.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/truncated-text/truncated-text.tsx <module evaluation>", "default");
}}),
"[project]/src/components/truncated-text/truncated-text.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/truncated-text/truncated-text.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/truncated-text/truncated-text.tsx", "default");
}}),
"[project]/src/components/truncated-text/truncated-text.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$truncated$2d$text$2f$truncated$2d$text$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/truncated-text/truncated-text.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$truncated$2d$text$2f$truncated$2d$text$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/components/truncated-text/truncated-text.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$truncated$2d$text$2f$truncated$2d$text$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/components/only-table/only-table.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>OnlyTable)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lodash/get.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$truncated$2d$text$2f$truncated$2d$text$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/truncated-text/truncated-text.tsx [app-rsc] (ecmascript)");
;
;
;
;
function OnlyTable({ data, columns }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: "min-w-full border border-gray-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    className: "bg-secondary",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: columns.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "p-2 border",
                                children: col.header
                            }, col.key, false, {
                                fileName: "[project]/src/components/only-table/only-table.tsx",
                                lineNumber: 24,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/only-table/only-table.tsx",
                        lineNumber: 22,
                        columnNumber: 17
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/only-table/only-table.tsx",
                    lineNumber: 21,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    children: Array.isArray(data) && data.length > 0 ? data.map((item, rowIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "text-center",
                            children: columns.map((col)=>{
                                const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(item, col.key);
                                let cellContent;
                                if (col.isImage && typeof value === 'string') {
                                    cellContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        src: value,
                                        alt: "flag",
                                        width: 30,
                                        height: 30
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/only-table/only-table.tsx",
                                        lineNumber: 40,
                                        columnNumber: 39
                                    }, this);
                                } else {
                                    cellContent = value !== undefined ? String(value) : '-';
                                }
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: 'p-2 border whitespace-pre-line',
                                    children: typeof cellContent === 'string' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$truncated$2d$text$2f$truncated$2d$text$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        text: cellContent,
                                        maxLength: 30
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/only-table/only-table.tsx",
                                        lineNumber: 55,
                                        columnNumber: 41
                                    }, this) : cellContent
                                }, col.key, false, {
                                    fileName: "[project]/src/components/only-table/only-table.tsx",
                                    lineNumber: 53,
                                    columnNumber: 35
                                }, this);
                            })
                        }, rowIndex, false, {
                            fileName: "[project]/src/components/only-table/only-table.tsx",
                            lineNumber: 33,
                            columnNumber: 25
                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            colSpan: columns.length,
                            className: "{p-2 text-center}",
                            children: "No se encontraron datos."
                        }, void 0, false, {
                            fileName: "[project]/src/components/only-table/only-table.tsx",
                            lineNumber: 66,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/only-table/only-table.tsx",
                        lineNumber: 65,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/only-table/only-table.tsx",
                    lineNumber: 30,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/only-table/only-table.tsx",
            lineNumber: 20,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/only-table/only-table.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/components/paginated-table/paginated-table.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PaginatedTable": (()=>PaginatedTable)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$filter$2d$form$2f$filter$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/filter-form/filter-form.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pagination$2f$pagination$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pagination/pagination.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$filter$2d$and$2d$paginate$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/filter-and-paginate.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$only$2d$table$2f$only$2d$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/only-table/only-table.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
async function PaginatedTable({ data, allColumns, searchParams, title, baseUrl }) {
    const { columnsToDisplay, currentItems, currentPage, totalPages, buildBaseUrl, filterColumn, filterValue, selectedColumns, itemsPerPage, sortColumn, sortOrder } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$filter$2d$and$2d$paginate$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filterAndPaginate"])({
        data,
        allColumns,
        searchParams
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-26 px-11 lg:px-16 pb-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-4",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/paginated-table/paginated-table.tsx",
                lineNumber: 45,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$filter$2d$form$2f$filter$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                allColumns: allColumns,
                filterColumn: filterColumn,
                filterValue: filterValue,
                selectedColumns: selectedColumns,
                itemsPerPage: itemsPerPage,
                sortColumn: sortColumn,
                sortOrder: sortOrder
            }, void 0, false, {
                fileName: "[project]/src/components/paginated-table/paginated-table.tsx",
                lineNumber: 47,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$only$2d$table$2f$only$2d$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                data: currentItems,
                columns: columnsToDisplay
            }, void 0, false, {
                fileName: "[project]/src/components/paginated-table/paginated-table.tsx",
                lineNumber: 57,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pagination$2f$pagination$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                currentPage: currentPage,
                totalPages: totalPages,
                baseUrl: `${baseUrl}${buildBaseUrl()}`
            }, void 0, false, {
                fileName: "[project]/src/components/paginated-table/paginated-table.tsx",
                lineNumber: 59,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/paginated-table/paginated-table.tsx",
        lineNumber: 44,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/app/countries/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CountriesPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$countries$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/countries.service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$search$2d$params$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/search-params.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$paginated$2d$table$2f$paginated$2d$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/paginated-table/paginated-table.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$only$2d$table$2f$only$2d$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/only-table/only-table.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
async function CountriesPage({ searchParams }) {
    const params = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$search$2d$params$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveSearchParams"])(searchParams);
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$countries$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCountries"])();
    const allColumns = [
        {
            key: 'name.common',
            header: 'Common Name'
        },
        {
            key: 'name.official',
            header: 'Official Name'
        },
        {
            key: 'nativeNamesSummary',
            header: 'Native Names'
        },
        {
            key: 'translationsNamesSummary',
            header: 'Translations Names'
        },
        {
            key: 'capitalSummary',
            header: 'Capital'
        },
        {
            key: 'region',
            header: 'Region'
        },
        {
            key: 'population',
            header: 'Population'
        },
        {
            key: 'languagesSummary',
            header: 'Languages'
        },
        {
            key: 'flags.svg',
            header: 'Flag',
            isImage: true
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$paginated$2d$table$2f$paginated$2d$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PaginatedTable"], {
        data: data,
        allColumns: allColumns,
        searchParams: params,
        title: "Countries API",
        baseUrl: "/countries",
        TableComponent: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$only$2d$table$2f$only$2d$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
    }, void 0, false, {
        fileName: "[project]/src/app/countries/page.tsx",
        lineNumber: 26,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/app/countries/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/countries/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_bb0a87eb._.js.map