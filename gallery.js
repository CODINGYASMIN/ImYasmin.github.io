let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function() {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])  // Cycle to next item
})

prev.addEventListener('click', function() {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])  // Cycle to previous item
})
