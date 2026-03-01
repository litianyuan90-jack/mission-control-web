import './globals.css'

export const metadata = {
  title: 'Mission Control - OpenClaw',
  description: 'AI Agent Control Center',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body className="antialiased">{children}</body>
    </html>
  )
}
