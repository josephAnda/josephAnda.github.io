var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
    nameArray = finalName.split(" ");
    lastName = nameArray.pop().toUpperCase();
    firstName = nameArray.shift().toLowerCase();
    //firstLetter = firstName[0].toUpperCase();
    //(It turns out the variable above is unnecessary), but
    //might be used in the line below in the replace() fxn just in case
    firstName = firstName.replace(firstName[0], firstName[0].toUpperCase());
    finalName = firstName + " " + lastName;

    
    
    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
// (Yes . . . my code works.  I did a (primitive) test.
console.log(nameChanger(name));