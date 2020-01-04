
function changeLetter(x,value) {

  if (value < 0) {
    return x.charCodeAt();
  }

  let charCode = x.charCodeAt();
  if (x.match(/[a-z]/i)) {

    if ((charCode >= 65) && (charCode <= 90)) {
      return (((charCode - 65 + value) % 26) + 65);

    } else if ((charCode >= 97) && (charCode <= 122)) {
      return (((charCode - 97 + value) % 26) + 97);
    }

  } else {
    return x.charCodeAt();
  }


}


export default function caesarCipher (str,value) {
  if (str === '' || !(typeof str === 'string')) {
    throw new Error('You need to provide a string');
  }
  return String.fromCharCode.apply(null,str.split("").map(el => changeLetter(el,value)));

}
