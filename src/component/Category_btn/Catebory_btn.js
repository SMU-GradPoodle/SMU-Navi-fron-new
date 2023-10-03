import React from 'react';
import './Catebory_btn.css';

function Catebory_btn(props) {
    const { isSelected, handleClick, elementIndex } = props;
    console.log(isSelected, handleClick, elementIndex)
    return (
        <div className="Category_Button_List"
             onClick={() => handleClick(elementIndex)}
             style={{ backgroundColor: isSelected ? 'white' : props.backColor, color: isSelected ? props.backColor : 'white' }}>
            {props.content}
        </div>
    );
}

export default Catebory_btn;