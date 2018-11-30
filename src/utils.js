import tinygradient from "tinygradient";

export const gradient = tinygradient("blue", "red");

export function fToC(fahrenheit) {
  return Math.round(((fahrenheit - 32) * 5) / 9);
}

export function cToF(celsius) {
  return Math.round((celsius * 9) / 5 + 32);
}
