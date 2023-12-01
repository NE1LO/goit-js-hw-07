const categories = document.querySelector("#categories");
console.log(`Number of categories: ${categories.childElementCount}`);

const items = document.querySelectorAll(".item");

items.forEach((item) => {
  const h2Element = item.querySelector("h2");
  const categoryName = h2Element.textContent;
  const categoryItemsCount = item.querySelectorAll("ul li").length;

  console.log(`Category: ${categoryName}`);
  console.log(`Number of items: ${categoryItemsCount}`);
  console.log("------------------------");
});
