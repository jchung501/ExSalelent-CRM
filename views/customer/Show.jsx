const React = require('react');
const DefaultLayout2 = require('../Default2.jsx');

const photoSize = {
    height: '250px',
    width: '200px',
}

class Show extends React.Component { 
    render() {
        const {customer} = this.props;
        return (
            <DefaultLayout2>
                <div className='text-center'>
                    <article>
                        <h2>Customer Information</h2>
                        <img style={photoSize} src={`${customer.image}`}/>
                        <hr/>
                        <h2>Name - {`${customer.first_name} ${customer.last_name}`}</h2>
                        <h4>Phone Number - <a href={`tel:${customer.phone_number}`}>{customer.phone_number}</a></h4>
                        <h4>Email - <a href={`mailto:${customer.email}`}>{customer.email}</a></h4>
                        <h4>City - {`${customer.city}`}</h4>
                        <h4>State - {`${customer.state}`}</h4>
                        <h4>Interested In - {`${customer.interests}`}</h4>
                        <a href={`/customers/${customer._id}/edit`}><button>Edit Information</button></a>
                        <form action={`/customers/${customer._id}?_method=DELETE`} method='POST'>
                            <button className='btn btn-outline-danger btn-lg' type='submit' value='Delete'>Delete</button>
                        </form>
                    </article>
                </div>
            </DefaultLayout2>
        );
    };
};

module.exports = Show;