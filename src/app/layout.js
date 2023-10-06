import './styles/globals.css'

export const metadata = {
  title: 'One Piece',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="./assets/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" 
        rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
