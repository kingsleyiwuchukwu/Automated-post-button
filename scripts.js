// Get access to DOM elements
const header = document.querySelector('header');

const addPostButton = document.getElementById('add-post');
const articleSection = document.querySelector('section');
const removePostButton = document.getElementById('remove-post');

// Event listener to add post
addPostButton.addEventListener('click', () => {
    const newPost = createNewPost();
    articleSection.appendChild(newPost);
});

// Event listener to remove post
removePostButton.addEventListener('click', () => {
  const articleCount = articleSection.childElementCount;
  if(articleCount > 1) {
    articleSection.removeChild(articleSection.children[articleCount - 1]);
  }
});

// Page functions
function createNewPost() {
  let newArticle = document.createElement('article');
  let newHeading = document.createElement('h5');
  let newParagraph = document.createElement('p');
  
  newHeading.textContent = 'Another blog post!';
  newParagraph.textContent = 'Love me! gnaw the corn cob intently sniff hand meow for food, then when human fills food dish, take a few bites of food and continue meowing really likes hummus meow all night having their mate disturbing sleeping humans. Run in circles pose purrfectly to show my beauty for when owners are asleep, cry for no apparent reason sit by the fire or lies down or paw at your fat belly.';
  
  newArticle.appendChild(newHeading);
  newArticle.appendChild(newParagraph);
  
  newArticle.classList.add('list-group-item');
  return newArticle;
}