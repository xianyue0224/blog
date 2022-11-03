import { navbar } from "vuepress-theme-hope";

export default () => navbar([
    {
        text: "主页",
        icon: "home",
        link: "/README.md"
    },
    {
        text: "生活碎碎念",
        icon: "discover",
        link: "/生活/README.md"
    },
    {
        text: "博客",
        icon: "blog",
        prefix: "/posts/",
        children: [
            {
                text: "开发工具",
                icon: "edit",
                prefix: "devtool/",
                children: [
                    { text: "VS Code", icon: "vscode", link: "vscode/README.md" },
                    { text: "Chrome", icon: "chrome", link: "chrome/Chrome浏览器常用功能介绍" }
                ],
            },
            {
                text: "编程语言",
                icon: "edit",
                prefix: "language/",
                children: [
                    { text: "Javascript", icon: "javascript", link: "js/基础语法" },
                    { text: "HTML", icon: "html", link: "html/常用标签" }
                ],
            }
        ],
    },
    {
        text: "杂谈",
        icon: "mesh",
        link: "/other/README.md"
    }
]);

