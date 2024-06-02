export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <h2>Cool Item</h2>
      {children}
    </>
  )
}
