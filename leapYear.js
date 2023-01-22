function isLeapYeaar(year) {
  if (year % 4 == 0 && year % 100 != 0) {
    console.log("Leap year");
  } else if (year % 400 == 0) {
    console.log(year + " is a leap year");
  } else {
    console.log("Not a leap year");
  }
}

isLeapYeaar(2020);
