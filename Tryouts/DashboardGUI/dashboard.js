  //set the refresh interval. 300000 = 5 mins
  var refreshInt = setInterval(myTimer, 300000);
  //Put the URL to your XML feed here
  var apiUrl = "put your URL here";


myTimer();

  //Test CORS
  function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);

  } else if (typeof XDomainRequest != "undefined") {
    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  return xhr;
}

var xhr = createCORSRequest('GET', apiUrl);
if (!xhr) {
  throw new Error('CORS not supported');
}

  function myTimer() {
    var d = new Date();
    var div = document.getElementById("demo");
    div.textContent = "Last Refresh (5 min intervals): ";
    document.getElementById("textDiv").innerHTML = d.toLocaleTimeString();
    loadXMLDoc();
  }

  function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", apiUrl, true);
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
      }
    };

    xmlhttp.send();
  }

  function currentTime() {
  var time = new Date();
  //put the date and time the function runs at in the console
  console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
  time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()
  }

  function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    var table = [];
    var x = xmlDoc.getElementsByTagName("Device");
    /*If you want to see all data returned, uncomment the following line and look at the results in the developer console (f12).
    You can expand a device that is returned, then look at childNodes to see what types of information are available to parse.
    If you want to add a specific data type, add it to the for loop below followed by "</td><td>" to end and start a new cell.*/
    //console.log(x);
    currentTime();
    //A very simple loop to get the data from childNodes to a table cell.
    for (i = 0; i <x.length+1; i++) {
      document.getElementById("BodyRows").innerHTML = table;
      //This calculates the percentage of free space for use later in the loop
      var percentFree = 100 - ((x[i].getElementsByTagName("UsedSpace")[0].childNodes[0].nodeValue / 1024 / 1024) / ((x[i].getElementsByTagName("UsedSpace")[0].childNodes[0].nodeValue /1024 /1024) + (x[i].getElementsByTagName("FreeSpace")[0].childNodes[0].nodeValue /1024 /1024)) * 100);
      table += "<tr><td>" +
      x[i].getElementsByTagName("Hostname")[0].childNodes[0].nodeValue.bold() +
      "</td><td>" +
      x[i].getElementsByTagName("Lastseen")[0].childNodes[0].nodeValue +
      "</td><td>" +
      (x[i].getElementsByTagName("UsedSpace")[0].childNodes[0].nodeValue / 1024 / 1024).toFixed(2)  + " GB" +
      "</td><td>" +
      (x[i].getElementsByTagName("FreeSpace")[0].childNodes[0].nodeValue / 1024 / 1024).toFixed(2)  + " GB" +
      "</td><td>" +
      ((x[i].getElementsByTagName("UsedSpace")[0].childNodes[0].nodeValue /1024 /1024) + (x[i].getElementsByTagName("FreeSpace")[0].childNodes[0].nodeValue /1024 /1024)).toFixed(2) + " GB" +
      "</td><td>" + percentFree.toFixed(0) + "%" +
      "</td><td>" +
      x[i].getElementsByTagName("FiveMinLoadAvg")[0].childNodes[0].nodeValue +
      "</td></tr>";
  }
};

function change()
{
    var elem = document.getElementById("pause");
    console.log(elem);
    console.log(elem.innerText);
    if (elem.innerText=="Pause AutoRefresh") {
      elem.innerText = "Resume AutoRefresh";
      clearInterval(refreshInt);
    } else {
        elem.innerText = "Resume AutoRefresh";
        setInterval(myTimer, 300000);
        myTimer();
        elem.innerText = "Pause AutoRefresh";
      }
}
