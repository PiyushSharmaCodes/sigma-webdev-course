let obj ={
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          'primary': '#1E1E1E',
          'secondary': '#F2F2F2',
          'tertiary': '#FFA500',
          'quaternary': '#FFD700',
        },
        fontFamily: {
          'poppins': ['Poppins', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
module.exports = obj;