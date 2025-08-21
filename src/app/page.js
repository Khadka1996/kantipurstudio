import './globals.css';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import WhatsAppButton from './components/Connect';

export const metadata = {
  title: 'Kantipur Photo Studio',
  description: 'Capturing moments, creating memories',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <WhatsAppButton />
        <main className="flex-grow">
          {children}
           <Footer />
        </main>
       
      </body>
    </html>
  );
}
