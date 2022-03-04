const React = require('react');
const DefaultLayout = require('../Default.jsx')

class Index extends React.Component {
    render() {
        const { users } = this.props;
        return (
            <DefaultLayout>
            <div>
                {
                users.map((user) => (
                    <article>
                        <a href={`/database/${user._id }`}>
                            <h2>{user.first_name} - Interested in - {user.interests.join(', ')}</h2>
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