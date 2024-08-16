import React, { useState, useContext } from 'react';
import { AppContext } from './Provider';
import InputComponent from '../utils/InputComponent';
import CheckboxComponent from '../utils/CheckboxComponent';
import { jsonDownload } from '../utils/jsonDownload';
import Preview from '../utils/Preview';
import Dropdown from '../utils/DropDown';
import { departmentOptions } from '../utils/constant';


const MultipleChoice = () => {
    const context = useContext(AppContext);
    const { showPreview, showToast } = context
    const [formData, setFormData] = useState({
        department: '',
        centerAnswers: false,
        imgBasePath: './assets/',
    });
    const [questions, setQuestions] = useState([]);
    const finalFormData = { ...formData, questions: [...questions] };

    const handleQuestionChange = (index, key, value, parentProp) => {
        const updatedQuestions = [...questions];
        if (parentProp) {
            updatedQuestions[index][parentProp][key] = value;
            console.log(updatedQuestions)
            setQuestions(updatedQuestions);
        }
        else {
            updatedQuestions[index][key] = value;
            setQuestions(updatedQuestions);
        }

    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData({ ...formData, [name]: checked });
    };

    const handleAddQuestion = () => {
        setQuestions([
            ...questions,
            {
                randomizeChoices: true,
                choiceLabels: '',
                prompt: {
                    question: '',
                    ariaLabel: ''
                },
                choices: [
                    { answer: "", correct: true, feedback: "" },
                    { answer: "", correct: true, feedback: "" },
                    { answer: "", correct: true, feedback: "" },
                    { answer: "", correct: true, feedback: "" }
                ]
            }
        ]);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        jsonDownload(finalFormData);
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className='form'>
                <h2>Multiple-choice JSON Generator</h2>
                <Dropdown value={formData.department} onChange={handleInputChange} options={departmentOptions} />
                <CheckboxComponent label="Center Answers" name="centerAnswers" checked={formData.centerAnswers} onChange={handleCheckboxChange} />
                <InputComponent label="Image Base Path" name="imgBasePath" value={formData.imgBasePath} onChange={handleInputChange} />
                <h3>Questions:</h3>
                {questions?.map((question, index) => (
                    <div key={index}>
                        <CheckboxComponent label="Randomize Choices" name="randomizeChoices" checked={questions[index].randomizeChoices} onChange={(e) => handleQuestionChange(index, 'randomizeChoices', e.target.checked)} />
                        <InputComponent label="Choice Labels" name="choiceLabels" value={questions[index].choiceLabels} onChange={(e) => handleQuestionChange(index, 'choiceLabels', e.target.value)} />
                        <InputComponent
                            type="text"
                            name="question"
                            label={"question " + (index + 1)}
                            value={questions[index].prompt.question}
                            onChange={(e) => handleQuestionChange(index, 'question', e.target.value, 'prompt')}
                            className="form-input"
                        />
                        <InputComponent
                            type="text"
                            name="ariaLabel"
                            label="Aria Label"
                            value={questions[index].prompt.ariaLabel}
                            onChange={(e) => handleQuestionChange(index, 'ariaLabel', e.target.value, 'prompt')}
                            className="form-input" />
                    </div>
                ))}
                <div className="form-buttons">
                    <button type="button" onClick={handleAddQuestion} className="add-question-btn">Add Question</button>
                    <Preview formData={finalFormData} />
                    <button type="submit" className="submit-btn">Generate JSON</button>
                </div>
            </form>
        </div>
    );
};

export default MultipleChoice;
