import React from 'react';
import { useState, createContext } from "react";

export const AppContext = createContext();

export default function ProviderComponent(props) {

    const contextInformation = {
        showPreview: false,
        showToast: false,
        toastMessage: '',
        currentForm: null,
        samplePreview: false,
        updateContext: (contextUpdates) => {
            setContextInfo(currentContextInfo => ({ ...currentContextInfo, ...contextUpdates }));
        },
    }

    // Values that often get updated
    const [contextInfo, setContextInfo] = useState(contextInformation);

    return (
            <AppContext.Provider value={contextInfo}>
                {props.children}
            </AppContext.Provider>
    )
}