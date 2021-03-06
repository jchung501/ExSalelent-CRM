const React = require('react');

const picStyle = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '500px',
    height: '100px',
};



class DefaultLayout2 extends React.Component {
    render() {
        const { customers } = this.props;
        return (
            <html>
                <head>
                    <meta charSet='UTF-8'/>
                    <meta httpEquiv='X-UA-Compatible' content='IE edge'/>
                    <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
                    <title>ExSalelent CRM</title>
                    <link rel="shortcut icon" type="image/png" href='https://i.imgur.com/X0VzsEW.png'/>
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
                    <link rel="stylesheet" href="/css/style.css"/>
                    <script src="/app.js" defer></script>
                </head>
                <body className='container-fluid background'>
                    <header>
                        <img style={picStyle} src={'https://i.imgur.com/OMeJLoe.png'}/>
                        <main>
                        <nav className='nav nav-bar justify-content-center'>
                            <a className='nav-link nav-item' href='/customers'>Back to Index</a>
                            <a className='nav-link nav-item' href='/customers/new'>Add New Customer</a>
                            <a href='/user/logout'><button>Logout</button></a>
                            <form action='/customers/search' method='POST'>
                            <input type='text' placeholder='Search..' name='results'/>
                            </form>
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

module.exports = DefaultLayout2;