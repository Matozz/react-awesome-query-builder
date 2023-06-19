export const SELECT_WIDTH_OFFSET_RIGHT = 48;
const DEFAULT_FONT_SIZE = "14px";
const DEFAULT_FONT_FAMILY = "'Helvetica Neue', Helvetica, Arial, sans-serif";

export const calcTextWidth = function(
  str,
  fontFamily = DEFAULT_FONT_FAMILY,
  fontSize = DEFAULT_FONT_SIZE
) {
  if (typeof document !== "undefined") {
    var div = document.createElement("div");
    div.innerHTML = str;
    var css = {
      position: "absolute",
      float: "left",
      "white-space": "nowrap",
      visibility: "hidden",
      "font-size": fontSize,
      "font-family": fontFamily,
    };
    for (let k in css) {
      div.style[k] = css[k];
    }
    div = document.body.appendChild(div);
    var w = div.offsetWidth;
    document.body.removeChild(div);
    return w;
  } else {
    return undefined;
  }
};
