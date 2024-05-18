function firstWord(s) {
  // your code here
	s = s.trim();
    if (!s) {
        return s; // Empty string or only  spaces
    }
	
    // Find the index of the first space
    const spaceIndex = s.indexOf(' ');
    if (spaceIndex === -1) {
        return s; // No space found, return the entire string
    }
    return s.slice(0, spaceIndex); // Extract the first word
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
