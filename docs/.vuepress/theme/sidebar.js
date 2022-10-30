import { sidebar } from "vuepress-theme-hope";

export default () => sidebar({
    // 在浏览博客文章的时候会展示的侧边栏
    "/posts/": [
        {
            text: "开发工具",
            prefix: "devtool/",
            icon: "edit",
            children: [
                {
                    text: "VS Code",
                    prefix: "vscode/",
                    icon: "edit",
                    collapsable: true,
                    children: "structure"
                },
                {
                    text: "Chrome",
                    prefix: "chrome/",
                    icon: "edit",
                    collapsable: true,
                    children: [
                        { text: "Chrome 简介", icon: "edit", link: "2" }
                    ]
                },
            ]
        },
        {
            text: "编程语言",
            prefix: "language/",
            icon: "edit",
            children: [
                {
                    text: "JavaScript",
                    prefix: "js/",
                    icon: "edit",
                    collapsable: true,
                    children: [
                        { text: "基础语法", icon: "edit", link: "1" },
                        { text: "数组", icon: "edit", link: "2" },
                    ]
                },
                {
                    text: "HTML",
                    prefix: "html/",
                    icon: "edit",
                    collapsable: true,
                    children: [
                        { text: "常用标签", icon: "edit", link: "1" }
                    ]
                }
            ]
        },
    ],
    // 在浏览生活内容的时候会展示的侧边栏
    "/生活/": [
        {
            text: "吐槽",
            prefix: "吐槽/",
            icon: "edit",
            children: "structure"
        },
        {
            text: "琐碎",
            prefix: "琐碎/",
            icon: "edit",
            children: "structure"
        },
    ]
});
