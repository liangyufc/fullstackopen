const CountryData = ({ country }) => {
    return (
        <>
            <h2>{country.name.common}</h2>
            <p>capital: {country.capital}</p>
            <p>area: {country.area}</p>
            <h3>languages:</h3>
            <ul>
                {Object.values(country.languages).map((lang, i) => (
                    <li key={i}>{lang}</li>
                ))}
            </ul>
            <img src={country.flags.png} width="200" alt={`Flag of ${country.name.common}`}/>
    </>
    )
}

export default CountryData