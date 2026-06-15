import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Mango",
    description: "A MD Site",
    head: [['link', {rel: 'icon', href: '/logo.png'}]],
    themeConfig: {
        logo: '/logo.png',
        // md目录配置
        outlineTitle: '目录',
        outline: [2, 6],

        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: '首页', link: '/'},
            {
                text: '示例', items: [
                    {text: 'Markdown Examples', link: '/markdown-examples'},
                    {text: 'Runtime API Examples', link: '/api-examples'}
                ]
            }
        ],

        sidebar: [
            {
                text: '示例',
                items: [
                    {text: 'Markdown', link: '/markdown-examples'},
                    {text: 'Runtime API', link: '/api-examples'}
                ]
            }
        ],
        // 关闭侧边栏
        // sidebar: false,
        // aside: "left",


        socialLinks: [
            {icon: 'github', link: 'https://github.com/zhaoruiyang97'}
        ],

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2020-present zhaory'
        },

        search: {
            provider: 'local',
            options: {
                translations: {
                    button: {
                        buttonText: '搜索',
                        buttonAriaLabel: '搜索'
                    },
                    modal: {
                        noResultsText: '无法找到结果',
                        resetButtonTitle: '清除',
                        footer: {
                            selectText: '选择',
                            navigateText: '切换',
                        }
                    }
                }
            }
        },
    }
})
