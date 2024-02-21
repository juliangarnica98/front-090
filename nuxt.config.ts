
import { resolve } from 'path'
import { createCommonJS } from 'mlly'
const { __dirname } = createCommonJS(import.meta.url)

export default defineNuxtConfig({

  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
  imports:{
    dirs:['./stores'],
  },

  hooks: {
    'pages:extend'(pages) {
      pages.push({
        path: '/',
        file: resolve(__dirname, 'pages/auth/login.vue'),
      });
    },
  },

  
  app:{
    head:{
      title:"Project0-90",
      meta:[
        { charset:'utf-8' },
        { name:'viewport',content:'width=device-width,initial-scale=1'},
        { hid:'description',name:'description',content:'A project to create a website for the course Project 0-90.'},
        { name: ' format-detection', content:"thlephone-no"},
      ],
      link:[
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/img/lili.png'
        }
      ],
      script:[
        {
          
        }
      ]
    }
  },
  runtimeConfig: {
    public: {
      NUXT_API_AUTH_LOGIN: process.env.NUXT_API_AUTH_LOGIN,
      NUXT_API_AUTH_LOGOUT: process.env.NUXT_API_AUTH_LOGOUT,
      NUXT_API_AUTH_REGISTER: process.env.NUXT_API_AUTH_REGISTER
    }
  }

})
