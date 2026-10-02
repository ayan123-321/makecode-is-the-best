// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "tilesetup":
            case "level1":return tiles.createTilemap(hex`100010000101010101010101010101010101010101040707070707070707070707070601010b0202020209020209020209020801010b02090208030b08030b08030b0801010b08030b08030b08030b08030b0801010b08030b08030b08030b08030b0801010b08030b08030b0207020207020801010b08030b08030b0209090909020801010b02070208030b08030303030b0801010b02090208030b0207070707020801010b08030b08030b0209090202020801010b08030b0207020803030b02020801010b08030b0202020803030b02020801010b0207020202020207070202020801010a090909090909090909090909050101010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . 2 . . 2 . . 2 . . 2 
2 . . 2 . . 2 . . 2 . . 2 . . 2 
2 . . 2 . . 2 . . 2 . . 2 . . 2 
2 . . 2 . . 2 . . . . . . . . 2 
2 . . 2 . . 2 . . . . . . . . 2 
2 . . . . . 2 . . 2 2 2 2 . . 2 
2 . . . . . 2 . . . . . . . . 2 
2 . . 2 . . 2 . . . . . . . . 2 
2 . . 2 . . . . . 2 2 . . . . 2 
2 . . 2 . . . . . 2 2 . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.builtin.brick,sprites.castle.tilePath5,sprites.castle.tileDarkGrass2,sprites.castle.tilePath1,sprites.castle.tilePath9,sprites.castle.tilePath3,sprites.castle.tilePath2,sprites.castle.tilePath6,sprites.castle.tilePath8,sprites.castle.tilePath7,sprites.castle.tilePath4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
