const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);


const headings = document.querySelectorAll("h2");
headings.forEach(heading => {
    console.log(`Category: ${heading.textContent}`)
    const list = heading.nextElementSibling;
    console.log(`Elements: ${list.children.length}`)
});
