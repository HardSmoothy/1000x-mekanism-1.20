//packmode: normal

ServerEvents.recipes(event => {

    let stack_upgrade = ['sophisticatedbackpacks:stack_upgrade_starter_tier', 'sophisticatedbackpacks:stack_upgrade_tier_1', 'sophisticatedbackpacks:stack_upgrade_tier_2', 'sophisticatedbackpacks:stack_upgrade_tier_3', 'sophisticatedbackpacks:stack_upgrade_tier_4', 'sophisticatedbackpacks:stack_upgrade_omega_tier']

    event.remove({ output: 'sophisticatedbackpacks:upgrade_base' })
    event.shaped('sophisticatedbackpacks:upgrade_base', [
        'I I',
        ' L ',
        'I I'
    ], {
        L: 'minecraft:leather',
        I: '#forge:ingots/iron'
    })

    stack_upgrade.forEach(item => {
        event.remove({ output: item })
    })

    event.shaped('sophisticatedbackpacks:stack_upgrade_tier_4', [
        'CCC',
        'CBC',
        'CCC'
    ], {
        B: 'sophisticatedbackpacks:upgrade_base',
        C: '#forge:chests/wooden'
    })

    event.shaped('sophisticatedbackpacks:stack_upgrade_omega_tier', [
        'CCC',
        'CSC',
        'CCC'
    ], {
        S: 'minecraft:nether_star',
        C: 'sophisticatedbackpacks:stack_upgrade_tier_4'
    })
})