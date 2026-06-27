
// Sextant Protocol v8 - Risk Graph Module (Production Safe)

window.RiskGraph = {
    data: [],

    push: function (point) {
        this.data.push(point);
        this.render();
    },

    render: function () {
        const container = document.getElementById("riskGraph");
        if (!container) return;

        const latest = this.data.slice(-10);

        container.innerHTML = `
            <div style="margin-top:20px; text-align:center;">
                <h3>Risk Impact Feed</h3>

                <div style="
                    display:flex;
                    gap:5px;
                    justify-content:center;
                    align-items:flex-end;
                    height:120px;
                ">
                    ${latest.map(p => `
                        <div title="impact: ${p.impact.toFixed(2)}"
                             style="
                                width:18px;
                                height:${Math.max(10, p.impact * 100)}px;
                                background:${getColor(p.impact * 100)};
                                display:inline-block;
                                border-radius:3px;
                             ">
                        </div>
                    `).join("")}
                </div>
            </div>
        `;
    }
};


// COLOR LOGIC (scaled properly)
function getColor(value) {
    if (value >= 80) return "#ff3b3b";   // CRITICAL
    if (value >= 50) return "#ff9f1c";   // AMBER
    return "#2bd4ff";                    // STABLE
}


// SAFE INITIALIZATION
window.addEventListener("load", function () {
    if (!window.RiskGraph.data.length) {
        window.RiskGraph.push({ impact: 0 });
    }
});