basic.forever(function () {
    for (let index = 0; index < hummingbird.getSensor(SensorType.Sound, ThreePort.One); index++) {
        hummingbird.setLED(ThreePort.One, 100)
        hummingbird.setTriLED(
        TwoPort.One,
        100,
        25,
        25
        )
        hummingbird.setTriLED(
        TwoPort.Two,
        100,
        25,
        25
        )
        hummingbird.setRotationServo(FourPort.One, 0)
        hummingbird.setRotationServo(FourPort.Four, 0)
        hummingbird.setLED(ThreePort.One, 0)
    }
})
