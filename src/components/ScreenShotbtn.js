import React from 'react';
import { Button } from '@mui/material';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import MainPage from './MainPage';
const ScreenshotButton = () => {
  const captureScreenshot = () => {
    const elementToCapture = document.getElementById('capture'); // Replace 'capture' with the ID of the element you want to capture

    if (elementToCapture) {
      html2canvas(elementToCapture).then((canvas) => {
        // Convert the canvas to a blob and save it as an image file
        canvas.toBlob((blob) => {
          saveAs(blob, 'screenshot.png');
        });
      });
    }
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={captureScreenshot}>
        Capture Screenshot
      </Button>
      <div id="capture">
        <MainPage/>
      </div>
    </div>
  );
};

export default ScreenshotButton;