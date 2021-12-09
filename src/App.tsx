import './App.css';
import { useEffect, useState } from 'react';
import { Decrement } from './components/Decrement/Decrement';
import { DisplayCount } from './components/Counter/Counter';
import { Increment } from './components/Increment/Increment';
import axios from 'axios';
import { getSessionStorage, gitHubRepos, IUserData, sessionStorageKey, userDataInitialValue } from './utils/Variables';

function App() {
  const [count, setCount] = useState(getSessionStorage || 0);
  const [userData, setUserData] = useState<IUserData>(userDataInitialValue);

  const [showData, setShowData] = useState(false);
  const [error, setError] = useState({ errorMessage: '' });

  const setSessionStorage = sessionStorage.setItem(sessionStorageKey, JSON.stringify(count));

  function onDecrementValue() {
    setCount(count - 1);
    return setSessionStorage;
  }
  function onIncrementValue() {
    setCount(count + 1);
    return setSessionStorage;
  }

  const getUserData = async () => {
    await axios
      .get<IUserData>('https://api.github.com/repos/' + gitHubRepos[count])
      .then((res) => {
        setUserData(res.data);
        setShowData(true);
      })
      .catch((error) => {
        setShowData(false);
        if (error.response.status === 404) {
          setError({ errorMessage: 'Page Not Found' });
        }
        if (error.response.status === 403) {
          setError({ errorMessage: 'API limit exceeded' });
        }
      });
  };

  useEffect(() => {
    getUserData();
  }, [count]);

  return (
    <div className='App'>
      <div className='counterWrapper'>
        <Decrement onDisable={count} onClick={onDecrementValue} />
        <DisplayCount number={count}></DisplayCount>
        <Increment onDisable={count} onClick={onIncrementValue} />
      </div>

      {showData ? (
        <div>
          <p>Full name: {userData.full_name}</p>
          <p>Description: {userData.description}</p>
          <p>Amount of stars: {userData.stargazers_count}</p>
        </div>
      ) : (
        error.errorMessage
      )}
    </div>
  );
}

export default App;
