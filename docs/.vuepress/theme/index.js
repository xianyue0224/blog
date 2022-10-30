import { hopeTheme } from "vuepress-theme-hope"
import zhNavbar from "./navbar"
import zhSidebar from "./sidebar"

export default () => hopeTheme({

    // 导航栏配置
    navbar: zhNavbar(),

    // 侧边栏配置
    sidebar: zhSidebar(),

    // 是否展示上一次更新时间
    lastUpdated: true,

    // 是否展示页面的贡献者
    contributors: true,

    hostname: "https://taupe-paletas-a7dff4.netlify.app",

    author: {
        name: "闲月",
        url: "https://github.com/xianyue0224",
    },

    iconAssets: "iconfont",

    logo: "/logo.svg",

    repo: "xianyue0224/blog",

    docsDir: "docs",

    pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

    blog: {
        medias: {
            BiliBili: "https://space.bilibili.com/105418081",
            GitHub: "https://github.com/xianyue0224",
            Gitee: "https://gitee.com/xianyue0224",
            Gmail: "xianyue0224@gmail.com",
            QQ: "1980578544",
            Weibo: "https://weibo.com/u/7205145908",
            Youtube: "https://www.youtube.com/channel/UCh5e9xC0DDAWy9WMUaFQTsQ",
            Zhihu: "https://www.zhihu.com/people/gu-shan-si-bei-44",
        },
    },

    footer: "期待2023年5月12日，塞尔达传说天下无敌！",

    displayFooter: true,

    // page meta
    metaLocales: {
        editLink: "在 GitHub 上编辑此页",
    },

    encrypt: {
        config: {
            "/demo/encrypt.html": ["1234"],
        },
    },

    plugins: {
        blog: {
            autoExcerpt: true,
        },

        // If you don't need comment feature, you can remove following option
        // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
        // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
        comment: {
            /**
             * Using Giscus
             */
            provider: "Giscus",
            repo: "vuepress-theme-hope/giscus-discussions",
            repoId: "R_kgDOG_Pt2A",
            category: "Announcements",
            categoryId: "DIC_kwDOG_Pt2M4COD69",

            /**
             * Using Twikoo
             */
            // provider: "Twikoo",
            // envId: "https://twikoo.ccknbc.vercel.app",

            /**
             * Using Waline
             */
            // provider: "Waline",
            // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
        },

        // Disable features you don't want here
        mdEnhance: {
            align: true,
            attrs: true,
            chart: true,
            codetabs: true,
            container: true,
            demo: true,
            echarts: true,
            flowchart: true,
            gfm: true,
            imageLazyload: true,
            imageTitle: true,
            imageSize: true,
            include: true,
            katex: true,
            mark: true,
            mermaid: true,
            playground: {
                presets: ["ts", "vue"],
            },
            presentation: {
                plugins: ["highlight", "math", "search", "notes", "zoom"],
            },
            stylize: [
                {
                    matcher: "Recommanded",
                    replacer: ({ tag }) => {
                        if (tag === "em")
                            return {
                                tag: "Badge",
                                attrs: { type: "tip" },
                                content: "Recommanded",
                            };
                    },
                },
            ],
            sub: true,
            sup: true,
            tabs: true,
            vpre: true,
            vuePlayground: true,
        },

        pwa: {
            favicon: "/favicon.ico",
            cacheHTML: true,
            cachePic: true,
            appendBase: true,
            apple: {
                icon: "/assets/icon/apple-icon-152.png",
                statusBarColor: "black",
            },
            msTile: {
                image: "/assets/icon/ms-icon-144.png",
                color: "#ffffff",
            },
            manifest: {
                icons: [
                    {
                        src: "/assets/icon/chrome-mask-512.png",
                        sizes: "512x512",
                        purpose: "maskable",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icon/chrome-mask-192.png",
                        sizes: "192x192",
                        purpose: "maskable",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icon/chrome-512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icon/chrome-192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                ],
                shortcuts: [
                    {
                        name: "Demo",
                        short_name: "Demo",
                        url: "/demo/",
                        icons: [
                            {
                                src: "/assets/icon/guide-maskable.png",
                                sizes: "192x192",
                                purpose: "maskable",
                                type: "image/png",
                            },
                            {
                                src: "/assets/icon/guide-monochrome.png",
                                sizes: "192x192",
                                purpose: "monochrome",
                                type: "image/png",
                            },
                        ],
                    },
                ],
            },
        },
    },
})
