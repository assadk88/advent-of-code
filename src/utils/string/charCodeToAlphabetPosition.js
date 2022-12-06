// Takes: A string character
// Performs: A look up of its ASCII code
// Returns: The position in the alphabet of the character
// Note: This only works for UPPER and lower case alphabet characters.

export function charCodeToAlphabetPosition(char) {
  return char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 97
    ? char.charCodeAt(0) - 38
    : char.charCodeAt(0) - 96;
}
