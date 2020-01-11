// from data.js
var tableData = data;

var tbody = d3.select("tbody");

function tableDisplay(ufoInfo) {
    ufoInfo.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
};

var button = d3.select("#filter-btn")

button.on("click", function(event){
    
    d3.select("tbody").html("");
    d3.event.preventDefault();
    
    var dateInput = d3.select("#datetime").property("value")
    console.log(dateInput)
    var filteredData = tableData.filter(ufoSighting => ufoSighting.datetime === dateInput.trim());
    console.log(filteredData)
    
    if (filteredData.length == 0) {
        d3.select("tbody")
        .append("tr")
        .append("td")
        .html("<h4>No Records Found</h4>");
    };

    filteredData.forEach(appendTable)

});

function appendTable(ufoData) {
    var tbody = d3.select("tbody");
    var row = tbody.append("tr");

Object.entries(ufoData).forEach(([key, value]) => {
    let cell = row.append("td")
    cell.text(value);
    });
};


