function VisibilityButton({ isShown }) {
    return(
        <>
            {isShown ? 
                <button>
                    <i className="fa-solid fa-angle-up"></i>
                </button> :
                <button>
                    <i className="fa-solid fa-angle-down"></i>
                </button>
            }
        </>
    )
}

export default VisibilityButton