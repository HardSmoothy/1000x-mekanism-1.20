StartupEvents.registry("block", event => {
    event.create('mek1000:charged_redstone_block')
        .soundType(SoundType.METAL)
        .hardness(5.0)
        .color(0, 0xDD0000)
        .item(itemForm => { itemForm.color(0, 0xDD0000) })
        .textureAll('mek1000:block/metallugic_form')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagItem('forge:storage_blocks/charged_redstone')
        .requiresTool(true)

    event.create('mek1000:compressed_sps_casing')
        .soundType(SoundType.METAL)
        .hardness(5.0)
        .item(itemForm => { itemForm.glow(true) })
        .textureAll('mekanism:block/sps_casing')
        .tagBlock('minecraft:mineable/pickaxe')
        .requiresTool(true)
})