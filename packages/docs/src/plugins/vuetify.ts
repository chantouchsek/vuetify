// Styles
import 'vuetify/styles'

// Imports
import { camelize, h } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labs from 'vuetify/labs/components'

// Icons
import { fa } from 'vuetify/iconsets/fa'
import { md } from 'vuetify/iconsets/md'
import { mdi } from 'vuetify/iconsets/mdi-svg'
import * as mdiSvg from './icons'

// Locales
import { en, sv } from 'vuetify/locale'

// Types
import type { App } from 'vue'

export function installVuetify (app: App) {
  const vuetify = createVuetify({
    aliases: {
      PageFeatureChip: components.VChip,
      NewInChip: components.VChip,
      SettingsSwitch: components.VSwitch,
    },
    components: {
      ...components,
      ...labs,
    },
    directives,
    defaults: {
      global: {
        eager: false,
      },
      PageFeatureChip: {
        variant: 'tonal',
        border: true,
        class: 'text-medium-emphasis me-2 mb-2',
        size: 'small',
      },
      NewInChip: {
        appendIcon: 'mdi-page-next',
        class: 'ms-2 text-mono',
        color: 'success',
        label: true,
        size: 'small',
        tag: 'div',
        variant: 'flat',

        VIcon: {
          class: 'ms-2',
          size: 'small',
        },
      },
      SettingsSwitch: {
        class: 'ps-1 mb-2',
        color: 'primary',
        density: 'compact',
        inset: true,
        trueIcon: 'mdi-check',
        falseIcon: '$close',
      },
    },
    locale: {
      locale: 'en',
      messages: {
        en,
        sv,
      },
    },
    icons: {
      defaultSet: 'mdi',
      sets: {
        fa,
        md,
        mdiSvg: mdi,
        mdi: {
          component: props => {
            const icon = mdiSvg[camelize(props.icon as string) as keyof typeof mdiSvg]
            return h(components.VSvgIcon, { ...props, icon })
          },
        },
      },
      aliases: {
        /* eslint-disable max-len */
        'vuetify-play': [
          'm6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z',
          ['M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z', 0.6],
        ],
        x: ['M2.04875 3.00002L9.77052 13.3248L1.99998 21.7192H3.74882L10.5519 14.3697L16.0486 21.7192H22L13.8437 10.8137L21.0765 3.00002H19.3277L13.0624 9.76874L8.0001 3.00002H2.04875ZM4.62054 4.28821H7.35461L19.4278 20.4308H16.6937L4.62054 4.28821Z'],
        /* eslint-enable max-len */
      },
    },
    theme: {
      themes: {
        light: {
          colors: {
            'surface-variant-alt': '#dedede',
            primary: '#1867c0',
            secondary: '#5CBBF6',
            tertiary: '#E57373',
            accent: '#005CAF',
            quarternary: '#B0D1E8',
            'surface-bright': '#fafafa',
          },
        },
        dark: {
          colors: {
            'surface-variant-alt': '#333333',
            primary: '#2196F3',
            secondary: '#424242',
            tertiary: '#E57373',
            accent: '#FF4081',
            quarternary: '#B0D1E8',
            'surface-bright': '#474747',
          },
        },
        blackguard: {
          dark: true,
          colors: {
            background: '#0f0c24',
            primary: '#e7810d',
            surface: '#1e184a',
            'on-surface-variant': '#4c219e',
            info: '#9c27b0',
            accent: '#FF4081',
            success: '#84b38a',
            'surface-bright': '#362b89',
          },
          variables: {
            'theme-code': '#15123d',
          },
        },
      },
    },
  })
  app.use(vuetify)
}
