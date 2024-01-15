/* eslint-disable @typescript-eslint/no-var-requires */
const daisyui = require("daisyui");
const typography = require("@tailwindcss/typography");
const forms = require("@tailwindcss/forms");
const animated = require('tailwindcss-animated');

/** @type {import('tailwindcss').Config}*/
const config = {
    content: ["./src/**/*.{html,js,svelte,ts}"],

    theme: {
        extend: {}
    },

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    plugins: [forms, typography, daisyui, animated],
    daisyui: {
        themes: ["light", "dark"],
    },
};

module.exports = config;