import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { datadogRum } from '@datadog/browser-rum';
    
datadogRum.init({
    applicationId: '73bf5c7e-7a50-449a-8305-e7fca9c296bb',
    clientToken: 'pubc1cf342413899f2174fdfc2c998e57ac',
    site: 'datadoghq.com',
    service:'todo-app---react',
    // Specify a version number to identify the deployed version of your application in Datadog 
    // version: '1.0.0',
    sampleRate: 100,
    trackInteractions: true,
    defaultPrivacyLevel: 'mask-user-input'
});
    
datadogRum.startSessionReplayRecording();


const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false }
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
  document.getElementById('root')
);
