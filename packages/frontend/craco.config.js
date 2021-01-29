const path = require("path");
const resolvePackage = (relativePath) => path.resolve(__dirname, relativePath);

module.exports = {

  webpack: {
    alias: {
      react: resolvePackage("./node_modules/react"),
    },
    configure: (webpackConfig) => {
      const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(
        ({ constructor }) =>
          constructor && constructor.name === "ModuleScopePlugin"
      );

      webpackConfig.resolve.plugins.splice(scopePluginIndex, 1);
      webpackConfig.module.rules.push({
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
          configFile: 'tsconfig.json',
        },
      })
      return webpackConfig;
    },
  },
};
