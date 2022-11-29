const Countries = ({ countriesToShow, handleClick }) => {

    return (
        <>
            {countriesToShow.map((country) => (
                <div key={country.ccn3}>
                    {country.name.common}
                    <button onClick={(event) => handleClick(event)} id={country.name.common}>show</button>
                </div>
            ))}
        </>
    )
}

export default Countries