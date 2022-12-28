import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import AuthProvider from '../components/Contexts/AuthProvider';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;