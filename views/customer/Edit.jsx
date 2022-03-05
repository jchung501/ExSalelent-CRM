const React = require('react');
const DefaultLayout = require('../Default.jsx')

class Edit extends React.Component {
    render() {
        const { users } = this.props;
        return (
            <DefaultLayout>
                <html>
                    <body>
                        <h1>Edit Page</h1>
                    </body>
                </html>
            </DefaultLayout>
        )
    }
}

module.exports = Edit;