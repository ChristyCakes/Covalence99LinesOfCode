
document.addEventListener('DOMContentLoaded', function () {

    var sing = document.getElementById('sing');

    sing.addEventListener('click', function () {

        // clicking the button adds friends, one at a time, with song below their name
        var friend1 = document.createElement('div');
        friend1.className = "friend";
        var friend1h3 = document.createElement('h3');
        var robert = document.createTextNode('Robert');
        friend1h3.appendChild(robert);
        document.body.appendChild(friend1h3);


        for (var i = 99; i > 0; i--) {
            var friend1p = document.createElement('p');
            if (i > 2) {
                var a = document.createTextNode((i) + " lines of code in the file, " + (i) + " lines of code; ");
                friend1p.appendChild(a);
                friend1p.appendChild(robert.cloneNode());
                var b = document.createTextNode(" strikes one out, clears it all out " + (i - 1) + " lines of code in the file");
                friend1p.appendChild(b);

            } else if (i === 2) {
                var c = document.createTextNode("2 lines of code in the file, 2 lines of code; ");
                friend1p.appendChild(c);
                friend1p.appendChild(robert.cloneNode());
                var d = document.createTextNode(" strikes one out, clears it all out 1 line of code in the file");
                friend1p.appendChild(d);
               
            } else {
                var e = document.createTextNode("1 line of code in the file, 1 line of code; ");
                friend1p.appendChild(e);
                friend1p.appendChild(robert.cloneNode());
                var f = document.createTextNode(" strikes one out, clears it all out, 0 lines of code in the file");
                friend1p.appendChild(f);
            }
        document.body.appendChild(friend1p);
    }




    //next friend
    var f2 = document.createElement('div');
    f2.className = "friend";
    var f2h3 = document.createElement('h3');
    var owen = document.createTextNode('Owen');
    f2h3.appendChild(owen);
    document.body.appendChild(f2h3);

    var f3 = document.createElement('div');
    f3.className = "friend";
    var f3h3 = document.createElement('h3');
    var christina = document.createTextNode('Christina');
    f3h3.appendChild(christina);
    document.body.appendChild(f3h3);

    var f4 = document.createElement('div');
    f4.className = "friend";
    var f4h3 = document.createElement('h3');
    var chelsey = document.createTextNode('Chelsey');
    f4h3.appendChild(chelsey);
    document.body.appendChild(f4h3);

    var f5 = document.createElement('div');
    f5.className = "friend";
    var f5h3 = document.createElement('h3');
    var mom = document.createTextNode('Mom');
    f5h3.appendChild(mom);
    document.body.appendChild(f5h3);
})
})



// code to run song in console with button click 

// sing.addEventListener('click', function () {
//     var friends = ["Robert", "Owen", "Christina", "Chelsey", "mom"];
//     for (var f = 0; f < friends.length; f++) {
//         for (var i = 99; i > 0; i--) {
//             if (i > 1) {
//                 console.log((i) + " lines of code in the file, " + (i) + " lines of code; " + friends[f] + " strikes one out, clears it all out " + (i - 1) + " lines of code in the file");
//             } else {
//                 console.log((i) + " line of code in the file, " + (i) + " line of code; " + friends[f] + " strikes one out, clears it all out, 0 lines of code in the file");
//             }
//         }
//     }
// })