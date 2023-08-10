var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import { styled, Global, css } from '@storybook/theming';
import { Button } from '@storybook/components';
import HighlightElement from 'react-highlight';
export var RequestDataButton = styled(Button)({
  marginTop: '1rem'
});
export var PanelContent = function PanelContent(_ref) {
  var style = _ref.style;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Global, {
    styles: css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        pre {\n          margin: 0px;\n          padding: 0px;\n        }\n        .hljs {\n          display: block;\n          overflow-x: auto;\n          padding: 0.5em;\n          color: #333;\n          background: #f8f8f8;\n        }\n        .hljs-comment,\n        .hljs-quote {\n          color: #998;\n          font-style: italic;\n        }\n        .hljs-keyword,\n        .hljs-selector-tag,\n        .hljs-subst {\n          color: #333;\n          font-weight: bold;\n        }\n        .hljs-number,\n        .hljs-literal,\n        .hljs-variable,\n        .hljs-template-variable,\n        .hljs-tag .hljs-attr {\n          color: #008080;\n        }\n        .hljs-string,\n        .hljs-doctag {\n          color: #d14;\n        }\n        .hljs-title,\n        .hljs-section,\n        .hljs-selector-id {\n          color: #900;\n          font-weight: bold;\n        }\n        .hljs-subst {\n          font-weight: normal;\n        }\n        .hljs-type,\n        .hljs-class .hljs-title {\n          color: #458;\n          font-weight: bold;\n        }\n        .hljs-tag,\n        .hljs-name,\n        .hljs-attribute {\n          color: #000080;\n          font-weight: normal;\n        }\n        .hljs-regexp,\n        .hljs-link {\n          color: #009926;\n        }\n        .hljs-symbol,\n        .hljs-bullet {\n          color: #990073;\n        }\n        .hljs-built_in,\n        .hljs-builtin-name {\n          color: #0086b3;\n        }\n        .hljs-meta {\n          color: #999;\n          font-weight: bold;\n        }\n        .hljs-deletion {\n          background: #fdd;\n        }\n        .hljs-addition {\n          background: #dfd;\n        }\n        .hljs-emphasis {\n          font-style: italic;\n        }\n        .hljs-strong {\n          font-weight: bold;\n        }\n      "])))
  }), style.map(function (value, i) {
    return /*#__PURE__*/React.createElement(HighlightElement, {
      className: "css",
      key: i
    }, value);
  }));
};