// Sextant Protocol v8 - Simulation Engine (Fallback Stable Version)

window.runSimulation = function (input) {

    const stress = input?.stress ?? 0.5;

    // Core simulation output (v8 stable logic)
    const result = {
        final_state: getState(stress),

        fx: {
            pressure_score: stress
        },

        system: {
            fx: stress * 0.3,
            bank: stress * 0.25,
            liq: stress * 0.2,
            eq: stress * 0.15,
            conf: stress * 0.1
        },

        scenario: input?.name ?? "unknown",

        timestamp: Date.now()
    };

    return