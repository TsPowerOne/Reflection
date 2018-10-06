"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @param obj object explored
 * @returns array name of method
 */
function getMethods(obj) {
    var res = [];
    var props = Object.getOwnPropertyNames(obj);
    res = props.filter(function (property) {
        return typeof obj[property] == 'function';
    });
    return res;
}
exports.getMethods = getMethods;
/**
 *
 * @param obj object explored
 * @returns array name of properties
 */
function getProperties(obj) {
    var res = [];
    var props = Object.getOwnPropertyNames(obj);
    res = props.filter(function (property) {
        return typeof obj[property] != 'function';
    });
    return res;
}
exports.getProperties = getProperties;
/**
 *
 * @param obj object explored
 * @param value value to be search
 * @returns name of property that match value requested
 */
function getPropertyByValue(obj, value) {
    var res;
    var lsP = getProperties(obj);
    res = lsP.filter(function (e) {
        return obj[e] == value;
    })[0];
    return res;
}
exports.getPropertyByValue = getPropertyByValue;
