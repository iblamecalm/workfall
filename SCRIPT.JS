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
document.getElementById("editorForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop form from refreshing the page
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let portfolio = document.getElementById("portfolio").value;
    let specialization = document.getElementById("specialization").value;

    // Store data in localStorage
    localStorage.setItem("editorName", name);
    localStorage.setItem("editorEmail", email);
    localStorage.setItem("editorPortfolio", portfolio);
    localStorage.setItem("editorSpecialization", specialization);

    // Redirect to the profile page
    window.location.href = "profile.html";
});
