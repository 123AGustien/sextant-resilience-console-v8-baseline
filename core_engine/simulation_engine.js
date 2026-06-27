
// Sextant Protocol v8 - Simulation Engine (Stable Fallback)

window.runSimulation = function (input) {

    const stress = input?.stress ?? 0.5;

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

    return result;
};


// STATE LOGIC (v8 rules)
function getState(stress) {
    if (stress >= 0.8) return "CRITICAL";
    if (stress >= 0.5) return "AMBER";
    return "STABLE";
}


// Safe debug object (optional)
window.__SextantEngine = {
    version: "v8-baseline-stable",
    status: "loaded"
};