export const isNumeric = (num) =>
  (typeof num === "number" || (typeof num === "string" && num.trim() !== ""))
  && !isNaN(num);

export const sizeToSemiSize = (orgSize) => {
  switch (orgSize) {
  case "medium":
    return "default";
  case "small":
  default:
    return orgSize;
  }
};
