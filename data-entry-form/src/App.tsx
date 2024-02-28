import { useState } from 'react';
import ButtonList from './Components/ButtonMenu/ButtonsList';
import LoginSignUp from './Components/SignUp/Signup';


const buttonsProperties = [
  { 
    title: 'Home',
    color: 'black',
    width: 60,
    height: 20,
  },
  { 
    title: 'Completed',
    color: 'yellow',
    width: 60,
    height: 20,
  },
  { 
    title: 'Assignments',
    color: 'blue',
    width: 60,
    height: 20,
  },
]



function App() {
  const [clickedButton, setClickedButton] = useState('');

  const elementClick =  (event: React.MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
  
    const leElement: HTMLLIElement = event.currentTarget;
    setClickedButton(leElement.innerText);
  };

  return (
    <div>
      <LoginSignUp/>
      <ButtonList buttons={buttonsProperties} onClickCallback={elementClick}/>
      <h1>
        {
          clickedButton !== "" ? `You have clicked "${clickedButton}"`: "No button clicked yet"
        }
      </h1>
    </div>
  );
}

export default App;
