export const AmbientBackground = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute -left-[10vw] -top-[10vh] h-[55vh] w-[55vw] rounded-full opacity-60 blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--cherry) / 0.22), transparent 70%)",
          animation: "driftA 22s ease-in-out infinite alternate",
        }}
      />
      <div
        className="absolute -right-[12vw] top-[25vh] h-[50vh] w-[50vw] rounded-full opacity-55 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--cherry) / 0.18), transparent 70%)",
          animation: "driftB 26s ease-in-out infinite alternate",
        }}
      />
      <div
        className="absolute left-[15vw] top-[55vh] h-[45vh] w-[45vw] rounded-full opacity-50 blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--cherry) / 0.20), transparent 70%)",
          animation: "driftC 20s ease-in-out infinite alternate",
        }}
      />
      <div
        className="absolute left-[55vw] top-[75vh] h-[40vh] w-[40vw] rounded-full opacity-45 blur-[80px]"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--cherry) / 0.16), transparent 70%)",
          animation: "driftD 24s ease-in-out infinite alternate",
        }}
      />
      <div
        className="absolute -left-[5vw] top-[85vh] h-[42vh] w-[42vw] rounded-full opacity-50 blur-[95px]"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--cherry) / 0.18), transparent 70%)",
          animation: "driftE 28s ease-in-out infinite alternate",
        }}
      />

      <style>{`
        @keyframes driftA {
          0%   { transform: translate(0, 0) scale(1); }
          100% { transform: translate(10vw, 8vh) scale(1.18); }
        }
        @keyframes driftB {
          0%   { transform: translate(0, 0) scale(1); }
          100% { transform: translate(-8vw, 10vh) scale(1.12); }
        }
        @keyframes driftC {
          0%   { transform: translate(0, 0) scale(1); }
          100% { transform: translate(7vw, -7vh) scale(1.22); }
        }
        @keyframes driftD {
          0%   { transform: translate(0, 0) scale(1); }
          100% { transform: translate(-6vw, -9vh) scale(1.1); }
        }
        @keyframes driftE {
          0%   { transform: translate(0, 0) scale(1); }
          100% { transform: translate(9vw, -6vh) scale(1.15); }
        }
      `}</style>
    </div>
  );
};

export default AmbientBackground;
