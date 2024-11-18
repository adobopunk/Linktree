module.exports = function (eleventyConfig) {
	// Copy Pico CSS to output directory
	eleventyConfig.addPassthroughCopy('assets');



	// Custom CSS
	eleventyConfig.addPassthroughCopy('src/css');

	return {
		dir: {
			input: 'src',
			output: '_site',
			includes: '_includes',
			layouts: '_layouts',
		},
	};
};
