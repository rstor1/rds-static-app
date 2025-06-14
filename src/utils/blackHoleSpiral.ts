export function runBlackHoleSpiral() {
    const canvas = document.getElementById('myCanvas') as HTMLCanvasElement | null;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) {
        return;
    }

    function resizeCanvas() {
        if (!canvas || !ctx) {
            return;
        }
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let angle = 0;

    function drawSpiral() {
        // Check for canvas and ctx on every frame
        if (!canvas || !ctx) {
            return;
        }

        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw centered, wrapped text before the spiral
        const message = "If you can read this, you have entered in the Black Hole! There is only one way back...";
        ctx.save();

        // Match CSS font styles
        const fontSize = Math.min(canvas.width * 0.045, 35); // Max 35px, responsive
        ctx.font = `900 ${fontSize}px Tahoma, Geneva, sans-serif`;
        ctx.fillStyle = "#272727";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.shadowColor = "#555";
        ctx.shadowBlur = 3; // Matches 0px 2px 3px shadow

        // Word wrap for smaller screens
        const maxTextWidth = Math.min(canvas.width * 0.9, 600);
        const words = message.split(" ");
        const lines: string[] = [];
        let currentLine = "";
        for (let word of words) {
            const testLine = currentLine ? currentLine + " " + word : word;
            const { width } = ctx.measureText(testLine);
            if (width > maxTextWidth && currentLine) {
                lines.push(currentLine);
                currentLine = word;
            } else {
                currentLine = testLine;
            }
        }
        if (currentLine) lines.push(currentLine);

        const lineHeight = fontSize * 1.2;
        const startY = canvas.height / 2 - ((lines.length - 1) * lineHeight) / 2;
        lines.forEach((line, i) => {
            ctx.fillText(line, canvas.width / 2, startY + i * lineHeight);
        });
        ctx.restore();

        ctx.save();
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        ctx.translate(centerX, centerY);

        ctx.beginPath();
        const maxRadius = Math.sqrt(centerX * centerX + centerY * centerY);
        const spiralTurns = 12;
        const points = 1500;
        for (let i = 0; i < points; i++) {
            const t = i / points;
            const spiralAngle = spiralTurns * 2 * Math.PI * t + angle;
            const spiralRadius = maxRadius * t;
            const x = spiralRadius * Math.cos(spiralAngle);
            const y = spiralRadius * Math.sin(spiralAngle);
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.strokeStyle = '#cccccc';
        ctx.lineWidth = 3;
        ctx.stroke();

        ctx.restore();

        angle += 0.03;
        requestAnimationFrame(drawSpiral);
    }

    drawSpiral();
}