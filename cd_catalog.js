function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
      }
    };
    xmlhttp.open("GET", "cd_catalog.xml", true);
    xmlhttp.send();
}
  
function myFunction(xml) {
    var title, artist, country, i, xmlDoc, txt1, txt2, txt3;
    xmlDoc = xml.responseXML;
    txt1 = "";
    txt2 = "";
    txt3 = "";

    title = xmlDoc.getElementsByTagName("TITLE");
    artist = xmlDoc.getElementsByTagName("ARTIST");
    country = xmlDoc.getElementsByTagName("COUNTRY");

    for (i = 0; i < title.length; i++) {
      txt1 += title[i].childNodes[0].nodeValue + "<br>";
      txt2 += artist[i].childNodes[0].nodeValue + "<br>";
      txt3 += country[i].childNodes[0].nodeValue + "<br>";
      
    }
    document.getElementById("demo1").innerHTML = txt1;
    document.getElementById("demo2").innerHTML = txt2;
    document.getElementById("demo3").innerHTML = txt3;
}

