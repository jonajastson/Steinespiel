def on_button_a():
    global Spieler
    if Spielzustand == 1:
        Spieler += -1
        if Spieler == -1:
            Spieler = 0
        zeichne()
        Kollision()
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def zeichne():
    basic.clear_screen()
    led.plot(Spieler, 4)
    led.plot(Stein, Steinhöhe)
def Kollision():
    global Leben
    if Spieler == Stein and Steinhöhe == 4:
        music.play_melody("C5 C - - - - - - ", 480)
        Leben += -1
        if Leben == 2:
            basic.set_led_color(basic.rgb(0, 64, 0))
        if Leben == 1:
            basic.set_led_color(basic.rgb(32, 32, 0))
        if Leben == 0:
            basic.set_led_color(basic.rgb(64, 0, 0))
        if Leben == -1:
            while True:
                basic.show_string("Game Over :(")

def on_button_b():
    global Spieler
    if Spielzustand == 1:
        Spieler += 1
        if Spieler == 5:
            Spieler = 4
        zeichne()
        Kollision()
input.on_button_event(Button.B, input.button_event_click(), on_button_b)

Spieler = 0
Steinhöhe = 0
Stein = 0
Leben = 0
Spielzustand = 0
Spielzustand = 1
Leben = 3
Stein = randint(0, 4)
Steinhöhe = -5
Schwierigkeit = 1000
Spieler = 2

def on_forever():
    global Steinhöhe, Stein, Schwierigkeit, Spielzustand
    Steinhöhe += 1
    zeichne()
    Kollision()
    basic.pause(Schwierigkeit)
    if Steinhöhe == 5:
        Stein = randint(0, 4)
        Steinhöhe = -1
        Schwierigkeit = Schwierigkeit * 0.9
        if Schwierigkeit < 100:
            basic.show_string("Level completed!")
            Spielzustand = 2
basic.forever(on_forever)
