// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault()
      event.stopPropagation()
      if (form.checkValidity()) {
        // validation passed, so we can open a modal
        // This link leads to the documentation on how to create a modal in JavaScript
        // https://getbootstrap.com/docs/5.2/components/modal/#via-javascript
        // Given the code found there, first create your new instance of a Modal, by selecting your pages HTML modal (you don't need to pass in options)
        const myModal = new bootstrap.Modal(document.getElementById('myModal'), options)

        // then open it by using the show() method
        myModal.show();
      }

      
      form.classList.add('was-validated')
    }, false)
  });
  let select = document.getElementById("select");
  const locations = [
    {"name":"Alberta", "code":"AB"},
    {"name":"British Columbia", "code":"BC"},
    {"name":"Manitoba", "code":"MN"},
    {"name":"New Brunswick", "code":"NB"},
    {"name":"Newfoundland and Labrador", "code":"NL"},
    {"name":"Nova Scotia", "code":"NS"},
    {"name":"Nunavut", "code":"NV"},
    {"name":"Ontario", "code":"ON"},
    {"name":"Prince Edward Island","code":"PEI"},
    {"name":"Quebec", "code":"QC"},
    {"name":"Saskatchewan","code":"SK"},
    {"name":"Yukon", "code":"YK"}
  ];
  let options = "<option selected>Select your Province/Territory</option>";
  locations.forEach(location => {
    options += '<option value="' + location.code + '">' + location.name + '</option>';
  });
  select.innerHTML= options;
})()
