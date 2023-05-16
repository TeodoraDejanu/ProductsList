function getData() {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const colorProduct = document.getElementById("color").value;
  const output = document.getElementById("output");
  const forDelete = document.getElementById("forDelete");
  //saving the values in local storage
  localStorage.setItem("txtValue", name);
  localStorage.setItem("txtValue1", price);
  localStorage.setItem("txtValue2", colorProduct);
  let value = 1;
  localStorage.setItem("txtValue3", value);
  let sum = document.getElementById("price").value;
  localStorage.setItem("txtValue4", sum);
}

//displaying the value from local storage to another page by their respective Ids
document.getElementById("dataName").innerHTML =
  localStorage.getItem("txtValue");
document.getElementById("dataPrice").innerHTML =
  localStorage.getItem("txtValue1");
document.getElementById("dataColor").innerHTML =
  localStorage.getItem("txtValue2");
document.getElementById("number").innerHTML = localStorage.getItem("txtValue3");
localStorage.getItem("txtValue4");
document.getElementById("sum").innerHTML = localStorage.getItem("txtValue4");

let value = JSON.parse(localStorage.getItem("txtValue3"));
function incrementValue() {
  value = isNaN(value) ? 0 : value;
  if (value < 10) {
    value++;
    localStorage.setItem("txtValue3", value);
    document.getElementById("number").innerHTML =
      localStorage.getItem("txtValue3");
  }
}
function decrementValue() {
  value = isNaN(value) ? 0 : value;
  if (value > 1) {
    value--;
    localStorage.setItem("txtValue3", value);
    document.getElementById("number").innerHTML =
      localStorage.getItem("txtValue3");
  }
}

function deleteItem() {
  forDelete.remove();
  output.innerHTML = `Nu exista niciun produs`;
  localStorage.removeItem("txtValue");
  localStorage.removeItem("txtValue1");
  localStorage.removeItem("txtValue2");
  localStorage.removeItem("txtValue3");
  localStorage.removeItem("txtValue4");
}
function sum() {
  const price1 = JSON.parse(localStorage.getItem("txtValue1"));
  let sum = price1 * value;
  localStorage.setItem("txtValue4", sum);
  document.getElementById("sum").innerHTML = localStorage.getItem("txtValue4");
}
