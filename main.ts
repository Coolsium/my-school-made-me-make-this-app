let غاي: Sprite = null
let حلال = sprites.create(img`
    . . . b b b b b b b b b . . . . 
    . . b 1 d d d d d d d 1 b . . . 
    . b 1 1 1 1 1 1 1 1 1 1 1 b . . 
    . b d b c c c c c c c b d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c 6 d f 6 f 6 6 c d b . . 
    . b d c 6 6 f 6 f 6 6 c d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c 6 f f f f f 6 c d b . . 
    . b d c c c c c c c c c d b . . 
    . c b b b b b b b b b b b c . . 
    c b c c c c c c c c c c c b c . 
    c 1 d d d d d d d d d d d 1 c . 
    c 1 d 1 1 d 1 1 d 1 1 d 1 1 c . 
    c b b b b b b b b b b b b b c . 
    c c c c c c c c c c c c c c c . 
    `, SpriteKind.Player)
حلال.setStayInScreen(true)
حلال.bottom = 120
controller.moveSprite(حلال, 100, 100)
info.setLife(3)
let حَرَام = [sprites.space.spaceSmallAsteroid0, sprites.space.spaceAsteroid1, sprites.space.spaceSmallAsteroid4]
effects.starField.startScreenEffect()
game.onUpdateInterval(650, function () {
    غاي = sprites.createProjectileFromSide(حَرَام._pickRandom(), 0, 69)
    غاي.x = randint(10, 150)
    غاي.setKind(SpriteKind.Enemy)
})
