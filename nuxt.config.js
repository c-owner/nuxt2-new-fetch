export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'nuxt-dev-to-clone',
        htmlAttrs: {
            lang: 'ko'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/styles/index.scss'
    ],
    // styleResources: {
    //     scss: ['~/assets/style/tokens.scss']
    // },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/vue-placeholders.ts',
        '~/plugins/vue-observe-visibility.client.ts'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        '@nuxtjs/style-resources',
        '@nuxtjs/svg'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    ackee: {
        server: 'https://ackee.nuxtjs.com',
        domainId: '6336379b-8d3e-4069-9d2e-897be6a7ed4e'
    },
    modules: ['nuxt-ackee'],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
}
