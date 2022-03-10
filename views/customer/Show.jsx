const React = require('react');
const DefaultLayout = require('../Default.jsx');

const photoSize = {
    height: '250px',
    width: '200px',
}

class Show extends React.Component { 
    render() {
        const {customer} = this.props;
        return (
            <DefaultLayout>
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
                        <h4>Interested In - {`${customer.interests.join(', ')}`}</h4>
                        <a href={`/${customer._id}/edit`}><button>Edit Information</button></a>
                        <form action={`/${customer._id}?_method=DELETE`} method='POST'>
                            <input type='submit' value='Delete'/>
                        </form>
                    </article>
                </div>
            </DefaultLayout>
        );
    };
};

module.exports = Show;