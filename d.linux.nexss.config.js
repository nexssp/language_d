let languageConfig = Object.assign({}, require("./d.win32.nexss.config"));

const sudo = process.sudo;

const distName = process.distro;

languageConfig.dist = distName;

languageConfig.compilers = {
  dmd: {
    install: `${sudo}curl https://dlang.org/install.sh | ${sudo}bash -s
source $(~/dlang/install.sh install -a)`,
    command: "dmd",
    args: "<file>",
    help: ``,
  },
  // export PATH=$PATH:`pwd`/dmd2/linux/bin64
  dmdOld: {
    install: `${sudo}curl https://dlang.org/install.sh | ${sudo}bash -s
cd ~/dlang/
${sudo}cp ./dmd-*/linux/bin64/{dmd,dumpobj,obj2asm,rdmd,ddemangle,dub,dustmite} /usr/local/bin
${sudo}cp ./dmd-*/linux/lib64/libphobos2.a /usr/local/lib
${sudo}mkdir -p /usr/include/d/dmd
${sudo}cp ./dmd-*/{phobos/std,phobos/etc,druntime/import} /usr/include/d/dmd`, // source ~/dlang/dmd-2.094.0/activate
    command: "dmd",
    args: "<file>",
    help: ``,
  },
};

module.exports = languageConfig;
