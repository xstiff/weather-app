import { useState } from "react";
import "./SearchInput.scss";



export const SearchInput = () => {
    const [active, setActive] = useState(false)
    const SearchFunction = () => {

    }
    const handleFocus = () => {
        setActive(true);
    };

    const handleBlur = () => {
        setActive(false);
    };

    return(

        <>
        
            <div className="SearchBox">
                
                <div className="SearchBox-Input-Container">
                <input 
                className="SearchBox-Input" 
                type="text" 
                onChange={SearchFunction} 
                onFocus={handleFocus} 
                onBlur={handleBlur} 
                placeholder="Search for city..."
            />
                </div>
                
                <div className="SearchBox-Results-Container">
                    {
                        active ? (
                            <>
                                <a>Poznań, PL</a>
                                <a>Poznań, PL</a>
                                <a>Poznań, PL</a>
                                <a>Poznań, PL</a>
                            </>
                        ) : (<></>)
                    }
                </div>

            </div>
        </>

    )
}