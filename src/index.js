import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css'

window.move_window = null
window.resize_window = null

window.onmousemove = e => {
  window.mouseX = e.clientX;
  window.mouseY = e.clientY;

  if (window.move_window) window.move_window()
  if (window.resize_window) window.resize_window()
}

window.mousePressed = false
window.onmousedown = () => {window.mousePressed = true}
window.onmouseup = () => {window.mousePressed = false}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);