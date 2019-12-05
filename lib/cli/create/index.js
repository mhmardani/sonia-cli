const {pwd,chalk,run} = require('../../shared-libs');
const {hasGit} = require('../../util');

async function create(appName) {
    try {
        await creator(`${pwd}/${appName}`);
    }catch (e){
        console.log(chalk.red(e));
    }
};

async function creator(ptojectPath) {
    try {
        const fs = require('fs');
        if(hasGit()){
            await fs.mkdirSync(ptojectPath);
        }
    }catch (e) {
        throw e;
    }
}



module.exports = create;
