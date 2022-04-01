let contraseña = 0
let numero = 0
let letra = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("Pass=")
    for (let index = 0; index < 8; index++) {
        contraseña = randint(1, 3)
        if (contraseña == 1) {
            numero = randint(1, 9)
            basic.showNumber(numero)
        } else if (contraseña == 2) {
            letra = randint(1, 4)
            if (letra == 1) {
                basic.showString("ñ")
            } else if (letra == 2) {
                basic.showString("s")
            } else if (letra == 3) {
                basic.showString("t")
            } else if (letra == 3) {
                basic.showString("h")
            }
        }
    }
})
