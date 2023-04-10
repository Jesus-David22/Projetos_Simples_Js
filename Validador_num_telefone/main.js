function telephoneCheck(str) {
    const pattern = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
    return pattern.test(str);
  }
  console.log(telephoneCheck("555-555-5555")); // true
  console.log(telephoneCheck("(555)555-5555")); // true
  console.log(telephoneCheck("(555) 555-5555")); // true
  console.log(telephoneCheck("555 555 5555")); // true
  console.log(telephoneCheck("5555555555")); // true
  console.log(telephoneCheck("1 555 555 5555")); // true
  console.log(telephoneCheck("2 555 555 5555")); // false
  console.log(telephoneCheck("555-5555")); // false
  console.log(telephoneCheck("5555555")); // false
  console.log(telephoneCheck("1 555)555-5555")); // false