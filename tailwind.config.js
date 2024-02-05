/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    themes: ['dark','light','cupcake','bumblebee','emerald','corporate','synthwave','retro','cyberpunk'],
  },

}

