let nextEvent = 1
let Timer = 0
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
            Timer += 1
        }
    }
})
