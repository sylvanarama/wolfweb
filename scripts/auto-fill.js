var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/12VCKEIQ0QTu6P1sEqZD9ZbuOLDV7Cj8j9le_sdDPAM0/edit?usp=sharing';
  
function init() {
  Tabletop.init( { key: publicSpreadsheetUrl,
                   callback: showInfo,
                   simpleSheet: true, 
                   header: false} )
}

// function showInfo(data, tabletop) {
//   alert('Successfully processed!')
//   console.log(data);
// }

// window.addEventListener('DOMContentLoaded', init)

function search(nameKey, myArray){
  for (var i=0; i < myArray.length; i++) {
      if (myArray[i].title.toLowerCase() === nameKey) {
          return myArray[i];
      }
  }
}

function showInfo(data, tabletop) {
  console.log(data);
  var name = window.location.href.split('/').slice(-2).reverse().pop();
  var info = search(name, data);

  document.getElementById("title").innerHTML        = info.title;
  document.getElementById("date").innerHTML         = "Composed: " + info.date;
  document.getElementById("medium").innerHTML       = "Medium: " + info.medium;
  document.getElementById("performances").innerHTML = "Premiered: " + info.performamces;
  document.getElementById("commission").innerHTML   = "Commissioned by: " + info.commission;
  document.getElementById("funding").innerHTML      = "Funding provided by: " + info.funding;
  document.getElementById("notes").innerHTML        = info.notes;
  document.getElementById("duration").innerHTML     = info.duration;
  document.getElementById("category").innerHTML     = info.category;
}
window.addEventListener('DOMContentLoaded', init)


// var dir = "score/";
// var fileextension = ".png";
// $.ajax({
//     //This will retrieve the contents of the folder if the folder is configured as 'browsable'
//     url: dir,
//     success: function (data) {
//         //List all .png file names in the page
//         $(data).find("a:contains(" + fileextension + ")").each(function () {
//             var filename = this.href.replace(window.location.host, "").replace("http://", "");
//             $("body").append("<img src='" + dir + filename + "'>");
//         });
//     }
// });
