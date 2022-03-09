const React = require('react');
const DefaultLayout = require('../Default.jsx');

class Results extends React.Component { 
    render() {
        const {customer} = this.props;
        return (
            <DefaultLayout>
                <div>
                    <article>
                        <h2>Search Results</h2>
                        <p></p>
                    </article>
                </div>
            </DefaultLayout>
        );
    };
};

module.exports = Results;