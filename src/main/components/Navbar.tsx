import React from 'react';
import {Menubar} from 'primereact/menubar'
import 'primeflex/primeflex.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIceCream } from '@fortawesome/free-solid-svg-icons';
import{ useHistory } from "react-router-dom";
function Navbar(){
    const history = useHistory();
    const items = [
        {
            label:'Home',
            icon:'pi pi-fw pi-home',
            command: (event: any) => {
                history.push("/");
            }
         }
    ];
    const logo = () => <FontAwesomeIcon className="navbar-logo" icon={faIceCream}/> //<img className="navbar-logo p-mr-2" alt="Ice cream logo" src={iceCream} ></img>;
    return(
        <Menubar
        className="glass sleak-navbar"
        model={items}
        end={logo}
        />
    );
}

export default Navbar;