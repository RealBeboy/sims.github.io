// script.js
document.querySelectorAll('.dropdown-btn').forEach(button => {
  button.addEventListener('click', () => {
    const dropdownContent = button.nextElementSibling;
    const isExpanded = dropdownContent.style.display === 'block';
    // Collapse all dropdowns
    document.querySelectorAll('.dropdown-content').forEach(content => {
      content.style.display = 'none';
    });
    // Toggle the clicked dropdown
    dropdownContent.style.display = isExpanded ? 'none' : 'block';
  });
});
