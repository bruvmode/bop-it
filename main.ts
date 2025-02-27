states.setEnterHandler("Start", function () {
    states.setState("EventPick")
})
states.setEnterHandler("EventA", function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        # . . . #
        # . . . #
        `)
    while (true) {
        if (input.buttonIsPressed(Button.A)) {
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
states.setEnterHandler("EventB", function () {
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # . .
        . # . # .
        . # # . .
        `)
    while (true) {
        if (input.buttonIsPressed(Button.B)) {
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
states.addLoopHandler("EventTiltLeft", function () {
    while (true) {
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
    while (true) {
        if (input.isGesture(Gesture.TiltLeft)) {
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
states.setEnterHandler("EventAB", function () {
    basic.showLeds(`
        . . . # .
        . # . . #
        # . # # .
        # # # . #
        # . # # .
        `)
    while (true) {
        if (input.buttonIsPressed(Button.AB)) {
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
states.setEnterHandler("EventTiltRight", function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    while (true) {
        if (input.isGesture(Gesture.TiltRight)) {
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
states.setEnterHandler("EventPick", function () {
    nextEvent = randint(1, 9)
    Timer = 0
    if (states.previousState() == "Start") {
        game.addScore(1)
        basic.showNumber(game.score())
    }
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
    } else if (nextEvent == 8) {
        states.setState("EventUp")
    } else if (nextEvent == 9) {
        states.setState("EventDown")
    } else {
    	
    }
    basic.clearScreen()
})
states.setEnterHandler("Setup", function () {
    basic.showString("SET TIMER")
    basic.showString("A")
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    basic.showString("B")
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showString("PRESS LOGO TO CONFIRM")
    basic.showNumber(TimerMax)
    while (true) {
        if (input.buttonIsPressed(Button.A)) {
            TimerMax += -1
            basic.showNumber(TimerMax)
            basic.pause(1000)
        }
        if (input.buttonIsPressed(Button.B)) {
            TimerMax += 1
            basic.showNumber(TimerMax)
            basic.pause(1000)
            if (input.logoIsPressed()) {
                break;
            }
        }
    }
    states.setState("Start")
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
    basic.showNumber(game.score())
    game.setScore(0)
    states.setState("Start")
})
states.setEnterHandler("EventShake", function () {
    basic.showLeds(`
        . # . # .
        # . # . #
        . . . . .
        . # . # .
        # . # . #
        `)
    while (true) {
        if (input.isGesture(Gesture.Shake)) {
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
states.setEnterHandler("EventDown", function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    while (true) {
        if (input.isGesture(Gesture.LogoDown)) {
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
states.setEnterHandler("EventUp", function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    while (true) {
        if (input.isGesture(Gesture.LogoUp)) {
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
let nextEvent = 0
let Timer = 0
let TimerMax = 0
TimerMax = 5
states.setState("Setup")
states.debugOn(false)
