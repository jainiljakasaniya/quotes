#! /usr/bin/env node

'use strict';
const yosay = require('yosay');
const chalk = require('chalk');
const fs = require('fs');

// Error handling for file read
let data;
try {
    data = JSON.parse(fs.readFileSync(__dirname + '/quotes.json'));
} catch (error) {
    console.error(chalk.red('Error reading quotes file: '), error.message);
    process.exit(1);
}

// Parse & randomize quotes
const randomQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)];

// Randomize color
const colors = ["red", "green", "yellow", "magenta", "cyan", "white"];
const randomColor = colors[Math.floor(Math.random() * colors.length)];

// Apply color using dynamic property access
const coloredQuote = chalk[randomColor](randomQuote);

// Print to console
console.log(yosay(coloredQuote));
