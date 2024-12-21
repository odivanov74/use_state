import { useState } from "react";
import './Modal.css';

function Modal()
{
    let[open, setOpen] = useState(false);
    let image = "https://plus.unsplash.com/premium_photo-1661964177687-57387c2cbd14?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return(
        <div>
            <img src={image} 
            className="small" 
            onClick={()=> setOpen(true)}
            alt="Картинка"
            style={{display: open ? "none" : "block"}}/>

            {
                open && 
                (
                    <div>
                        <div>
                            <img 
                                src={image}
                                alt=""
                                className="big"
                                onClick={()=>setOpen(false)}/>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Modal;