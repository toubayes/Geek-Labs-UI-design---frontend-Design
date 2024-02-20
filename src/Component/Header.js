
export function Header({ toggleSidebar , toggleAside}){

    return <header>
        <i className="fa-solid fa-bars" onClick={toggleSidebar}></i>
        <h1>ALERTS</h1>
        <div className="input-search">
        <input type="text"placeholder="searching by ..." />
        </div>
        <i className="fa-solid fa-bell"></i>
        <i className="fa-solid fa-filter" onClick={toggleAside}></i>
    </header>

}