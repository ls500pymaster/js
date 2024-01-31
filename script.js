// Leap year

const leapYear = prompt("Please input year");

if (leapYear % 400 === 0) {
    alert("Leap year");
} else if (leapYear % 4 === 0 && leapYear % 100 !== 0) {
    alert("Leap year");
} else {
    alert("Not a leap year");
}