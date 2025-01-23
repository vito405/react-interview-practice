import { useEffect, useState } from "react"
import './sroll.css'


export default function Scroll({ url }) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [scrollPer, setScrollPer] = useState(0);

    async function fetchData(getUrl) {
        try {
            setLoading(true)
            const response = await fetch(getUrl)
            const data = await response.json();


            if (data && data.products && data.products.length > 0) {
                setData(data.products)
                setLoading(false)
            }

        } catch (e) {
            setErrorMsg(e.message)
            console.log(e, ": error Message");

        }
    }

    useEffect(() => {
        fetchData(url)
    }, [url])

    function handleScroll() {
        

        const howMuchScrolled =
            document.body.scrollTop
            ||
            document.documentElement.scrollTop

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight


        setScrollPer((howMuchScrolled / height) * 100)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', () => { })
        }
    }, [])
    

    if(errorMsg){
        return <div>Error ! {errorMsg}</div>
    }

    if(loading){
        return <div>Loading data ! Please Wait</div>
    }


    return (
        <div>
            <div className="top-container">
                <h1>Custom Scroll Indicator</h1>
                <div className="scroll-progress-tracking-container">
                    <div
                        className="current-progress-bar"
                        style={{ width: `${scrollPer}%` }}
                    ></div>
                </div>
            </div>
            <div className="data-container">
                {
                    data && data.length > 0 ?
                        data.map(dataItem => <p>{dataItem.title}</p>)
                        : null
                }
            </div>
        </div>
    )
}