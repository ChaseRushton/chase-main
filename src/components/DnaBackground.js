import React, { useEffect, useRef } from 'react';
import '../styles/DnaBackground.css';

const DnaBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initial resize
    resizeCanvas();

    // Resize on window resize
    window.addEventListener('resize', resizeCanvas);

    // DNA letters
    const letters = ['A', 'T', 'C', 'G'];
    const particles = [];

    // Create particles
    const createParticles = () => {
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 20000);
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          letter: letters[Math.floor(Math.random() * letters.length)],
          speed: 0.5 + Math.random() * 1,
          size: 12 + Math.random() * 8,
          opacity: 0.1 + Math.random() * 0.3
        });
      }
    };

    createParticles();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        // Move particle
        particle.y += particle.speed;
        if (particle.y > canvas.height) {
          particle.y = -20;
          particle.x = Math.random() * canvas.width;
        }

        // Draw letter
        ctx.font = `${particle.size}px monospace`;
        ctx.fillStyle = `rgba(100, 255, 218, ${particle.opacity})`;
        ctx.fillText(particle.letter, particle.x, particle.y);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="dna-background" />;
};

export default DnaBackground;
