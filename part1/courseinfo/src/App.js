const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  const content = props.parts.map((item) => <p>{item.name} {item.exercises}</p>)
  return (
    <div>{content}</div>
  )
}

const Total = (props) => {
  const sum = props.parts.reduce((pre, cur) => pre + cur.exercises, 0)
  return (
    <p>Number of exercises {sum}</p>
  )
}

const App = () => {
    const course = {
    name: 'Half Stack application development',
    parts: [{name: 'Fundamentals of React', exercises: 10},
            {name: 'Using props to pass data', exercises: 7},
            {name: 'State of a component', exercises:14}]
  }
  
  return (
    <>
     <Header course={course.name}/>
     <Content parts={course.parts}/>
     <Total parts={course.parts}/>
    </>
  )
}

export default App