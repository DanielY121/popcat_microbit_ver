input.onButtonPressed(Button.A, function () {
    click += 1
})
input.onButtonPressed(Button.AB, function () {
    click += 2
})
input.onButtonPressed(Button.B, function () {
    click += 1
})
let click = 0
basic.forever(function () {
    basic.showNumber(click)
    basic.pause(100)
})
