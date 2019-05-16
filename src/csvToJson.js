'use strict';

let stringUtils = require('././util/stringUtils');
let jsonUtils = require('././util/jsonUtils');

const newLine = /\r?\n/;
const defaultFieldDelimiter = ';';

class CsvToJson {

    formatValueByType() {
        this.printValueFormatByType = true;
        return this;
    }

    fieldDelimiter(delimieter){
        this.delimiter = delimieter;
        return this;
    }

    csvToJson(parsedCsv) {
        let lines = parsedCsv.split(newLine);
        let fieldDelimiter = this.getFieldDelimiter();
        let headers = lines[0].split(fieldDelimiter);

        let jsonResult = [];
        for (let i = 1; i < lines.length; i++) {
            let currentLine = lines[i].split(fieldDelimiter);
            if (stringUtils.hasContent(currentLine)) {
                jsonResult.push(this.buildJsonResult(headers, currentLine));
            }
        }
        return jsonResult;
    }

    getFieldDelimiter(){
        if(this.delimiter){
            return this.delimiter;
        }
        return defaultFieldDelimiter;
    }

    buildJsonResult(headers, currentLine) {
        let jsonObject = {};
        for (let j = 0; j < headers.length; j++) {
            let propertyName = stringUtils.trimPropertyName(headers[j]);

            let value = currentLine[j];
            if (this.printValueFormatByType) {
                value = stringUtils.getValueFormatByType(currentLine[j]);
            }
            jsonObject[propertyName] = value;
        }
        return jsonObject;
    }
}

module.exports = new CsvToJson();
