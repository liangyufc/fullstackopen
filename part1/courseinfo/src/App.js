const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  const content = props.parts.map((item) => <p>{item.name} {item.num}</p>)
  return (
    <div>{content}</div>
  )
}

const Total = (props) => {
  const sum = props.parts.reduce((pre, cur) => pre + cur.num, 0)
  return (
    <p>Number of exercises {sum}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [{name: 'Fundamentals of React', num: 10},
                 {name: 'Using props to pass data', num: 7},
                 {name: 'State of a component', num:14}]

  return (
    <>
     <Header course={course}/>
     <Content parts={parts}/>
     <Total parts={parts}/>
    </>
  )
}

export default App