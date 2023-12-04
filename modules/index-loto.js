const chalk = require('chalk');


const { loto, gagnant } = require('./lottery');

console.log(loto({min: 20, max: 50, count: 5}));

const players = ["Kali", "Kim", "sofiane", "Timo"];

console.log(chalk.green(`Le gagnant(e) est : ${gagnant(players)}`));
