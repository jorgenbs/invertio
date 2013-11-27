'use strict';
window.inverto = window.inverto || function (selector) {
  var className = 'inverto90A2' 
      , css     = '.'+className+' {-webkit-filter: invert(100%);-moz-filter: invert(100%);-o-filter: invert(100%);-ms-filter: invert(100%);filter: invert(100%);filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'invert\'><feColorMatrix in=\'SourceGraphic\' type=\'matrix\' values=\'-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0\'/></filter></svg>#invert"); }'
      , head    = document.getElementsByTagName('head')[0]
      , style   = document.createElement('style')
      , el      = document.querySelectorAll(selector)
      , styles  = document.styleSheets
      , addCss  = true;

  if (styles.length != 0) {
    var appended = styles[styles.length-1];
    if (appended && appended.cssRules.length === 1) {
      if (appended.cssRules[0].selectorText.toUpperCase() === ('.'+className).toUpperCase()) {
        addCss = false;
      }
    }
  }

  if (addCss) {
    style.type = 'text/css';
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } 
    else style.appendChild(document.createTextNode(css))

    head.appendChild(style);
  }

  if (el.length > 0) {
    for (var i=0; i<el.length; i++)
      var cl = el[i].classList;
      var index = cl.indexOf
      if (!cl.contains(className)) cl.add(className);
      else cl.remove(className);
  }
  return el;
}