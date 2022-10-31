import { defineUserConfig } from "vuepress"
import hopeTheme from "./theme/index"
import { searchPlugin } from "@vuepress/plugin-search"

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",

  title: "闲月✨",

  description: "一个前端工程师，喜欢玩塞尔达传说。",

  theme: hopeTheme(),

  shouldPrefetch: false,

  plugins: [
    searchPlugin({})
  ]
})
