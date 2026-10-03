"use client";
import { useEffect, useRef, useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { weddingConfig } from "@/config/wedding";

export default function SaveTheDate() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const isDrawingRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw heart path for clipping
    ctx.beginPath();
    ctx.moveTo(120, 70);
    ctx.bezierCurveTo(120, 70, 100, 20, 60, 20);
    ctx.bezierCurveTo(20, 20, 20, 70, 20, 70);
    ctx.bezierCurveTo(20, 110, 120, 190, 120, 190);
    ctx.bezierCurveTo(120, 190, 220, 110, 220, 70);
    ctx.bezierCurveTo(220, 70, 220, 20, 180, 20);
    ctx.bezierCurveTo(140, 20, 120, 70, 120, 70);
    ctx.closePath();
    ctx.clip();

    // Fill with glittery green-grey texture
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "#9BA495";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add noise for glitter
    for(let i=0; i<1500; i++) {
      ctx.fillStyle = Math.random() > 0.5 ? '#D9C9A6' : '#ffffff';
      ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 1.5, 1.5);
    }

    // Add "Scratch ❤️" text on top
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 22px 'Playfair Display', serif";
    ctx.textBaseline = "middle";
    const text = "Scratch ❤️";
    const textWidth = ctx.measureText(text).width;
    // Manually center text to avoid iOS Safari textAlign quirks
    ctx.fillText(text, (canvas.width - textWidth) / 2, 105);

    ctx.globalCompositeOperation = "destination-out";
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.lineWidth = 35;
  }, []); // Run only once to initialize canvas

  const getPos = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY
    };
  };

  const startDraw = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (isRevealed) return;
    isDrawingRef.current = true;
    const pos = getPos(e);
    const ctx = canvasRef.current?.getContext("2d");
    if (ctx) {
      ctx.beginPath();
      ctx.moveTo(pos.x, pos.y);
    }
  };

  const draw = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current || isRevealed) return;
    const pos = getPos(e);
    const ctx = canvasRef.current?.getContext("2d");
    if (ctx) {
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
    }
  };

  const endDraw = () => {
    if (!isDrawingRef.current) return;
    isDrawingRef.current = false;
    checkReveal();
  };

  const checkReveal = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let transparent = 0;
    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) transparent++;
    }
    if (transparent / (pixels.length / 4) > 0.6) {
      setIsRevealed(true);
      canvas.style.transition = "opacity 0.6s";
      canvas.style.opacity = "0";
      setTimeout(() => {
        canvas.style.display = "none";
        fireConfetti();
      }, 600);
    }
  };

  const fireConfetti = () => {
    for(let i=0; i<40; i++) {
      const conf = document.createElement('div');
      conf.style.position = 'fixed';
      conf.style.width = '10px';
      conf.style.height = '10px';
      conf.style.backgroundColor = ['#D9C9A6', '#6E7F5C', '#F2D5D9'][Math.floor(Math.random()*3)];
      conf.style.left = Math.random() * 100 + 'vw';
      conf.style.top = '-20px';
      conf.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
      conf.style.zIndex = '9999';
      conf.style.pointerEvents = 'none';
      document.body.appendChild(conf);

      let startY = -20;
      let speedY = Math.random() * 3 + 3;
      let speedX = Math.random() * 2 - 1;
      let x = parseFloat(conf.style.left);
      let rot = 0;

      const fall = setInterval(() => {
        startY += speedY;
        x += speedX;
        rot += speedY;
        conf.style.top = startY + 'px';
        conf.style.left = x + 'vw';
        conf.style.transform = `rotate(${rot}deg)`;
        
        if(startY > window.innerHeight) {
          clearInterval(fall);
          conf.remove();
        }
      }, 16);
    }
  };

  const downloadICS = () => {
    const eventTitle = `${weddingConfig.couple.groomName} & ${weddingConfig.couple.brideName} Wedding`;
    // Format: YYYYMMDDTHHmmssZ (basic dummy)
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${eventTitle}
DTSTART:20261130T050000Z
DTEND:20261130T140000Z
LOCATION:${weddingConfig.venue.name}
DESCRIPTION:Join us to celebrate our wedding!
END:VEVENT
END:VCALENDAR`;
    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'wedding_invitation.ics';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <SectionWrapper id="savethedate" className="py-16 px-6 text-center flex flex-col items-center">
      <div className="text-3xl text-sage mb-2">✨</div>
      <h2 className="font-script text-4xl text-dark-olive mb-4">Scratch to Reveal</h2>
      <div className="heart-divider w-full"><span>❦</span></div>

      <div ref={containerRef} className="relative w-[240px] h-[220px] mx-auto mt-6 mb-8 flex justify-center">
        {/* The Heart Shape behind the canvas */}
        <div 
          className="absolute inset-0 bg-white shadow-inner flex flex-col items-center justify-center pt-8 pb-4"
          style={{ 
            clipPath: "path('M120,70 C120,70 100,20 60,20 C20,20 20,70 20,70 C20,110 120,190 120,190 C120,190 220,110 220,70 C220,70 220,20 180,20 C140,20 120,70 120,70 Z')" 
          }}
        >
          <div className="font-display text-sm uppercase text-sage tracking-wider">Wednesday</div>
          <div className="font-display text-xl font-bold text-dark-olive my-1">Nov 25, 2026</div>
          
        </div>

        {/* Scratch Canvas without CSS clip-path to fix rendering bugs */}
        <canvas 
          ref={canvasRef} 
          width="240" 
          height="220" 
          className="absolute inset-0 z-10 touch-none cursor-pointer"
          onPointerDown={startDraw}
          onPointerMove={draw}
          onPointerUp={endDraw}
          onPointerLeave={endDraw}
          onPointerCancel={endDraw}
        />
      </div>

      <button 
        onClick={downloadICS}
        className="bg-dark-olive hover:bg-sage text-white font-body py-3 px-8 rounded-full transition-colors duration-300 shadow-md flex items-center gap-2 mb-10"
      >
        <span>📅</span> SAVE THE DATE
      </button>

      {/* Couple Photo Placeholder */}
      <div className="w-full max-w-[320px] h-[240px] rounded-2xl overflow-hidden shadow-lg border-[4px] border-white relative">
        <img 
          src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=400&q=80" 
          alt="Couple holding hands with bouquet"
          className="w-full h-full object-cover"
        />
      </div>
    </SectionWrapper>
  );
}
