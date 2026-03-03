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

// Common widget version functionality
function updateWidgetVersion() {
  try {
    console.log("Checking for ACE widget version...");
    if (window.ace && typeof window.ace.version === "function") {
      const versionObj = window.ace.version().widgets;
      // Get the first version value from the object
      const versionValue = Object.values(versionObj)[0];
      const versionElement = document.getElementById("widget-version");
      if (versionElement) {
        versionElement.textContent = versionValue || "Unknown";
      }
    } else {
      // Retry after a short delay if ace is not ready yet
      setTimeout(updateWidgetVersion, 100);
    }
  } catch (error) {
    console.error("Error getting widget version:", error);
    const versionElement = document.getElementById("widget-version");
    if (versionElement) {
      versionElement.textContent = "Error loading version";
    }
  }
}

// Initialize version checking when page loads
window.addEventListener("load", function() {
  console.log("Page fully loaded, starting widget version check...");
  setTimeout(updateWidgetVersion, 500);
});
