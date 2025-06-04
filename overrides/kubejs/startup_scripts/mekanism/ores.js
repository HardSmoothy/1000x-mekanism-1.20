StartupEvents.registry("item", event => {
    event.create('iridium').tag('forge:gems').tag('forge:gems/iridium')
    event.create('crystal_iridium').tag('mekanism:crystals').tag('mekanism:crystals/iridium')
    event.create('shard_iridium').tag('mekanism:shards').tag('mekanism:shards/iridium')
    event.create('clump_iridium').tag('mekanism:clumps').tag('mekanism:clumps/iridium')
    event.create('dirty_dust_iridium').tag('mekanism:dirty_dusts').tag('mekanism:dirty_dusts/iridium')
    event.create('dust_iridium').tag('forge:dusts').tag('forge:dusts/iridium')
})

StartupEvents.registry("mekanism:slurry", event => {
    event.create('dirty_iridium').texture("mekanism:slurry/dirty").color(0xf0f8ff)
    event.create('clean_iridium').texture("mekanism:slurry/clean").color(0xf0f8ff)
})

StartupEvents.registry("block", event => {
    event.create('ore_iridium')
        .soundType(SoundType.STONE)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('forge:mineable/paxel')
        .tagBlock('minecraft:needs_iron_tool')
        .requiresTool(true)
        .tag('forge:ores/iridium')

    event.create('dense_ore_iridium')
        .soundType(SoundType.STONE)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('forge:mineable/paxel')
        .tagBlock('minecraft:needs_iron_tool')
        .requiresTool(true)

    event.create('dense_ore_quartz')
        .soundType(SoundType.STONE)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('forge:mineable/paxel')
        .tagBlock('minecraft:needs_iron_tool')
        .requiresTool(true)
})