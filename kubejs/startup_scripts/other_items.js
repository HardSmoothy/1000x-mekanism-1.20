StartupEvents.registry("item", event => {
    event.create('mek1000:energy_cataryst').texture(`mek1000:item/wip`)
    event.create('mek1000:item_cataryst').texture(`mek1000:item/wip`)
    event.create('mek1000:fluid_cataryst').texture(`mek1000:item/wip`)
    event.create('mek1000:gas_cataryst').texture(`mek1000:item/wip`)
    event.create('mek1000:emc').displayName('Energy Matter Cluster')
    event.create('mek1000:the_null').displayName('Null').tooltip('※仕様です')

    event.create('mek1000:ldpe')
    event.create('mek1000:stray_cat').texture(`mek1000:item/cat_crystal`)
    event.create('mek1000:tiny_antimatter').texture("mek1000:item/ldpe").color(0, "#aa99aa").glow(true)

    event.create('mek1000:dust_amethyst').texture('kubejs:item/dust_iridium').color(0, "#9400d3").tag('forge:dusts').tag('forge:dusts/amethyst')
    event.create('mek1000:bedrockium_ingot')
    event.create('mek1000:neutronium_ingot')
    event.create('mek1000:infinity_ingot').texture('mek1000:item/infinity_ingot')

    event.create('mek1000:ultimate_dye_base').texture('mekanism:item/dye_base').glow(true)
})