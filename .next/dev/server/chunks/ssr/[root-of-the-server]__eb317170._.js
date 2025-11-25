module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/rezlabs/webV2/src/components/ui/ShinyText.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const ShinyText = ({ text, disabled = false, speed = 5, className = '' })=>{
    const animationDuration = `${speed}s`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `text-[#b5b5b5a4] bg-clip-text inline-block ${disabled ? '' : 'animate-shine'} ${className}`,
        style: {
            backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
            backgroundSize: '200% 100%',
            WebkitBackgroundClip: 'text',
            animationDuration: animationDuration
        },
        children: text
    }, void 0, false, {
        fileName: "[project]/rezlabs/webV2/src/components/ui/ShinyText.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ShinyText;
 // tailwind.config.js
 // module.exports = {
 //   theme: {
 //     extend: {
 //       keyframes: {
 //         shine: {
 //           '0%': { 'background-position': '100%' },
 //           '100%': { 'background-position': '-100%' },
 //         },
 //       },
 //       animation: {
 //         shine: 'shine 5s linear infinite',
 //       },
 //     },
 //   },
 //   plugins: [],
 // };
}),
"[project]/rezlabs/webV2/src/components/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$gsap$2f$ScrollToPlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/gsap/ScrollToPlugin.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$components$2f$ui$2f$ShinyText$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/src/components/ui/ShinyText.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$gsap$2f$ScrollToPlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollToPlugin"]);
const Navbar = ()=>{
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        };
    }, [
        scrolled
    ]);
    const scrollToSection = (id)=>{
        if (pathname !== '/') {
            window.location.href = `/${id}`;
            return;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(window, {
            duration: 1,
            scrollTo: id,
            ease: 'power2.out'
        });
        setMobileMenuOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `navbar ${scrolled ? 'scrolled' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "navbar-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "navbar-left",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "navbar-brand",
                            onClick: ()=>scrollToSection('#hero'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/assets/rez.png",
                                    alt: "Rez Logo",
                                    className: "brand-logo"
                                }, void 0, false, {
                                    fileName: "[project]/rezlabs/webV2/src/components/Navbar.tsx",
                                    lineNumber: 45,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "brand-name",
                                    children: "RezLabs"
                                }, void 0, false, {
                                    fileName: "[project]/rezlabs/webV2/src/components/Navbar.tsx",
                                    lineNumber: 46,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/rezlabs/webV2/src/components/Navbar.tsx",
                            lineNumber: 44,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/rezlabs/webV2/src/components/Navbar.tsx",
                        lineNumber: 43,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "navbar-center desktop-nav",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "navbar-links",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>scrollToSection('#why-rez'),
                                    className: "nav-link",
                                    children: "Why Rez"
                                }, void 0, false, {
                                    fileName: "[project]/rezlabs/webV2/src/components/Navbar.tsx",
                                    lineNumber: 52,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/manifesto",
                                    className: "nav-link",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$components$2f$ui$2f$ShinyText$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        text: "Manifesto",
                                        speed: 3
                                    }, void 0, false, {
                                        fileName: "[project]/rezlabs/webV2/src/components/Navbar.tsx",
                                        lineNumber: 54,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/rezlabs/webV2/src/components/Navbar.tsx",
                                    lineNumber: 53,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://github.com/0xtdey/rezlitepaper/blob/main/Rez_Litepaper.pdf",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "nav-link",
                                    children: "Litepaper"
                                }, void 0, false, {
                                    fileName: "[project]/rezlabs/webV2/src/components/Navbar.tsx",
                                    lineNumber: 56,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/rezlabs/webV2/src/components/Navbar.tsx",
                            lineNumber: 51,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/rezlabs/webV2/src/components/Navbar.tsx",
                        lineNumber: 50,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "navbar-right desktop-nav",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://b34bvolr4xazf2byeqkv3u.streamlit.app/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "btn btn-sm btn-light launch-app-btn",
                            children: "Try Beta"
                        }, void 0, false, {
                            fileName: "[project]/rezlabs/webV2/src/components/Navbar.tsx",
                            lineNumber: 61,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/rezlabs/webV2/src/components/Navbar.tsx",
                        lineNumber: 60,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`,
                        onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                        "aria-label": "Toggle menu",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `hamburger ${mobileMenuOpen ? 'open' : ''}`
                        }, void 0, false, {
                            fileName: "[project]/rezlabs/webV2/src/components/Navbar.tsx",
                            lineNumber: 69,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/rezlabs/webV2/src/components/Navbar.tsx",
                        lineNumber: 64,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/rezlabs/webV2/src/components/Navbar.tsx",
                lineNumber: 42,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `mobile-nav ${mobileMenuOpen ? 'open' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>scrollToSection('#why-rez'),
                        className: "nav-link",
                        children: "Why Rez"
                    }, void 0, false, {
                        fileName: "[project]/rezlabs/webV2/src/components/Navbar.tsx",
                        lineNumber: 75,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/manifesto",
                        className: "nav-link",
                        onClick: ()=>setMobileMenuOpen(false),
                        children: "Manifesto"
                    }, void 0, false, {
                        fileName: "[project]/rezlabs/webV2/src/components/Navbar.tsx",
                        lineNumber: 78,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://github.com/0xtdey/rezlitepaper/blob/main/Rez_Litepaper.pdf",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "nav-link",
                        children: "Litepaper"
                    }, void 0, false, {
                        fileName: "[project]/rezlabs/webV2/src/components/Navbar.tsx",
                        lineNumber: 81,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/rezlabs/webV2/src/components/Navbar.tsx",
                lineNumber: 74,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/rezlabs/webV2/src/components/Navbar.tsx",
        lineNumber: 41,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Navbar;
}),
"[project]/rezlabs/webV2/src/components/ui/ColorBends.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ColorBends
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/three/build/three.module.js [app-ssr] (ecmascript)");
;
;
;
const MAX_COLORS = 8;
const frag = `
#define MAX_COLORS ${MAX_COLORS}
uniform vec2 uCanvas;
uniform float uTime;
uniform float uSpeed;
uniform vec2 uRot;
uniform int uColorCount;
uniform vec3 uColors[MAX_COLORS];
uniform int uTransparent;
uniform float uScale;
uniform float uFrequency;
uniform float uWarpStrength;
uniform vec2 uPointer; // in NDC [-1,1]
uniform float uMouseInfluence;
uniform float uParallax;
uniform float uNoise;
varying vec2 vUv;

void main() {
  float t = uTime * uSpeed;
  vec2 p = vUv * 2.0 - 1.0;
  p += uPointer * uParallax * 0.1;
  vec2 rp = vec2(p.x * uRot.x - p.y * uRot.y, p.x * uRot.y + p.y * uRot.x);
  vec2 q = vec2(rp.x * (uCanvas.x / uCanvas.y), rp.y);
  q /= max(uScale, 0.0001);
  q /= 0.5 + 0.2 * dot(q, q);
  q += 0.2 * cos(t) - 7.56;
  vec2 toward = (uPointer - rp);
  q += toward * uMouseInfluence * 0.2;

    vec3 col = vec3(0.0);
    float a = 1.0;

    if (uColorCount > 0) {
      vec2 s = q;
      vec3 sumCol = vec3(0.0);
      float cover = 0.0;
      for (int i = 0; i < MAX_COLORS; ++i) {
            if (i >= uColorCount) break;
            s -= 0.01;
            vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
            float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(i)) / 4.0);
            float kBelow = clamp(uWarpStrength, 0.0, 1.0);
            float kMix = pow(kBelow, 0.3); // strong response across 0..1
            float gain = 1.0 + max(uWarpStrength - 1.0, 0.0); // allow >1 to amplify displacement
            vec2 disp = (r - s) * kBelow;
            vec2 warped = s + disp * gain;
            float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(i)) / 4.0);
            float m = mix(m0, m1, kMix);
            float w = 1.0 - exp(-6.0 / exp(6.0 * m));
            sumCol += uColors[i] * w;
            cover = max(cover, w);
      }
      col = clamp(sumCol, 0.0, 1.0);
      a = uTransparent > 0 ? cover : 1.0;
    } else {
        vec2 s = q;
        for (int k = 0; k < 3; ++k) {
            s -= 0.01;
            vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
            float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(k)) / 4.0);
            float kBelow = clamp(uWarpStrength, 0.0, 1.0);
            float kMix = pow(kBelow, 0.3);
            float gain = 1.0 + max(uWarpStrength - 1.0, 0.0);
            vec2 disp = (r - s) * kBelow;
            vec2 warped = s + disp * gain;
            float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(k)) / 4.0);
            float m = mix(m0, m1, kMix);
            col[k] = 1.0 - exp(-6.0 / exp(6.0 * m));
        }
        a = uTransparent > 0 ? max(max(col.r, col.g), col.b) : 1.0;
    }

    if (uNoise > 0.0001) {
      float n = fract(sin(dot(gl_FragCoord.xy + vec2(uTime), vec2(12.9898, 78.233))) * 43758.5453123);
      col += (n - 0.5) * uNoise;
      col = clamp(col, 0.0, 1.0);
    }

    vec3 rgb = (uTransparent > 0) ? col * a : col;
    gl_FragColor = vec4(rgb, a);
}
`;
const vert = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;
function ColorBends({ className, style, rotation = 45, speed = 0.2, colors = [], transparent = true, autoRotate = 0, scale = 1, frequency = 1, warpStrength = 1, mouseInfluence = 1, parallax = 0.5, noise = 0.1 }) {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rendererRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const materialRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const resizeObserverRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rotationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(rotation);
    const autoRotateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(autoRotate);
    const pointerTargetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Vector2(0, 0));
    const pointerCurrentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Vector2(0, 0));
    const pointerSmoothRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(8);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const container = containerRef.current;
        const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Scene();
        const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.PlaneGeometry(2, 2);
        const uColorsArray = Array.from({
            length: MAX_COLORS
        }, ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Vector3(0, 0, 0));
        const material = new __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.ShaderMaterial({
            vertexShader: vert,
            fragmentShader: frag,
            uniforms: {
                uCanvas: {
                    value: new __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Vector2(1, 1)
                },
                uTime: {
                    value: 0
                },
                uSpeed: {
                    value: speed
                },
                uRot: {
                    value: new __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Vector2(1, 0)
                },
                uColorCount: {
                    value: 0
                },
                uColors: {
                    value: uColorsArray
                },
                uTransparent: {
                    value: transparent ? 1 : 0
                },
                uScale: {
                    value: scale
                },
                uFrequency: {
                    value: frequency
                },
                uWarpStrength: {
                    value: warpStrength
                },
                uPointer: {
                    value: new __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Vector2(0, 0)
                },
                uMouseInfluence: {
                    value: mouseInfluence
                },
                uParallax: {
                    value: parallax
                },
                uNoise: {
                    value: noise
                }
            },
            premultipliedAlpha: true,
            transparent: true
        });
        materialRef.current = material;
        const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Mesh(geometry, material);
        scene.add(mesh);
        const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.WebGLRenderer({
            antialias: false,
            powerPreference: 'high-performance',
            alpha: true
        });
        rendererRef.current = renderer;
        renderer.outputColorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.SRGBColorSpace;
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        renderer.setClearColor(0x000000, transparent ? 0 : 1);
        renderer.domElement.style.width = '100%';
        renderer.domElement.style.height = '100%';
        renderer.domElement.style.display = 'block';
        container.appendChild(renderer.domElement);
        const clock = new __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Clock();
        const handleResize = ()=>{
            const w = container.clientWidth || 1;
            const h = container.clientHeight || 1;
            renderer.setSize(w, h, false);
            material.uniforms.uCanvas.value.set(w, h);
        };
        handleResize();
        if ('ResizeObserver' in window) {
            const ro = new ResizeObserver(handleResize);
            ro.observe(container);
            resizeObserverRef.current = ro;
        } else {
            window.addEventListener('resize', handleResize);
        }
        const loop = ()=>{
            const dt = clock.getDelta();
            const elapsed = clock.elapsedTime;
            material.uniforms.uTime.value = elapsed;
            const deg = rotationRef.current % 360 + autoRotateRef.current * elapsed;
            const rad = deg * Math.PI / 180;
            const c = Math.cos(rad);
            const s = Math.sin(rad);
            material.uniforms.uRot.value.set(c, s);
            const cur = pointerCurrentRef.current;
            const tgt = pointerTargetRef.current;
            const amt = Math.min(1, dt * pointerSmoothRef.current);
            cur.lerp(tgt, amt);
            material.uniforms.uPointer.value.copy(cur);
            renderer.render(scene, camera);
            rafRef.current = requestAnimationFrame(loop);
        };
        rafRef.current = requestAnimationFrame(loop);
        return ()=>{
            if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
            if (resizeObserverRef.current) resizeObserverRef.current.disconnect();
            else window.removeEventListener('resize', handleResize);
            geometry.dispose();
            material.dispose();
            renderer.dispose();
            if (renderer.domElement && renderer.domElement.parentElement === container) {
                container.removeChild(renderer.domElement);
            }
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const material = materialRef.current;
        const renderer = rendererRef.current;
        if (!material) return;
        rotationRef.current = rotation;
        autoRotateRef.current = autoRotate;
        material.uniforms.uSpeed.value = speed;
        material.uniforms.uScale.value = scale;
        material.uniforms.uFrequency.value = frequency;
        material.uniforms.uWarpStrength.value = warpStrength;
        material.uniforms.uMouseInfluence.value = mouseInfluence;
        material.uniforms.uParallax.value = parallax;
        material.uniforms.uNoise.value = noise;
        const toVec3 = (hex)=>{
            const h = hex.replace('#', '').trim();
            const v = h.length === 3 ? [
                parseInt(h[0] + h[0], 16),
                parseInt(h[1] + h[1], 16),
                parseInt(h[2] + h[2], 16)
            ] : [
                parseInt(h.slice(0, 2), 16),
                parseInt(h.slice(2, 4), 16),
                parseInt(h.slice(4, 6), 16)
            ];
            return new __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Vector3(v[0] / 255, v[1] / 255, v[2] / 255);
        };
        const arr = (colors || []).filter(Boolean).slice(0, MAX_COLORS).map(toVec3);
        for(let i = 0; i < MAX_COLORS; i++){
            const vec = material.uniforms.uColors.value[i];
            if (i < arr.length) vec.copy(arr[i]);
            else vec.set(0, 0, 0);
        }
        material.uniforms.uColorCount.value = arr.length;
        material.uniforms.uTransparent.value = transparent ? 1 : 0;
        if (renderer) renderer.setClearColor(0x000000, transparent ? 0 : 1);
    }, [
        rotation,
        autoRotate,
        speed,
        scale,
        frequency,
        warpStrength,
        mouseInfluence,
        parallax,
        noise,
        colors,
        transparent
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const material = materialRef.current;
        const container = containerRef.current;
        if (!material || !container) return;
        const handlePointerMove = (e)=>{
            const rect = container.getBoundingClientRect();
            const x = (e.clientX - rect.left) / (rect.width || 1) * 2 - 1;
            const y = -((e.clientY - rect.top) / (rect.height || 1) * 2 - 1);
            pointerTargetRef.current.set(x, y);
        };
        container.addEventListener('pointermove', handlePointerMove);
        return ()=>{
            container.removeEventListener('pointermove', handlePointerMove);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: `w-full h-full relative overflow-hidden ${className}`,
        style: style
    }, void 0, false, {
        fileName: "[project]/rezlabs/webV2/src/components/ui/ColorBends.tsx",
        lineNumber: 307,
        columnNumber: 10
    }, this);
}
}),
"[project]/rezlabs/webV2/src/components/ui/aurora-text.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuroraText",
    ()=>AuroraText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const AuroraText = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(({ children, className = "", colors = [
    "#FF0080",
    "#7928CA",
    "#0070F3",
    "#38bdf8"
], speed = 1 })=>{
    const gradientStyle = {
        backgroundImage: `linear-gradient(135deg, ${colors.join(", ")}, ${colors[0]})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        animationDuration: `${10 / speed}s`
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `relative inline-block ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: children
            }, void 0, false, {
                fileName: "[project]/rezlabs/webV2/src/components/ui/aurora-text.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "animate-aurora relative bg-[length:200%_auto] bg-clip-text text-transparent",
                style: gradientStyle,
                "aria-hidden": "true",
                children: children
            }, void 0, false, {
                fileName: "[project]/rezlabs/webV2/src/components/ui/aurora-text.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/rezlabs/webV2/src/components/ui/aurora-text.tsx",
        lineNumber: 29,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
AuroraText.displayName = "AuroraText";
}),
"[project]/rezlabs/webV2/src/components/Hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$components$2f$ui$2f$ColorBends$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/src/components/ui/ColorBends.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$components$2f$ui$2f$aurora$2d$text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/src/components/ui/aurora-text.tsx [app-ssr] (ecmascript)");
;
;
;
const Hero = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "hero relative overflow-hidden",
        id: "hero",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$components$2f$ui$2f$ColorBends$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    colors: [
                        "#757575ff"
                    ],
                    rotation: 30,
                    speed: 0.3,
                    scale: 1.2,
                    frequency: 1.4,
                    warpStrength: 1,
                    mouseInfluence: 0.8,
                    parallax: 0.5,
                    noise: 0.1
                }, void 0, false, {
                    fileName: "[project]/rezlabs/webV2/src/components/Hero.tsx",
                    lineNumber: 11,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/rezlabs/webV2/src/components/Hero.tsx",
                lineNumber: 10,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container hero-content relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hero-text",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "hero-title",
                            children: [
                                "The Future of Perps",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/rezlabs/webV2/src/components/Hero.tsx",
                                    lineNumber: 27,
                                    columnNumber: 44
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "italic",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$components$2f$ui$2f$aurora$2d$text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuroraText"], {
                                        colors: [
                                            '#4B5563',
                                            '#6B7280',
                                            '#9CA3AF',
                                            '#71717A',
                                            '#52525B'
                                        ],
                                        speed: 1.2,
                                        children: "is Autonomous"
                                    }, void 0, false, {
                                        fileName: "[project]/rezlabs/webV2/src/components/Hero.tsx",
                                        lineNumber: 29,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/rezlabs/webV2/src/components/Hero.tsx",
                                    lineNumber: 28,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/rezlabs/webV2/src/components/Hero.tsx",
                            lineNumber: 26,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "hero-subtitle",
                            children: "Rez is a non-custodial platform that automates perpetual trading using AI agents."
                        }, void 0, false, {
                            fileName: "[project]/rezlabs/webV2/src/components/Hero.tsx",
                            lineNumber: 37,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hero-buttons",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://b34bvolr4xazf2byeqkv3u.streamlit.app/",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "btn btn-primary",
                                    children: "Try Beta"
                                }, void 0, false, {
                                    fileName: "[project]/rezlabs/webV2/src/components/Hero.tsx",
                                    lineNumber: 41,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://github.com/0xtdey/rezlitepaper/blob/main/Rez_Litepaper.pdf",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "btn btn-secondary",
                                    children: "Read Litepaper"
                                }, void 0, false, {
                                    fileName: "[project]/rezlabs/webV2/src/components/Hero.tsx",
                                    lineNumber: 42,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/rezlabs/webV2/src/components/Hero.tsx",
                            lineNumber: 40,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/rezlabs/webV2/src/components/Hero.tsx",
                    lineNumber: 25,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/rezlabs/webV2/src/components/Hero.tsx",
                lineNumber: 24,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/rezlabs/webV2/src/components/Hero.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Hero;
}),
"[project]/rezlabs/webV2/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/rezlabs/webV2/src/components/ui/background-ripple-effect.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BackgroundRippleEffect",
    ()=>BackgroundRippleEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const BackgroundRippleEffect = ({ rows = 8, cols = 27, cellSize = 56 })=>{
    const [clickedCell, setClickedCell] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [rippleKey, setRippleKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 h-full w-full", "[--cell-border-color:var(--color-neutral-300)] [--cell-fill-color:var(--color-neutral-100)] [--cell-shadow-color:var(--color-neutral-500)]", "dark:[--cell-border-color:var(--color-neutral-700)] dark:[--cell-fill-color:var(--color-neutral-900)] dark:[--cell-shadow-color:var(--color-neutral-800)]"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-auto w-auto overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-none absolute inset-0 z-[2] h-full w-full overflow-hidden"
                }, void 0, false, {
                    fileName: "[project]/rezlabs/webV2/src/components/ui/background-ripple-effect.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DivGrid, {
                    className: "mask-radial-from-20% mask-radial-at-top opacity-600",
                    rows: rows,
                    cols: cols,
                    cellSize: cellSize,
                    borderColor: "var(--cell-border-color)",
                    fillColor: "var(--cell-fill-color)",
                    clickedCell: clickedCell,
                    onCellClick: (row, col)=>{
                        setClickedCell({
                            row,
                            col
                        });
                        setRippleKey((k)=>k + 1);
                    },
                    interactive: true
                }, `base-${rippleKey}`, false, {
                    fileName: "[project]/rezlabs/webV2/src/components/ui/background-ripple-effect.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/rezlabs/webV2/src/components/ui/background-ripple-effect.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/rezlabs/webV2/src/components/ui/background-ripple-effect.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const DivGrid = ({ className, rows = 7, cols = 30, cellSize = 56, borderColor = "#3f3f46", fillColor = "rgba(14,165,233,0.3)", clickedCell = null, onCellClick = ()=>{}, interactive = true })=>{
    const cells = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Array.from({
            length: rows * cols
        }, (_, idx)=>idx), [
        rows,
        cols
    ]);
    const gridStyle = {
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
        width: cols * cellSize,
        height: rows * cellSize,
        marginInline: "auto"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative z-[3]", className),
        style: gridStyle,
        children: cells.map((idx)=>{
            const rowIdx = Math.floor(idx / cols);
            const colIdx = idx % cols;
            const distance = clickedCell ? Math.hypot(clickedCell.row - rowIdx, clickedCell.col - colIdx) : 0;
            const delay = clickedCell ? Math.max(0, distance * 55) : 0; // ms
            const duration = 200 + distance * 80; // ms
            const style = clickedCell ? {
                "--delay": `${delay}ms`,
                "--duration": `${duration}ms`
            } : {};
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("cell relative border-[0.5px] opacity-40 transition-opacity duration-150 will-change-transform hover:opacity-80 dark:shadow-[0px_0px_40px_1px_var(--cell-shadow-color)_inset]", clickedCell && "animate-cell-ripple [animation-fill-mode:none]", !interactive && "pointer-events-none"),
                style: {
                    backgroundColor: fillColor,
                    borderColor: borderColor,
                    ...style
                },
                onClick: interactive ? ()=>onCellClick?.(rowIdx, colIdx) : undefined
            }, idx, false, {
                fileName: "[project]/rezlabs/webV2/src/components/ui/background-ripple-effect.tsx",
                lineNumber: 113,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/rezlabs/webV2/src/components/ui/background-ripple-effect.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/rezlabs/webV2/src/components/ui/spotlight-card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpotlightCard",
    ()=>SpotlightCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const SpotlightCard = ({ children, className = "" })=>{
    const divRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [opacity, setOpacity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const handleMouseMove = (e)=>{
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };
    const handleFocus = ()=>{
        setOpacity(1);
    };
    const handleBlur = ()=>{
        setOpacity(0);
    };
    const handleMouseEnter = ()=>{
        setOpacity(1);
    };
    const handleMouseLeave = ()=>{
        setOpacity(0);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: divRef,
        onMouseMove: handleMouseMove,
        onFocus: handleFocus,
        onBlur: handleBlur,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        className: `relative overflow-hidden rounded-xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900 ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute -inset-px opacity-0 transition duration-300",
                style: {
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0,0,0,0.1), transparent 40%)`
                }
            }, void 0, false, {
                fileName: "[project]/rezlabs/webV2/src/components/ui/spotlight-card.tsx",
                lineNumber: 40,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-full",
                children: children
            }, void 0, false, {
                fileName: "[project]/rezlabs/webV2/src/components/ui/spotlight-card.tsx",
                lineNumber: 47,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/rezlabs/webV2/src/components/ui/spotlight-card.tsx",
        lineNumber: 31,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/rezlabs/webV2/src/components/WhyRez.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$components$2f$ui$2f$background$2d$ripple$2d$effect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/src/components/ui/background-ripple-effect.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$components$2f$ui$2f$spotlight$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/src/components/ui/spotlight-card.tsx [app-ssr] (ecmascript)");
;
;
;
const WhyRez = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "why-rez relative overflow-hidden",
        id: "why-rez",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$components$2f$ui$2f$background$2d$ripple$2d$effect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BackgroundRippleEffect"], {}, void 0, false, {
                fileName: "[project]/rezlabs/webV2/src/components/WhyRez.tsx",
                lineNumber: 7,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "content-wrapper relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Why Rez ?"
                    }, void 0, false, {
                        fileName: "[project]/rezlabs/webV2/src/components/WhyRez.tsx",
                        lineNumber: 9,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "why-rez-grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$components$2f$ui$2f$spotlight$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SpotlightCard"], {
                                className: "feature-box group",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "card-image-wrapper",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/oneclick.jpg",
                                                alt: "One-click setup",
                                                className: "card-image"
                                            }, void 0, false, {
                                                fileName: "[project]/rezlabs/webV2/src/components/WhyRez.tsx",
                                                lineNumber: 14,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/rezlabs/webV2/src/components/WhyRez.tsx",
                                            lineNumber: 13,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: "One-click setup"
                                        }, void 0, false, {
                                            fileName: "[project]/rezlabs/webV2/src/components/WhyRez.tsx",
                                            lineNumber: 16,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Deposit, select risk, and go. Institutional-grade trading made accessible to everyone."
                                        }, void 0, false, {
                                            fileName: "[project]/rezlabs/webV2/src/components/WhyRez.tsx",
                                            lineNumber: 17,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/rezlabs/webV2/src/components/WhyRez.tsx",
                                    lineNumber: 12,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/rezlabs/webV2/src/components/WhyRez.tsx",
                                lineNumber: 11,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$components$2f$ui$2f$spotlight$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SpotlightCard"], {
                                className: "feature-box group",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "card-image-wrapper",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/trueautonomy.jpg",
                                                alt: "True autonomy",
                                                className: "card-image"
                                            }, void 0, false, {
                                                fileName: "[project]/rezlabs/webV2/src/components/WhyRez.tsx",
                                                lineNumber: 23,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/rezlabs/webV2/src/components/WhyRez.tsx",
                                            lineNumber: 22,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: "True autonomy"
                                        }, void 0, false, {
                                            fileName: "[project]/rezlabs/webV2/src/components/WhyRez.tsx",
                                            lineNumber: 25,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Advanced AI pipelines optimizing strategies in real-time, while you sleep."
                                        }, void 0, false, {
                                            fileName: "[project]/rezlabs/webV2/src/components/WhyRez.tsx",
                                            lineNumber: 26,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/rezlabs/webV2/src/components/WhyRez.tsx",
                                    lineNumber: 21,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/rezlabs/webV2/src/components/WhyRez.tsx",
                                lineNumber: 20,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$components$2f$ui$2f$spotlight$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SpotlightCard"], {
                                className: "feature-box group",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "card-image-wrapper",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/noncustodial.jpg",
                                                alt: "Non-custodial",
                                                className: "card-image"
                                            }, void 0, false, {
                                                fileName: "[project]/rezlabs/webV2/src/components/WhyRez.tsx",
                                                lineNumber: 32,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/rezlabs/webV2/src/components/WhyRez.tsx",
                                            lineNumber: 31,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: "Non-custodial"
                                        }, void 0, false, {
                                            fileName: "[project]/rezlabs/webV2/src/components/WhyRez.tsx",
                                            lineNumber: 34,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Transparent on-chain execution with self custody."
                                        }, void 0, false, {
                                            fileName: "[project]/rezlabs/webV2/src/components/WhyRez.tsx",
                                            lineNumber: 35,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/rezlabs/webV2/src/components/WhyRez.tsx",
                                    lineNumber: 30,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/rezlabs/webV2/src/components/WhyRez.tsx",
                                lineNumber: 29,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/rezlabs/webV2/src/components/WhyRez.tsx",
                        lineNumber: 10,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/rezlabs/webV2/src/components/WhyRez.tsx",
                lineNumber: 8,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/rezlabs/webV2/src/components/WhyRez.tsx",
        lineNumber: 6,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = WhyRez;
}),
"[project]/rezlabs/webV2/src/components/animate-ui/components/backgrounds/hole.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HoleBackground",
    ()=>HoleBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/src/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function HoleBackground({ strokeColor = '#737373', numberOfLines = 50, numberOfDiscs = 50, particleRGBColor = [
    255,
    255,
    255
], className, children, ...props }) {
    const canvasRef = __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const animationFrameIdRef = __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    const stateRef = __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]({
        discs: [],
        lines: [],
        particles: [],
        clip: {},
        startDisc: {},
        endDisc: {},
        rect: {
            width: 0,
            height: 0
        },
        render: {
            width: 0,
            height: 0,
            dpi: 1
        },
        particleArea: {},
        linesCanvas: null
    });
    const linear = (p)=>p;
    const easeInExpo = (p)=>p === 0 ? 0 : Math.pow(2, 10 * (p - 1));
    const tweenValue = __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((start, end, p, ease = null)=>{
        const delta = end - start;
        const easeFn = ease === 'inExpo' ? easeInExpo : linear;
        return start + delta * easeFn(p);
    }, []);
    const tweenDisc = __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((disc)=>{
        const { startDisc, endDisc } = stateRef.current;
        disc.x = tweenValue(startDisc.x, endDisc.x, disc.p);
        disc.y = tweenValue(startDisc.y, endDisc.y, disc.p, 'inExpo');
        disc.w = tweenValue(startDisc.w, endDisc.w, disc.p);
        disc.h = tweenValue(startDisc.h, endDisc.h, disc.p);
    }, [
        tweenValue
    ]);
    const setSize = __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        stateRef.current.rect = {
            width: rect.width,
            height: rect.height
        };
        stateRef.current.render = {
            width: rect.width,
            height: rect.height,
            dpi: window.devicePixelRatio || 1
        };
        canvas.width = stateRef.current.render.width * stateRef.current.render.dpi;
        canvas.height = stateRef.current.render.height * stateRef.current.render.dpi;
    }, []);
    const setDiscs = __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        const { width, height } = stateRef.current.rect;
        stateRef.current.discs = [];
        stateRef.current.startDisc = {
            x: width * 0.5,
            y: height * 0.45,
            w: width * 0.75,
            h: height * 0.7
        };
        stateRef.current.endDisc = {
            x: width * 0.5,
            y: height * 0.95,
            w: 0,
            h: 0
        };
        let prevBottom = height;
        stateRef.current.clip = {};
        for(let i = 0; i < numberOfDiscs; i++){
            const p = i / numberOfDiscs;
            const disc = {
                p,
                x: 0,
                y: 0,
                w: 0,
                h: 0
            };
            tweenDisc(disc);
            const bottom = disc.y + disc.h;
            if (bottom <= prevBottom) {
                stateRef.current.clip = {
                    disc: {
                        ...disc
                    },
                    i
                };
            }
            prevBottom = bottom;
            stateRef.current.discs.push(disc);
        }
        const clipPath = new Path2D();
        const disc = stateRef.current.clip.disc;
        clipPath.ellipse(disc.x, disc.y, disc.w, disc.h, 0, 0, Math.PI * 2);
        clipPath.rect(disc.x - disc.w, 0, disc.w * 2, disc.y);
        stateRef.current.clip.path = clipPath;
    }, [
        numberOfDiscs,
        tweenDisc
    ]);
    const setLines = __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        const { width, height } = stateRef.current.rect;
        stateRef.current.lines = [];
        const linesAngle = Math.PI * 2 / numberOfLines;
        for(let i = 0; i < numberOfLines; i++){
            stateRef.current.lines.push([]);
        }
        stateRef.current.discs.forEach((disc)=>{
            for(let i = 0; i < numberOfLines; i++){
                const angle = i * linesAngle;
                const p = {
                    x: disc.x + Math.cos(angle) * disc.w,
                    y: disc.y + Math.sin(angle) * disc.h
                };
                stateRef.current.lines[i].push(p);
            }
        });
        const offCanvas = document.createElement('canvas');
        offCanvas.width = width;
        offCanvas.height = height;
        const ctx = offCanvas.getContext('2d');
        if (!ctx) return;
        stateRef.current.lines.forEach((line)=>{
            ctx.save();
            let lineIsIn = false;
            line.forEach((p1, j)=>{
                if (j === 0) return;
                const p0 = line[j - 1];
                if (!lineIsIn && (ctx.isPointInPath(stateRef.current.clip.path, p1.x, p1.y) || ctx.isPointInStroke(stateRef.current.clip.path, p1.x, p1.y))) {
                    lineIsIn = true;
                } else if (lineIsIn) {
                    ctx.clip(stateRef.current.clip.path);
                }
                ctx.beginPath();
                ctx.moveTo(p0.x, p0.y);
                ctx.lineTo(p1.x, p1.y);
                ctx.strokeStyle = strokeColor;
                ctx.lineWidth = 2;
                ctx.stroke();
                ctx.closePath();
            });
            ctx.restore();
        });
        stateRef.current.linesCanvas = offCanvas;
    }, [
        numberOfLines,
        strokeColor
    ]);
    const initParticle = __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((start = false)=>{
        const sx = stateRef.current.particleArea.sx + stateRef.current.particleArea.sw * Math.random();
        const ex = stateRef.current.particleArea.ex + stateRef.current.particleArea.ew * Math.random();
        const dx = ex - sx;
        const y = start ? stateRef.current.particleArea.h * Math.random() : stateRef.current.particleArea.h;
        const r = 0.5 + Math.random() * 4;
        const vy = 0.5 + Math.random();
        return {
            x: sx,
            sx,
            dx,
            y,
            vy,
            p: 0,
            r,
            c: `rgba(${particleRGBColor[0]}, ${particleRGBColor[1]}, ${particleRGBColor[2]}, ${Math.random()})`
        };
    }, [
        particleRGBColor
    ]);
    const setParticles = __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        const { width, height } = stateRef.current.rect;
        stateRef.current.particles = [];
        const disc = stateRef.current.clip.disc;
        stateRef.current.particleArea = {
            sw: disc.w * 0.5,
            ew: disc.w * 2,
            h: height * 0.85
        };
        stateRef.current.particleArea.sx = (width - stateRef.current.particleArea.sw) / 2;
        stateRef.current.particleArea.ex = (width - stateRef.current.particleArea.ew) / 2;
        const totalParticles = 100;
        for(let i = 0; i < totalParticles; i++){
            stateRef.current.particles.push(initParticle(true));
        }
    }, [
        initParticle
    ]);
    const drawDiscs = __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((ctx)=>{
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 2;
        const outerDisc = stateRef.current.startDisc;
        ctx.beginPath();
        ctx.ellipse(outerDisc.x, outerDisc.y, outerDisc.w, outerDisc.h, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.closePath();
        stateRef.current.discs.forEach((disc, i)=>{
            if (i % 5 !== 0) return;
            if (disc.w < stateRef.current.clip.disc.w - 5) {
                ctx.save();
                ctx.clip(stateRef.current.clip.path);
            }
            ctx.beginPath();
            ctx.ellipse(disc.x, disc.y, disc.w, disc.h, 0, 0, Math.PI * 2);
            ctx.stroke();
            ctx.closePath();
            if (disc.w < stateRef.current.clip.disc.w - 5) {
                ctx.restore();
            }
        });
    }, [
        strokeColor
    ]);
    const drawLines = __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((ctx)=>{
        if (stateRef.current.linesCanvas) {
            ctx.drawImage(stateRef.current.linesCanvas, 0, 0);
        }
    }, []);
    const drawParticles = __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((ctx)=>{
        ctx.save();
        ctx.clip(stateRef.current.clip.path);
        stateRef.current.particles.forEach((particle)=>{
            ctx.fillStyle = particle.c;
            ctx.beginPath();
            ctx.rect(particle.x, particle.y, particle.r, particle.r);
            ctx.closePath();
            ctx.fill();
        });
        ctx.restore();
    }, []);
    const moveDiscs = __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        stateRef.current.discs.forEach((disc)=>{
            disc.p = (disc.p + 0.001) % 1;
            tweenDisc(disc);
        });
    }, [
        tweenDisc
    ]);
    const moveParticles = __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        stateRef.current.particles.forEach((particle, idx)=>{
            particle.p = 1 - particle.y / stateRef.current.particleArea.h;
            particle.x = particle.sx + particle.dx * particle.p;
            particle.y -= particle.vy;
            if (particle.y < 0) {
                stateRef.current.particles[idx] = initParticle();
            }
        });
    }, [
        initParticle
    ]);
    const tick = __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.scale(stateRef.current.render.dpi, stateRef.current.render.dpi);
        moveDiscs();
        // moveParticles();
        drawDiscs(ctx);
        drawLines(ctx);
        // drawParticles(ctx);
        ctx.restore();
        animationFrameIdRef.current = requestAnimationFrame(tick);
    }, [
        moveDiscs,
        moveParticles,
        drawDiscs,
        drawLines,
        drawParticles
    ]);
    const init = __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        setSize();
        setDiscs();
        setLines();
        setParticles();
    }, [
        setSize,
        setDiscs,
        setLines,
        setParticles
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        init();
        tick();
        const handleResize = ()=>{
            setSize();
            setDiscs();
            setLines();
            setParticles();
        };
        window.addEventListener('resize', handleResize);
        return ()=>{
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameIdRef.current);
        };
    }, [
        init,
        tick,
        setSize,
        setDiscs,
        setLines,
        setParticles
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "hole-background",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('relative size-full overflow-hidden', 'before:content-[""] before:absolute before:top-1/2 before:left-1/2 before:block before:size-[140%] dark:before:[background:radial-gradient(ellipse_at_50%_55%,transparent_10%,black_50%)] before:[background:radial-gradient(ellipse_at_50%_55%,transparent_10%,white_50%)] before:[transform:translate3d(-50%,-50%,0)]', className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "absolute inset-0 block size-full dark:opacity-20 opacity-10"
            }, void 0, false, {
                fileName: "[project]/rezlabs/webV2/src/components/animate-ui/components/backgrounds/hole.tsx",
                lineNumber: 334,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 z-[7] size-full dark:[background:repeating-linear-gradient(transparent,transparent_1px,white_1px,white_2px)] mix-blend-overlay opacity-50"
            }, void 0, false, {
                fileName: "[project]/rezlabs/webV2/src/components/animate-ui/components/backgrounds/hole.tsx",
                lineNumber: 338,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/rezlabs/webV2/src/components/animate-ui/components/backgrounds/hole.tsx",
        lineNumber: 324,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/rezlabs/webV2/src/components/Mission.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$components$2f$animate$2d$ui$2f$components$2f$backgrounds$2f$hole$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/src/components/animate-ui/components/backgrounds/hole.tsx [app-ssr] (ecmascript)");
;
;
const Mission = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "manifesto relative overflow-hidden dark",
        id: "mission",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$components$2f$animate$2d$ui$2f$components$2f$backgrounds$2f$hole$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HoleBackground"], {
                className: "absolute inset-0 z-0"
            }, void 0, false, {
                fileName: "[project]/rezlabs/webV2/src/components/Mission.tsx",
                lineNumber: 6,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "content-wrapper",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "line-one",
                                    children: "The market never sleeps"
                                }, void 0, false, {
                                    fileName: "[project]/rezlabs/webV2/src/components/Mission.tsx",
                                    lineNumber: 10,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "italic-grey",
                                    children: "You do."
                                }, void 0, false, {
                                    fileName: "[project]/rezlabs/webV2/src/components/Mission.tsx",
                                    lineNumber: 11,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/rezlabs/webV2/src/components/Mission.tsx",
                            lineNumber: 9,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "manifesto-content",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Don't let your portfolio pause just because you do. Rez empowers you to deploy non-custodial AI agents that monitor and trade perpetual markets 24/7. Your strategy, our infrastructure, always awake."
                            }, void 0, false, {
                                fileName: "[project]/rezlabs/webV2/src/components/Mission.tsx",
                                lineNumber: 14,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/rezlabs/webV2/src/components/Mission.tsx",
                            lineNumber: 13,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/rezlabs/webV2/src/components/Mission.tsx",
                    lineNumber: 8,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/rezlabs/webV2/src/components/Mission.tsx",
                lineNumber: 7,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/rezlabs/webV2/src/components/Mission.tsx",
        lineNumber: 5,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Mission;
}),
"[project]/rezlabs/webV2/src/components/BigText.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const BigText = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "big-text-container",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "big-text",
            children: "RezLabs"
        }, void 0, false, {
            fileName: "[project]/rezlabs/webV2/src/components/BigText.tsx",
            lineNumber: 6,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/rezlabs/webV2/src/components/BigText.tsx",
        lineNumber: 5,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = BigText;
}),
"[project]/rezlabs/webV2/src/components/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const Footer = ()=>{
    const currentYear = new Date().getFullYear();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "footer",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "footer-top",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "footer-info",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "footer-brand",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/assets/rez.png",
                                            alt: "Rez Logo",
                                            className: "footer-logo"
                                        }, void 0, false, {
                                            fileName: "[project]/rezlabs/webV2/src/components/Footer.tsx",
                                            lineNumber: 12,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: "RezLabs"
                                        }, void 0, false, {
                                            fileName: "[project]/rezlabs/webV2/src/components/Footer.tsx",
                                            lineNumber: 13,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/rezlabs/webV2/src/components/Footer.tsx",
                                    lineNumber: 11,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "footer-description",
                                    children: [
                                        "Automated wealth management for the",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/rezlabs/webV2/src/components/Footer.tsx",
                                            lineNumber: 16,
                                            columnNumber: 64
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "decentralized future."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/rezlabs/webV2/src/components/Footer.tsx",
                                    lineNumber: 15,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/rezlabs/webV2/src/components/Footer.tsx",
                            lineNumber: 10,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "footer-nav-group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "footer-column",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            children: "Socials"
                                        }, void 0, false, {
                                            fileName: "[project]/rezlabs/webV2/src/components/Footer.tsx",
                                            lineNumber: 23,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "footer-link",
                                            children: "Twitter"
                                        }, void 0, false, {
                                            fileName: "[project]/rezlabs/webV2/src/components/Footer.tsx",
                                            lineNumber: 24,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "footer-link",
                                            children: "GitHub"
                                        }, void 0, false, {
                                            fileName: "[project]/rezlabs/webV2/src/components/Footer.tsx",
                                            lineNumber: 25,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/rezlabs/webV2/src/components/Footer.tsx",
                                    lineNumber: 22,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "footer-column",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            children: "Legal"
                                        }, void 0, false, {
                                            fileName: "[project]/rezlabs/webV2/src/components/Footer.tsx",
                                            lineNumber: 28,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "footer-link",
                                            children: "Privacy Policy"
                                        }, void 0, false, {
                                            fileName: "[project]/rezlabs/webV2/src/components/Footer.tsx",
                                            lineNumber: 29,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "footer-link",
                                            children: "Terms of Service"
                                        }, void 0, false, {
                                            fileName: "[project]/rezlabs/webV2/src/components/Footer.tsx",
                                            lineNumber: 30,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "footer-link",
                                            children: "Cookie Policy"
                                        }, void 0, false, {
                                            fileName: "[project]/rezlabs/webV2/src/components/Footer.tsx",
                                            lineNumber: 31,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/rezlabs/webV2/src/components/Footer.tsx",
                                    lineNumber: 27,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/rezlabs/webV2/src/components/Footer.tsx",
                            lineNumber: 21,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/rezlabs/webV2/src/components/Footer.tsx",
                    lineNumber: 9,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "footer-bottom",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "© ",
                                currentYear,
                                " RezLabs. All rights reserved."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/rezlabs/webV2/src/components/Footer.tsx",
                            lineNumber: 37,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "footer-credit",
                            children: "Designed for the future."
                        }, void 0, false, {
                            fileName: "[project]/rezlabs/webV2/src/components/Footer.tsx",
                            lineNumber: 38,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/rezlabs/webV2/src/components/Footer.tsx",
                    lineNumber: 36,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/rezlabs/webV2/src/components/Footer.tsx",
            lineNumber: 8,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/rezlabs/webV2/src/components/Footer.tsx",
        lineNumber: 7,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Footer;
}),
"[project]/rezlabs/webV2/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/lenis/dist/lenis.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/src/components/Navbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$components$2f$Hero$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/src/components/Hero.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$components$2f$WhyRez$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/src/components/WhyRez.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$components$2f$Mission$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/src/components/Mission.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$components$2f$BigText$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/src/components/BigText.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/src/components/Footer.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function Home() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
            duration: 1.2,
            easing: (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2
        });
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        // Integrate Lenis with GSAP ScrollTrigger
        lenis.on('scroll', __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].update);
        __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].ticker.add((time)=>{
            lenis.raf(time * 1000);
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].ticker.lagSmoothing(0);
        return ()=>{
            lenis.destroy();
            __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].ticker.remove(lenis.raf);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "App",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/rezlabs/webV2/src/app/page.tsx",
                lineNumber: 52,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$components$2f$Hero$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/rezlabs/webV2/src/app/page.tsx",
                lineNumber: 53,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$components$2f$WhyRez$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/rezlabs/webV2/src/app/page.tsx",
                lineNumber: 54,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$components$2f$Mission$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/rezlabs/webV2/src/app/page.tsx",
                lineNumber: 55,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$components$2f$BigText$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/rezlabs/webV2/src/app/page.tsx",
                lineNumber: 56,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/rezlabs/webV2/src/app/page.tsx",
                lineNumber: 57,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/rezlabs/webV2/src/app/page.tsx",
        lineNumber: 51,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__eb317170._.js.map