function palindrome(str) {
    // Remove non-alphanumeric characters and convert to lower case
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Check if the string is equal to its reverse
    return str === str.split('').reverse().join('');
  }
  console.log(palindrome("racecar")); // true
  console.log(palindrome("RaceCar")); // true
  console.log(palindrome("race CAR")); // true
  console.log(palindrome("2A3*3a2")); // true
  console.log(palindrome("2A3 3a2e 2_A3*3#A2")); // true