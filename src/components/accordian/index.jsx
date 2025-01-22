import { useState } from "react"
import data from "./data.js"
import './style.css'

export default function Accordian() {

    const [selected, setSelected] = useState(null);
    const [enableMuti, setEnableMuti] = useState(false)
    const [multiple, setMultiple] = useState([])

    const handleSingleSel = (getCurrentId) => {
        setSelected(getCurrentId === selected ? null : getCurrentId)

    }

    function handleMultiSelection(getCurrentId) {
        let cpyMutiple = [...multiple];
        const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId)

        console.log(findIndexOfCurrentId);
        if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId)
        else cpyMutiple.splice(findIndexOfCurrentId, 1)

        setMultiple(cpyMutiple)
    }

    console.log(selected, multiple);

    return (
        <div className="wrapper">
            <button onClick={() => setEnableMuti(!enableMuti)}>
                Enable Multi Selection</button>
            <div className="accordian">
                {data && data.length > 0 ?
                    data.map(dataItem => <div key={dataItem.id} className="item">
                        <div onClick={
                            enableMuti
                                ? () => handleMultiSelection(dataItem.id)
                                : () => handleSingleSel(dataItem.id)}
                            className="title">
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ?
                                <div className="content-accordian">{dataItem.answer}</div>
                                : null
                        }
                    </div>
                    )
                    : <div>No data Found</div>}
            </div>
        </div>
    )

}