
const elsList = document.querySelectorAll('#categories .item');
console.log('Number of categories:', elsList.length);

for (let index = 0; index < elsList.length; index += 1) {
    console.log('Category:', elsList[index].firstElementChild.textContent);
    console.log('Elements:', elsList[index].lastElementChild.children.length);
}
