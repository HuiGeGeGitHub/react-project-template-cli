#!/usr/bin/env node
'use strict'
const program = require('commander')
const chalk = require('chalk');
const path = require('path')
program
    .version(require('../package').version )

program
    .command('init')
    .description('create new project')
    .alias('i')
    .action(() => {
        require(path.resolve(__dirname, '../command/init.js'))()
    })
let run= function (para) {
    if(para.indexOf('-test') > -1){
        console.log(chalk.bgCyan('version is xxx'));
    }
    if(para.indexOf('-host') > -1){
        console.log(chalk.bgCyan('host default at 127.0.0.1'));
    }
};
run(process.argv.slice(2));
program.parse(process.argv)

if(!program.args.length){
    program.help()
}