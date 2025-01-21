import { useEffect, useState } from "react"



export default function RandomColor() {
    const [typeOfColor, SetTypeOfColor] = useState('hex')
    const [color, setColor] = useState('#000000')

    function randomNum(length) {
        return Math.floor(Math.random() * length)
    }

    function handleCreateRandomHex() {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
        let hexColor = '#';

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomNum(hex.length)]
        }
        setColor(hexColor)
    }

    function handleCreateRandomRGB() {
        const r = randomNum(256)
        const g = randomNum(256)
        const b = randomNum(256)

        setColor(`rgb(${r}, ${g}, ${b})`)
    }

    useEffect(() => {
        if (typeOfColor === "rgb") handleCreateRandomRGB();
        else handleCreateRandomHex()
    }, [typeOfColor])

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            background: color
        }}>
            <button onClick={() => SetTypeOfColor('hex')}>Create HEX Color</button>
            <button onClick={() => SetTypeOfColor('rgb')}>Create RGB Color</button>
            <button onClick={typeOfColor === 'hex' ? handleCreateRandomHex : handleCreateRandomRGB}>Generate random Color</button>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff',
                    fontSize: '60px',
                    marginTop: '10px',
                    flexDirection: 'column'

                }}>
                <h3>{typeOfColor === 'rgb' ? 'RGB Color: ' : 'HEX Color: '}</h3>
                <h2>{color}</h2>
            </div>
        </div>
    )
}