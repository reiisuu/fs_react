const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = () => {
    return (
    <>
      <h1>{course}</h1>
        <p>
          {part1} {exercises1}
        </p>
    </>
    )
  }

  const Content = () => {

    const Part = (props) => {
      <>
        <p>
          { props.name } { props.number }
        </p>
      </>
    }
    return (
      <>
        <Part name = { part1 } number = { exercises1 }/>
        <Part name = { part2 } number = { exercises2 }/>
        <Part name = { part3 } number = { exercises3 }/>
      </>
    )
  }

  const Total = () => {
    return (
      <>
        <p>
        {part3} {exercises3}
        </p>
        <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
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