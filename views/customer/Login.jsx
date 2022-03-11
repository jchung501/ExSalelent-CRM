const React = require('react');
const DefaultLayout = require('../Default');

class Login extends React.Component {
    render() {
        return (
            <DefaultLayout>
                      <div>
                        <form action="/login" method="post">
                        <fieldset>
                            <legend>User Login</legend>
                            <label
                            >USERNAME: <input type="text" name="username" required/>
                            </label>
                            <label
                            >PASSWORD: <input type="password" name="password" require/>
                            </label>
                            <input type="submit" value="Login"/>
                        </fieldset>
                        </form>
                    </div>
            </DefaultLayout>
        )
    };
};

module.exports = Login;