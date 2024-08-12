import InputGroup from "../../InputGroup"

function SummaryForm({ summary, setSummary }) {
    function handleSummaryChange(e) {
        setSummary(e.target.value)
    }
    return(
        <form action="" className="summary-form">
            <h2>Summary</h2>
            <InputGroup
             type="textarea"
             name="summary"
             value={summary}
             changeHandler={handleSummaryChange}
             id="summary" />
        </form>
    )
}

export default SummaryForm