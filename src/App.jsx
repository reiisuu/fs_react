const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },

    {
      name: 'Using props to pass data',
      exercises: 7
    },

    {
      name: 'State of a component',
      exercises: 14
    }

  ]
  const Header = ({course}) => {
    return (
    <>
      <h1>{course}</h1>
        <p>
          {parts[0].name} {parts[0].exercises}
        </p>
    </>
    )
  }

  const Content = ({parts}) => {

    const Part = (props) => {
      return (
      <>
        <p>
          { props.name } { props.exercises }
        </p>
      </>
      )
    }
    return (
      <>
        <Part name = { parts[0].name } number = { parts[0].exercises }/>
        <Part name = { parts[1].name } number = { parts[1].exercises }/>
        <Part name = { parts[2].name } number = { parts[2].exercises }/>
      </>
    )
  }

  const Total = ({parts}) => {
    return (
      <>
        <p>
        {parts[2].name} {parts[2].exercises}
        </p>
        <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
      </>
    )
  }
  
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App