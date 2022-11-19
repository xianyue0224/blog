import { sidebar } from "vuepress-theme-hope";

export default () => sidebar({
    // 在浏览博客文章的时候会展示的侧边栏
    "/posts/": [
        {
            text: "开发工具",
            prefix: "devtool/",
            icon: "tool",
            children: [
                {
                    text: "VS Code",
                    prefix: "vscode/",
                    icon: "vscode",
                    collapsable: true,
                    children: "structure"
                },
                {
                    text: "Chrome",
                    prefix: "chrome/",
                    icon: "chrome",
                    collapsable: true,
                    children: "structure"
                },
            ]
        },
        {
            text: "编程语言",
            prefix: "language/",
            icon: "code",
            children: [
                {
                    text: "JavaScript",
                    prefix: "js/",
                    icon: "javascript",
                    collapsable: true,
                    children: "structure"
                },
                {
                    text: "HTML",
                    prefix: "html/",
                    icon: "html",
                    collapsable: true,
                    children: "structure"
                }
            ]
        },
    ],
    // 在浏览生活内容的时候会展示的侧边栏
    "/生活/": [
        {
            text: "随便唠点啥",
            icon: "flower",
            children: "structure"
        }
    ],
    // 在浏览杂谈板块内容时会展示的侧边栏
    "/other/": [
        {
            text: "杂谈",
            icon: "mesh",
            children: "structure"
        }
    ],
    // 在浏览慕课乐高项目内容时展示的侧边栏
    "/imooc-lego/": [
        {
            text: "项目简介",
            icon: "info",
            link: "brief"
        },
        {
            text: "第一周",
            icon: "note",
            prefix: "week1/",
            collapsable: true,
            children: "structure"
        },
        {
            text: "第二周",
            icon: "note",
            prefix: "week2/",
            collapsable: true,
            children: "structure"
        },
        {
            text: "第三周",
            icon: "note",
            prefix: "week3/",
            collapsable: true,
            children: "structure"
        }
    ]
});
