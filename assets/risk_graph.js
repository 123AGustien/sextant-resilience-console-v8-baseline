
// Sextant Protocol v8 - Risk Graph Module (Safe Minimal Renderer)

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
                <div style="display:flex; gap:5px; justify-content:center; flex-wrap:wrap;">
                    ${latest.map(p => `
                        <div style="
                            width:20px;
                            height:${Math.max(10, p.impact)}px;
                            background:${getColor(p.impact)};
                            display:inline-block;
                        "></div>
                    `).join("")}
                </div>
            </div>
        `;
    }
};


// COLOR LOGIC
function getColor(value) {
    if (value >= 80) return "red";
    if (value >= 50) return "orange";
    return "#2bd4ff";
}


// init safe state
window.addEventListener("load", function () {
    if (!window.RiskGraph.data.length) {
        window.RiskGraph.push({ impact: 0 });
    }
});