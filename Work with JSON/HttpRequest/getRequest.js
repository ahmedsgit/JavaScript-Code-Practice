/***
 * Get http request
 */

function collectData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const getData = JSON.parse(xhttp.responseText)

            const result = new Array();
            var show = document.getElementById('show');
            var li = document.createElement('li');
            for (var i = 0; i < getData.IT.length; i++) {
                result[i] = getData.IT[i].title;
            }
            result.forEach(item => {
                console.log(item);
                var text = document.createTextNode(item);
                li.appendChild(text);
                show.appendChild(li);
            })


        }
    };
    xhttp.open("GET", "anotherData.json", true);
    xhttp.send();
}

collectData();