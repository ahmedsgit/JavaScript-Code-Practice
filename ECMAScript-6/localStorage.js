function ToLocalStorageObject(name, key, value) {

    // Get the existing data
    var existing = localStorage.getItem(name);

    // If no existing data, create an array
    // Otherwise, convert the localStorage string to an array
    existing = existing ? JSON.parse(existing) : {};

    // Add new data to localStorage Array
    existing[key] = value;

    // Save back to localStorage
    localStorage.setItem(name, JSON.stringify(existing));

};
// Add new Value in local Storage
ToLocalStorageObject('Person', 'name', 'Labib');

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        const actualData = xhttp.responseText;

        // clear full localStorage
        // localStorage.clear();

        // Value assign(Create) in local Storage
        // localStorage.setItem('Person', actualData);

        // Get value(Read) in local Storage
        const getData = localStorage.getItem('Person');

        const data = JSON.parse(getData);

        // console.log(data);
    }
};
xhttp.open("GET", "data.json", true);
xhttp.send();

// for (var i = 0; i < localStorage.length; i++) {

//     const localData = localStorage.getItem(localStorage.key(i))
//     console.log(JSON.parse(localData));
// }