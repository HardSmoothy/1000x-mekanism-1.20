ServerEvents.recipes(event => {
    event.custom({
        "type": "mekanism:nucleosynthesizing",
        "itemInput": { "ingredient": { "item": 'mekanism:alloy_atomic' } },
        "gasInput": { "amount": 100, "gas": "mekanism:antimatter" },
        "output": { "item": 'megacells:cell_component_256m' }, "duration": 1000000
    })

    event.recipes.mekanismMetallurgicInfusing('16x ae2:fluix_smart_cable', 'ae2:fluix_block', '100x mekanism:redstone')

    event.recipes.mekanismMetallurgicInfusing('ae2:mysterious_cube', 'ae2:chiseled_quartz_block', '1000x mekanism:tin')


    event.custom({
        "type": "expatternprovider:circuit_cutter",
        "fluid_input": {
            "amount": 100,
            "ingredient": {
                "fluid": "minecraft:water"
            }
        },
        "item_input": {
            "amount": 1,
            "ingredient": {
                "tag": 'forge:storage_blocks/charged_redstone'
            }
        },
        "output": {
            "count": 9,
            "item": 'appflux:printed_energy_processor'
        }
    })

    event.shaped(Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:i",id:"mek1000:ultimate_dye_base"}}'), [
        'GBG',
        'BCB',
        'DDD'
    ], {
        G: 'ae2:quartz_glass',
        B: 'mekanism:dye_base',
        C: 'ae2:cell_component_16k',
        D: 'minecraft:diamond'
    })

    event.shaped(Item.of("mek1000:charged_redstone_block"), [
        'CCC',
        'CCC',
        'CCC'
    ], {
        C: 'appflux:charged_redstone'
    })
})