ServerEvents.recipes((event) => {
    event.shaped('mek1000:rockbreak_simulator', [
        'ASD',
        'BCE',
        'PSP'
    ], {
        C: 'mek1000:uranite_flux_casing',
        P: 'advanced_ae:quantum_processor',
        S: 'mekanism_extras:absolute_control_circuit',
        A: 'experienceobelisk:flask_of_hades',
        B: 'cookingforblockheads:heating_unit',
        D: 'experienceobelisk:flask_of_poseidon',
        E: 'cookingforblockheads:ice_unit'
    })
})