import react, { useState } from 'react';


const Display = (props) => {
    const {colorList} = props;
    let newList = [...colorList]

    return (
        <div style= {{display:"flex", flexWrap:"wrap"}}>
                {newList.map((list, idx) => (
                <div key={idx}
                    style= {{ height: "200px", width: "200px", backgroundColor: list }}
                >
                </div>
                ))}
        </div>
    );
};
    
export default Display;