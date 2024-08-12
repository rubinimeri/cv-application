function SummaryForm({ summary, setSummary }) {
    function handleSummaryChange(e) {
        setSummary(e.target.value)
    }
    return(
        <form action="" className="summary-form">
            <h2>Summary</h2>
            <textarea 
             name="summary" 
             id="summary" 
             value={summary} 
             onChange={handleSummaryChange}>
            {summary}
             </textarea>
        </form>
    )
}

export default SummaryForm