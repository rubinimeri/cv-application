import VisibilityButton from "../VisibilityButton"

function SummaryForm({ summary, setSummary, isShown, toggleShow }) {
    function handleSummaryChange(e) {
        setSummary(e.target.value)
    }
    return(
        <div action="" className="summary-form">
            <div>
                <h2>Summary</h2>
                <VisibilityButton
                 isShown={isShown}
                 setToggle={toggleShow}
                 showIndex={1} />
            </div>
            {isShown && <textarea 
             name="summary" 
             id="summary" 
             value={summary} 
             onChange={handleSummaryChange}>
            {summary}
             </textarea>}
        </div>
    )
}

export default SummaryForm