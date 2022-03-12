const React = require('react');
const DefaultLayout2 = require('../Default2.jsx');

class New extends React.Component {
    render() {
        return (
            <DefaultLayout2>
                <form action='/customers' method='POST'>
                    <fieldset className='row gx-5'>
                    <legend>New Customer Information</legend>
                    <div className='col-md-6'>
                    <label class='form-label'>First Name: <input type='text' name='first_name' placeholder='Enter Customer First Name'/></label>
                    </div>
                    <div className='col-md-6'>
                    <label className='form-label'>Last Name: <input type='text' name='last_name' placeholder='Enter Customer Last Name'/></label>
                    </div>
                    <div className='col-md-6'>
                    <label clasName='form-label'>Phone Number: <input type='text' name='phone_number' placeholder='(123) 456-7890'/></label>
                    </div>
                    <div className='col-md-6'>
                    <label className='form-label'>Email: <input type='text' name='email' placeholder='Enter Customer Email Address'/></label>
                    </div>
                    <div className='col-md-6'>
                    <label className='form-label'>City: <input type='text' name='city' placeholder='City of Residence'/></label>
                    </div>
                    <div className='col-md-6'>
                    <label className='form-label'>State: <input type='text' name='state' placeholder='State of Residence'/></label>
                    </div>
                    <div className='col-md-6'>
                    <label className='form-label'>Image: <input type='url' name='image' placeholder='Customer Picture'/></label>
                    </div>
                    <div className='col-md-6'>
                    <label className='form-label'>Interested In: <input type='text' name='interests' placeholder='Separate interests with commas'/></label>
                    </div>
                    </fieldset>
                    <div className='text-center'>
                    <button className='btn btn-outline-success btn-lg' type='submit' value='New Customer'>New Customer</button>
                    </div>
                </form>
            </DefaultLayout2>
        );
    };
};

module.exports = New;