'use strict';

let csvToJson = require('./src/csvToJson.js');

/**
 * Prints a digit as Number type (for example 32 instead of '32')
 * 
 * @return {csvToJson} self
 */
exports.formatValueByType = function () {
  csvToJson.formatValueByType();

  return this;
};

/**
 * Defines the field delimiter which will be used to split the fields
 * @param {delimiter} string
 * 
 * @return {csvToJson} self
 */
exports.fieldDelimiter = function (delimiter) {
  csvToJson.fieldDelimiter(delimiter);

  return this;
};

/**
 * Parses a CSV string into an Array or Object
 * @param {parsedCsv} string
 *
 * @return {Array<any>|Object} Array or Object
 */
exports.csvStringToJson = function (parsedCsv) {
    if (!parsedCsv) {
        throw new Error('parsedCsv is not defined!!!');
    }

    return csvToJson.csvToJson(parsedCsv);
};