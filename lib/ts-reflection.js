"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getMethods(obj) {
    var res = [];
    var props = Object.getOwnPropertyNames(obj);
    res = props.filter(function (property) {
        return typeof obj[property] == 'function';
    });
    return res;
}
exports.getMethods = getMethods;
function getProperties(obj) {
    var res = [];
    var props = Object.getOwnPropertyNames(obj);
    res = props.filter(function (property) {
        return typeof obj[property] != 'function';
    });
    return res;
}
exports.getProperties = getProperties;
function getPropertyByValue(obj, value) {
    var res;
    var lsP = getProperties(obj);
    res = lsP.filter(function (e) {
        return obj[e] == value;
    })[0];
    return res;
}
exports.getPropertyByValue = getPropertyByValue;
