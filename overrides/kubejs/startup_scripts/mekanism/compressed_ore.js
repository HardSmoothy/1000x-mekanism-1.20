StartupEvents.registry("item", event => {
    let types = ["iron", "copper", "gold", "osmium", "tin", "lead", "uranium"]

    types.forEach(type => {
        event // 圧縮凝塊
            .create(`mek1000:compressed_${type}_clump`)
            .displayName(`compressed ${type} clump`)
            .tooltip('えっいいんですか？圧縮しちゃって')
            .maxStackSize(64)
            .texture(`mekanism:item/clump_${type}`)
            .rarity("uncommon")
            .glow(true)
        event // 圧縮欠片
            .create(`mek1000:compressed_${type}_shard`)
            .displayName(`compressed ${type} shard`)
            .tooltip('圧縮なのは 義務なんです。')
            .maxStackSize(64)
            .texture(`mekanism:item/shard_${type}`)
            .rarity("uncommon")
            .glow(true)
        event // 圧縮結晶
            .create(`mek1000:compressed_${type}_crystal`)
            .displayName(`compressed ${type} crystal`)
            .tooltip('圧縮された別れの歌')
            .maxStackSize(64)
            .texture(`mekanism:item/crystal_${type}`)
            .rarity("uncommon")
            .glow(true)
    })

    //イリジウム用
    event // 凝塊
        .create(`mek1000:compressed_iridium_clump`)
        .displayName(`compressed iridium clump`)
        .tooltip('圧縮して... なにするの？')
        .maxStackSize(64)
        .texture(`kubejs:item/clump_iridium`)
        .rarity("uncommon")
        .glow(true)
    event // 欠片
        .create(`mek1000:compressed_iridium_shard`)
        .displayName(`compressed iridium shard`)
        .tooltip('イリジウムって結構高いんだよ...?')
        .maxStackSize(64)
        .texture(`kubejs:item/shard_iridium`)
        .rarity("uncommon")
        .glow(true)
    event // 結晶
        .create(`mek1000:compressed_iridium_crystal`)
        .displayName(`compressed iridium crystal`)
        .tooltip('夢の塊 (1個でも相当な値段)')
        .maxStackSize(64)
        .texture(`kubejs:item/crystal_iridium`)
        .rarity("uncommon")
        .glow(true)

    event // 凝塊
        .create(`mek1000:compressed_debri_clump`)
        .displayName(`compressed ancient debri clump`)
        .maxStackSize(64)
        .texture(`kubejs:item/clump_debri`)
        .rarity("uncommon")
        .glow(true)
    event // 欠片
        .create(`mek1000:compressed_debri_shard`)
        .displayName(`compressed ancient debri shard`)
        .maxStackSize(64)
        .texture(`kubejs:item/shard_debri`)
        .rarity("uncommon")
        .glow(true)
    event // 結晶
        .create(`mek1000:compressed_debri_crystal`)
        .displayName(`compressed ancient debri crystal`)
        .maxStackSize(64)
        .texture(`kubejs:item/crystal_debri`)
        .rarity("uncommon")
        .glow(true)
})