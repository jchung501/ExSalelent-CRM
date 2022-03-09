const React = require('react');

class DefaultLayout extends React.Component {
    render() {
        const { customers } = this.props;
        return (
            <html>
                <head>
                    <meta charSet='UTF-8'/>
                    <meta httpEquiv='X-UA-Compatible' content='IE edge'/>
                    <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
                    <title>ExSalelent CRM</title>
                    {/* BOOTSTRAP CDN*/}
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
                    {/* Google Fonts */}
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic"/>
                    {/* CSS Reset */}
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"/>
                    {/* Milligram CSS */}
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css"/>
                    {/* Jquery */}
                    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossOrigin="anonymous"></script>
                    {/* OUR CSS AND JS */}
                    <link rel="stylesheet" href="/styles.css"/>
                    <script src="/app.js" defer></script>
                </head>
                <body className='container-fluid'>
                    <header>
                        <h1 className='text-center'><u>ExSalelent CRM</u></h1>
                        <main>
                        <nav className='nav nav-bar nav-tabs justify-content-center'>
                            <a className='nav-link nav-item' href='/'>Back to Index</a>
                            <a className='nav-link nav-item' href='/new'>Add New Customer</a>
                            <div>
                                <input placeholder='What are you searching for?'/>
                            </div>
                        </nav>
                            {this.props.children}
                        </main>
                        <footer>

                        </footer>
                    </header>
                </body>
            </html>
        );
    };
};

module.exports = DefaultLayout;