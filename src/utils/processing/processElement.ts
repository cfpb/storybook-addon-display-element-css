import { findCss } from './findCss';

export function processElement(element) {
  // processByElementType(element);
  processByElementId(element);
  processByClassname(element);
}

// Styles returned here don't always feel relevant, so disabling this phase for now
// Ex. p, div, a
function processByElementType(element) {
  var elementType = element.localName;
  if (!elementType) return null;

  findCss(elementType);
}

// Find matches based on the element `id`
// Ex. #FirstIcon, #header
function processByElementId(element) {
  if (!element.id) return null;

  var elementId = '#'.concat(element.id);

  findCss(elementId);
}

// Find matches based on the `className`s assigned to the element
// Ex. .cf-icon-svg, .m-hero_heading
function processByClassname(element) {
  var elementClassNames = [];
  var elementClassNamesString = element.className;

  // SVGs have className stored differently 
  switch (typeof elementClassNamesString) {
    case 'object':
      elementClassNamesString = elementClassNamesString.baseVal;
      break;
    default:
  }

  if (elementClassNamesString && typeof elementClassNamesString === 'string') {
    elementClassNames = elementClassNamesString.split(' ');
    elementClassNames.forEach(function (className) {
      if (className.length > 1) findCss('\\.'.concat(className));
    });
  }
}
