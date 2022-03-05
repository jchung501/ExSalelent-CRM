const React = require('react');
const DefaultLayout = require('../Default.jsx');

class Show extends React.Component { 
    render() {
        const {customer} = this.props;
        return (
            <DefaultLayout>
                <div>
                    <article>
                        <h1>Customer Information</h1>
                        <h2>Name: {`${customer.first_name} ${customer.last_name}`}</h2>
                        <h3>Phone Number: {`${customer.phone_number}`}</h3>
                        <h3>City: {`${customer.city}`}</h3>
                        <img src={`${customer.image}`}/>
                        <h3>Interested In: {`${customer.interests.join(',')}`}</h3>
                        <a href={`/${customer._id}/edit`}><button>Edit Information</button></a>
                        <form action={`/${customer._id}?_method=DLETE`} method='POST'>
                            <input type='submit' value='Delete'/>
                        </form>
                    </article>
                </div>
            </DefaultLayout>
        );
    };
};

module.exports = Show;