let z = 10
let x = 10

player.onChat("castle", function () {
    blocks.fill(
    COBBLESTONE,
    pos(x, 0, z),
    pos(x + 20, 20, z + 20),
    FillOperation.Replace
    )
    blocks.fill(
    GLASS_PANE,
    pos(x + 7, 10, z),
    pos(x + 12, 15, z),
    FillOperation.Replace
    )
    blocks.fill(
    GLASS_PANE,
    pos(x, 10, z + 7),
    pos(x, 15, z + 12),
    FillOperation.Replace
    )
    blocks.fill(
    GLASS_PANE,
    pos(x + 20 - 7, 10, z + 20),
    pos(x + 20 - 12, 15, z + 20),
    FillOperation.Replace
    )
    blocks.fill(
    GLASS_PANE,
    pos(x + 20, 10, z + 20 - 7),
    pos(x + 20, 15, z + 20 - 12),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    pos(x + 7, 0, z),
    pos(x + 12, 5, z),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    pos(x + 1, 0, z + 1),
    pos(x + 19, 21, z + 19),
    FillOperation.Replace
    )
    blocks.fill(
    LOG_SPRUCE,
    pos(x + 20, 0, z + 20),
    pos(x + 25, 25, z + 25),
    FillOperation.Replace
    )
    blocks.fill(
    BEDROCK,
    pos(x + 20, 0, z),
    pos(x + 25, 25, z - 5),
    FillOperation.Replace
    )
    blocks.fill(
    ANDESITE,
    pos(x, 0, z),
    pos(x - 5, 25, z - 5),
    FillOperation.Replace
    )
    blocks.fill(
    TNT,
    pos(x, 0, z + 20),
    pos(x - 5, 25, z + 25),
    FillOperation.Replace
    )
    blocks.fill(
    WATER,
    pos(x + 29, -1, z - 9),
    pos(x - 9, -1, z + 29),
    FillOperation.Replace
    )
    blocks.fill(
    GRASS,
    pos(x + 25, -1, z - 5),
    pos(x - 5, -1, z + 25),
    FillOperation.Replace
    )
    blocks.fill(
    ACACIA_WOOD_SLAB,
    pos(x + 7, 0, z - 4),
    pos(x + 12, 0, z - 15),
    FillOperation.Replace
    )
})
