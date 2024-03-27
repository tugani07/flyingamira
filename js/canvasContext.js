const canvas = document.querySelector('#canvas')
const canvas2 = document.querySelector('#canvas-2')

// the height and width of the canvas
canvas.height = canvas2.height = innerHeight - 10
canvas.width = canvas2.width = innerWidth / 3

// context of the canvas
const context = canvas.getContext('2d')
const context2 = canvas2.getContext('2d')