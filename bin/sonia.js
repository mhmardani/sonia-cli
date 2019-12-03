#!/usr/bin/env node

const {chalk,semver} = require('../lib/shared-util');
const package = require('../package.json');

function checkNodeVersion (wanted) {
    if (!semver.satisfies(process.version, wanted)) {
        console.log(chalk.red(
            'You are using Node ' + process.version + ', but this version of ' + package.name +
            ' requires Node ' + wanted + '.\nPlease upgrade your Node version.'
        ));
        process.exit(1)
    }
}

checkNodeVersion(package.engines.node);

const program = require('commander');

program
    .version(`${package.name} ${package.version}`)
    .usage(`${package.name} <command> [options]`);

program
    .command('create <app-name>')
    .description(`create a new project powered by ${package.name}`)
    .action((name) => {
        require('../lib/cli/create')(name);
    });

program
    .arguments('<command>')
    .action((cmd) => {
        program.outputHelp();
        console.log(`  ` + chalk.red(`Unknown command ${chalk.yellow(cmd)}.`));
        console.log();
    });

program.on('--help', () => {
    console.log();
    console.log(`  Run ${chalk.cyan(`${package.name} <command> --help`)} for detailed usage of given command.`);
    console.log();
});

program.Command.prototype['missingArgument'] = function (...args) {
    this.outputHelp();
    console.log(`  ` + chalk.red(`Missing required argument ${chalk.yellow(args)}`));
    console.log();
    process.exit(1);
};


if (!process.argv.slice(2).length) {
    program.outputHelp();
}

program.parse(process.argv);