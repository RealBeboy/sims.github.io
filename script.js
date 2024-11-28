// Function to toggle visibility of sections
function toggleSection(sectionId) {
  const section = document.getElementById(sectionId);
  const button = section.previousElementSibling.querySelector('.toggle-btn span');

  if (section.style.display === 'none' || section.style.display === '') {
    section.style.display = 'block';
    button.textContent = '▲'; // Change to collapse symbol
  } else {
    section.style.display = 'none';
    button.textContent = '▼'; // Change to expand symbol
  }
}

// JavaScript to add animations and interactivity
document.addEventListener("DOMContentLoaded", () => {
  // Select all feature items
  const featuresList = document.querySelectorAll(".features-list li");

  // Add hover effect with JavaScript for finer control
  featuresList.forEach((feature) => {
    feature.addEventListener("mouseover", () => {
      feature.style.transform = "scale(1.05)";
      feature.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
    });

    feature.addEventListener("mouseout", () => {
      feature.style.transform = "scale(1)";
      feature.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.1)";
    });
  });

  // Optional: Toggle detailed descriptions for each feature
  featuresList.forEach((feature) => {
    feature.addEventListener("click", () => {
      const detail = feature.querySelector(".detail");
      if (detail) {
        detail.style.display = detail.style.display === "block" ? "none" : "block";
      }
    });
  });
});
