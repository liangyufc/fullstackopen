const Filter = ({ setFilter }) => {
    return (
        <>filter shown with: <input onChange={({target}) => setFilter(target.value)}/></>
    )
}

export default Filter