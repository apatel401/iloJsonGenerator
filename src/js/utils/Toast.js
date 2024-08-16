import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../components/Provider';

const Toast = () => {
  const {showToast, updateContext, toastMessage} = useContext(AppContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateContext({
        showToast: false
    })
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    showToast && <div className="toast">
      <span className="toast-message">{toastMessage}</span>
    </div>
  );
};

export default Toast;
