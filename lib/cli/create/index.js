const {pwd,chalk} = require('../../shared-util');

async function create(appName) {
    try {
        const fs = require('fs');
        await fs.mkdirSync(`${pwd}/${appName}`);
    }catch (e){
        console.log(chalk.red(e));
    }
};

module.exports = create;
