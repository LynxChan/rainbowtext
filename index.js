'use strict';

var common = require('../../engine/postingOps').common;

exports.engineVersion = '2.6';

exports.init = function() {

  var originalProcessLine = common.processLine;

  common.processLine = function(split, replaceCode) {

    split = originalProcessLine(split, replaceCode);

    split = split.replace(/##(.+?)##/g, "<span class=\"rainbow\">$1</span>");

    return split;

  };

};
