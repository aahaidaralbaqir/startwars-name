var startwarsNames = require('../data/starwars-name.json')
var uniqueRandomArray = require('unique-random-array')

module.exports = {
    all: startwarsNames,
    random: uniqueRandomArray(startwarsNames)
};