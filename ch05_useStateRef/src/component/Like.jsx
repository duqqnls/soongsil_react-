import { useState } from "react";

const Like = () => {
    const [liked, setLiked] = useState(false);

    const handleClick = () => {
        setLiked(!liked);
    };
    
    return (
        <div>
            <h2>{liked ? '좋아요 상태' :  '좋아요 안함'}</h2>
            <button onClick={handleClick}>좋아요</button>
        </div>
    );
};

export default Like;