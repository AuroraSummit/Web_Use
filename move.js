const list = document.querySelector(".list");
let sourceNode;
list.ondragstart = (e) => {
  setTimeout(() => {
    e.target.classList.add("moving");
  }, 0);
  sourceNode = e.target;
};
list.ondragover = (e) => {
  e.preventDefault();
};
list.ondragenter = (e) => {
  e.preventDefault();

  if (e.target === list || e.target === sourceNode) {
    return;
  }
  const children = [...list.children];
  const sourceIndex = children.indexOf(sourceNode);
  const targetIndex = children.indexOf(e.target);
  if (sourceIndex < targetIndex) {
    // console.log("向下拖动");
    list.insertBefore(sourceNode, e.target.nextElementSibling);
  } else {
    // console.log("向上拖动");
  }
  list.insertBefore(sourceNode, e.target.nextElementSibling);
  // console.log(e.target);
};
list.ondragend = (e) => {
  e.target.classList.remove("moving");
};
