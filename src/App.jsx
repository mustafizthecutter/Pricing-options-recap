// import DaisyNav from './Components/DaisyNav/DaisyNav'
// import NavBar from './Components/NavBar/NavBar'
// import PriceOptions from './Components/PriceOptions/PriceOptions'
// import SimpleForm from './Components/SimpleForm/SimpleForm'
// import RefForm from "./Components/RefForm/RefForm"
// import HookForm from "./Components/HookForm/HookForm"
import ReusableForm from "./Components/ReusableForm/ReusableForm"

function App() {
  const handleSignUpChange = (data) => {
    console.log('sign up form', data);
  }
  const handleUpdateProfileChange = (data) => {
    console.log('update form', data);
  }

  return (

    <>

      {/* <h1>Vite + React</h1> */}
      {/* <NavBar></NavBar>
      <PriceOptions></PriceOptions> */}
      {/* <DaisyNav></DaisyNav> */}
      {/* <SimpleForm></SimpleForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm handleSubmit={handleSignUpChange} formTitle={'Sign Up'}>
        <div>
          <h2>Good to Sign-Up</h2>
          <p>Please Login to Sign-up!!</p>
        </div>
      </ReusableForm>
      <ReusableForm handleSubmit={handleUpdateProfileChange} formTitle={'Update Profile'} submitBtnText={'Update'}>
        <div>
          <h2>Update Profile</h2>
          <p>Please Keep your Profile Updated!!</p>
        </div>
      </ReusableForm>
    </>
  )
}

export default App
