'use client';

export default function RootVideoPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#070B14', color: '#F1F5F9', padding: '20px' }}>
      <iframe
        src="/video.html"
        style={{
          width: '100%',
          height: 'calc(100vh - 40px)',
          border: 'none',
          borderRadius: '16px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.8)'
        }}
        title="Vídeo Tutorial Tratado de Cirurgia da Coluna Vertebral"
      />
    </div>
  );
}
