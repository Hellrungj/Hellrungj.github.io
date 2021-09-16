// add the following content in the craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        require("tailwindcss")("./tailwind.config.js"),
        require("postcss-nested"),
      ],
    },
  },
}