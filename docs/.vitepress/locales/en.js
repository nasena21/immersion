import {
    site,
    descriptionEN
} from "../meta.js";
import pkg from "../../../package.json";
export default {
    title: 'Na Sena',
    description: descriptionEN,
    themeConfig: {
        nav: [
            {
                text: 'Guide',
                link: '/guide/what-is-immersion',
                activeMatch: '/guide/',
            },
            {
                text: 'Reference',
                link: '/reference/config',
                activeMatch: '/reference/',
            },
            {
                text: 'Blog',
                activeMatch: '/blog/',
                items: [
                    {
                        text: 'Blog Home',
                        link: '/blog/',
                        activeMatch: '/blog/$',
                    },
                    {
                        text: 'Tags',
                        link: '/blog/tags',
                        activeMatch: '/blog/tags',
                    },
                    {
                        text: 'Archives',
                        link: '/blog/archives',
                        activeMatch: '/blog/archives',
                    },
                    // {
                    //   text: 'RSS Feed',
                    //   link: '/blog/feed.rss',
                    // },
                ],
            },
        ],

        sidebar: {
            '/guide/': sidebarGuide(),
            '/resources/': sidebarGuide(),
            '/community/': sidebarGuide(),
            '/reference/': sidebarReference(),
        },

        docFooter: {
            prev: 'Previous page',
            next: 'Next page',
        },
        returnToTopLabel: 'Return to top',
        outlineTitle: 'On this page',
        darkModeSwitchLabel: 'Appearance',
        sidebarMenuLabel: 'Menu',
        lastUpdatedText: 'Last updated',
        search: {
            provider: 'local',
        },
        footer: {
            copyright: `MIT Licensed | Copyright © 2025-${new Date().getFullYear()} <a target="_blank" href="https://github.com/nasena21">Na Sena</a>`,
        },
    },
    head: [
        ['meta', { property: 'og:description', content: descriptionEN }],
        ['meta', { property: 'og:url', content: site }],
        ['meta', { property: 'og:locale', content: 'en_US' }],
    ],


};


function sidebarGuide() {
    return [
        {
            text: 'Introduction',
            collapsed: false,
            items: [
                { text: 'Welcome', link: '/guide/welcome' },
                { text: 'Mindset dan Motivasi', link: '/guide/mindset-motivasi' },
                { text: 'Beginner Mistakes', link: '/guide/beginner-mistake' },
                { text: 'What is Immersion?', link: '/guide/what-is-immersion' },
                { text: 'Getting Started', link: '/guide/getting-started' },
                { text: 'FAQ', link: '/guide/faq' },
                { text: 'Credits', link: '/guide/credits' },
            ],
        },
        {
            text: 'Core Guide',
            collapsed: false,
            items: [
                { text: 'Learning Stages', link: '/guide/learning-stages' },
                { text: 'Introduction', link: '/guide/introduction' },
                { text: 'Kana', link: '/guide/kana' },
                { text: 'Kanji', link: '/guide/kanji' },
                { text: 'Vocabulary & Sentence Mining', link: '/guide/vocab-sentence-mining' },
                { text: 'Grammar', link: '/guide/grammar' },
                { text: 'Immersion', link: '/guide/immersion' },
                { text: 'Listening Practice', link: '/guide/listening' },
                { text: 'Reading Practice', link: '/guide/reading' },
                { text: 'Speaking & Output', link: '/guide/speaking-output' },
                { text: 'Immersion Tools', link: '/guide/tools' },
            ],
        },
        {
            text: 'Resources',
            collapsed: false,
            items: [
                { text: 'Anime & Manga', link: '/resources/anime-manga' },
                { text: 'Podcasts & YouTube', link: '/resources/podcasts-youtube' },
                { text: 'Reading Materials', link: '/resources/reading' },
                { text: 'Dictionaries', link: '/resources/dictionaries' },
                { text: 'Software Tools', link: '/resources/software' },
            ],
        },
        {
            text: 'Community',
            collapsed: false,
            items: [
                { text: 'Join the Discord', link: '/community/discord' },
                { text: 'How to Get Help', link: '/community/help' },
            ],
        },
        {
            text: 'Config & API Reference',
            link: '/reference/config',
        },
    ];
}


function sidebarReference() {
    return [
        {
            text: 'Reference',
            items: [
                { text: 'Site Config', link: '/reference/config' },
                { text: 'Tailwind', link: '/reference/tailwind' },
                { text: 'Icons', link: '/reference/icons' },
            ],
        },
    ];
}
