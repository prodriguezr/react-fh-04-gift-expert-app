import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const defaulCategories = ['One Punch', 'Metallica'];
root.render(<GifExpertApp defaulCategories={defaulCategories} />);
