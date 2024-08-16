import React, { useState } from 'react';
import InteractiveImages from './InteractiveImages';
import MultipleChoice from './MultipleChoice';
import Flashcards from './Flashcards';

const ILOJsonBuilder = () => {
    const [selectedForm, setSelectedForm] = useState('');

    const loadForm = () => {
        switch (selectedForm) {
            case 'multipleChoice':
                return <MultipleChoice />;
            case 'interactiveImages':
                return <InteractiveImages />;
            case 'flashcards':
                return <Flashcards />;
            default:
                return null;
        }
    };

    return (
        <div className="ilo-json-builder">
            <h1>ILO JSON Builder</h1>
            <div className="form-selection">
                <select className='form-select' value={selectedForm} onChange={(e) => setSelectedForm(e.target.value)}>
                    <option value="">Select a form</option>
                    <option value="multipleChoice">Multiple Choice</option>
                    <option value="interactiveImages">Interactive Images</option>
                    <option value="flashcards">Flashcards</option>
                </select>
            </div>
            {loadForm()}
        </div>
    );
};

export default ILOJsonBuilder;
