export default function reverseString(string) {
  if (typeof string === 'string') {
    return string.split("").reverse().join("");
  } else {
    throw new Error('Argument has to be a string');
  }

}
