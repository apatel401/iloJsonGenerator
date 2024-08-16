import React, { useState } from 'react';
import InputComponent from '../utils/InputComponent';
import Preview from '../utils/Preview';
import Dropdown from '../utils/DropDown';
import { departmentOptions } from '../utils/constant';
import LoadILO from '../utils/LoadILO';
import { jsonDownload } from '../utils/jsonDownload';
const InteractiveImages = () => {
    const [formData, setFormData] = useState({
        id: 1,
        department: '',
        imageSrc: './assets/',
        imageAlt: '',
        title: '',
        instructions: '',
        highlightColor: '',
        areas: []
    });

    const [areaData, setAreaData] = useState({
        name: '',
        areaAlt: '',
        areaDetails: '',
        shape: '',
        coords: ''
    });
    const [showILO, setShowILO] = useState(false);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(name, value)
    };

    const handleAreaChange = (e) => {
        const { name, value } = e.target;
        setAreaData({ ...areaData, [name]: value });
    };

    const handleAddArea = () => {
        setFormData({
            ...formData,
            areas: [...formData.areas, areaData]
        });
        setAreaData({
            name: '',
            areaAlt: '',
            areaDetails: '',
            shape: '',
            coords: ''
        });
    };

    const handleColorChange = (e) => {
        const { value } = e.target;
        setFormData({ ...formData, highlightColor: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        jsonDownload(formData);
    };

    // const handleLoadILO = () => {
    //     setShowILO(true);
    // };

    return (
        <div className="form-container">
            <form className='form' onSubmit={handleSubmit}>
                <h2>Interactive Images Form</h2>
                <Dropdown value={formData.department} onChange={handleInputChange} options={departmentOptions} />
                <InputComponent label="Image source" name="imageSrc" value={formData.imageSrc} onChange={handleInputChange} />
                <InputComponent label="Image Alt" name="imageAlt" value={formData.imageAlt} onChange={handleInputChange} />
                <InputComponent label="ILO Title" name="title" value={formData.title} onChange={handleInputChange} />
                <InputComponent label="Instructions" name="instructions" value={formData.instructions} onChange={handleInputChange} />

                  {/* Highlight color input */}
                  <div className="form-group">
                    <label>Highlight Color:</label>
                    <div className='highlight-color-group'>
                    <input type="color" name="highlightColor" value={formData.highlightColor} onChange={handleColorChange} className="highlight-color-input" />
                    <input type="text" value={formData.highlightColor} className="highlight-color-code" onChange={handleColorChange} />
                </div>
                </div>
                <h3>Areas</h3>
                {formData.areas.map((area, index) => (
                    <div key={index}>
                        <InputComponent label="name" name="name" value={area.name} onChange={handleAreaChange} />
                        <InputComponent label="Area Alt" name="areaAlt" value={area.areaAlt} onChange={handleAreaChange} />
                        <InputComponent label="Area Details" name="areaDetails" value={area.areaDetails} onChange={handleAreaChange} />
                        <InputComponent label="Shape" name="shape" value={area.shape} onChange={handleAreaChange} />
                        <InputComponent label="Coords" name="coords" value={area.coords} onChange={handleAreaChange} />
                    </div>
                ))}
                <div className="form-buttons">
                    <button type="button" onClick={handleAddArea} className="add-question-btn">Add Areas</button>
                    <Preview formData={formData} />
                    <button type="submit" className="submit-btn">Generate JSON</button>

                </div>
            </form>
            {/* <button onClick={handleLoadILO}>Load ILO</button>
            {showILO && <LoadILO json={formData} containerClass="interactive-images-container" name="Interactive Learning Object" />} */}
        </div>
    );
};

export default InteractiveImages;
