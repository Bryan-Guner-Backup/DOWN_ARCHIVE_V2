"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var config_1 = __importDefault(require("../../config"));
var is_function_1 = __importDefault(require("../../is-function"));
module.exports = function requireSriForCheck(key, value) {
    if (!Array.isArray(value)) {
        throw new Error("\"" + value + "\" is not a valid value for " + key + ". Use an array of strings.");
    }
    if (value.length === 0) {
        throw new Error(key + " must have at least one value. To require nothing, omit the directive.");
    }
    value.forEach(function (expression) {
        if (is_function_1.default(expression)) {
            return;
        }
        if (config_1.default.requireSriForValues.indexOf(expression) === -1) {
            throw new Error("\"" + expression + "\" is not a valid " + key + " value. Remove it.");
        }
    });
};
