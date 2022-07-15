import ButtonContainer from './Components/Buttons/ButtonContainer'
import InputContainer from './Components/Input/InputContainer'
import GreysContainer from './Components/Greys/GreysContainer'

const App = () => {

  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      <h1 className='text-3xl font-bold m-4 mb-0'>AP Design System v1.0</h1>
      <div className='flex flex-row'>
        <ButtonContainer/>
        <InputContainer/>
        <GreysContainer/>
      </div>
    </div>
  )
}

export default App