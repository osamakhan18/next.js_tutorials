// /app/layout.tsx
import React from 'react';

export const metadata = {
  title: 'My App',
  description: 'A simple Next.js app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: 'lightblue', padding: '1rem' }}>
          <h1>Header</h1>
        </header>

        <main>{children}</main>

        <footer style={{ backgroundColor: 'ghostwhite', padding: '1rem' }}>
          <h1>Footer</h1>
        </footer>
      </body>
    </html>
  );
}
