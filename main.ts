input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (Spielzustand == 1) {
        Spieler += -1
        if (Spieler == -1) {
            Spieler = 0
        }
        Kollision()
        zeichne()
    }
})
function zeichne () {
    basic.clearScreen()
    led.plot(Spieler, 4)
    led.plot(Stein, Steinhöhe)
}
function Kollision () {
    if (Spieler == Stein && Steinhöhe == 4) {
        music.playMelody("C5 C - - - - - - ", 480)
        Steinhöhe = 5
        Leben += -1
        if (Leben == 2) {
            basic.setLedColor(basic.rgb(0, 64, 0))
        }
        if (Leben == 1) {
            basic.setLedColor(basic.rgb(32, 32, 0))
        }
        if (Leben == 0) {
            basic.setLedColor(basic.rgb(64, 0, 0))
        }
        if (Leben == -1) {
            Spielzustand = 0
        }
    }
}
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (Spielzustand == 1) {
        Spieler += 1
        if (Spieler == 5) {
            Spieler = 4
        }
        Kollision()
        zeichne()
    }
})
let Spieler = 0
let Steinhöhe = 0
let Stein = 0
let Leben = 0
let Spielzustand = 0
Spielzustand = 1
Leben = 3
Stein = randint(0, 4)
Steinhöhe = -5
let Schwierigkeit = 1000
Spieler = 2
basic.forever(function () {
    if (Spielzustand == 0) {
        while (true) {
            basic.showString("Game Over :(")
        }
    }
    if (Spielzustand == 1) {
        Steinhöhe += 1
        zeichne()
        Kollision()
        basic.pause(Schwierigkeit)
        if (Steinhöhe >= 5) {
            Stein = randint(0, 4)
            Steinhöhe = -1
            Schwierigkeit = Schwierigkeit * 0.9
            if (Schwierigkeit < 100) {
                Spielzustand = 2
            }
        }
    }
    if (Spielzustand == 2) {
        basic.showString("Level completed!")
    }
})
