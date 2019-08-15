//function to fetch account details
function fetchAccount() {
  const accountNumber = document.getElementById("accountNumber").value;
  //url for the service
  const url = "https://nodered.dipolediamond.com/account/" + accountNumber;
  axios
    .get(url)
    .then(function(response) {
      
        document.getElementById("fullName").value = response.data.name;
        document.getElementById("accountType").value = response.data.account_type;
        document.getElementById("email").value = response.data.email;
                
    })
    .catch(function(error) {
      console.log(error);
    });
}

//function to check and alert ok
function checkSubmit() {
  let name = document.getElementById("fullName").value;
  let account_type = document.getElementById("accountType").value;
  let email = document.getElementById("email").value;
  let endDate = document.getElementById("endDate").value;
  let startDate = document.getElementById("startDate").value;

  if (
    name != "" &&
    account_type != "" &&
    email != "" &&
    endDate != "" &&
    startDate != ""
  ) {
    alert("OK!");
  } else {
    alert("Some Parameters are missing");
  }
}
