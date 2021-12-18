import React from 'react'
import './SeachBox.css'

export const SearchBox = (props) => {
    const { placeholder, handleChange } = props
    return (
        <div>
            <input 
                className='search'
                type='search' 
                placeholder={placeholder}
                onChange={handleChange} 
            />
        </div>
    )
}
