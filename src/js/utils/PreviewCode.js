import React, { useContext } from 'react';
import Toast from './Toast';
import { jsonDownload } from './jsonDownload';
import { AppContext } from '../components/Provider';


const PreviewCode = ({ json, setToastMessage, toastMessage }) => {
const context = useContext(AppContext)
const {showToast} = context;
  const handleClosePreview = () => {
    context.updateContext({
    showPreview: false,
    samplePreview: falsef
    })
};


  const handleCopyJson = () => {
    navigator.clipboard.writeText(json);
    context.updateContext({
      showToast: true
      })
    setToastMessage('JSON copied to clipboard!');
};

const handleDownloadJson = () => {
  jsonDownload(formData)
  context.updateContext({
    showToast: true
    })
    setToastMessage('JSON downloaded!');
};

  return (
    <>
    <div className="preview-modal">
    <div className="preview-content">
      <span className="close-btn" onClick={handleClosePreview}>&times;</span>
      <h2>Preview JSON</h2>
      <pre>{json}</pre>
      <div className="modal-buttons">
        <button onClick={handleCopyJson}>Copy JSON</button>
        <button onClick={handleDownloadJson}>Download JSON</button>
      </div>
    </div>
    </div>
    {showToast && <Toast message={toastMessage} />}
    </>
    
  );
};

export default PreviewCode;



