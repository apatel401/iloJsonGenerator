import React,{useEffect, useState} from 'react'

const LoadILO = ({json, containerClass, name}) => {
    const [link, setLink] = useState("")
    const [linkJson, setLinkJson] = useState("")
    useEffect(() => {
        const blobJson = new Blob([JSON.stringify(json)], { type: 'application/json' });
        const urlJson = URL.createObjectURL(blobJson);
        setLinkJson(urlJson)
        // Create Blob from HTML content
        const htmlContent = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${name}</title>
            </head>
            <body>
                <div class="interactive-img ${containerClass}" data-config="../widgets/interactive-images1.json">
                    
                </div>
                <script src="../vendor/vendor.min.dev.js"></script>

                <script src="../../node_modules/@tvontario/react/react.production.min.js"></script>
                <script src="../../node_modules/@tvontario/react/react-dom.production.min.js"></script>
                <script src="../../node_modules/@tvontario/interactive-images/dist/bundle.min.dist.js"></script>
            </body>
            </html>
        `;
        const blob = new Blob([htmlContent], { type: 'text/html' });
        setLink(URL.createObjectURL(blob));

        // Cleanup function
        return () => {
            URL.revokeObjectURL(url);
            URL.revokeObjectURL(urlJson);
        };
    }, [json, containerClass, name]);


  return (
   <iframe src={link} />
  )
}

export default LoadILO
