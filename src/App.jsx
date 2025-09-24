const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
}

  const Header = ({course}) => {
    return (
    <>
      <h1>{course.name}</h1>
        <p>
          {course.parts[0].name} {course.parts[0].exercises}
        </p>
    </>
    )
  }

  const Content = ({course}) => {

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
        <Part name = { course.parts[0].name } number = { course.parts[0].exercises }/>
        <Part name = { course.parts[1].name } number = { course.parts[1].exercises }/>
        <Part name = { course.parts[2].name } number = { course.parts[2].exercises }/>
      </>
    )
  }

  const Total = ({course}) => {
    return (
      <>
        <p>
        {course.parts[2].name} {course.parts[2].exercises}
        </p>
        <p>Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
      </>
    )
  }
  
  return (
    <div>
      <Header course={course} />
      <Content course={course}/>
      <Total course={course} />
    </div>
  )
}

export default App