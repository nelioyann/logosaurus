const pluginSass = require("eleventy-plugin-sass");
const sassPluginOptions = {
	outputDir: "./"
}


module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(pluginSass, sassPluginOptions);
	eleventyConfig.addPassthroughCopy("./src/css/main.css");
	return {
		dir: {
			input: "src",
			output: "_site"
		}
	}
};
