(function () {
  'use strict';
  window.inverto = function() {
    var css = 'html {-webkit-filter: invert(100%);' +
          '-moz-filter: invert(100%);' +
          '-o-filter: invert(100%);' +
          '-ms-filter: invert(100%); ' +
          'filter: invert(100%);' +
          'filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'invert\'><feColorMatrix in=\'SourceGraphic\' type=\'matrix\' values=\'-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0\'/></filter></svg>#invert"); }'
      , head  = document.getElementsByTagName('head')[0]
      , proto = window.inverto.prototype;

    if (!proto.isApplied) {
      var style = proto.style = document.createElement('style');
    
      style.type = 'text/css';
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } 
      else style.appendChild(document.createTextNode(css));

      head.appendChild(style);
      proto.isApplied = true;
      return true;
    }
    else {
      head.removeChild(proto.style);
      proto.isApplied = false;
    }
    return false;
  };
  window.inverto.prototype.isApplied = false;
})();