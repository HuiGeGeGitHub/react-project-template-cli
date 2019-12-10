'use strict'
const exec = require('child_process').exec
const chalk = require('chalk'); 
const projectUrl = 'https://github.com/HuiGeGeGitHub/react-project-template.git'

module.exports = () => {
    console.log(chalk.magenta('begin clone >>>>>> '))
    let cmdStr = `git clone --depth=1 ${projectUrl}`
    exec(cmdStr, (error, stdout, stderr) => {
        if (error) {
            console.log(chalk.red(error))
            process.exit()
        }
        console.log(chalk.greenBright('pull我们的项目已经成功了'))
        process.exit()
    })

}