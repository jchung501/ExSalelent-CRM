const React = require('react');
const DefaultLayout2 = require('../Default2.jsx')

class Edit extends React.Component {
    render() {
        const { customer } = this.props;
        return (
            <DefaultLayout2>
                <html>
                    <form action={`/customers/${customer._id}?_method=PUT`} method="POST">
                        <fieldset>
                            <legend>Edit {customer.first_name} {customer.last_name}</legend>
                            <label>First Name: <input type='text' name='first_name' placeholder='First Name' defaultValue={customer.first_name}/></label>
                            <label>Last Name: <input type='text' name='last_name' placeholder='Last Name' defaultValue={customer.last_name}/></label>
                            <label>Phone Number: <input type='text' name='phone_number' placeholder='Phone Number' defaultValue={customer.phone_number}/></label>
                            <label>Email: <input type='text' name='email' placeholder='Email address' defaultValue={customer.email}/></label>
                            <label>City: <input type='text' name='city' placeholder='City of Residence' defaultValue={customer.city}/></label>
                            <label>State: <input type='text' name='state' placeholder='State of Residence' defaultValue={customer.state}/></label>
                            <label>Image: <input type='url' name='image' placeholder='Image URL' defaultValue={customer.image}/></label>
                            <label>Interested In: <input type='text' name='interests' placeholder='Please separate interest with commas' defaultValue={customer.interests}/></label>
                        </fieldset>
                        <input type='submit' value='Submit Update'/>
                    </form>
                </html>
            </DefaultLayout2>
        )
    }
}

module.exports = Edit;