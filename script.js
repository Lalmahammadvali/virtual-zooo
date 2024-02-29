// Get all the sections in the "boxes" div
const sections = document.querySelectorAll('.boxes section');

// Add a click event listener to each section
sections.forEach((section) => {
  section.addEventListener('click', () => {
    // Remove the "active" class from all sections
    sections.forEach((s) => s.classList.remove('active'));

    // Add the "active" class to the clicked section
    section.classList.add('active');

    // Get the id of the clicked section
    const id = section.id;

    // Show the corresponding content for the clicked section
    showContent(id);
  });
});

// Function to show the content for a given id
function showContent(id) {
  // Hide all content elements
  const contents = document.querySelectorAll('.content');
  contents.forEach((content) => content.style.display = 'none');

  // Show the content element with the matching id
  const content = document.querySelector(`.content.${id}`);
  if (content) {
    content.style.display = 'block';



  }
}



document.getElementById('animal-search').addEventListener('input', filterAnimals);

function filterAnimals() {
  const inputValue = document.getElementById('animal-search').value.toLowerCase();
  const animalBoxes = document.getElementById('animal-boxes');
  const animalBoxesChildren = animalBoxes.children;

  for (let i = 0; i < animalBoxesChildren.length; i++) {
    const animalName = animalBoxesChildren[i].getElementsByTagName('h2')[0].innerText.toLowerCase();

    if (animalName.includes(inputValue)) {
      animalBoxesChildren[i].style.display = 'block';
    } else {
      animalBoxesChildren[i].style.display = 'none';
    }
  }
}