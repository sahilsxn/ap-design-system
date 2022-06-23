import ButtonContainer from './Components/Buttons/ButtonContainer'
import InputContainer from './Components/Input/InputContainer'
import GreysContainer from './Components/Greys/GreysContainer'

const App = () => {

  return (
    <div className='flex flex-row'>
      <ButtonContainer/>
      <InputContainer/>
      <GreysContainer/>
    </div>
  )
}

export default App