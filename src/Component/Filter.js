import { useState } from "react";

// eslint-disable-next-line react-hooks/rules-of-hooks


export function Filter({ showAside }){
    const [closerd,setclose] = useState(false);
    const handleApplyFilter = () => {
        
    setclose(!closerd);
        alert('All filters applied!'); // Display alert message
      };
    return <aside className={`${showAside ? 'dispaly' : ''} ${closerd ? 'closed' : ''}`}>
        <h1>Filter</h1>
        <div className="filter-container">
            <div className="heading">
                <p>filter applied</p>
                <button onClick={() => {alert("clicked")}}>Clear filter</button>
            </div>
            <div className="tags" >
             <div className="active"><p><i class="fa-solid fa-x"></i> Real Estate </p></div>
            </div>
            <div className="body-filter">
                <h2 >stock:</h2>
                <div  className="stock">
                    <input type="text" id="Stock" placeholder="$ TRICKER"/>
                </div>
                <div className="industry">
                    <details>
                        <summary>
                     Industry
                    </summary>
                    <div className="industry-item">
                        <div className="item">
                        <i className="fa-solid fa-suitcase-medical"></i>
                            <p>health care</p>
                        </div>
                        <div className="item">
                        <i className="fa-solid fa-suitcase-medical"></i>
                            <p>Materials</p>
                        </div>
                        <div className="item">
                        <i className="fa-solid fa-suitcase-medical"></i>
                            <p>Energy</p>
                        </div>
                        <div className="item">
                        <i className="fa-solid fa-suitcase-medical"></i>
                            <p>Consumer Discretionary</p>
                        </div>
                        <div className="item">
                        <i className="fa-solid fa-suitcase-medical"></i>
                            <p>Consumer Staples</p>
                        </div> 
                         <div className="item">
                        <i class="fa-solid fa-suitcase-medical"></i>
                            <p>Real Estate</p>
                        </div>
                        <div className="item">
                        <i className="fa-solid fa-suitcase-medical"></i>
                            <p>IT</p>
                        </div>
                      
                        <div className="item">
                        <i className="fa-solid fa-suitcase-medical"></i>
                            <p>Communicatioons</p>
                        </div>
                        <div className="item">
                        <i className="fa-solid fa-suitcase-medical"></i>
                            <p>industriels</p>
                        </div>
                        <div className="item">
                        <i className="fa-solid fa-suitcase-medical"></i>
                            <p>Utilities</p>
                        </div>
                        <div className="item">
                        <i className="fa-solid fa-suitcase-medical"></i>
                            <p>Financials</p>
                        </div>
                    </div>
                    </details>
                </div>
                <div className="cuplevel">
                    <div className="cup">
                        <details>
                            <summary>
                         Market Cup 
                       </summary>
                        <div className="radio">  
                          <input type="radio" name="cup" value="micro"/>
                        <label>Micro</label>
                        </div>   
                        <div className="radio">
                        <input type="radio" name="cup" value="small"/> <label>Small</label>
                        </div>
                        <div className="radio">
                        <input type="radio" name="cup" value="large"/><label>Large</label>
                        </div>
                        </details>
                    </div>
                    <div className="level">
                        <details>
                            <summary>
                         level Risk
                            </summary>
                        <div className="radio">
                        <input type="radio" name="risk" value="low"/><label>Low Risk</label></div>
                        <div className="radio">
                        <input type="radio" name="risk" value="Middle"/><label>Middle Risk</label></div>
                        <div className="radio">
                        <input type="radio" name="risk" value="hight"/><label>Hight Risk</label>
                        </div></details>
                        </div>
                </div>
                <div className="cuplevel">
                    <div className="Strategy">
                        <h2 >Strategy</h2>
                        <p style={{color:"#cccccc", textAlign:"center"}}>Big Option Buys</p>
                        <div className="active">
                         <p>Merger Arbitrage</p>
                        </div>
                        <p style={{color:"#cccccc", textAlign:"center", marginTop:"-15px"}}>Short Report</p>
                       
                    </div>
                    <div className="asset">
                        <h2>Asset</h2>
                        <p style={{color:"#cccccc", textAlign:"center"}}>Stocks</p>
                        <div className="active">
                            <p>Options</p>
                        </div>
                        <p style={{color:"#cccccc", textAlign:"center", marginTop:"-15px"}}>Futres</p>
                        </div>
                </div>
            </div>
        </div>
        <div className="btn-apply">
            <button onClick={handleApplyFilter}> 
            Applay</button>
        </div>
    </aside>
}