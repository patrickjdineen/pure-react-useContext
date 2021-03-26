import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const UserContext = React.createContext();

const UserAvatar = ({  size }) => (
        <UserContext.Consumer>
            {user => (
                <img
                    className={`user-avater ${size || ''}`}
                    alt='user avatar'
                    src={user.avatar}
                    />
                )}
        </UserContext.Consumer>
);

const UserStats = () =>(
    <UserContext.Consumer>
        {user =>(
    <div classNAme='user-stats'>
        <div>
            <UserAvatar user={user} />
            {user.name}
        </div>
        <div className='stats'>
            <div>{user.followers} Followers</div>
            <div>{user.following}</div>
        </div>
    </div>
    )}
    </UserContext.Consumer>
);

const Nav = () => (
    <div className='nav'>
        <UserAvatar size='small' />
    </div>
);

const Content = () => (
    <div className='content'>main content here</div>
);

const Sidebar = () =>(
    <div className='sidebar'>
        <UserStats />
    </div>
);

const Body = ( ) => (
    <div className='body'>
        <Sidebar />
        <Content />
    </div>
);

class App extends React.Component{
    state = {
        user: {
            avatar: 'https://www.gravatar.com/avatar/5c3dd2d257ff0e14dbd2583485dbd44b',
            name:'Dave',
            followers:1234,
            following:123
        }
    };

    render(){
        const {user} = this.state;
        return(
            <div className='app'>
                <UserContext.Provider value={this.state.user}>      
                    <Nav />
                    <Body />
                </UserContext.Provider>    
            </div>
        );
    }
}

ReactDOM.render(
    
    <App />
    ,
    document.querySelector('#root')
);