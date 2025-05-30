
function pyramid(pattern, rows, inverted) {
  if (!pattern || typeof pattern !== "string") pattern = "*";
  if (!Number.isInteger(rows) || rows <= 0) return "\n\n";
  inverted = Boolean(inverted);

  let result = "\n";

  if (!inverted) {
    // Upright pyramid
    for (let i = 1; i <= rows; i++) {
      const chars = 2 * i - 1;              // odd number of chars
      const spaces = rows - i;              // leading spaces
      result += " ".repeat(spaces) + pattern.repeat(chars) + "\n";
    }
  } else {
    // Inverted pyramid
    for (let i = rows; i >= 1; i--) {
      const chars = 2 * i - 1;
      const spaces = rows - i;
      result += " ".repeat(spaces) + pattern.repeat(chars) + "\n";
    }
  }

  return result;
}


console.log(pyramid("p", 5, true));
console.log(pyramid("o", 4, false));
