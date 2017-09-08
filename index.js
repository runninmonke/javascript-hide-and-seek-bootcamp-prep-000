function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  let priorChild = document.querySelector('#grand-node')
  let bottomChild = priorChild.querySelector('*')
  while (bottomChild) {
    priorChild = bottomChild
    bottomChild = bottomChild.querySelector('*')
  }
  return priorChild
}
