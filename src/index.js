import React from 'react';
import { render } from 'react-dom';

import 'modern-normalize';

import App from './router/index.jsx';

const appRoot = document.getElementById('app-root');
render(<App />, appRoot);
