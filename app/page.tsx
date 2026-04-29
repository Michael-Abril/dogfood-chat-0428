export default function Home() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', gap: 24 }}>
      <h1 style={{ fontSize: 36, fontWeight: 700, margin: 0 }}>Live Chat</h1>
      <p style={{ color: '#aaa', margin: 0 }}>Real-time messaging powered by WebSocket</p>
      <div style={{ width: 480, background: '#1a1a1a', borderRadius: 12, padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ height: 240, background: '#111', borderRadius: 8, padding: 12, overflowY: 'auto', fontSize: 14, color: '#ccc' }}>
          <div>👋 Welcome to the chat room!</div>
          <div style={{ marginTop: 8, color: '#888' }}>Connect via WebSocket to start messaging.</div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <input
            type="text"
            placeholder="Type a message..."
            style={{ flex: 1, padding: '10px 14px', borderRadius: 8, border: '1px solid #333', background: '#111', color: '#fff', fontSize: 14 }}
          />
          <button style={{ padding: '10px 20px', borderRadius: 8, background: '#6366f1', color: '#fff', border: 'none', fontWeight: 600, cursor: 'pointer' }}>
            Send
          </button>
        </div>
      </div>
      <p style={{ fontSize: 12, color: '#555' }}>Dogfood Regression — Stack 5 — 2026-04-28</p>
    </main>
  )
}
