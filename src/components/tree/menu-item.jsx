import { useState } from "react";
import MenuList from "./menu-list";
import {FaMinus, FaPlus} from 'react-icons/fa'



export default function MenuItem({ item }) {

    const [displayCurrent, setDisplayCurrent] = useState({})

    function handleToggleChildren(getCurrentId){
        setDisplayCurrent({
            ...displayCurrent,
            [getCurrentId]: !displayCurrent[getCurrentId]
        });
    }
    console.log(displayCurrent);
    

    return <li>
        <div className="menu-item">
            <p>{item.title}</p>
            {
                item && item.children && item.children.length
                    ? <span onClick={() => handleToggleChildren(item.id)}>
                        {
                            displayCurrent[item.id] 
                            ? <FaMinus color="#fff" size={25}/> 
                            : <FaPlus color="#fff" size={25}/>
                        }
                        </span>
                    : null
            }
        </div>
        {
            item && item.children && item.children.length > 0 && displayCurrent[item.id] ?
                <MenuList list={item.children} />
                : null
        }
    </li>
}