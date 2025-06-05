StartupEvents.registry("item", event => {
    event.create('mek1000:crystal_redstone').tag('mekanism:crystals')
        .displayName(Text.translate("item.mek1000.crystal_gem.name", "Redstone"))
        .tooltip(Text.translate("item.mek1000.crystal_gem_A.desc")).texture("kubejs:item/crystal_redstone")

    event.create('mek1000:extructed_redstone').tag('mekanism:shards')
        .displayName(Text.translate("item.mek1000.extracted_gem.name", "Redstone"))
        .tooltip(Text.translate("item.mek1000.extracted_gem_A.desc")).texture("kubejs:item/soft_redstone")

    event.create('mek1000:softore_redstone')
        .displayName(Text.translate("item.mek1000.soft_ore.name", "Redstone Ore"))
        .tooltip(Text.translate("item.mek1000.soft_ore.desc")).texture("kubejs:item/soft_redstone").glow(true)

    event.create('mek1000:crystal_certus_quartz').tag('mekanism:crystals')
        .displayName(Text.translate("item.mek1000.crystal_gem.name", "Quartz Crystal"))
        .tooltip(Text.translate("item.mek1000.crystal_gem_B.desc")).texture("kubejs:item/crystal_redstone")

    event.create('mek1000:extructed_certus_quartz').tag('mekanism:shards')
        .displayName(Text.translate("item.mek1000.extracted_gem.name", "Certus Quartz"))
        .tooltip(Text.translate("item.mek1000.extracted_gem_A.desc")).texture("kubejs:item/soft_redstone")

    event.create('mek1000:softore_certus_quartz')
        .displayName(Text.translate("item.mek1000.soft_ore.name", "Certus Quartz"))
        .tooltip(Text.translate("item.mek1000.soft_ore.desc")).texture("kubejs:item/soft_redstone").glow(true)

    event.create('mek1000:crystal_fluorite').tag('mekanism:crystals')
        .displayName(Text.translate("item.mek1000.crystal_gem.name", "Fluorite"))
        .tooltip(Text.translate("item.mek1000.crystal_gem_C.desc")).texture("kubejs:item/crystal_redstone")

    event.create('mek1000:extructed_fluorite').tag('mekanism:shards')
        .displayName(Text.translate("item.mek1000.extracted_gem.name", "Fluorite"))
        .tooltip(Text.translate("item.mek1000.extracted_gem_B.desc")).texture("kubejs:item/soft_redstone")

    event.create('mek1000:softore_fluorite')
        .displayName(Text.translate("item.mek1000.soft_ore.name", "Fluorite"))
        .tooltip(Text.translate("item.mek1000.soft_ore.desc")).texture("kubejs:item/soft_redstone").glow(true)

    event.create('mek1000:crystal_quartz').tag('mekanism:crystals')
        .displayName(Text.translate("item.mek1000.crystal_gem.name", "Quartz"))
        .tooltip(Text.translate("item.mek1000.crystal_gem_D.desc")).texture("kubejs:item/crystal_redstone")

    event.create('mek1000:extructed_quartz').tag('mekanism:shards')
        .displayName(Text.translate("item.mek1000.extracted_gem.name", "Quartz"))
        .tooltip(Text.translate("item.mek1000.extracted_gem_C.desc")).texture("kubejs:item/soft_redstone")

    event.create('mek1000:softore_quartz')
        .displayName(Text.translate("item.mek1000.soft_ore.name", "Quartz"))
        .tooltip(Text.translate("item.mek1000.soft_ore.desc")).texture("kubejs:item/soft_redstone").glow(true)
})