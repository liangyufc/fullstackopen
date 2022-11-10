const Persons = ({ filter, persons }) => {
    const personsToShow = filter === '' ? persons : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    return (
        <>{personsToShow.map(person => <p key={person.id}>{person.name} {person.number}</p>)}</>
    )
}

export default Persons