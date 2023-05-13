/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./component/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        "dashboard-bg": "#F1F1F1",
        "payment-pending": "#6FC2D0",
        darkBlue: "#212944",
        main: "#1b8a4b",
        "main-bg": "#212944",
        "main-shadow": "#1b8a4b42",
        "main-hover": "#0c4525",
        "main-hover-shadow": "#0c452555",
        primary: "#1b8a4b",
        secondary: "#7360ff",
        third: "#4bc550",
        fourth: "#f85c70",
        fifth: "#e42828",
        sixth: "#ffab01",
        seventh: "#ffad08",
        eighth: "#3b5998",
        ninth: "#16b9a8",
        tenth: "#dd2a7b",
        eleventh: "#007bb5",
        twelfth: "#ea4335",
        thirteenth: "#466ca9",
        fourteenth: "#dd4b39",
        fifteenth: "#55acee",
        sixteenth: "#0077b5",
        seventeenth: "#e4405f",
        test: "rgb (161 161 161 50%)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("daisyui")],
};

// --blue: var(--main);
//   --indigo: #6610f2;
//   --purple: #6f42c1;
//   --pink: #e83e8c;
//   --red: #dc3545;
//   --orange: #fd7e14;
//   --yellow: #ffc107;
//   --green: #28a745;
//   --teal: #20c997;
//   --cyan: #17a2b8;
//   --white: #fff;
//   --gray: #6c757d;
//   --gray-dark: #343a40;
//   --primary: #1b8a4b;
//   --success: #28a745;
//   --info: #17a2b8;
//   --warning: #ffc107;
//   --danger: #dc3545;
//   --light: #f8f9fa;
//   --dark: #343a40;
//   --breakpoint-xs: 0;
//   --breakpoint-sm: 576px;
//   --breakpoint-md: 768px;
//   --breakpoint-lg: 992px;
//   --breakpoint-xl: 1200px;
//   --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI",
//     Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
//     "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
//   --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
//     "Liberation Mono", "Courier New", monospace;
//   --font-family: "Poppins", sans-serif;
//   --main: #1b8a4b;
//   --main-shadow: #1b8a4b42;
//   --main-hover: #0c4525;
//   --main-hover-shadow: #0c452555;
//   --secondary: #7360ff;
//   /* --third: #4bc550; */
//   --third: #4bc550;
//   --fourth: #f85c70;
//   --fifth: #e42828;
//   --sixth: #ffab01;
//   --seventh: #ffad08;
//   --eighth: #3b5998;
//   --ninth: #16b9a8;
//   --tenth: #dd2a7b;
//   --eleventh: #007bb5;
//   --twelfth: #ea4335;
//   --thirteenth: #466ca9;
//   --fourteenth: #dd4b39;
//   --fifteenth: #55acee;
//   --sixteenth: #0077b5;
// --seventeenth: #e4405f;
//   --main-background: #19202b;
//   --light-background: #f6f6f6;
//   --rounded: 15px;
//   --swiper-theme-color: var(--third) !important;
