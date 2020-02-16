let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "D";
languageConfig.description =
  "D is a general-purpose programming language with static typing, systems-level access, and C-like syntax. With the D Programming Language, write fast, read fast, and run fast.";
languageConfig.url = "https://dlang.org";
languageConfig.extensions = [".d"];
languageConfig.executeCommandLine = "dmd";
languageConfig.printCommandLine = ""; //no console.log() needed to display result eg node -p "4+6"
languageConfig.checkSyntax = "";
languageConfig.interactiveShell = "dmd";
languageConfig.builders = {};
languageConfig.compilers = {
  node: {
    install: "scoop install dmd",
    command: "dmd",
    args: "dmd <file> & <fileNoExt>",
    help: ``
  }
};
languageConfig.errors = require("./nexss.d.errors");
languageConfig.languagePackageManagers = {
  dub: {
    installation: "installed.",
    installed: "dub list",
    search: "dub search",
    install: "dub install",
    uninstall: "dub uninstall",
    help: "dub help",
    version: "dub --version",
    init: () => {
      // if (
      //   !require("fs").existsSync(
      //     require("path").join(process.cwd(), "package.json")
      //   )
      // ) {
      //   require("child_process").execSync("dub init", { stdio: "inherit" });
      //   console.log("initialized npm project.");
      // } else {
      //   console.log("npm already initialized.");
      // }
    },
    // if command not found in specification
    // run directly on package manager
    else: "dub"
  }
};

module.exports = languageConfig;
