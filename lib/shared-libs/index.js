const { execSync } = require('child_process');

exports.chalk = require('chalk');
exports.semver = require('semver');
exports.pwd = process.cwd();
exports.run = (cmd = "ls",opt = {}) => execSync(cmd,opt).toString();