import React, { useState } from "react";
import MadLibsForm from "./MadLibsForm";
import MadlibsStory from "./MadlibsStory";


function MadLibs() {
    const [item, setItem] = useState({});

    const addItem = function (item) {
        setItem(item);
    };

    const MadLibsComponents =
        <MadlibsStory noun={item.noun} noun2={item.noun2} adjective={item.adjective} color={item.color} />
     ;

    return (
        <div>
            <MadLibsForm createNewStory={addItem} />
            {MadLibsComponents}
        </div>
    )
};
export default MadLibs;