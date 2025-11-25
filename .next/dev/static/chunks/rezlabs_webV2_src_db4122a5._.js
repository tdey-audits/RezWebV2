(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/rezlabs/webV2/src/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$gsap$2f$ScrollToPlugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/gsap/ScrollToPlugin.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$gsap$2f$ScrollToPlugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollToPlugin"]);
const Navbar = ()=>{
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    const isScrolled = window.scrollY > 50;
                    if (isScrolled !== scrolled) {
                        setScrolled(isScrolled);
                    }
                }
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "Navbar.useEffect": ()=>{
                    window.removeEventListener('scroll', handleScroll);
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], [
        scrolled
    ]);
    const scrollToSection = (id)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(window, {
            duration: 1,
            scrollTo: id,
            ease: 'power2.out'
        });
        setMobileMenuOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `navbar ${scrolled ? 'scrolled' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "navbar-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "navbar-left",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "navbar-brand",
                            onClick: ()=>scrollToSection('#hero'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/assets/rez.png",
                                    alt: "Rez Logo",
                                    className: "brand-logo"
                                }, void 0, false, {
                                    fileName: "[project]/rezlabs/webV2/src/components/Navbar.tsx",
                                    lineNumber: 37,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "brand-name",
                                    children: "RezLabs"
                                }, void 0, false, {
                                    fileName: "[project]/rezlabs/webV2/src/components/Navbar.tsx",
                                    lineNumber: 38,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/rezlabs/webV2/src/components/Navbar.tsx",
                            lineNumber: 36,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/rezlabs/webV2/src/components/Navbar.tsx",
                        lineNumber: 35,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "navbar-center desktop-nav",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "navbar-links",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>scrollToSection('#why-rez'),
                                    className: "nav-link",
                                    children: "Why Rez"
                                }, void 0, false, {
                                    fileName: "[project]/rezlabs/webV2/src/components/Navbar.tsx",
                                    lineNumber: 44,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>scrollToSection('#manifesto'),
                                    className: "nav-link",
                                    children: "Manifesto"
                                }, void 0, false, {
                                    fileName: "[project]/rezlabs/webV2/src/components/Navbar.tsx",
                                    lineNumber: 45,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://github.com/0xtdey/rezlitepaper/blob/main/Rez_Litepaper.pdf",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "nav-link",
                                    children: "Litepaper"
                                }, void 0, false, {
                                    fileName: "[project]/rezlabs/webV2/src/components/Navbar.tsx",
                                    lineNumber: 46,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/rezlabs/webV2/src/components/Navbar.tsx",
                            lineNumber: 43,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/rezlabs/webV2/src/components/Navbar.tsx",
                        lineNumber: 42,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "navbar-right desktop-nav",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://b34bvolr4xazf2byeqkv3u.streamlit.app/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "btn btn-sm btn-light launch-app-btn",
                            children: "Try Beta"
                        }, void 0, false, {
                            fileName: "[project]/rezlabs/webV2/src/components/Navbar.tsx",
                            lineNumber: 51,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/rezlabs/webV2/src/components/Navbar.tsx",
                        lineNumber: 50,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`,
                        onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                        "aria-label": "Toggle menu",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `hamburger ${mobileMenuOpen ? 'open' : ''}`
                        }, void 0, false, {
                            fileName: "[project]/rezlabs/webV2/src/components/Navbar.tsx",
                            lineNumber: 59,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/rezlabs/webV2/src/components/Navbar.tsx",
                        lineNumber: 54,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/rezlabs/webV2/src/components/Navbar.tsx",
                lineNumber: 34,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `mobile-nav ${mobileMenuOpen ? 'open' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>scrollToSection('#why-rez'),
                        className: "nav-link",
                        children: "Why Rez"
                    }, void 0, false, {
                        fileName: "[project]/rezlabs/webV2/src/components/Navbar.tsx",
                        lineNumber: 65,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>scrollToSection('#manifesto'),
                        className: "nav-link",
                        children: "Manifesto"
                    }, void 0, false, {
                        fileName: "[project]/rezlabs/webV2/src/components/Navbar.tsx",
                        lineNumber: 68,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://github.com/0xtdey/rezlitepaper/blob/main/Rez_Litepaper.pdf",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "nav-link",
                        children: "Litepaper"
                    }, void 0, false, {
                        fileName: "[project]/rezlabs/webV2/src/components/Navbar.tsx",
                        lineNumber: 71,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/rezlabs/webV2/src/components/Navbar.tsx",
                lineNumber: 64,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/rezlabs/webV2/src/components/Navbar.tsx",
        lineNumber: 33,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Navbar, "NqmbluxoEaGq8zA44dCGrohDScQ=");
_c = Navbar;
const __TURBOPACK__default__export__ = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/rezlabs/webV2/src/components/Ticker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Ticker = ()=>{
    const tickers = [
        {
            symbol: 'BTC',
            price: '$98,432.10',
            change: '+2.4%'
        },
        {
            symbol: 'ETH',
            price: '$3,892.45',
            change: '+1.8%'
        },
        {
            symbol: 'SOL',
            price: '$145.20',
            change: '+4.2%'
        },
        {
            symbol: 'AVAX',
            price: '$42.15',
            change: '+0.5%'
        },
        {
            symbol: 'LINK',
            price: '$18.90',
            change: '-0.2%'
        },
        {
            symbol: 'DOT',
            price: '$8.45',
            change: '+1.1%'
        },
        {
            symbol: 'MATIC',
            price: '$0.92',
            change: '+0.8%'
        },
        {
            symbol: 'UNI',
            price: '$12.30',
            change: '+3.5%'
        },
        {
            symbol: 'AAVE',
            price: '$110.50',
            change: '-1.2%'
        },
        {
            symbol: 'MKR',
            price: '$2,450.00',
            change: '+0.9%'
        }
    ];
    // Duplicate the list to ensure seamless scrolling
    const displayTickers = [
        ...tickers,
        ...tickers
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "ticker-wrap",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "ticker",
            children: displayTickers.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ticker-item",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "ticker-symbol",
                            children: item.symbol
                        }, void 0, false, {
                            fileName: "[project]/rezlabs/webV2/src/components/Ticker.tsx",
                            lineNumber: 25,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "ticker-price",
                            children: item.price
                        }, void 0, false, {
                            fileName: "[project]/rezlabs/webV2/src/components/Ticker.tsx",
                            lineNumber: 26,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `ticker-change ${item.change.startsWith('+') ? 'positive' : 'negative'}`,
                            children: item.change
                        }, void 0, false, {
                            fileName: "[project]/rezlabs/webV2/src/components/Ticker.tsx",
                            lineNumber: 27,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, index, true, {
                    fileName: "[project]/rezlabs/webV2/src/components/Ticker.tsx",
                    lineNumber: 24,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/rezlabs/webV2/src/components/Ticker.tsx",
            lineNumber: 22,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/rezlabs/webV2/src/components/Ticker.tsx",
        lineNumber: 21,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Ticker;
const __TURBOPACK__default__export__ = Ticker;
var _c;
__turbopack_context__.k.register(_c, "Ticker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/rezlabs/webV2/src/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$components$2f$Ticker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/src/components/Ticker.tsx [app-client] (ecmascript)");
;
;
const Hero = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "hero",
        id: "hero",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container hero-content",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hero-text",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "hero-title",
                            children: [
                                "The Future of Perps",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/rezlabs/webV2/src/components/Hero.tsx",
                                    lineNumber: 10,
                                    columnNumber: 44
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "italic bg-gradient-to-r from-gray-500 to-gray-900 bg-clip-text text-transparent",
                                    children: "is Autonomous"
                                }, void 0, false, {
                                    fileName: "[project]/rezlabs/webV2/src/components/Hero.tsx",
                                    lineNumber: 11,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/rezlabs/webV2/src/components/Hero.tsx",
                            lineNumber: 9,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "hero-subtitle",
                            children: "Rez is a non-custodial platform that automates perpetual trading using AI agents."
                        }, void 0, false, {
                            fileName: "[project]/rezlabs/webV2/src/components/Hero.tsx",
                            lineNumber: 13,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hero-buttons",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://b34bvolr4xazf2byeqkv3u.streamlit.app/",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "btn btn-primary",
                                    children: "Try Beta"
                                }, void 0, false, {
                                    fileName: "[project]/rezlabs/webV2/src/components/Hero.tsx",
                                    lineNumber: 17,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://github.com/0xtdey/rezlitepaper/blob/main/Rez_Litepaper.pdf",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "btn btn-secondary",
                                    children: "Read Litepaper"
                                }, void 0, false, {
                                    fileName: "[project]/rezlabs/webV2/src/components/Hero.tsx",
                                    lineNumber: 18,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/rezlabs/webV2/src/components/Hero.tsx",
                            lineNumber: 16,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/rezlabs/webV2/src/components/Hero.tsx",
                    lineNumber: 8,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/rezlabs/webV2/src/components/Hero.tsx",
                lineNumber: 7,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-ticker",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$components$2f$Ticker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/rezlabs/webV2/src/components/Hero.tsx",
                    lineNumber: 23,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/rezlabs/webV2/src/components/Hero.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/rezlabs/webV2/src/components/Hero.tsx",
        lineNumber: 6,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Hero;
const __TURBOPACK__default__export__ = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/rezlabs/webV2/src/components/WhyRez.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const WhyRez = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "why-rez",
        id: "why-rez",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "content-wrapper",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: "Why Rez ?"
                }, void 0, false, {
                    fileName: "[project]/rezlabs/webV2/src/components/WhyRez.tsx",
                    lineNumber: 7,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "why-rez-grid",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "feature-box",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "icon-wrapper",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: 1.5,
                                        stroke: "currentColor",
                                        className: "feature-icon",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                                        }, void 0, false, {
                                            fileName: "[project]/rezlabs/webV2/src/components/WhyRez.tsx",
                                            lineNumber: 12,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/rezlabs/webV2/src/components/WhyRez.tsx",
                                        lineNumber: 11,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/rezlabs/webV2/src/components/WhyRez.tsx",
                                    lineNumber: 10,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: "One-click setup"
                                }, void 0, false, {
                                    fileName: "[project]/rezlabs/webV2/src/components/WhyRez.tsx",
                                    lineNumber: 15,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Deposit, select risk, and go. Institutional-grade trading made accessible to everyone."
                                }, void 0, false, {
                                    fileName: "[project]/rezlabs/webV2/src/components/WhyRez.tsx",
                                    lineNumber: 16,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/rezlabs/webV2/src/components/WhyRez.tsx",
                            lineNumber: 9,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "feature-box",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "icon-wrapper",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: 1.5,
                                        stroke: "currentColor",
                                        className: "feature-icon",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                        }, void 0, false, {
                                            fileName: "[project]/rezlabs/webV2/src/components/WhyRez.tsx",
                                            lineNumber: 21,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/rezlabs/webV2/src/components/WhyRez.tsx",
                                        lineNumber: 20,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/rezlabs/webV2/src/components/WhyRez.tsx",
                                    lineNumber: 19,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: "True autonomy"
                                }, void 0, false, {
                                    fileName: "[project]/rezlabs/webV2/src/components/WhyRez.tsx",
                                    lineNumber: 24,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Advanced AI pipelines optimizing strategies in real-time, while you sleep."
                                }, void 0, false, {
                                    fileName: "[project]/rezlabs/webV2/src/components/WhyRez.tsx",
                                    lineNumber: 25,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/rezlabs/webV2/src/components/WhyRez.tsx",
                            lineNumber: 18,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "feature-box",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "icon-wrapper",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: 1.5,
                                        stroke: "currentColor",
                                        className: "feature-icon",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                        }, void 0, false, {
                                            fileName: "[project]/rezlabs/webV2/src/components/WhyRez.tsx",
                                            lineNumber: 30,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/rezlabs/webV2/src/components/WhyRez.tsx",
                                        lineNumber: 29,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/rezlabs/webV2/src/components/WhyRez.tsx",
                                    lineNumber: 28,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: "Non-custodial"
                                }, void 0, false, {
                                    fileName: "[project]/rezlabs/webV2/src/components/WhyRez.tsx",
                                    lineNumber: 33,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Transparent on-chain execution with self custody."
                                }, void 0, false, {
                                    fileName: "[project]/rezlabs/webV2/src/components/WhyRez.tsx",
                                    lineNumber: 34,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/rezlabs/webV2/src/components/WhyRez.tsx",
                            lineNumber: 27,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/rezlabs/webV2/src/components/WhyRez.tsx",
                    lineNumber: 8,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/rezlabs/webV2/src/components/WhyRez.tsx",
            lineNumber: 6,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/rezlabs/webV2/src/components/WhyRez.tsx",
        lineNumber: 5,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = WhyRez;
const __TURBOPACK__default__export__ = WhyRez;
var _c;
__turbopack_context__.k.register(_c, "WhyRez");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/rezlabs/webV2/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/rezlabs/webV2/src/components/animate-ui/components/backgrounds/hole.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HoleBackground",
    ()=>HoleBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function HoleBackground({ strokeColor = '#737373', numberOfLines = 50, numberOfDiscs = 50, particleRGBColor = [
    255,
    255,
    255
], className, children, ...props }) {
    _s();
    const canvasRef = __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const animationFrameIdRef = __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](0);
    const stateRef = __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]({
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
    const tweenValue = __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "HoleBackground.useCallback[tweenValue]": (start, end, p, ease = null)=>{
            const delta = end - start;
            const easeFn = ease === 'inExpo' ? easeInExpo : linear;
            return start + delta * easeFn(p);
        }
    }["HoleBackground.useCallback[tweenValue]"], []);
    const tweenDisc = __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "HoleBackground.useCallback[tweenDisc]": (disc)=>{
            const { startDisc, endDisc } = stateRef.current;
            disc.x = tweenValue(startDisc.x, endDisc.x, disc.p);
            disc.y = tweenValue(startDisc.y, endDisc.y, disc.p, 'inExpo');
            disc.w = tweenValue(startDisc.w, endDisc.w, disc.p);
            disc.h = tweenValue(startDisc.h, endDisc.h, disc.p);
        }
    }["HoleBackground.useCallback[tweenDisc]"], [
        tweenValue
    ]);
    const setSize = __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "HoleBackground.useCallback[setSize]": ()=>{
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
        }
    }["HoleBackground.useCallback[setSize]"], []);
    const setDiscs = __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "HoleBackground.useCallback[setDiscs]": ()=>{
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
        }
    }["HoleBackground.useCallback[setDiscs]"], [
        numberOfDiscs,
        tweenDisc
    ]);
    const setLines = __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "HoleBackground.useCallback[setLines]": ()=>{
            const { width, height } = stateRef.current.rect;
            stateRef.current.lines = [];
            const linesAngle = Math.PI * 2 / numberOfLines;
            for(let i = 0; i < numberOfLines; i++){
                stateRef.current.lines.push([]);
            }
            stateRef.current.discs.forEach({
                "HoleBackground.useCallback[setLines]": (disc)=>{
                    for(let i = 0; i < numberOfLines; i++){
                        const angle = i * linesAngle;
                        const p = {
                            x: disc.x + Math.cos(angle) * disc.w,
                            y: disc.y + Math.sin(angle) * disc.h
                        };
                        stateRef.current.lines[i].push(p);
                    }
                }
            }["HoleBackground.useCallback[setLines]"]);
            const offCanvas = document.createElement('canvas');
            offCanvas.width = width;
            offCanvas.height = height;
            const ctx = offCanvas.getContext('2d');
            if (!ctx) return;
            stateRef.current.lines.forEach({
                "HoleBackground.useCallback[setLines]": (line)=>{
                    ctx.save();
                    let lineIsIn = false;
                    line.forEach({
                        "HoleBackground.useCallback[setLines]": (p1, j)=>{
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
                        }
                    }["HoleBackground.useCallback[setLines]"]);
                    ctx.restore();
                }
            }["HoleBackground.useCallback[setLines]"]);
            stateRef.current.linesCanvas = offCanvas;
        }
    }["HoleBackground.useCallback[setLines]"], [
        numberOfLines,
        strokeColor
    ]);
    const initParticle = __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "HoleBackground.useCallback[initParticle]": (start = false)=>{
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
        }
    }["HoleBackground.useCallback[initParticle]"], [
        particleRGBColor
    ]);
    const setParticles = __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "HoleBackground.useCallback[setParticles]": ()=>{
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
        }
    }["HoleBackground.useCallback[setParticles]"], [
        initParticle
    ]);
    const drawDiscs = __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "HoleBackground.useCallback[drawDiscs]": (ctx)=>{
            ctx.strokeStyle = strokeColor;
            ctx.lineWidth = 2;
            const outerDisc = stateRef.current.startDisc;
            ctx.beginPath();
            ctx.ellipse(outerDisc.x, outerDisc.y, outerDisc.w, outerDisc.h, 0, 0, Math.PI * 2);
            ctx.stroke();
            ctx.closePath();
            stateRef.current.discs.forEach({
                "HoleBackground.useCallback[drawDiscs]": (disc, i)=>{
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
                }
            }["HoleBackground.useCallback[drawDiscs]"]);
        }
    }["HoleBackground.useCallback[drawDiscs]"], [
        strokeColor
    ]);
    const drawLines = __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "HoleBackground.useCallback[drawLines]": (ctx)=>{
            if (stateRef.current.linesCanvas) {
                ctx.drawImage(stateRef.current.linesCanvas, 0, 0);
            }
        }
    }["HoleBackground.useCallback[drawLines]"], []);
    const drawParticles = __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "HoleBackground.useCallback[drawParticles]": (ctx)=>{
            ctx.save();
            ctx.clip(stateRef.current.clip.path);
            stateRef.current.particles.forEach({
                "HoleBackground.useCallback[drawParticles]": (particle)=>{
                    ctx.fillStyle = particle.c;
                    ctx.beginPath();
                    ctx.rect(particle.x, particle.y, particle.r, particle.r);
                    ctx.closePath();
                    ctx.fill();
                }
            }["HoleBackground.useCallback[drawParticles]"]);
            ctx.restore();
        }
    }["HoleBackground.useCallback[drawParticles]"], []);
    const moveDiscs = __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "HoleBackground.useCallback[moveDiscs]": ()=>{
            stateRef.current.discs.forEach({
                "HoleBackground.useCallback[moveDiscs]": (disc)=>{
                    disc.p = (disc.p + 0.001) % 1;
                    tweenDisc(disc);
                }
            }["HoleBackground.useCallback[moveDiscs]"]);
        }
    }["HoleBackground.useCallback[moveDiscs]"], [
        tweenDisc
    ]);
    const moveParticles = __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "HoleBackground.useCallback[moveParticles]": ()=>{
            stateRef.current.particles.forEach({
                "HoleBackground.useCallback[moveParticles]": (particle, idx)=>{
                    particle.p = 1 - particle.y / stateRef.current.particleArea.h;
                    particle.x = particle.sx + particle.dx * particle.p;
                    particle.y -= particle.vy;
                    if (particle.y < 0) {
                        stateRef.current.particles[idx] = initParticle();
                    }
                }
            }["HoleBackground.useCallback[moveParticles]"]);
        }
    }["HoleBackground.useCallback[moveParticles]"], [
        initParticle
    ]);
    const tick = __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "HoleBackground.useCallback[tick]": ()=>{
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
        }
    }["HoleBackground.useCallback[tick]"], [
        moveDiscs,
        moveParticles,
        drawDiscs,
        drawLines,
        drawParticles
    ]);
    const init = __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "HoleBackground.useCallback[init]": ()=>{
            setSize();
            setDiscs();
            setLines();
            setParticles();
        }
    }["HoleBackground.useCallback[init]"], [
        setSize,
        setDiscs,
        setLines,
        setParticles
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "HoleBackground.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            init();
            tick();
            const handleResize = {
                "HoleBackground.useEffect.handleResize": ()=>{
                    setSize();
                    setDiscs();
                    setLines();
                    setParticles();
                }
            }["HoleBackground.useEffect.handleResize"];
            window.addEventListener('resize', handleResize);
            return ({
                "HoleBackground.useEffect": ()=>{
                    window.removeEventListener('resize', handleResize);
                    cancelAnimationFrame(animationFrameIdRef.current);
                }
            })["HoleBackground.useEffect"];
        }
    }["HoleBackground.useEffect"], [
        init,
        tick,
        setSize,
        setDiscs,
        setLines,
        setParticles
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "hole-background",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('relative size-full overflow-hidden', 'before:content-[""] before:absolute before:top-1/2 before:left-1/2 before:block before:size-[140%] dark:before:[background:radial-gradient(ellipse_at_50%_55%,transparent_10%,black_50%)] before:[background:radial-gradient(ellipse_at_50%_55%,transparent_10%,white_50%)] before:[transform:translate3d(-50%,-50%,0)]', className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "absolute inset-0 block size-full dark:opacity-20 opacity-10"
            }, void 0, false, {
                fileName: "[project]/rezlabs/webV2/src/components/animate-ui/components/backgrounds/hole.tsx",
                lineNumber: 334,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s(HoleBackground, "QAc1bSpt51yp0mAijG86edyp/W0=");
_c = HoleBackground;
;
var _c;
__turbopack_context__.k.register(_c, "HoleBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/rezlabs/webV2/src/components/Manifesto.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$components$2f$animate$2d$ui$2f$components$2f$backgrounds$2f$hole$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/src/components/animate-ui/components/backgrounds/hole.tsx [app-client] (ecmascript)");
;
;
const Manifesto = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "manifesto relative overflow-hidden dark",
        id: "manifesto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$components$2f$animate$2d$ui$2f$components$2f$backgrounds$2f$hole$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoleBackground"], {
                className: "absolute inset-0 z-0"
            }, void 0, false, {
                fileName: "[project]/rezlabs/webV2/src/components/Manifesto.tsx",
                lineNumber: 6,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "content-wrapper",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "line-one",
                                    children: "The market never sleeps"
                                }, void 0, false, {
                                    fileName: "[project]/rezlabs/webV2/src/components/Manifesto.tsx",
                                    lineNumber: 10,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "italic-grey",
                                    children: "You do."
                                }, void 0, false, {
                                    fileName: "[project]/rezlabs/webV2/src/components/Manifesto.tsx",
                                    lineNumber: 11,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/rezlabs/webV2/src/components/Manifesto.tsx",
                            lineNumber: 9,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "manifesto-content",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Don't let your portfolio pause just because you do. Rez empowers you to deploy non-custodial AI agents that monitor and trade perpetual markets 24/7. Your strategy, our infrastructure, always awake."
                            }, void 0, false, {
                                fileName: "[project]/rezlabs/webV2/src/components/Manifesto.tsx",
                                lineNumber: 14,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/rezlabs/webV2/src/components/Manifesto.tsx",
                            lineNumber: 13,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/rezlabs/webV2/src/components/Manifesto.tsx",
                    lineNumber: 8,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/rezlabs/webV2/src/components/Manifesto.tsx",
                lineNumber: 7,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/rezlabs/webV2/src/components/Manifesto.tsx",
        lineNumber: 5,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Manifesto;
const __TURBOPACK__default__export__ = Manifesto;
var _c;
__turbopack_context__.k.register(_c, "Manifesto");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/rezlabs/webV2/src/components/BigText.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const BigText = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "big-text-container",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_c = BigText;
const __TURBOPACK__default__export__ = BigText;
var _c;
__turbopack_context__.k.register(_c, "BigText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/rezlabs/webV2/src/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Footer = ()=>{
    const currentYear = new Date().getFullYear();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "footer",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "footer-top",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "footer-info",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "footer-brand",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/assets/rez.png",
                                            alt: "Rez Logo",
                                            className: "footer-logo"
                                        }, void 0, false, {
                                            fileName: "[project]/rezlabs/webV2/src/components/Footer.tsx",
                                            lineNumber: 12,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "footer-description",
                                    children: [
                                        "Automated wealth management for the",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "footer-nav-group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "footer-column",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            children: "Socials"
                                        }, void 0, false, {
                                            fileName: "[project]/rezlabs/webV2/src/components/Footer.tsx",
                                            lineNumber: 23,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "footer-link",
                                            children: "Twitter"
                                        }, void 0, false, {
                                            fileName: "[project]/rezlabs/webV2/src/components/Footer.tsx",
                                            lineNumber: 24,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "footer-column",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            children: "Legal"
                                        }, void 0, false, {
                                            fileName: "[project]/rezlabs/webV2/src/components/Footer.tsx",
                                            lineNumber: 28,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "footer-link",
                                            children: "Privacy Policy"
                                        }, void 0, false, {
                                            fileName: "[project]/rezlabs/webV2/src/components/Footer.tsx",
                                            lineNumber: 29,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "footer-link",
                                            children: "Terms of Service"
                                        }, void 0, false, {
                                            fileName: "[project]/rezlabs/webV2/src/components/Footer.tsx",
                                            lineNumber: 30,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "footer-bottom",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
_c = Footer;
const __TURBOPACK__default__export__ = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/rezlabs/webV2/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/lenis/dist/lenis.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/src/components/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$components$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/src/components/Hero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$components$2f$WhyRez$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/src/components/WhyRez.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$components$2f$Manifesto$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/src/components/Manifesto.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$components$2f$BigText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/src/components/BigText.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rezlabs/webV2/src/components/Footer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
__TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function Home() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                duration: 1.2,
                easing: {
                    "Home.useEffect": (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t))
                }["Home.useEffect"],
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
            lenis.on('scroll', __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].update);
            __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].ticker.add({
                "Home.useEffect": (time)=>{
                    lenis.raf(time * 1000);
                }
            }["Home.useEffect"]);
            __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].ticker.lagSmoothing(0);
            return ({
                "Home.useEffect": ()=>{
                    lenis.destroy();
                    __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].ticker.remove(lenis.raf);
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "App",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/rezlabs/webV2/src/app/page.tsx",
                lineNumber: 52,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$components$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/rezlabs/webV2/src/app/page.tsx",
                lineNumber: 53,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$components$2f$WhyRez$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/rezlabs/webV2/src/app/page.tsx",
                lineNumber: 54,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$components$2f$Manifesto$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/rezlabs/webV2/src/app/page.tsx",
                lineNumber: 55,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$components$2f$BigText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/rezlabs/webV2/src/app/page.tsx",
                lineNumber: 56,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rezlabs$2f$webV2$2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
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
_s(Home, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=rezlabs_webV2_src_db4122a5._.js.map