import logo from "../assets/images/bg.avif"

function Header(){
    return(
    <header id="header">
        <img src={logo} alt="logo showing investmnet calculator" id="header-img" />
        <h1>Investment  Calculator</h1>
    </header>
    )
    

}

export default Header