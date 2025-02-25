import React from 'react'

export default function SideBar(props) {
    const { ToggleModal, data } = props
  return (
    <div className='sidebar'>
        <div onClick={ToggleModal}
        className="bgOverlay"></div>
        <div className="sidebarContents">
            <h2>{data?.title}</h2>
            <div className='descriptionContainer'>
                <p className='descriptionTitle'>{data?.date}</p>
                <p>{data?.explanation}</p>
            </div>
            <button onClick={ToggleModal}>
                <i className="fa-solid fa-right-long"></i>
            </button>
        </div>
    </div>
    )
}
