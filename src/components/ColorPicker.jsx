import React, { useState, useEffect } from 'react'

export default function ColorPicker() {



    const [ colorValue, setColorValue ] = useState({
        hue: 255,
        saturation: 50,
        lightness: 50,
    })

    const handleSlider = ({ target: { value, name }}) => {
        setColorValue({
            ...colorValue,
            [ name ]: value
        })
    }

    const backgroundColor = `hsl(${colorValue.hue}, ${colorValue.saturation}%, ${colorValue.lightness}%)`
    console.log(backgroundColor)

    return (
        <section className="color-picker">
            <div className="color-picker-preview" style={{
                backgroundColor }}>
            </div>
            <fieldset className="color-picker-inputs">
                <label className="color-label" htmlFor="hue">H</label>
                <input className="color-input" name="hue" type="range" min="0" max="360" value={colorValue.hue} onChange={handleSlider} />
                <label className="color-label" htmlFor="saturation">S</label>
                <input className="color-input" name="saturation" type="range" min="0" max="100" value={colorValue.saturation} onChange={handleSlider} />
                <label className="color-label" htmlFor="lightness">L</label>
                <input className="color-input" name="lightness" type="range" min="0" max="100" value={colorValue.lightness} onChange={handleSlider} />
            </fieldset>
        </section>
    )

}
