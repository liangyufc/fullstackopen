const Header = ({ name }) => <h3>{name}</h3>

const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Total = ({ parts }) => {
    const sum = parts.reduce((pre, cur) => pre + cur.exercises, 0)
    return (
        <b>total of {sum} exercises</b>
    )
}

const Content = ({ parts }) => <>{parts.map((part) => <Part key={part.id} part={part}/>)}</>

const Course = ({ course }) => {
    return (
        <>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts}/>
        </>
    )
}

export default Course