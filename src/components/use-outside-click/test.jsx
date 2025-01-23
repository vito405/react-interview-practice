import { useState, useRef } from "react"
import useOutsideClick from ".";



export default function UseOnClickOutsideTest() {
    const [showContent, setShowContent] = useState(false)
    const ref = useRef();
    useOutsideClick(ref, () => setShowContent(false))

    return <div>
        {
            showContent ? <div ref={ref}>
                <h1>this is a random Content</h1>
                <p>Please click outside to close this. 
                It won't close if you click inside the content</p>
            </div> : <button onClick={() => setShowContent(true)}>Show Content</button>
        }
    </div>
}