"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCss = void 0;

var _addons = require("@storybook/addons");

var _constants = require("./constants");

var getCss = function getCss(e) {
  var channel = _addons.addons.getChannel();

  var styles = [];
  e.preventDefault();
  e.stopPropagation();
  var element = e.target;
  var elementType = element.localName;

  if (elementType) {
    var results = findCss(elementType);

    if (results) {
      styles.push(results);
    }
  }

  var elementId = "#".concat(element.id);

  if (elementId) {
    var _results = findCss(elementId);

    if (_results) {
      styles.push(_results);
    }
  }

  var elementClassNames = [];
  var elementClassNamesString = element.className;

  if (elementClassNamesString && typeof elementClassNamesString === 'string') {
    elementClassNames = element.className.split(' ');
    elementClassNames.forEach(function (className) {
      var results = findCss(".".concat(className));

      if (results) {
        styles.push(results);
      }
    });
  }

  channel.emit(_constants.EVENTS.RESULT, {
    styles: styles
  });
};

exports.getCss = getCss;

var findCss = function findCss(selector) {
  var styleSheets = document.styleSheets;

  for (var index in styleSheets) {
    var cssRules = styleSheets[index].cssRules;

    for (var rulesIndex in cssRules) {
      var cssRule = cssRules[rulesIndex];

      if (cssRule.selectorText === selector) {
        var cssText = addNewLines(cssRule.cssText);
        return cssText;
      }
    }
  }

  return null;
};

var addNewLines = function addNewLines(text) {
  return text.replaceAll(';', ';\n').replaceAll('{', '{\n');
};