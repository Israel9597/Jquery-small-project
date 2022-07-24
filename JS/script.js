// Question 4:
// Create an HTML form which asks users to provide their First name, Last name and Email
// address. All the fields should be labeled as required. Once the user submits, write a JavaScript
// function that checks if all the fields are provided. If not, it should show an error message above
// the form.
// If the user provides all the values, hide the form input fields, and display all the values provided
// by the user on the browser.

$("#profile").hide();

const regForm = $(".form-container").on("submit", (e) => {
  e.preventDefault();
  registrationForm();
});
const body = $("body");
window.onload(
  regForm.animate(
    {
      width: "50%",
      marginLeft: "350px",
    },
    800
  )
);
// 'linear-gradient(
//     toRight, rgba(0 170 255 0'),
//     rgb(1, 188, 251)
//   )'

window.onload(
  body.animate(
    {
      backgroundColor: "yellow",
    },
    500
  )
);

function registrationForm() {
  let firstName = $("#first-Name").val();
  let lastName = $("#last-Name").val();
  let email = $("#E-mail").val();
  let profile = $("#profile");
  let pName = $("#p-name");
  let plName = $("#p-lname");
  let pmail = $("#p-email");
  if (firstName === "" || lastName === "" || email === "") {
    regForm.prepend(
      '<div class="alert alert-danger" id="" role="alert"><p>please fill the required fileds</p> </div>'
    );
  } else {
    regForm.slideToggle();
    profile.show();
    pName.text(`First name : ${firstName} `),
      plName.text(`Last name : ${lastName} `),
      pmail.text(`E-mail: ${email} `);
  }
  console.log(profile);
}
