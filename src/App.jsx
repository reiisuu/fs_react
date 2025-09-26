import { useState } from 'react'

const Header = (props) => <h1>{props.text}</h1>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Display = ({ text, number }) => <p>{text} {number}</p>



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGood = () => {
    const updatedGood = good + 1 // since react is async, the old is used if i don't assign it to a variable containing the updated value.
    const updatedAll = all + 1

    console.log('value of updated good: ', updatedGood)
    console.log('value of updated neutral: ', neutral)
    console.log('value of updated bad: ', bad)
    console.log('value of updated all: ', updatedAll)

    const newAverage = (updatedGood - bad) / updatedAll
    const newPositive = updatedGood / updatedAll

    setGood(updatedGood)
    setAll(updatedAll)
    setAverage(newAverage)
    setPositive(newPositive)

    console.log('new average: ', newAverage)
    console.log('new positive: ', newPositive)
  }

  const handleNeutral = () => {
    const updatedNeutral = neutral + 1
    const updatedAll = all + 1

    console.log('value of updated good: ', good)
    console.log('value of updated neutral: ', updatedNeutral)
    console.log('value of updated bad: ', bad)
    console.log('value of updated all: ', updatedAll)

    const newAverage = (good - bad) / updatedAll
    const newPositive = good / updatedAll

    setNeutral(updatedNeutral)
    setAll(updatedAll)
    setAverage(newAverage)
    setPositive(newPositive)

    console.log('new average: ', newAverage)
    console.log('new positive: ', newPositive)
  }

  const handleBad = () => {
    const updatedBad = bad + 1
    const updatedAll = all + 1

    console.log('value of updated good: ', good)
    console.log('value of updated neutral: ', neutral)
    console.log('value of updated bad: ', updatedBad)
    console.log('value of updated all: ', updatedAll)

    const newAverage = (good - updatedBad) / updatedAll
    const newPositive = good / updatedAll

    setBad(updatedBad)
    setAll(updatedAll)
    setAverage(newAverage)
    setPositive(newPositive)

    console.log('new average: ', newAverage)
    console.log('new positive: ', newPositive)
  }

  return (
    <div>
      <Header text = 'give feedback' />

      <Button onClick= {handleGood} text = 'good'/>
      <Button onClick= {handleNeutral} text = 'neutral'/>
      <Button onClick= {handleBad} text = 'bad'/>

      <Header text = 'statistics' />

      <Display text = 'good' number = {good} />
      <Display text = 'neutral' number = {neutral} />
      <Display text = 'bad' number = {bad} />

      <Display text = 'all' number = {all} />
      <Display text = 'average' number = {average} />
      <Display text = 'positive' number = {positive}  />

      

      
    </div>
  )
}

export default App