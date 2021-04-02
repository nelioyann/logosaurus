const pluginSass = require("eleventy-plugin-sass");
const sassPluginOptions = {
	outputDir: "./"
}


module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(pluginSass, sassPluginOptions);
	eleventyConfig.addPassthroughCopy("./src/css/main.css");
	eleventyConfig.addPassthroughCopy("./src/fonts");
	eleventyConfig.addPassthroughCopy("./src/images");
	eleventyConfig.addPassthroughCopy("./src/favicon.ico");

	return {
		dir: {
			input: "src",
			output: "_site"
		}
	}
};
