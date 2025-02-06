input.onButtonPressed(Button.A, function () {
    if (nextEvent == 1) {
        nextEvent = randint(1, 5)
        Timer = 0
    }
})
let Timer = 0
let nextEvent = 0
nextEvent = 1
Timer = 0
basic.forever(function () {
    while (nextEvent == 1) {
        basic.showLeds(`
            . . # . .
            . # . # .
            . # # # .
            # . . . #
            # . . . #
            `)
        for (let index = 0; index < 5; index++) {
            basic.pause(1000)
            Timer += 1
        }
    }
    while (nextEvent != 1) {
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            . . . . .
            `)
    }
})
basic.forever(function () {
    while (Timer >= 5) {
        basic.showLeds(`
            . # . # .
            # . # . #
            # # # # #
            # # # # #
            . # . # .
            `)
        nextEvent = 100
    }
})
