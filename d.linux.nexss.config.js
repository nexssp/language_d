let languageConfig = Object.assign({}, require("./d.win32.nexss.config"));

const os = require(`${process.env.NEXSS_SRC_PATH}/node_modules/@nexssp/os/`);
const sudo = os.sudo();

const distName = os.name();

languageConfig.dist = distName;

languageConfig.compilers = {
  dmd: {
    install: `curl https://dlang.org/install.sh | bash -s
cd ~/dlang/
${sudo}cp ./dmd-*/linux/bin64/{dmd,dumpobj,obj2asm,rdmd,ddemangle,dub,dustmite} /usr/local/bin
${sudo}cp ./dmd-*/linux/lib64/libphobos2.a /usr/local/lib
mkdir -p /usr/include/d/dmd
cp ./dmd-*/{phobos/std,phobos/etc,druntime/import} /usr/include/d/dmd`, // source ~/dlang/dmd-2.094.0/activate
    command: "rdmd",
    args: "<file>",
    help: ``,
  },
};

module.exports = languageConfig;
