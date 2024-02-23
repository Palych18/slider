import './index.css';
import { createRoot } from 'react-dom/client';
import App from 'App';

const $root = document.querySelector('#root');
const root = createRoot($root);
root.render(<App />);
