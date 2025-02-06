states.setEnterHandler("Event1", function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        # . . . #
        # . . . #
        `)
})
states.addLoopHandler("Event1", function () {
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
states.setEnterHandler("EventPick", function () {
    nextEvent = randint(1, 5)
    Timer = 0
    if (nextEvent == 1) {
    	
    } else if (nextEvent == 2) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else {
    	
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
let nextEvent = 0
let Timer = 0
states.setState("EventPick")
