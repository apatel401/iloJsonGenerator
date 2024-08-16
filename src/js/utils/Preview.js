import React, { useContext } from 'react'
import { AppContext } from '../components/Provider';
import PreviewCode from './PreviewCode';
import { sampleInteractiveImages } from './constant';

const Preview = ({ formData }) => {
    const context = useContext(AppContext);
    const handlePreviewJson = (codeType) => {
       if(codeType == "inputCode"){
        context.updateContext({
            showPreview: true,
            showToast: true,
            toastMessage: 'JSON previewed!',
            currentForm: formData
        })
       } else {
        context.updateContext({
            showPreview: true,
            showToast: true,
            samplePreview: true,
            toastMessage: 'Sample JSON previewed!'
        })
       }
       
    };
    return (
        <>
            <button type="button" onClick={() => handlePreviewJson("inputCode")} className="preview-json-btn">Preview JSON</button>
            <button type="button" onClick={() => handlePreviewJson("sample")} className="preview-json-btn">Sample Code Preview</button>
            {context.showPreview && <PreviewCode json={context.samplePreview ? JSON.stringify(sampleInteractiveImages, null, 2) : JSON.stringify(formData, null, 2)} />}
        </>
    )
}

export default Preview
