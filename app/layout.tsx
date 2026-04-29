export const metadata = {
  title: 'Dogfood Chat App',
  description: 'Real-time chat — regression test',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif', background: '#0f0f0f', color: '#fff' }}>
        {children}
      </body>
    </html>
  )
}
