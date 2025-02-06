states.addLoopHandler("EventB", function () {
    while (input.buttonIsPressed(Button.B)) {
        states.setState("EventPick")
    }
    while (!(input.buttonIsPressed(Button.B))) {
        basic.pause(1000)
        Timer += 1
        if (Timer >= 5) {
            states.setState("Death")
        }
    }
})
states.setEnterHandler("EventA", function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        # . . . #
        # . . . #
        `)
})
states.setEnterHandler("EventB", function () {
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # . .
        . # . # .
        . # # . .
        `)
})
states.addLoopHandler("EventPress", function () {
    while (input.logoIsPressed()) {
        states.setState("EventPick")
    }
    while (!(input.logoIsPressed())) {
        basic.pause(1000)
        Timer += 1
        if (Timer >= 5) {
            states.setState("Death")
        }
    }
})
states.addLoopHandler("EventShake", function () {
    while (input.isGesture(Gesture.Shake)) {
        states.setState("EventPick")
    }
    while (!(input.isGesture(Gesture.Shake))) {
        basic.pause(1000)
        Timer += 1
        if (Timer >= 5) {
            states.setState("Death")
        }
    }
})
states.setEnterHandler("EventAB", function () {
    basic.showLeds(`
        . . . # .
        . # . . #
        # . # # .
        # # # . #
        # . # # .
        `)
})
states.setEnterHandler("EventPick", function () {
    nextEvent = randint(1, 5)
    Timer = 0
    basic.clearScreen()
    basic.pause(1000)
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
states.addLoopHandler("EventAB", function () {
    while (input.buttonIsPressed(Button.AB)) {
        states.setState("EventPick")
    }
    while (!(input.buttonIsPressed(Button.AB))) {
        basic.pause(1000)
        Timer += 1
        if (Timer >= 5) {
            states.setState("Death")
        }
    }
})
states.setEnterHandler("EventPress", function () {
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # . .
        . # . . .
        . # . . .
        `)
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
states.setEnterHandler("EventShake", function () {
    basic.showLeds(`
        . # . # .
        # . # . #
        . . . . .
        . # . # .
        # . # . #
        `)
})
states.addLoopHandler("EventA", function () {
    while (input.buttonIsPressed(Button.A)) {
        states.setState("EventPick")
    }
    while (!(input.buttonIsPressed(Button.A))) {
        basic.pause(1000)
        Timer += 1
        if (Timer >= 5) {
            states.setState("Death")
        }
    }
})
let nextEvent = 0
let Timer = 0
states.setState("EventPick")
