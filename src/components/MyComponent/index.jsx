import React from 'react';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import { Worker } from '@react-pdf-viewer/core'; // Handles PDF worker
import { Viewer, defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

const App = () => {
  const pdfUrl = '/path-to-your-pdf-file.pdf'; // Replace with your PDF file path
  const defaultLayout = defaultLayoutPlugin();

  return (
    <div style={{ height: '750px' }}>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.6.172/build/pdf.worker.min.js`}>
        <Viewer fileUrl={pdfUrl} plugins={[defaultLayout]} />
      </Worker>
    </div>
  );
};

export default App;
