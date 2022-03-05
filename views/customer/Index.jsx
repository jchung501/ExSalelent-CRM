const React = require('react');
const DefaultLayout = require('../Default.jsx')

class Index extends React.Component {
    render() {
        const { customers } = this.props;
        return (
            <DefaultLayout>
            <div>
                {
                customers.map((customer) => (
                    <article>
                        <a href={`/${customer._id}`}>
                            <h2>{customer.first_name} - Interested in - {customer.interests.join(', ')}</h2>
                        </a>
                    </article>
                ))
                }
            </div>
            </DefaultLayout>
        );
    };
};

module.exports = Index;