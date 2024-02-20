

export function SideBar({ showSidebar }) {
    // eslint-disable-next-line no-template-curly-in-string
    return <nav className={`nav ${showSidebar ? 'show' : ''}`}>
        <div className="image">
    
         <img src="asset/image/logo.png" alt="logo"/>
        </div>
        <div className="list">
            <ul>
                <li>
                    <a href="#alerts">
                    <i className="fa-solid fa-bell"></i>Alerts</a>
                </li>
                <li>
                    <a href="#trainning">
                    <i className="fa-solid fa-graduation-cap"></i>Traininig</a>
                </li>
                <li>
                    <a href="#automation">
                    <i className="fa-solid fa-gauge-simple-high"></i>Automation</a>
                </li>
                <li>
                    <a href="#portfolio">
                    <i className="fa-solid fa-circle-user"></i> Portfolio</a>
                </li>
                <li>
                    <a href="#tranding">
                    <i className="fa-solid fa-chart-column"></i>Tranding</a>
                </li>
                
            </ul>
        </div>
    </nav>
    
}