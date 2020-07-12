import React, { useReducer } from 'react'

export default function ColorPicker() {

    const createRandomHSL = () => {
        return {
            hue: Math.floor(Math.random() * 255) + 1,
            saturation: Math.floor(Math.random() * 100) + 1,
            lightness: Math.floor(Math.random() * 100) + 1,
        }
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'adjust':
                return {
                    ...state,
                    ...action.payload,
                }
            case 'randomize':
                return createRandomHSL()
        }
    }

    const [ state, dispatch ] = useReducer(
        reducer,
        createRandomHSL(),
    )

    const handleSlider = ({target: { name, value }}) => {
        dispatch({
            type: 'adjust',
            payload: { [ name ]: value }
        })
    }

    const handlePress = () => {
        dispatch({type: 'randomize'})
    }

    const backgroundColor = `hsl(${state.hue}, ${state.saturation}%, ${state.lightness}%)`

    return (
        <section className="color-picker">
            <div className="color-picker-preview" style={{
                backgroundColor }}>
                <span className="color-picker-text">
                    {backgroundColor}
                </span>
            </div>
            <fieldset className="color-picker-inputs">
                <label className="color-label" htmlFor="hue">H</label>
                <input className="color-input" name="hue" type="range" min="0" max="360" value={state.hue} onChange={handleSlider} />
                <label className="color-label" htmlFor="saturation">S</label>
                <input className="color-input" name="saturation" type="range" min="0" max="100" value={state.saturation} onChange={handleSlider} />
                <label className="color-label" htmlFor="lightness">L</label>
                <input className="color-input" name="lightness" type="range" min="0" max="100" value={state.lightness} onChange={handleSlider} />
            </fieldset>
            <button className="color-button" type="button" onClick={handlePress}>
                Randomize!
            </button>
        </section>
    )
}
