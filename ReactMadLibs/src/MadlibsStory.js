import React from "react";

function MadlibsStory({ noun, noun2, adjective, color }) {
    return (
        <div>
            <div>{`There was a ${color} ${noun} who loved ${adjective} ${noun2}`}</div>
        </div>
    )
}

export default MadlibsStory;