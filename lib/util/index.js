const {run} = require('../shared-libs');

exports.hasGit = () => {
    try {
        run('git --version');
        return true;
    } catch (e) {
        throw e;
    }
};