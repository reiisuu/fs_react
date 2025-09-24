const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }

  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }

  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const Header = () => {
    return (
    <>
      <h1>{course}</h1>
        <p>
          {part1.name} {part1.exercises}
        </p>
    </>
    )
  }

  const Content = () => {

    const Part = (props) => {
      <>
        <p>
          { props.name } { props.exercises }
        </p>
      </>
    }
    return (
      <>
        <Part name = { part1.name } number = { part1.exercises }/>
        <Part name = { part2.name } number = { part2.exercises }/>
        <Part name = { part3.name } number = { part3.exercises }/>
      </>
    )
  }

  const Total = () => {
    return (
      <>
        <p>
        {part3.name} {part3.exercises}
        </p>
        <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
      </>
    )
  }
  
  return (
    <div>
      <Header />
      <Content />
      <Total />
    </div>
  )
}

export default App