import Link from 'next/link'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const ms = new Date().getMilliseconds();
  return (
    <html lang="en">
      <body>
        <h1>Layout {ms}</h1>
        <div>
          <Link href="/">Home</Link>
        </div>
        {children}
      </body>
    </html>
  )
}
