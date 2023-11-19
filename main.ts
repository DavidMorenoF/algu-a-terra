let numero = 0
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber > numero) {
        basic.showIcon(IconNames.Sad)
        basic.pause(1000)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("Hola")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    numero = randint(1, 6)
    radio.sendNumber(numero)
})
