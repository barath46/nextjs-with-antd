/** @type {import('next').NextConfig} */

const withLess = require("next-with-less");
const path = require("path");

const variableOverrideFilePath = path.resolve(
  "./styles/antTokenOverrides.less"
);

module.exports = withLess({
  reactStrictMode: true,
  lessLoaderOptions: {
    additionalData: (content) => {
      return `${content}\n\n@import '${variableOverrideFilePath}';`;
    }
  }
});
