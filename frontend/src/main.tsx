import { createRoot } from 'react-dom/client';
import { Bootstrap } from './Bootstrap';

const rootEl = document.getElementById('root');
if (rootEl) {
  createRoot(rootEl).render(<Bootstrap />);
}
