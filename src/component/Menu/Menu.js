import { menuEntries } from './menuEntries.js';
import './Menu.css';
/* class Menu extends React.Component {
    render() {
        return (
            <nav>
                <div className="logo">
                    Mon Logo
                </div>
                <ul>
                    {
                       menuEntries.map((value,index)=>{
                        return(
                        <li key={index}>{value.label}</li>
                        )
                       })
                    }
                </ul>
            </nav>

        )
    }
} */
const Menu = ()=>{
    return(
        <nav>
                <div className="logo">
                    Mon Logo
                </div>
                <ul>
                    {
                       menuEntries.map((value,index)=>{
                        return(
                        <li key={index}>{value.label}</li>
                        )
                       })
                    }
                </ul>
            </nav>
    )
}
export default Menu
