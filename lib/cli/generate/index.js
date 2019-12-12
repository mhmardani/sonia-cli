const packageTmp = require('../../template/package.json');


async function generate(appName,projectDir) {
    try {
        const fs = require('fs');
        const s = require(`${projectDir}/package.json`);
        s.name = 'sssss';
        fs.writeFileSync(`${projectDir}/package.json`,JSON.stringify(Object.assign(s,packageTmp), null, 2));
    }catch (e){
        throw e;
    }
};


module.exports = generate;