module.exports = {
  mode : "jit",
  content : ["./src.**/.{js,jsx,tsx,ts}"],
  theme: {
    extend : {
      colors:{
        "dark-purple" : "#081A51",
          "light-white" : "rgba(255,255,255,0.17)",
      },
    },
  },
  plugins : [],
};