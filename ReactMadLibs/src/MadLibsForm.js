import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import './MadLibsForm.css';

function MadLibsForm({createNewStory}) {
    const [formData, setFormData] = useState({noun:"", noun2:"", adjective:"", color:""})

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const gatherInput = e => {
        e.preventDefault();
        createNewStory({ ...formData, id: uuid() });
        setFormData({noun:"", noun2:"", adjective:"", color:""});
    };

    return (
        <form className="formArea" onSubmit={gatherInput}>
            <div>
                <label htmlFor="noun">Noun </label>
                <input
                    onChange={handleChange}
                    type="text"
                    name="noun"
                    value={formData.noun}
                    id="noun"
                />
            </div>
            <div>
                <label htmlFor="noun2">Noun2 </label>
                <input
                    onChange={handleChange}
                    type="text"
                    name="noun2"
                    value={formData.noun2}
                    id="noun2"
                />
            </div>
            <div>
                <label htmlFor="adjective">Adjective </label>
                <input
                    onChange={handleChange}
                    type="text"
                    name="adjective"
                    value={formData.adjective}
                    id="adjective"
                />
            </div>
            <div>
                <label htmlFor="color">Color </label>
                <input
                    onChange={handleChange}
                    type="text"
                    name="color"
                    value={formData.color}
                    id="color"
                />
            </div>
            <button>Get Story</button>
        </form>
    )
}

export default MadLibsForm;