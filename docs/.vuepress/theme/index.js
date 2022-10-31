import { hopeTheme } from "vuepress-theme-hope"
import zhNavbar from "./navbar"
import zhSidebar from "./sidebar"

export default () => hopeTheme({

    // 导航栏配置
    navbar: zhNavbar(),

    // 是否在向下滚动时隐藏顶部导航栏
    navbarAutoHide: "always",

    // 是否在文章结尾显示上一篇的链接
    prevLink: true,

    // 是否在文章结尾显示下一篇的链接
    nextLink: true,

    // 侧边栏配置
    sidebar: zhSidebar(),

    // 是否展示上一次更新时间
    lastUpdated: true,

    // 是否展示页面的贡献者
    contributors: true,

    // 域名
    hostname: "https://taupe-paletas-a7dff4.netlify.app",

    // 作者
    author: {
        name: "闲月✨",
        url: "https://github.com/xianyue0224",
    },

    // iconfont 图标CSS地址
    iconAssets: "iconfont",

    // logo
    logo: "/塞尔达传说/林克.png",

    // 仓库
    repo: "xianyue0224/blog",

    // 文件夹
    docsDir: "docs",

    // 页面信息
    pageInfo: ["Original", "Category", "Tag", "Word", "ReadingTime", "PageView", "Date"],

    blog: {
        name: "闲月",
        description: "面向未来前端开发者一枚。",
        intro: "https://github.com/xianyue0224",
        roundAvatar: true,
        timeline: "生活不止眼前的苟且，还有诗和远方。",
        articleInfo: ["Original", "Date", "PageView", "Category", "Tag"],
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

    // 页脚
    footer: "期待2023年5月12日，塞尔达传说天下无敌！",

    // 是否展示页脚
    displayFooter: true,

    // page meta
    metaLocales: {
        editLink: "在 GitHub 上编辑此页",
    },

    encrypt: {
        config: {
            "/生活/琐碎/买菜被坑走一套房.html": ["xianyue"],
        },
    },

    plugins: {
        blog: {
            autoExcerpt: true,
        },

        // 评论系统
        comment: {
            provider: "Waline",
            serverURL: "https://blog-comment-p3gcubp09-xianyue0224.vercel.app/",
        },

        // 在这里禁用不想要的功能
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

        // 当复制的文本超过指定字符长度（默认100）就自动带上版权信息
        copyright: true
    },
})

