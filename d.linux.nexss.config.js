let languageConfig = Object.assign({}, require("./d.win32.nexss.config"));

const os = require("@nexssp/os");

languageConfig.compilers = {
  dmd: {
    install: "curl https://dlang.org/install.sh | bash -s",
    command: "rdmd",
    args: "<file>",
    help: ``,
  },
};

// Below is unnecessary however you can use it later
languageConfig.compilers.dmd.install = os.replacePMByDistro(
  languageConfig.compilers.dmd.install
);

module.exports = languageConfig;
