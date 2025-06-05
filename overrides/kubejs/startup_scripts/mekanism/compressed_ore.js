function capitalizeFirstLetter(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

StartupEvents.registry("item", event => {
    let types = ["iron", "copper", "gold", "osmium", "tin", "lead", "uranium"]

    types.forEach(type => {
        event // 圧縮凝塊
            .create(`mek1000:compressed_${type}_clump`)
            .displayName(Text.translate("item.mek1000.compressed_clump.name", capitalizeFirstLetter(type)))
            .tooltip(Text.translate("item.mek1000.compressed_clump.desc"))
            .maxStackSize(64)
            .texture(`mekanism:item/clump_${type}`)
            .rarity("uncommon")
            .glow(true)
        event // 圧縮欠片
            .create(`mek1000:compressed_${type}_shard`)
            .displayName(Text.translate("item.mek1000.compressed_shard.name", capitalizeFirstLetter(type)))
            .tooltip(Text.translate("item.mek1000.compressed_shard.desc"))
            .maxStackSize(64)
            .texture(`mekanism:item/shard_${type}`)
            .rarity("uncommon")
            .glow(true)
        event // 圧縮結晶
            .create(`mek1000:compressed_${type}_crystal`)
            .displayName(Text.translate("item.mek1000.compressed_crystal.name", capitalizeFirstLetter(type)))
            .tooltip(Text.translate("item.mek1000.compressed_crystal.desc"))
            .maxStackSize(64)
            .texture(`mekanism:item/crystal_${type}`)
            .rarity("uncommon")
            .glow(true)
    })

    //イリジウム用
    event // 凝塊
        .create(`mek1000:compressed_iridium_clump`)
        .displayName(`compressed iridium clump`)
        .displayName(Text.translate("item.mek1000.compressed_clump.name", "Iridium"))
        .tooltip(Text.translate("item.mek1000.compressed_clump.desc"))
        .maxStackSize(64)
        .texture(`kubejs:item/clump_iridium`)
        .rarity("uncommon")
        .glow(true)
    event // 欠片
        .create(`mek1000:compressed_iridium_shard`)
        .displayName(Text.translate("item.mek1000.compressed_shard.name", "Iridium"))
        .tooltip(Text.translate("item.mek1000.compressed_shard.desc"))
        .maxStackSize(64)
        .texture(`kubejs:item/shard_iridium`)
        .rarity("uncommon")
        .glow(true)
    event // 結晶
        .create(`mek1000:compressed_iridium_crystal`)
        .displayName(Text.translate("item.mek1000.compressed_crystal.name", "Iridium"))
        .tooltip(Text.translate("item.mek1000.compressed_crystal.desc"))
        .maxStackSize(64)
        .texture(`kubejs:item/crystal_iridium`)
        .rarity("uncommon")
        .glow(true)

    event // 凝塊
        .create(`mek1000:compressed_debri_clump`)
        .displayName(Text.translate("item.mek1000.compressed_clump.name", "Ancient Debri"))
        .tooltip(Text.translate("item.mek1000.compressed_clump.desc"))
        .maxStackSize(64)
        .texture(`kubejs:item/clump_debri`)
        .rarity("uncommon")
        .glow(true)
    event // 欠片
        .create(`mek1000:compressed_debri_shard`)
        .displayName(Text.translate("item.mek1000.compressed_shard.name", "Ancient Debri"))
        .tooltip(Text.translate("item.mek1000.compressed_shard.desc"))
        .maxStackSize(64)
        .texture(`kubejs:item/shard_debri`)
        .rarity("uncommon")
        .glow(true)
    event // 結晶
        .create(`mek1000:compressed_debri_crystal`)
        .displayName(Text.translate("item.mek1000.compressed_crystal.name", "Ancient Debri"))
        .tooltip(Text.translate("item.mek1000.compressed_crystal.desc"))
        .maxStackSize(64)
        .texture(`kubejs:item/crystal_debri`)
        .rarity("uncommon")
        .glow(true)
})