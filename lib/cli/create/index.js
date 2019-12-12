const {pwd,chalk,run} = require('../../shared-libs');
const {sonia_repo} = require('../../config');
const {hasGit} = require('../../util');
const generate = require('../generate');

async function create(appName) {
    try {
        await creator(appName);
    }catch (e){
        console.log(chalk.red(e));
    }
};

async function creator(appName) {
    try {
        const fs = require('fs');
        const projectDir = `${pwd}/${appName}`;
        if(hasGit()){
            await fs.mkdirSync(projectDir);
            run(`cd ${projectDir} && git clone ${sonia_repo} .`);
            await generate(appName,projectDir);
        }
    }catch (e) {
        throw e;
    }
}



module.exports = create;
