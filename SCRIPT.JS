document.getElementById("editorForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("editorName").value;
  let email = document.getElementById("editorEmail").value;
  let portfolio = document.getElementById("editorPortfolio").value;
  let specialization = document.getElementById("editorSpecialization").value;

  // Save editor data in localStorage
  localStorage.setItem("editorName", name);
  localStorage.setItem("editorEmail", email);
  localStorage.setItem("editorPortfolio", portfolio);
  localStorage.setItem("editorSpecialization", specialization);

  // Redirect to the profile page
  window.location.href = "profile.html";
});

// Handle Client Form Submission (For Future Use)
document.getElementById("clientForm").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Thank you! We will connect you with an editor soon.");
});
