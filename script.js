// let film=document.forms.film['seans'].value;
// function jaki_film() {
//     console.log(film);
// }
function checkform(form) {
  // get all the inputs within the submitted form
  let inputs = document.forms.bilet.getElementsByTagName("input");
  for (let i = 0; i < inputs.length; i++) {
    // only validate the inputs that have the required attribute
    if (inputs[i].hasAttribute("required")) {
      if (inputs[i].value == "") {
        // found an empty field that is required
        alert("Please fill all required fields");
        return false;
      }
    }
  }
  return true;
}
