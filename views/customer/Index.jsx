const React = require('react');
const DefaultLayout2 = require('../Default2.jsx')



class Index extends React.Component {
    render() {
        const { customers } = this.props;
        return (
            <DefaultLayout2>
            <div>
                <h1 className='text-center'><u>Member Index</u></h1>
                { 
                customers.map((customer) => (
                    <article>
                        <a href={`/customers/${customer._id}`}>
                            <h2>{customer.first_name} {customer.last_name}</h2>
                        </a>
                    </article>
                ))
                }
            </div>
            </DefaultLayout2>
        );
    };
};

module.exports = Index;