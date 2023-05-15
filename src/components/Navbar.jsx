import reactLogo from '../assets/react.svg'

export default function Navbar(){
    return (
        <div className="navBar">
        <div className='leftBar'>
        <img src={reactLogo} className="logo react" alt="React logo"/>
        <h1>ReactFacts</h1></div>
        <div className='rightBar'>
        React Course - Project 1
        </div>
        </div>
    )
}
