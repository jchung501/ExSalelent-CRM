const React = require('react');
const DefaultLayout = require('../Default.jsx');

class Results extends React.Component { 
    render() {
        const {customers} = this.props;
        return (
            <DefaultLayout>
                <div>
                    <article>
                        <h2>Search Results</h2>
                        {
                        customers.map((customer) => (
                        <article>
                        <a href={`/customers/${customer._id}`}>
                            <h2>{customer.first_name} {customer.last_name}</h2>
                        </a>
                        </article>
                    ))
                }
                    </article>
                </div>
            </DefaultLayout>
        );
    };
};

module.exports = Results;