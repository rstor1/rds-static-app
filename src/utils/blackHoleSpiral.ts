export function runBlackHoleSpiral() {
  const canvas = document.getElementById('myCanvas') as HTMLCanvasElement | null;
  if (!canvas) {
    return;
  }
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    return;
  }

  function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;
      if (!canvas) {
    return;
  }
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  let angle = 0;

  function drawSpiral() {
    if (!canvas || !ctx) {
      return;
    }

    // Always reset transform and scale for device pixel ratio
    const dpr = window.devicePixelRatio || 1;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    // Use layout size for all drawing
    const width = window.innerWidth;
    const height = window.innerHeight;

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, width, height);

    // Draw centered, wrapped text before the spiral
    const message = "If you can read this, you have entered the Black Hole! There is only one way back...";
    ctx.save();
    const fontSize = Math.min(width * 0.08, 35);
    ctx.font = `900 ${fontSize}px Tahoma, Geneva, sans-serif`;
    ctx.fillStyle = "#272727";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.shadowColor = "#555";
    ctx.shadowBlur = 3;

    const maxTextWidth = Math.min(width * 0.9, 600);
    const words = message.split(" ");
    const lines: string[] = [];
    let currentLine = "";
    for (let word of words) {
      const testLine = currentLine ? currentLine + " " + word : word;
      const { width: testWidth } = ctx.measureText(testLine);
      if (testWidth > maxTextWidth && currentLine) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }
    if (currentLine) lines.push(currentLine);

    const lineHeight = fontSize * 1.2;
    const startY = height / 2 - ((lines.length - 1) * lineHeight) / 2;
    lines.forEach((line, i) => {
      ctx.fillText(line, width / 2, startY + i * lineHeight);
    });
    ctx.restore();

    ctx.save();
    const centerX = width / 2;
    const centerY = height / 2;
    ctx.translate(centerX, centerY);

    ctx.beginPath();
    const maxRadius = Math.sqrt(centerX * centerX + centerY * centerY);
    const spiralTurns = 12;
    const points = 3000;
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