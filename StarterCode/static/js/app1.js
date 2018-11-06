// Get references to the tbody element, input field and button
var tbody = document.querySelector("tbody");
var dateInput = document.querySelector("#datetime");
var searchBtn = document.querySelector("#filter-btn");



// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredAddresses to dataSet initially
var filteredTable = data;

// renderTable renders the filteredAddresses to the tbody
function renderTable() {
  tbody.innerHTML = "";
  for (var i = 0; i < filteredTable.length; i++) {
    // Get get the current address object and its fields
    var address = filteredTable[i];
    console.log(address)
    var fields = Object.keys(address);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var row = tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // create new cell for every field
      var field = fields[j];
      var cell = row.insertCell(j);
      cell.innerText = address[field];
    }
  }
}

function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterDate = dateInput.value;
 

  // Set filteredAddresses to an array of all addresses whose "Date" matches the filter
  if (filterDate != "")
  {
    filteredTable = data.filter(function(address) 
    {
      var addressDate = address.datetime; 
    
    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    return addressDate === filterDate;
    });
   }

   else {filteredTable};

  
    renderTable();

}

// Render the table for the first time on page load
renderTable();




