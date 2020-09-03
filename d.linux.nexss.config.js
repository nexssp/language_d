let languageConfig = Object.assign({}, require("./d.win32.nexss.config"));

languageConfig.compilers = {
  dmd: {
    install: "curl https://dlang.org/install.sh | bash -s",
    command: "rdmd",
    args: "<file>",
    help: ``,
  },
};

module.exports = languageConfig;
