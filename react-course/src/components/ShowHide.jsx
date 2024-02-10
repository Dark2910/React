import {useState} from "react";

const ShowHide = () => {

    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    };

    return <div>
        <button onClick={handleClick}>{`${show? 'hide' : 'show'} text`}</button>
        {show && <h2>Hello</h2>}
    </div>
};

export default ShowHide;