export function ParticleBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true" style={{ background: "#030303" }}>
      {/* CSS-only Particle Parallax */}
      <div className="absolute inset-0 opacity-40">
        <div className="stars-1"></div>
        <div className="stars-2"></div>
        <div className="stars-3"></div>
      </div>
      <style>{`
        .stars-1, .stars-2, .stars-3 {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image: 
            radial-gradient(1.5px 1.5px at 20px 30px, #00E5C4, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 40px 70px, #fff, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 50px 160px, #00E5C4, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 90px 40px, #fff, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 130px 80px, #00E5C4, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 160px 120px, #fff, rgba(0,0,0,0));
          background-repeat: repeat;
          background-size: 200px 200px;
        }
        .stars-1 {
          animation: space-pan 60s linear infinite;
        }
        .stars-2 {
          background-size: 300px 300px;
          animation: space-pan 90s linear infinite;
          opacity: 0.7;
          transform: rotate(45deg);
        }
        .stars-3 {
          background-size: 400px 400px;
          animation: space-pan 120s linear infinite;
          opacity: 0.5;
          transform: rotate(-45deg);
        }
        @keyframes space-pan {
          from { transform: translateY(0); }
          to { transform: translateY(-2000px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .stars-1, .stars-2, .stars-3 { animation: none !important; }
        }
      `}</style>
      
      {/* Glow effect */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, #030303 80%)'
        }}
      />
    </div>
  );
}

