// Change text content dynamically
document.addEventListener("DOMContentLoaded", () => {
    const sectionHeading = document.querySelector("section h2");
    sectionHeading.textContent = "Updated: About This Site";
  
    // Modify CSS styles via JavaScript
    const article = document.querySelector("article");
    article.style.backgroundColor = "#3b3a3a";
    article.style.border = "black solid 2px";
  
    // Add event listener to button
    const button = document.querySelector("button");
    let added = false;
  
    button.addEventListener("click", () => {
      if (!added) {
        // Add a new paragraph
        const newPara = document.createElement("p");
        newPara.textContent = "You clicked the button and added this paragraph!";
        newPara.id = "dynamic-paragraph";
        document.querySelector("main").appendChild(newPara);
        added = true;
        button.textContent = "Remove Paragraph";
      } else {
        // Remove the paragraph if it exists
        const oldPara = document.getElementById("dynamic-paragraph");
        if (oldPara) {
          oldPara.remove();
        }
        added = false;
        button.textContent = "Click Me";
      }
    });
  });