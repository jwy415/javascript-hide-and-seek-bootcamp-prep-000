function getFirstSelector(selector) {
  return document.querySelector(selector);
  }

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var rank = document.querySelectorAll('.ranked-list li');
  for (let i = 0, l = rank.length; i < l; i++) {
      rank[i].innerHTML = parseInt(rank[i].innerHTML) + n;
  }
}

function deepestChild() {
  var child = document.querySelector('div#grand-node');
  var nextChild = child.children[0]
  while (nextChild) {
    child = nextChild
    nextChild = nextChild.children[0]
  }
  return child
}