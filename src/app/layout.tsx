import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-pink-700 to-pink-800">
        {children}
        </body>
    </html>
  )
}
