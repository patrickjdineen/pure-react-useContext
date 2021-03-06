import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const UserAvatar = ({ user, size }) => (
    <img
        className={`user-avater ${size || ''}`}
        alt='user avatar'
        src={user.avatar}
        />
);

const UserStats = ({ user }) =>(
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
);

const Nav = ({ user }) => (
    <div className='nav'>
        <UserAvatar user={user} size='small' />
    </div>
);

const Content = () => (
    <div className='content'>main content here</div>
);

const SideBar = ({ user }) =>(
    <div className='sidebar'>
        <UserStats user={user} />
    </div>
);

const Body = ({ user }) => (
    <div className='body'>
        <SideBar user={user} />
        <Content user={user} />
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
                <Nav user={user} />
                <Body user={user} />
            </div>
        );
    }
}

ReactDOM.render(
    
    <App />
    ,
    document.querySelector('#root')
);