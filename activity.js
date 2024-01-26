let posts = [];
let lastActivityTime = null;

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      lastActivityTime = new Date().toLocaleString(); // Update last activity time
      localStorage.setItem('lastActivityTime', lastActivityTime); // Store last activity time in local storage
      resolve(lastActivityTime); // Resolve with the updated time
    }, 1000);
  });
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post); // Add the new post
      localStorage.setItem('posts', JSON.stringify(posts)); // Store posts array in local storage
      resolve(); // Resolve the promise
    }, 2000);
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        const deletedPost = posts.pop(); // Delete the last post
        localStorage.setItem('posts', JSON.stringify(posts)); // Update posts array in local storage
        resolve(deletedPost); // Resolve with the deleted post
      } else {
        reject('Error: No posts to delete');
      }
    }, 1000);
  });
}

// Retrieve posts and lastActivityTime from local storage if available
const storedPosts = localStorage.getItem('posts');
if (storedPosts) {
  posts = JSON.parse(storedPosts);
}

const storedLastActivityTime = localStorage.getItem('lastActivityTime');
if (storedLastActivityTime) {
  lastActivityTime = storedLastActivityTime;
}

createPost({ title: 'post three', body: 'this is post three' })
  .then(() => updateLastUserActivityTime())
  .then((updatedTime) => {
    console.log('Updated Last Activity Time:', updatedTime);
  })
  .catch((error) => {
    console.log('Error:', error);
  });
