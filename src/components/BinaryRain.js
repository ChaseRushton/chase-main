import React, { useEffect, useRef } from 'react';
import '../styles/BinaryRain.css';

const BinaryRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Binary rain drops
    const drops = [];
    const fontSize = 14;
    let columns;

    // Create drops for each column
    const initDrops = () => {
      columns = Math.floor(canvas.width / fontSize);
      drops.length = 0;
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * -canvas.height / fontSize);
      }
    };

    // Resize handler
    const resizeCanvas = () => {
      canvas.width = 500;
      canvas.height = 600;
      initDrops();
    };

    resizeCanvas();

    // Binary characters pool (including ATCG for DNA reference)
    const chars = '01ATCG'.split('');

    const draw = () => {
      // Semi-transparent black background for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // White text
      ctx.fillStyle = '#ffffff';
      ctx.font = fontSize + 'px monospace';

      // Draw each drop
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = chars[Math.floor(Math.random() * chars.length)];
        
        // Calculate position
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Draw with varying opacity based on position
        const opacity = 1 - (y / canvas.height);
        ctx.globalAlpha = Math.max(0.1, opacity);
        
        // Draw the character
        ctx.fillText(char, x, y);

        // Reset drop if it's off screen
        if (y > canvas.height) {
          drops[i] = 0;
        } else {
          // Move drop down (original speed)
          drops[i]++;
        }
      }
      ctx.globalAlpha = 1;

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="binary-rain" />;
};

export default BinaryRain;
