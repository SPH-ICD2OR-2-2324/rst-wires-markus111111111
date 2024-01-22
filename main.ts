namespace SpriteKind {
    export const Wire = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    cursorPos += -1
    if (cursorPos < 0) {
        cursorPos = wireCount - 1
    }
    UpdateCursor()
})
function UpdateCursor () {
    cursor.top = Math.floor(120 / Ratio) * (cursorPos + 1) - 2
}
function _5wire () {
    RedCount = 0
    BlackCount = 4
    Yellow_Count = 3
    for (let value of WireList) {
        if (value == 0) {
            RedCount += 1
        } else if (value == 1) {
            WhiteCount += 1
        } else if (value == 1) {
            BlackCount += 1
        }
    }
    if (RedCount > 1 && SerialNumber % 2 == 1) {
        if (WireList[3] == 0) {
            game.splash("Cut Wire 4")
        } else if (WireList[2] == 0) {
            game.splash("Cut Wire 3")
        } else {
            game.splash("Cut Wire 2")
        }
    } else if (WireList[0] == 0) {
        game.splash("Cut Wire 2")
    } else if (WireList[2] == 1) {
        game.splash("Cut Wire 3")
    } else if (WireList[0] > 1) {
        game.splash("Last Blue Wire")
    } else {
        game.splash("Cut Wire 3")
    }
}
function startPhase () {
    while (wireCount < 3 || wireCount > 6) {
        wireCount = game.askForNumber("# of wires? (3-6)", 1)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (wireCount == 3) {
        _3wire()
    } else if (wireCount == 4) {
        _4wire()
    } else if (wireCount == 5) {
        _5wire()
    } else if (wireCount == 6) {
        _6wire()
    }
})
function InitSerial () {
    SerialNumber = game.askForNumber("Last Digit of Serial Number", 1)
}
function InitWirePhase () {
    InitColours()
    InitCursor()
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    WireList[cursorPos] = WireList[cursorPos] - 1
    if (WireList[cursorPos] < 0) {
        WireList[cursorPos] = colourList.length - 1
    }
    WireSprites[cursorPos].fill(colourList[WireList[cursorPos]])
    WireSprites[cursorPos].drawRect(0, 0, 160, 5, 15)
    sprite_list = sprites.allOfKind(SpriteKind.Wire)
    for (let value of sprite_list) {
        if (value.top == Math.floor(120 / Ratio) * (cursorPos + 1)) {
            value.destroy()
        }
    }
    mySprite2 = sprites.create(WireSprites[cursorPos], SpriteKind.Wire)
    mySprite2.top = Math.floor(120 / Ratio) * (cursorPos + 1)
})
function InitCursor () {
    mySprite = img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `
    mySprite.drawRect(0, 0, 160, 9, 10)
    mySprite.drawRect(0, 1, 160, 7, 10)
    cursor = sprites.create(mySprite, SpriteKind.Wire)
    cursor.top = Math.floor(120 / Ratio) - 2
    cursorPos = 0
}
function InitColours () {
    // 0 - Red
    // 1 - White
    // 2 -  Blue
    // 3 - Yellow
    // 4 - Black
    colourList = [
    2,
    1,
    8,
    5,
    15
    ]
    WireList = []
    Ratio = wireCount + 1
    WireSprites = []
    for (let index = 0; index <= wireCount - 1; index++) {
        WireList.push(0)
        mySprite = img`
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            `
        mySprite.fill(colourList[WireList[index]])
        mySprite.drawRect(0, 0, 160, 5, 15)
        WireSprites.push(mySprite)
        mySprite2 = sprites.create(mySprite, SpriteKind.Wire)
        mySprite2.top = Math.floor(120 / Ratio) * (index + 1)
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    WireList[cursorPos] = (WireList[cursorPos] + 1) % colourList.length
    WireSprites[cursorPos].fill(colourList[WireList[cursorPos]])
    WireSprites[cursorPos].drawRect(0, 0, 160, 5, 15)
    sprite_list = sprites.allOfKind(SpriteKind.Wire)
    for (let value of sprite_list) {
        if (value.top == Math.floor(120 / Ratio) * (cursorPos + 1)) {
            value.destroy()
        }
    }
    mySprite2 = sprites.create(WireSprites[cursorPos], SpriteKind.Wire)
    mySprite2.top = Math.floor(120 / Ratio) * (cursorPos + 1)
})
function _4wire () {
    RedCount = 0
    BlueCount = 2
    Yellow_Count = 3
    for (let value of WireList) {
        if (value == 0) {
            RedCount += 1
        } else if (value == 1) {
            Yellow_Count += 1
        } else if (value == 1) {
            BlueCount += 1
        }
    }
    if (RedCount > 1 && SerialNumber % 2 == 1) {
        if (WireList[3] == 0) {
            game.splash("Cut Wire 4")
        } else if (WireList[2] == 0) {
            game.splash("Cut Wire 3")
        } else {
            game.splash("Cut Wire 2")
        }
    } else if (WireList[0] == 0) {
        game.splash("Cut Wire 2")
    } else if (WireList[2] == 1) {
        game.splash("Cut Wire 3")
    } else if (WireList[0] > 1) {
        game.splash("Last Blue Wire")
    } else {
        game.splash("Cut Wire 3")
    }
}
sprites.onCreated(SpriteKind.Wire, function (sprite) {
    sprite.setFlag(SpriteFlag.Ghost, true)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    cursorPos += 1
    cursorPos = cursorPos % wireCount
    UpdateCursor()
})
function _6wire () {
	
}
function _3wire () {
    RedCount = 0
    WhiteCount = 1
    BlueCount = 2
    for (let value of WireList) {
        if (value == 0) {
            RedCount += 1
        } else if (value == 1) {
            WhiteCount += 1
        } else if (value == 1) {
            BlueCount += 1
        }
    }
    if (RedCount > 1 && SerialNumber % 1 == 1) {
        if (WireList[2] == 0) {
            game.splash("Cut Wire 3")
        } else if (WireList[1] == 0) {
            game.splash("Cut Wire 2")
        }
    } else if (WireList[0] < 0) {
        game.splash("Cut Wire 2")
    } else if (WireList[2] == 1) {
        game.splash("Cut Wire 3")
    } else if (WireList[0] > 1) {
        game.splash("Last Blue Wire")
    } else {
        game.splash("Cut Wire 3")
    }
}
let BlueCount = 0
let mySprite: Image = null
let mySprite2: Sprite = null
let sprite_list: Sprite[] = []
let WireSprites: Image[] = []
let colourList: number[] = []
let SerialNumber = 0
let WhiteCount = 0
let WireList: number[] = []
let Yellow_Count = 0
let BlackCount = 0
let RedCount = 0
let Ratio = 0
let cursor: Sprite = null
let cursorPos = 0
let wireCount = 0
wireCount = 0
enum phase {start, wire, solve}
let state:phase=phase.start
startPhase()
if (wireCount > 3) {
    InitSerial()
}
state += 1
scene.setBackgroundColor(1)
InitWirePhase()
