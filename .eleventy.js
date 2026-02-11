
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/stylesheet.css");
  eleventyConfig.addPassthroughCopy("./src/assets/");
  eleventyConfig.addPassthroughCopy("./src/splash.js");
  eleventyConfig.addPassthroughCopy("./src/animations.js");
  eleventyConfig.addPassthroughCopy("./src/sound.js");
  eleventyConfig.addPassthroughCopy("./src/main.js");
  eleventyConfig.addPassthroughCopy("./src/vault");
  eleventyConfig.addPassthroughCopy("./src/vault-secret.js");


  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  return {
    dir: {
      input: 'src', // or whatever your source directory is
      output: 'public', // or whatever your output directory is
    },
  };
};