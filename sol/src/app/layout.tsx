import '@/styles/globals.css';
import Footer from '@/components/footer';
import Topbar from '@/components/topbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <Topbar />
          <div className="min-h-screen">
            {children}
          </div>
        <Footer />
      </body>
    </html>
  )
}
