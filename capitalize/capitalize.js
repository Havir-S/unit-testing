export default function capitalize(str) {
    if ( typeof str === 'string') {
      return str[0].toUpperCase() + str.substr(1);
    } else {
      throw new Error('You have to provide a string');
    }
}
