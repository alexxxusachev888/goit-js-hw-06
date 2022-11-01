const listElem = document.querySelector('#categories');
const itemElem = listElem.children;


console.log(`Number of categories: ${itemElem.length}`);

Array.from(itemElem).forEach((point) => {
  const itemHeaderElem = point.firstElementChild;
  const itemInnerListElem = point.lastElementChild.children;

  console.log(`Category: ${itemHeaderElem.textContent}`);
  console.log(`Elements: ${itemInnerListElem.length}`);
});