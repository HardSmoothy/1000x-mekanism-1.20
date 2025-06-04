ServerEvents.recipes(event => {

    let p2p = ['ae2:redstone_p2p_tunnel', 'ae2:item_p2p_tunnel', 'ae2:fluid_p2p_tunnel', 'ae2:fe_p2p_tunnel', 'ae2:light_p2p_tunnel', 'appmek:chemical_p2p_tunnel', 'mae2:pattern_p2p_tunnel', 'mae2:pattern_multi_p2p_tunnel', 'mae2:redstone_multi_p2p_tunnel', 'mae2:fe_multi_p2p_tunnel', 'mae2:fluid_multi_p2p_tunnel', 'mae2:item_multi_p2p_tunnel']

    p2p.forEach(item => {
        event.remove({ output: item })
        event.stonecutting(item, 'ae2:me_p2p_tunnel')
    })

    event.custom({
        "type": "mekanism:nucleosynthesizing",
        "itemInput": { "ingredient": { "item": 'mekanism:alloy_atomic' } },
        "gasInput": { "amount": 100, "gas": "mekanism:antimatter" },
        "output": { "item": 'megacells:cell_component_256m' }, "duration": 1000000
    })

    event.recipes.mekanismMetallurgicInfusing('16x ae2:fluix_smart_cable', 'ae2:fluix_block', '100x mekanism:redstone')

    event.recipes.mekanismMetallurgicInfusing('ae2:mysterious_cube', 'ae2:chiseled_quartz_block', '1000x mekanism:tin')

    event.recipes.mekanismMetallurgicInfusing('ae2:sky_dust', 'fluxnetworks:flux_dust', '10x mekanism:diamond')


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

    event.shaped(Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:i",id:"xtonesreworked:xtone_tile"}}'), [
        'GBG',
        'BCB',
        'DDD'
    ], {
        G: 'ae2:quartz_glass',
        B: 'xtonesreworked:xtone_tile',
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

    event.remove({ output: 'expatternprovider:circuit_cutter' })
    event.shaped(Item.of('expatternprovider:circuit_cutter'), [
        'GCG',
        'BMD',
        'ATE'
    ], {
        A: 'advanced_ae:quantum_processor',
        B: 'ae2:logic_processor',
        C: 'megacells:accumulation_processor',
        D: 'appflux:energy_processor',
        E: 'ae2:engineering_processor',
        G: 'expatternprovider:assembler_matrix_glass',
        M: 'minecraft:stonecutter',
        T: 'mekanism:elite_fluid_tank'
    })

    event.remove({ output: 'expatternprovider:fishbig' })
})