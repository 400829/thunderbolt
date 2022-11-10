let x = 0
let dx = 1
basic.forever(function () {
	
})
basic.forever(function () {
	
})
basic.forever(function () {
    if (x >= 4) {
        dx = -1
    }
    if (x <= 0) {
        dx = 1
    }
    x += dx
    led.plot(x, 0)
    led.plot(x, 1)
    led.plot(x, 2)
    led.plot(x, 3)
    led.plot(x, 4)
    basic.pause(100)
    basic.clearScreen()
})
