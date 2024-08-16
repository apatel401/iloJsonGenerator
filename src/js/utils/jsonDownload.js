export const jsonDownload = (json) => { 
    const jsonData = JSON.stringify(json, null, 2)
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'formData.json');
    document.body.appendChild(link);
    link.click();
    URL.revokeObjectURL(url);
    document.body.removeChild(link);
}