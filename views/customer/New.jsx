const React = require('react');
const DefaultLayout = require('../Default.jsx');

class New extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <form action='/' method='POST'>
                    <fieldset>
                    <legend>New Customer Information</legend>
                    <label>First Name: <input type='text' name='first_name' placeholder='Enter Customer First Name'/></label>
                    </fieldset>
                </form>
            </DefaultLayout>
        )
    }
}