/* ACE Widgets - Embed v7 */
(function (e, t) {
  var n = document.getElementsByTagName("script")[0];
  var i = document.createElement("script");
  i.type = "module";
  window.ace = window.ace || {
    _c: [],
    _w: [],
    widget: function (e, t) {
      window.ace._w.push([e, t]);
    },
    configure: function (e) {
      window.ace._c.push(e);
    },
  };
  i.async = true;
  i.src = e;
  if (t?.integrity) {
    i.integrity = t.integrity;
    i.crossorigin = "anonymous";
  }
  if (n?.parentNode) {
    n.parentNode.insertBefore(i, n);
  }
})(
  "https://widgets-dev.ace.teliacompany.net/embed/team-widgets-e2e/d02af50f-e355-471e-8cdc-a855bd65d1cd?v=1.1.123-rc.26",
  {},
);
