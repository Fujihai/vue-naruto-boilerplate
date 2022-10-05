const { defineConfig } = require("@vue/cli-service");
const appConfig = require("./src/app.config");

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = appConfig.title;
      return args;
    });
  },
});
