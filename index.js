function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('div#nested div.target')
}

function deepestChild() {
  let list =   document.querySelector('div#grand-node');
  let nextList = list.children[0];
  while (nextList) {
    list = nextList
    nextList = list.children[0]
  }
  return list
}

function increaseRankBy(n) {
  const list =  document.getElementById('app').querySelectorAll('ul.ranked-list')
  for (const element of list) {
    for (const e of element.children) {
		   e.innerHTML = parseInt(e.innerHTML) + n
    }
  }
}
//Define a function increaseRankBy(n) that increases the ranks in all of the .ranked-lists by n. (You might need to make use of parseInt()
