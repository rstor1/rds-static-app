export function drawParabolicCurves(canvas: HTMLCanvasElement) {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    console.log("canvas.width", w, "canvas.height", h);

    // Use proportions instead of fixed numbers
    let x1 = w * 0.58, y1 = 0;
    let x2 = w * 0.56, y2 = 0;
    let x3 = w * 0.58, y3 = h;
    let x4 = w * 0.56, y4 = h;

    const yLimit = h * 0.49;
    const yStart = h * 0.51;
    const xStep = w * 0.0057;
    const yStep = h * 0.0067;

    // First quadrant
    for (let i = 0; y1 < yLimit; i++) {
        ctx.beginPath();
        ctx.moveTo(w * 0.58, y1);
        ctx.lineTo(x1, yLimit);
        ctx.strokeStyle = "#696969";
        ctx.lineWidth = 0.25;
        ctx.stroke();
        x1 += xStep;
        y1 += yStep;
    }
    // Second quadrant
    for (let i = 0; y2 < yLimit; i++) {
        ctx.beginPath();
        ctx.moveTo(w * 0.56, y2);
        ctx.lineTo(x2, yLimit);
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 0.25;
        ctx.stroke();
        x2 -= xStep;
        y2 += yStep;
    }
    // Third quadrant
    for (let i = 0; y3 > yStart; i++) {
        ctx.beginPath();
        ctx.moveTo(w * 0.58, y3);
        ctx.lineTo(x3, yStart);
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 0.25;
        ctx.stroke();
        x3 += xStep;
        y3 -= yStep;
    }
    // Fourth quadrant
    for (let i = 0; y4 > yStart; i++) {
        ctx.beginPath();
        ctx.moveTo(w * 0.56, y4);
        ctx.lineTo(x4, yStart);
        ctx.strokeStyle = "#696969";
        ctx.lineWidth = 0.25;
        ctx.stroke();
        x4 -= xStep;
        y4 -= yStep;
    }
}