function capitalizeFirstLetter(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

StartupEvents.registry("item", event => {
    let types = ["iron", "copper", "gold", "osmium", "tin", "lead", "uranium", "iridium", "redstone", "quartz", "certus_quartz", "fluorite", "coal", "lapis", "diamond", "emerald", "debri"]
    types.forEach(type => {
        event // 精製原石
            .create(`mek1000:purified_${type}_rawore`)
            .displayName(Text.translate("item.mek1000.purified_rawore.name", capitalizeFirstLetter(type)))
            .tooltip(Text.translate("item.mek1000.purified_rawore.desc"))
            .maxStackSize(64)
            .texture(`kubejs:item/goodore`)
            .rarity("uncommon")
        event // 圧縮精製原石
            .create(`mek1000:compressed_purified_${type}_rawore`)
            .displayName(Text.translate("item.mek1000.compressed_purified_rawore.name", capitalizeFirstLetter(type)))
            .tooltip(Text.translate("item.mek1000.compressed_purified_rawore.desc"))
            .maxStackSize(16)
            .texture(`kubejs:item/goodore`)
            .rarity("rare")
            .glow(true)
        event // 繊細に結晶化された鉱石
            .create(`mek1000:crystalized_${type}_rawore`)
            .displayName(Text.translate("item.mek1000.crystalized_rawore.name", capitalizeFirstLetter(type)))
            .tooltip(Text.translate("item.mek1000.crystalized_rawore.desc"))
            .maxStackSize(32)
            .texture(`kubejs:item/goodore`)
            .rarity("epic")
            .glow(true)
            .barWidth(itemstack => 13)
            .barColor(itemstack => Color.AQUA)
    })

    let add_any = ["coal", "lapis"]
    add_any.forEach(type => {
        event.create(`mek1000:crystal_${type}`).tag(`mekanism:crystals`).tag(`mekanism:crystals/${type}`)
        event.create(`mek1000:shard_${type}`).tag(`mekanism:shards`).tag(`mekanism:shards/${type}`)
        event.create(`mek1000:clump_${type}`).tag(`mekanism:clumps`).tag(`mekanism:clumps/${type}`)

        if (type == "lapis") {
            event.create(`mek1000:dirty_dust_${type}`).tag(`mekanism:dirty_dusts`).tag(`mekanism:dirty_dusts/${type}`).textureJson({ layer0: "mekanism:item/dust_lapis_lazuli", layer1: "mekanism:item/dirty_dust_overlay" })
        } else {
            event.create(`mek1000:dirty_dust_${type}`).tag(`mekanism:dirty_dusts`).tag(`mekanism:dirty_dusts/${type}`).textureJson({ layer0: `mekanism:item/dust_${type}`, layer1: "mekanism:item/dirty_dust_overlay" })
        }
    })

    event.create(`mek1000:polonium_synced`).texture(`mekanism:item/pellet_polonium`).glow(true).tooltip(`WTF too long name`)
})

StartupEvents.registry("mekanism:gas", event => {
    event.create(`mek1000:activated_redstone`).displayName("Activator Redstone").color(0xf05050)
    event.create(`mek1000:active_aqua_regia`).displayName("Activated Aqua Regia").color(0xffff80).radioactivity(0.015)

    //各種活性蒸気
    event.create(`mek1000:active_iron`).displayName("Active Compressed Iron Gas").color(0xffff80)
    event.create(`mek1000:active_copper`).displayName("Active Compressed Copper Gas").color(0xffff80)
    event.create(`mek1000:active_gold`).displayName("Active Compressed Gold Gas").color(0xF2CD67)
    event.create(`mek1000:active_osmium`).displayName("Active Compressed Osmium Gas").color(0x52BDCA)
    event.create(`mek1000:active_tin`).displayName("Active Compressed Tin Gas").color(0xCCCCD9)
    event.create(`mek1000:active_lead`).displayName("Active Compressed Lead Gas").color(0xffff80)
    event.create(`mek1000:active_uranium`).displayName("Active Compressed Uranium Gas").color(0xffff80)
    event.create(`mek1000:active_iridium`).displayName("Active Compressed Iridium Gas").color(0xffff80)
    event.create(`mek1000:active_debri`).displayName("Active Compressed Acient Debri Gas").color(0x9c6a3e)


    event.create(`mek1000:active_redstone`).displayName("Active Compressed Redstone Gas").color(0xff0f0f)
    event.create(`mek1000:active_quartz`).displayName("Active Compressed Quartz Gas").color(0xffafa0)
    event.create(`mek1000:active_certus_quartz`).displayName("Active Compressed Certus Quartz Gas").color(0xa0afff)
    event.create(`mek1000:active_fluorite`).displayName("Active Compressed Fluorite Gas").color(0xff9ff0)

    event.create(`mek1000:active_coal`).displayName("Active Compressed Coal Gas").color(0x333333)
    event.create(`mek1000:active_diamond`).displayName("Active Compressed Diamond Gas").color(0x22a0f0)
    event.create(`mek1000:active_emerald`).displayName("Active Compressed Emerald Gas").color(0x22f050)
    event.create(`mek1000:active_lapis`).displayName("Active Compressed Lapis Gas").color(0x3333f0)

    event.create(`mek1000:purified_iron`).displayName("Purified Compressed Iron Gas").color(0xffff80)
    event.create(`mek1000:purified_copper`).displayName("Purified Compressed Copper Gas").color(0xffff80)
    event.create(`mek1000:purified_gold`).displayName("Purified Compressed Gold Gas").color(0xF2CD67)
    event.create(`mek1000:purified_osmium`).displayName("Purified Compressed Osmium Gas").color(0x52BDCA)
    event.create(`mek1000:purified_tin`).displayName("Purified Compressed Tin Gas").color(0xCCCCD9)
    event.create(`mek1000:purified_lead`).displayName("Purified Compressed Lead Gas").color(0xffff80)
    event.create(`mek1000:purified_uranium`).displayName("Purified Compressed Uranium Gas").color(0xffff80)
    event.create(`mek1000:purified_iridium`).displayName("Purified Compressed Iridium Gas").color(0xffff80)
    event.create(`mek1000:purified_debri`).displayName("Purified Compressed Acient Debri Gas").color(0x803c00)

    event.create(`mek1000:purified_redstone`).displayName("Purified Compressed Redstone Gas").color(0xff0f0f)
    event.create(`mek1000:purified_quartz`).displayName("Purified Compressed Quartz Gas").color(0xffafa0)
    event.create(`mek1000:purified_certus_quartz`).displayName("Purified Compressed Certus Quartz Gas").color(0xa0afff)
    event.create(`mek1000:purified_fluorite`).displayName("Purified Compressed Fluorite Gas").color(0xff9ff0)

    event.create(`mek1000:purified_coal`).displayName("Purified Compressed Coal Gas").color(0x333333)
    event.create(`mek1000:purified_diamond`).displayName("Purified Compressed Diamond Gas").color(0x22a0f0)
    event.create(`mek1000:purified_emerald`).displayName("Purified Compressed Emerald Gas").color(0x22f050)
    event.create(`mek1000:purified_lapis`).displayName("Purified Compressed Lapis Gas").color(0x3333f0)
})