/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'customRed': 'hsl(14, 86%, 42%)'
      },
      backgroundImage: {
        'custom-pattern1': "url('../images/image-waffle-desktop.jpg')",
        'custom-pattern2': "url('../images/image-creme-brulee-desktop.jpg')",
        'custom-pattern3': "url('../images/image-macaron-desktop.jpg')",
        'custom-pattern4': "url('../images/image-tiramisu-desktop.jpg')",
        'custom-pattern5': "url('../images/image-baklava-desktop.jpg')",
        'custom-pattern6': "url('../images/image-meringue-desktop.jpg')",
        'custom-pattern7': "url('../images/image-cake-desktop.jpg')",
        'custom-pattern8': "url('../images/image-brownie-desktop.jpg')",
        'custom-pattern9': "url('../images/image-panna-cotta-desktop.jpg')"
      },
      fontFamily: {
        'redHat':["Red Hat Text"]
      },
    },
  },
  plugins: [],
}

