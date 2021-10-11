import { BulbFilled, NodeExpandOutlined } from '@ant-design/icons';
import {useState} from 'react'
import { ChatEngine, ChatFeed } from 'react-chat-engine';
import './App.css'
import ChadFeed  from './components/ChadFeed';
import LoginForm from './components/LoginForm';

const App = () => {

    const [isLogged, setIsLogged] = useState(true);
     const logout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        setIsLogged(false);
    }

    if(!localStorage.getItem('username') || !isLogged) return <LoginForm />
    return (
        <>
            <div>
                <button
                style={{
                    margin: '4px',
                    backgroundColor: "#7554a0",
                    padding: "5px",
                    color:'white',
                    borderRadius: '4px',
                    borderColor: 'transparent'
                }}
                 type="button" onClick={logout}>Log Out</button>
            </div>
            <ChatEngine
                    height="100vh"
                    projectID="fd93f42a-d17a-473a-a348-6311ca4e4919"
                    userName={localStorage.getItem('username')}
                    userSecret={localStorage.getItem('password')}
                    renderChatFeed={(chatAppProps) => <ChadFeed {...chatAppProps} />}
                /> 
            </>
    )
}


export default App
