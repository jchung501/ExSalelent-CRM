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
                    <label>Last Name: <input type='text' name='last_name' placeholder='Enter Customer Last Name'/></label>
                    <label>Phone Number: <input type='text' name='phone_number' placeholder='(123) 456-7890'/></label>
                    <label>Email: <input type='text' name='email' placeholder='Enter Customer Email Address'/></label>
                    <label>City: <input type='text' name='city' placeholder='City of Residence'/></label>
                    <label>Image: <input type='url' name='image' placeholder='Customer Picture'/></label>
                    <label>Interested In: <input type='text' name='interests' placeholder='What are they interested in?'/></label>
                    </fieldset>
                    <input type='submit' value='New Customer'/>
                </form>
            </DefaultLayout>
        );
    };
};

module.exports = New;