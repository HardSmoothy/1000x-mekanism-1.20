//packmode: normal

ServerEvents.recipes(event => {

    event.recipes.mekanismMetallurgicInfusing('10x minecraft:glowstone_dust', '10x mekanism:fluorite_gem', '100x mekanism:gold')

    event.recipes.mekanismMetallurgicInfusing('ae2:flawless_budding_quartz', 'minecraft:diamond_block', '1000x mekanism:redstone')

    event.recipes.mekanismMetallurgicInfusing('minecraft:budding_amethyst', 'minecraft:purple_wool', '1000x mekanism:redstone')

    event.recipes.mekanismMetallurgicInfusing('minecraft:soul_sand', 'minecraft:sand', '10x mekanism:redstone')

    event.recipes.mekanismMetallurgicInfusing('minecraft:netherrack', 'minecraft:cobblestone', '10x mekanism:redstone')

    event.custom({
        "type": "mekanism:painting",
        "itemInput": {
            "ingredient": { "item": 'minecraft:slime_ball' },
            "amount": 1
        },
        "chemicalInput": {
            "pigment": "mekanism:yellow",
            "amount": 50
        },
        "output": 'minecraft:honeycomb'
    })

    event.custom({
        "type": "mekanism:painting",
        "itemInput": {
            "ingredient": { "item": 'minecraft:grass' },
            "amount": 1
        },
        "chemicalInput": {
            "pigment": "mekanism:green",
            "amount": 50
        },
        "output": 'minecraft:kelp'
    })

    event.shaped(
        Item.of('minecraft:elytra', 1),
        [
            'STS',
            'SJS',
            'S S'
        ],
        {
            J: 'mekanism:ultimate_control_circuit',
            S: 'mekanism:hdpe_sheet',
            T: "mekanism:teleportation_core"
        }
    )

    event.custom({
        type: 'experienceobelisk:molecular_metamorphosis',
        ingredient1:
            { item: 'minecraft:stick' }
        ,
        count1: 1,
        ingredient2:
            { item: 'experienceobelisk:transforming_focus' }
        ,
        count2: 1,
        ingredient3:
            []
        ,
        count3: 0,
        result:
            { item: 'minecraft:sugar_cane', count: 1 }
        ,
        cost: 20,
        processTime: 20
    })

    event.custom({
        type: 'experienceobelisk:molecular_metamorphosis',
        ingredient1:
            { item: 'minecraft:wither_skeleton_skull' }
        ,
        count1: 3,
        ingredient2:
            { item: 'experienceobelisk:transforming_focus' }
        ,
        count2: 1,
        ingredient3:
            { item: 'minecraft:soul_sand' }
        ,
        count3: 4,
        result:
            { item: 'minecraft:nether_star', count: 1 }
        ,
        cost: 5000,
        processTime: 1000
    })

    event.recipes.mekanism.enriching("minecraft:skeleton_skull", "minecraft:bone_block")

    event.custom({
        type: 'experienceobelisk:molecular_metamorphosis',
        ingredient1:
            { item: 'experienceobelisk:astute_assembly' }
        ,
        count1: 1,
        ingredient2:
            { item: 'exdeorum:compressed_netherrack' }
        ,
        count2: 32,
        ingredient3:
            { item: 'experienceobelisk:transforming_focus' }
        ,
        count3: 1,
        result:
            { item: 'minecraft:netherite_upgrade_smithing_template', count: 1 }
        ,
        cost: 5000,
        processTime: 1000
    })
})