import { navbar } from "vuepress-theme-hope";

export default () => navbar([
    {
        text: "主页",
        icon: "edit",
        link: "/README.md"
    },
    {
        text: "生活",
        icon: "discover",
        prefix: "/生活/",
        children: [
            {
                text: "吐槽",
                icon: "edit",
                prefix: "吐槽/",
                children: [
                    { text: "广东人的数学有问题", icon: "edit", link: "广东人的数学有问题" }
                ]
            },
            {
                text: "琐碎",
                icon: "edit",
                prefix: "琐碎/",
                children: [
                    { text: "买菜被坑走一套房", icon: "edit", link: "买菜被坑走一套房" }
                ]
            }
        ]
    },
    {
        text: "博客",
        icon: "edit",
        prefix: "/posts/",
        children: [
            {
                text: "开发工具",
                icon: "edit",
                prefix: "devtool/",
                children: [
                    { text: "VS Code", icon: "edit", link: "vscode/vscode入门" },
                    { text: "Chrome", icon: "edit", link: "chrome/2" }
                ],
            },
            {
                text: "JS",
                icon: "edit",
                prefix: "language/",
                children: [
                    {
                        text: "基础语法",
                        icon: "edit",
                        link: "js/1",
                    },
                    {
                        text: "数组",
                        icon: "edit",
                        link: "js/2",
                    }
                ],
            },
            { text: "五块钱如何花三天", icon: "edit", link: "五块钱如何花三天" },
            { text: "母猪的产后护理", icon: "edit", link: "母猪的产后护理" },
        ],
    }
]);

