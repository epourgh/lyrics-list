import logo from '../images/logo.svg';

const HeaderComponent = () => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Find your favorite!
            </p>
        </header>
    )
}

export default HeaderComponent
