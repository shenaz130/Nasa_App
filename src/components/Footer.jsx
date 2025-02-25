import React from 'react'

export default function Footer(props) {
  const {showModal, ToggleModal, data } = props
  return (
    <footer>
        <div className='bgGradient'></div>
        <div>
            <h1>Astronomy Picture of the Day</h1>
            <h2>{data?.title}</h2>
        </div>
        <button onClick={ToggleModal}>
            <i className="fa-solid fa-circle-info"></i>
        </button>
       
    </footer>

  )
} 
