let contraseña = 0
let numero = 0
let letra = 0
let simbolo = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("Pass=")
    for (let index = 0; index < 8; index++) {
        contraseña = randint(1, 3)
        if (contraseña == 1) {
            numero = randint(1, 9)
            basic.pause(2000)
            basic.showNumber(numero)
        } else if (contraseña == 2) {
            letra = randint(1, 4)
            if (letra == 1) {
                basic.pause(2000)
                basic.showString("ñ")
            } else if (letra == 2) {
                basic.pause(2000)
                basic.showString("s")
            } else if (letra == 3) {
                basic.pause(2000)
                basic.showString("t")
            } else if (letra == 4) {
                basic.pause(2000)
                basic.showString("h")
            }
        } else if (contraseña == 3) {
            simbolo = randint(1, 4)
            if (simbolo == 1) {
                basic.pause(2000)
                basic.showString(".")
            } else if (simbolo == 2) {
                basic.pause(2000)
                basic.showString("?")
            } else if (simbolo == 3) {
                basic.pause(2000)
                basic.showString("*")
            } else if (simbolo == 4) {
                basic.pause(2000)
                basic.showString("$")
            }
        }
    }
})
