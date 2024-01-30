const colorValidator = (value) => {
  // List of valid color keywords
  const colorKeywords = [
    "black",
    "silver",
    "gray",
    "white",
    "maroon",
    "red",
    "purple",
    "fuchsia",
    "green",
    "lime",
    "olive",
    "yellow",
    "navy",
    "blue",
    "teal",
    "aqua",
  ];

  // Check if value is a valid color keyword
  if (colorKeywords.includes(value.toLowerCase())) {
    return true;
  }

  // Check if value is a valid hexadecimal color code
  const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  if (hexColorRegex.test(value)) {
    return true;
  }

  // If value is neither a valid color keyword nor a valid hexadecimal color code, return an error message
  return "Please enter a valid color keyword or hexadecimal color code.";
};

const textValidator = (value) => {
  var valid = value.length > 0 && value.length < 4;
  return valid || "Please enter 1-3 Characters, no more and no less";
};

module.exports = { colorValidator, textValidator };
