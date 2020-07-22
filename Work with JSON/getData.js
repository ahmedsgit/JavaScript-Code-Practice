function collectJSON() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "http://localhost/server/data.json", false);
    xmlhttp.send();
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var result = xmlhttp.responseText;
        document.getElementById('show').innerHTML = result;
    }
}