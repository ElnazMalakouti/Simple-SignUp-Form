import './App.css';
import Modal from './Components/Modal';
import SignUpForm from './Components/SignUpForm';
import { useState } from "react"

function App() {

  const [emailInputValue, setEmailInputValue] = useState('')

  const [showModal, setShowModal] = useState(false)


  return (
    <>
      <div className='w-full h-full md:bg-[#36384D] flex justify-center items-center'>
        <SignUpForm
          emailInputValue={emailInputValue}
          setEmailInputValue={setEmailInputValue}
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <Modal
          emailInputValue={emailInputValue}
          setEmailInputValue={setEmailInputValue}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </div>
    </>
  );
}

export default App;
