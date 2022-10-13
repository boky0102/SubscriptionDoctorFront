import './Header.css'

function Header(props){

    return(
        <div className="header-container">
            <button className="header-button">Register</button>
            <button className="header-button">Guest</button>
            <form className="form-container">
                <label for="email">Email</label>
                <input name="email" type="text" onChange={props.handleEmailChange}/>
                <label for="password">Password</label>
                <input type="password"onChange={props.handlePasswordChange} />
                <button type="submit" className="form-button">Login</button>
            </form>
        </div>
    )
}

export default Header;