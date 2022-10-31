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
        prefix: "/生活/",
        children: [
            {
                text: "吐槽一下",
                icon: "edit",
                prefix: "吐槽/",
                children: [
                    { text: "广东人的数学有问题", icon: "emoji", link: "广东人的数学有问题" }
                ]
            },
            {
                text: "琐碎小事",
                icon: "edit",
                prefix: "琐碎/",
                children: [
                    { text: "买菜被坑走一套房", icon: "flower", link: "买菜被坑走一套房" }
                ]
            }
        ]
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
                    { text: "VS Code", icon: "vscode", link: "vscode/vscode入门" },
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
    }
]);

