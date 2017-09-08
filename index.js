function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  var priorChild = document.querySelector('#grand-node')
  var bottomChild = priorChild.querySelector('*')
  while (bottomChild) {
    priorChild = bottomChild
    bottomChild = bottomChild.querySelector('*')
  }
  return priorChild
}

function increaseRankBy(n) {
  var rLists = document.querySelectorAll('.ranked-list')
    for (var i = 0; i < rLists.length; i++) {
      rLists[i].innerHTML = parseInt(rLists[i].innerHTML) + n
    }
}