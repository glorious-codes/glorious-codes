/* eslint-disable */

const _public = {};

_public.init = inspectletId => {
  // Code automatically generated by Inspectlet's Website
  window.__insp = window.__insp || [];
  __insp.push(['wid', inspectletId]);
  var ldinsp = function() {
      if (typeof window.__inspld != "undefined") return;
      window.__inspld = 1;
      var insp = document.createElement('script');
      insp.type = 'text/javascript';
      insp.async = true;
      insp.id = "inspsync";
      insp.src = ('https:' == document.location.protocol ? 'https' : 'http') +
        `://cdn.inspectlet.com/inspectlet.js?wid=${inspectletId}&r=` +
        Math.floor(new Date().getTime() / 3600000);
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(insp, x);
  };
  setTimeout(ldinsp, 0);
};

export default _public;
