states.addLoopHandler("EventB", function () {
    while (input.buttonIsPressed(Button.B)) {
        states.setState("EventPick")
    }
    while (!(input.buttonIsPressed(Button.B))) {
        basic.pause(1000)
        Timer += 1
        if (Timer >= TimerMax) {
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
states.addLoopHandler("EventShake", function () {
    while (input.isGesture(Gesture.Shake)) {
        states.setState("EventPick")
    }
    while (!(input.isGesture(Gesture.Shake))) {
        basic.pause(1000)
        Timer += 1
        if (Timer >= TimerMax) {
            states.setState("Death")
        }
    }
})
states.addLoopHandler("EventTiltRight", function () {
    while (input.isGesture(Gesture.TiltRight)) {
        states.setState("EventPick")
    }
    while (!(input.isGesture(Gesture.TiltRight))) {
        basic.pause(1000)
        Timer += 1
        if (Timer >= TimerMax) {
            states.setState("Death")
        }
    }
})
states.addLoopHandler("EventTiltLeft", function () {
    while (input.isGesture(Gesture.TiltLeft)) {
        states.setState("EventPick")
    }
    while (!(input.isGesture(Gesture.TiltLeft))) {
        basic.pause(1000)
        Timer += 1
        if (Timer >= TimerMax) {
            states.setState("Death")
        }
    }
})
states.setEnterHandler("EventTiltLeft", function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
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
states.setEnterHandler("EventTiltRight", function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
states.setEnterHandler("EventPick", function () {
    nextEvent = randint(1, 7)
    Timer = 0
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
    } else if (nextEvent == 6) {
        states.setState("EventTiltLeft")
    } else if (nextEvent == 7) {
        states.setState("EventTiltRight")
    } else if (false) {
    	
    } else {
        states.setState("EventError")
    }
    basic.clearScreen()
})
states.addLoopHandler("EventAB", function () {
    while (input.buttonIsPressed(Button.AB)) {
        states.setState("EventPick")
    }
    while (!(input.buttonIsPressed(Button.AB))) {
        basic.pause(1000)
        Timer += 1
        if (Timer >= TimerMax) {
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
    while (true) {
        if (input.logoIsPressed()) {
            states.setState("EventPick")
            break;
        } else {
            basic.pause(1000)
            Timer += 1
            if (Timer >= TimerMax) {
                states.setState("Death")
                break;
            }
        }
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
        if (Timer >= TimerMax) {
            states.setState("Death")
        }
    }
})
let nextEvent = 0
let Timer = 0
let TimerMax = 0
TimerMax = 10
states.setState("EventPick")
states.debugOn(true)
