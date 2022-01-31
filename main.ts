basic.forever(function () {
    if (touch.getTouch(touch.TouchPin.P0)) {
        pump.start(Pump.LEFT, 100)
        basic.pause(5000)
        pump.stop(Pump.LEFT)
    } else {
        pump.stop(Pump.LEFT)
    }
    if (soil.ifMoisture(soil.SoilPin.P0, Mlevel.VERY_WET)) {
        pump.stop(Pump.LEFT)
    }
})
