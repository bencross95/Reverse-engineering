
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("includeCollectionsWithTags", function (collections, tags) {
    return collections.filter(collection => {
      if (collection.data.tags) {
        // Include collections that have at least one of the specified tags
        return tags.some(tag => collection.data.tags.includes(tag));
      }
      return false; // Exclude collections without tags
    });
  });
  eleventyConfig.addPassthroughCopy("./src/stylesheet.css");
  eleventyConfig.addPassthroughCopy("./src/assets/");
  eleventyConfig.addPassthroughCopy("./src/animations.js");
  eleventyConfig.addPassthroughCopy("./src/main.js");
  eleventyConfig.addPlugin(eleventyNavigationPlugin);



  return {
    dir: {
      input: 'src', // or whatever your source directory is
      output: 'public', // or whatever your output directory is
    },
  };
};