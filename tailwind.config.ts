import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        'coral-and-ivory': {
           'primary' : '#A0E7AE',
           'primary-focus' : '#80DE99',
           'primary-content' : '#1e2734',

           'secondary' : '#FFFFEA',
           'secondary-focus' : '#ECECE1',
           'secondary-content' : '#1e2734',

           'accent' : '#F67D7B',
           'accent-focus' : '#FF5E5B',
           'accent-content' : '#ffffff',

           'neutral' : '#3b424e',
           'neutral-focus' : '#2a2e37',
           'neutral-content' : '#ffffff',

           'base-100' : '#ffffff',
           'base-200' : '#f9fafb',
           'base-300' : '#ced3d9',
           'base-content' : '#1e2734',

           'info' : '#1c92f2',
           'success' : '#01a221',
           'warning' : '#ffc014',
           'error' : '#f4511f',

          '--rounded-box': '0',          
          '--rounded-btn': '0',        
          '--rounded-badge': '0',      

          '--animation-btn': '.25s',       
          '--animation-input': '.2s',       

          '--btn-text-case': 'uppercase',   
          '--navbar-padding': '.5rem',      
          '--border-btn': '1px',            
        },
      },
    ],
  },
};
export default config;
