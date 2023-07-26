// JavaScript code for handling dynamic content and basic comment functionality
document.addEventListener("DOMContentLoaded", () => {
    const blogPostsSection = document.getElementById("blog-posts");
    const singlePostSection = document.getElementById("single-post");
  
    // Show single post page on click
    blogPostsSection.addEventListener("click", (event) => {
      const article = event.target.closest("article");
      if (article) {
        blogPostsSection.style.display = "none";
        singlePostSection.style.display = "block";
      }
    });
  
    // Show blog post listing on click
    const backButton = document.createElement("button");
    backButton.textContent = "Back to Blog";
    backButton.addEventListener("click", () => {
      singlePostSection.style.display = "none";
      blogPostsSection.style.display = "block";
    });
    singlePostSection.prepend(backButton);
  
    // Comment form submission
    const commentForm = document.getElementById("comment-form");
    const commentsList = document.querySelector(".comments ul");
  
    commentForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const comment = document.getElementById("comment").value;
      const commentItem = document.createElement("li");
      commentItem.innerHTML = `<strong>${name}</strong>: ${comment}`;
      commentsList.appendChild(commentItem);
      commentForm.reset();
    });
  });
  