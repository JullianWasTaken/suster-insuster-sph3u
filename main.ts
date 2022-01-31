input.onButtonPressed(Button.A, function () {
    pump.start(Pump.LEFT, 100)
})
input.onButtonPressed(Button.B, function () {
    pump.stop(Pump.LEFT)
})
basic.showString("SPH3U RST | Will Melvin Jullian", 80)
basic.forever(function () {
    if (soil.ifMoisture(soil.SoilPin.P0, Mlevel.VERY_WET)) {
        pump.stop(Pump.LEFT)
    }
})
basic.forever(function () {
    if (touch.getTouch(touch.TouchPin.P0)) {
        pump.start(Pump.LEFT, 100)
        basic.pause(5000)
        pump.stop(Pump.LEFT)
    }
})
