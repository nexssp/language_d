let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "D";
languageConfig.description =
  "D is a general-purpose programming language with static typing, systems-level access, and C-like syntax. With the D Programming Language, write fast, read fast, and run fast.";
languageConfig.url = "https://dlang.org";
languageConfig.founders = ["Walter Bright", "Andrei Alexandrescu"];
languageConfig.developers = ["D Language Foundation"];
languageConfig.years = ["2001"];
languageConfig.extensions = [".d"];
languageConfig.executeCommandLine = "dmd";
languageConfig.printCommandLine = ""; //no console.log() needed to display result eg node -p "4+6"
languageConfig.checkSyntax = "";
languageConfig.interactiveShell = "dmd";
languageConfig.builders = {};
languageConfig.compilers = {
  dmd: {
    install: "scoop install dmd",
    command: "dmd",
    args: "<file> & <fileNoExt>",
    help: ``,
  },
};
languageConfig.errors = require("./nexss.d.errors");
languageConfig.languagePackageManagers = {
  dub: {
    installation: "installed.",
    installed: "dub list",
    search: "dub search",
    install: "dub install",
    uninstall: "dub uninstall",
    help: "dub --help",
    version: "dmd --version && dub --version",
    init: "dub init .",
    else: "dub",
  },
};

module.exports = languageConfig;
