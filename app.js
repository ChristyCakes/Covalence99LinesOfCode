var friends = ["Robert", "Owen", "Christina", "Chelsey", "mom"];

for (var f = 0; f < friends.length; f++) {
    for (var i = 99; i > 0; i--) {
        if (i > 1) {
            console.log((i) + " lines of code in the file, " + (i) + " lines of code; " + friends[f] + " strikes one out, clears it all out " + (i - 1) + " lines of code in the file");
        } else {
            console.log((i) + " line of code in the file, " + (i) + " line of code; " + friends[f] + " strikes one out, clears it all out, 0 lines of code in the file");
        }
    }
}