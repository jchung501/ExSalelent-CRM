const React = require('react');
const DefaultLayout = require('./Default')

class Index extends React.Component {
    render() {
        return(
            <DefaultLayout>
            <div className='container text-center'>
                <h2>To access the software, please login if you're a current user or signup</h2>
                <a href="/user/signup"><button>Signup</button></a>
                <a href="/user/login"><button>Login</button></a>
            </div>
            </DefaultLayout>
        );
    };
};

module.exports = Index;
