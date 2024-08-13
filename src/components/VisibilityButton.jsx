function VisibilityButton({ isShown, setToggle, showIndex }) {
    return(
        <>
            <button className="visibility-button" onClick={() => setToggle(showIndex)} >
                {isShown ? 
                    <i className="fa-solid fa-angle-up"></i> :
                    <i className="fa-solid fa-angle-down"></i>
                }
            </button>
        </>
    )
}

export default VisibilityButton