// Styles
import 'material-icons/iconfont/material-icons.css';
import 'material-symbols';
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { aliases, md } from 'vuetify/iconsets/md';
import { aliases as mdiAliases, mdi } from 'vuetify/iconsets/mdi';

// Custom aliases
import customAliases from './iconaliases'

// Vuetify
import { createVuetify } from "vuetify";
import { computed } from 'vue'
import { useStore } from 'vuex';

const store = useStore()

const defaultDarkTheme = {
  dark: true,
  colors: {
    primary: "#1E1E1E",
    accent: "#FF4081",
    secondary: "#0F2435",
    success: "#86af3f",
    info: "#f34fc6",
    warning: "#FB8C00",
    error: "#FF5252",
    background: "#000000",
    bodyBackground: "#000000",
    colorsiete: "#86af3f",
    option: "#183958",
  },
};

// Crear y obtener instancia de Vuetify
export function initializeVuetify(theme) {
  const defaultLightTheme = {
    dark: false,
    colors: computed(()=> { return theme }).value
  };

  return createVuetify({
    theme: {
      options: {
        customProperties: true,
      },
      defaultTheme: "defaultLightTheme",
      variations: {
        colors: ["primary", "secondary", "primaryText","error","info","warning","success"],
        lighten: 4,
        darken: 4,
      },
      themes: {
        defaultLightTheme,
        defaultDarkTheme,
      },
    },

    icons: {
      defaultSet: 'mdi',
      aliases: {
        ...customAliases,
        ...aliases,
        ...mdiAliases,
      },
      sets: {
        md,
        mdi
      },
    },
  });
}
