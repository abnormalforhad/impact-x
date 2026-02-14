import { StrictMode, Suspense, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

function LoadingScreen() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#030712',
        color: '#f1f5f9',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui',
        fontSize: 18,
        gap: 12,
      }}
    >
      <span>Loading Impact-X…</span>
    </div>
  );
}

export function Bootstrap() {
  const [Content, setContent] = useState<React.ReactNode>(<LoadingScreen />);

  useEffect(() => {
    (async () => {
      try {
        const [
          { WagmiProvider },
          { QueryClient, QueryClientProvider },
          { RainbowKitProvider, darkTheme },
          { default: App },
          { config },
          { ErrorBoundary },
        ] = await Promise.all([
          import('wagmi'),
          import('@tanstack/react-query'),
          import('@rainbow-me/rainbowkit'),
          import('./App.tsx'),
          import('./lib/wagmi-config.ts'),
          import('./components/ErrorBoundary.tsx'),
        ]);
        await import('@rainbow-me/rainbowkit/styles.css');

        const queryClient = new QueryClient();
        setContent(
          <StrictMode>
            <ErrorBoundary>
              <Suspense fallback={<LoadingScreen />}>
                <WagmiProvider config={config}>
                  <QueryClientProvider client={queryClient}>
                    <RainbowKitProvider
                      theme={darkTheme({
                        accentColor: '#0ea5e9',
                        accentColorForeground: 'white',
                        borderRadius: 'medium',
                      })}
                    >
                      <BrowserRouter>
                        <App />
                      </BrowserRouter>
                    </RainbowKitProvider>
                  </QueryClientProvider>
                </WagmiProvider>
              </Suspense>
            </ErrorBoundary>
          </StrictMode>
        );
      } catch (err) {
        const msg = err instanceof Error ? err.message + (err.stack ? '\n' + err.stack : '') : String(err);
        setContent(
          <div style={{ padding: 24, background: '#030712', color: '#f1f5f9', fontFamily: 'system-ui', minHeight: '100vh' }}>
            <h2 style={{ color: '#f87171' }}>Failed to load app</h2>
            <pre style={{ whiteSpace: 'pre-wrap', margin: '12px 0', color: '#94a3b8', fontSize: 14 }}>{msg}</pre>
            <a href="/" style={{ display: 'inline-block', marginTop: 16, padding: '8px 16px', background: '#06b6d4', color: '#020617', borderRadius: 8, textDecoration: 'none', fontWeight: 600 }}>Reload</a>
          </div>
        );
      }
    })();
  }, []);

  return <>{Content}</>;
}
