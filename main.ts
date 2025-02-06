states.setEnterHandler("EventA", function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        # . . . #
        # . . . #
        `)
})
states.setEnterHandler("EventPick", function () {
    nextEvent = randint(1, 5)
    Timer = 0
    if (nextEvent == 1) {
        states.setState("EventA")
    } else if (nextEvent == 2) {
        states.setState("EventB")
    } else if (nextEvent == 3) {
        states.setState("EventShake")
    } else if (nextEvent == 4) {
        states.setState("EventPress")
    } else if (nextEvent == 5) {
        states.setState("EventAB")
    } else {
        states.setState("EventError")
    }
})
states.setEnterHandler("Death", function () {
    basic.showLeds(`
        . # . # .
        # . # . #
        # # # # #
        # # # # #
        . # . # .
        `)
})
states.addLoopHandler("EventA", function () {
    while (!(input.buttonIsPressed(Button.A))) {
        basic.pause(1000)
        Timer += 1
        if (Timer >= 5) {
            states.setState("Death")
        }
    }
    while (input.buttonIsPressed(Button.A)) {
        states.setState("EventPick")
    }
})
let Timer = 0
let nextEvent = 0
states.setState("EventPick")
