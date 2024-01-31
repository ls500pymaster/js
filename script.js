// Fingers

const fingerNumber = +prompt("Type number of finger");

if (fingerNumber === 1) {
    alert("Thumb");
} else if (fingerNumber === 2) {
    alert("Pointer");
} else if (fingerNumber === 3) {
    alert("Middle");
} else if (fingerNumber === 4) {
    alert("Ring");
} else if (fingerNumber === 5) {
    alert("Little");
} else {
    alert("Enter number from 1 to 5");
}