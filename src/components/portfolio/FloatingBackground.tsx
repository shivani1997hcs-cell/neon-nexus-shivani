const FloatingBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating gradient elements */}
      <div 
        className="absolute w-96 h-96 rounded-full floating-bg-1"
        style={{
          background: 'radial-gradient(circle, rgba(0, 255, 255, 0.15) 0%, rgba(147, 51, 234, 0.1) 50%, transparent 70%)',
          top: '10%',
          left: '5%',
          opacity: 0.2
        }}
      />
      <div 
        className="absolute w-80 h-80 rounded-full floating-bg-2"
        style={{
          background: 'radial-gradient(circle, rgba(255, 0, 255, 0.15) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)',
          top: '40%',
          right: '10%',
          opacity: 0.25
        }}
      />
      <div 
        className="absolute w-64 h-64 rounded-full floating-bg-3"
        style={{
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, rgba(0, 255, 255, 0.1) 50%, transparent 70%)',
          bottom: '20%',
          left: '15%',
          opacity: 0.15
        }}
      />
      <div 
        className="absolute w-72 h-72 rounded-full floating-bg-4"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.18) 0%, rgba(255, 0, 255, 0.1) 50%, transparent 70%)',
          bottom: '10%',
          right: '20%',
          opacity: 0.3
        }}
      />
    </div>
  );
};

export default FloatingBackground;