
document.addEventListener('DOMContentLoaded', function () {

    var sing = document.getElementById('sing');

    sing.addEventListener('click', function () {

        // clicking the button adds friends, one at a time, with song below their name

        var friends = ['Robert', 'Owen', 'Christina', 'Chelsey', 'mom'];
        for (var x = 0; x < friends.length; x++) {

            var heading = document.createElement('h3');
            var name = document.createTextNode(friends[x]);
            heading.appendChild(name);
            document.body.appendChild(heading);

            for (var i = 99; i > 0; i--) {
                var para = document.createElement('p');
                if (i > 2) {
                    var a = document.createTextNode((i) + " lines of code in the file, " + (i) + " lines of code; ");
                    para.appendChild(a);
                    para.appendChild(name.cloneNode());
                    var b = document.createTextNode(" strikes one out, clears it all out " + (i - 1) + " lines of code in the file");
                    para.appendChild(b);

                } else if (i === 2) {
                    var c = document.createTextNode("2 lines of code in the file, 2 lines of code; ");
                    para.appendChild(c);
                    para.appendChild(name.cloneNode());
                    var d = document.createTextNode(" strikes one out, clears it all out 1 line of code in the file");
                    para.appendChild(d);

                } else {
                    var e = document.createTextNode("1 line of code in the file, 1 line of code; ");
                    para.appendChild(e);
                    para.appendChild(name.cloneNode());
                    var f = document.createTextNode(" strikes one out, clears it all out, 0 lines of code in the file");
                    para.appendChild(f);
                }
                document.body.appendChild(para);
            }
        }
    })
})