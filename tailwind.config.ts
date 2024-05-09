import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          // primary-blue
          'primary-blue-50': '#e6f0ff',
          'primary-blue-100': '#b1d1ff',
          'primary-blue-200': '#8cbaff',
          'primary-blue-300': '#579bff',
          'primary-blue-400': '#3687ff',
          'primary-blue-500': '#0469ff',
          'primary-blue-600': '#0460e8',
          'primary-blue-700': '#034bb5',
          'primary-blue-800': '#023a8c',
          'primary-blue-900': '#022c6b',

          // primary-purple
          'primary-purple-50': '#f1e6ff',
          'primary-purple-100': '#d2b0fe',
          'primary-purple-200': '#bc8afd',
          'primary-purple-300': '#9e54fc',
          'primary-purple-400': '#8b33fc',
          'primary-purple-500': '#6e00fb',
          'primary-purple-600': '#6400e4',
          'primary-purple-700': '#4e00b2',
          'primary-purple-800': '#3d008a',
          'primary-purple-900': '#2e0069'
        },
        washed:{
          //  washed blue
          'blue-50': '#f0f3ff',
          'blue-100': '#d0daff',
          'blue-200': '#bac9ff',
          'blue-300': '#9ab0ff',
          'blue-400': '#86a1ff',
          'blue-500': '#6889ff',
          'blue-600': '#5f7de8',
          'blue-700': '#4a61b5',
          'blue-800': '#394b8c',
          'blue-900': '#2c3a6b',

          //  washed purple
          'purple-50': '#f8f7ff',
          'purple-100': '#e8e7ff',
          'purple-200': '#dddcff',
          'purple-300': '#cdcbff',
          'purple-400': '#c4c1ff',
          'purple-500': '#b5b2ff',
          'purple-600': '#a5a2e8',
          'purple-700': '#817eb5',
          'purple-800': '#64628c',
          'purple-900': '#4c4b6b',
        },
        brand: {
          'dark': '#030014',
          "washedBlue": '#6889FF',
          'washedPurple': '#B5B2FF',
          "primaryBlue": '#0469FF',
          'primaryPurple': '#7000FF',
        },
        neutral: {
          // neutral
          '1': '#ffffff',
          '2': '#fcfcfd',
          '3': '#f5f5f6',
          '4': '#f0f0f1',
          '5': '#d9d9dc',
          '6': '#c0bfc4',
          '7': '#8e8c95',
          '8': '#5b5966',
          '9': '#474553',
          '10': '#292637',
          // for the testimonial card
          '11': '#211f30',
          '12': '#171427',
          '13': '#030014',
        },
        borderColor: {
          'gradient-1': '#282637',
          'gradient-2': '#201F30',
          'gradient-3': '#464553',
        },
        textColor: {
          'gradient-1': '#464553',
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      components: {
        backgroundColor: {
          'neutral-3': '#f5f5f6',
          'neutral-4': '#f0f0f1',
          'neutral-5': '#E5E5EA',
          'neutral-6': '#F2F2F7',
          'neutral-7': '#8e8c95',
          'neutral-8': '#5b5966',
          'neutral-9': '#474553',
          // for the testimonial card
          'neutral-11': '#211F30',
          'washed-purple-400': '#C4C1FF',
          'washed-purple-700': '#817EB5',
          'brand-dark': '#030014',
        },
        backgroundImage : {
          'gradient-bg':'linear-gradient(180.54deg, #000000 0.53%, rgba(255, 255, 255, 0) 99.6%)',
          'image-gradient-bg':'linear-gradient(90.54deg, #000000 0.53%, rgba(255, 255, 255, 0) 99.6%)',
         '.bottom-gradient-bg' :
           ' background-image: linear-gradient(180deg, #F2F2F7 6.91%, rgba(0, 0, 0, 0) 100%)'
          ,
          'brand-dark': '#030014',

          // "nav-category-bg": "linear-gradient(0deg, #F2F2F7 3.91%, rgba(255, 255, 255, 0.2) 100%)",
          "testimonial-card-bg": "linear-gradient(180deg, #030014 0%, #171427 100%)",
          
          'hero-boxone':'rgba(0, 0, 0, 0.4)',
          'hero-boxtwo':'rgba(255, 199, 0, 0.48)',
          'hero-boxthree':'rgba(0, 0, 0, 0.2)',

          'trade-exp-gradient':'rgba(72, 18, 18, 0.5);',
        },
      },
    },
  },
  plugins: [],
};
export default config;


// bg-gradient-to-b from-blue-200 to-pink-300
// bg-gradient-to-br from-blue-200 to-pink-300

/* Testimonial card */

// box-sizing: border-box;

// /* Auto layout */
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: flex-start;
// padding: 25px;
// gap: 15px;

// position: relative;
// width: 390px;
// height: 126px;
// left: 225px;
// top: 1142px;

// background: linear-gradient(180deg, #030014 0%, #171427 100%);
// /* Neutral/neutral-11 */
// border: 1px solid #211F30;
// border-radius: 15px;
