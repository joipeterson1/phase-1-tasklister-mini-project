document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildList(e.target.elements['new-task-description'].value)
    form.reset()
  })
})

function buildList(list){
let p = document.createElement('p')
p.textContent = list
}

function buildList(list){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  p.textContent = `${list} `
  p.appendChild(btn)
  document.querySelector('#tasks').appendChild(p)
}

function handleDelete(e){
e.target.parentNode.remove()
}