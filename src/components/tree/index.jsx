import MenuList from "./menu-list";
import './styles.css'




export default function Tree({ menus = [] }) {
    return <div className="tree-view-container">
        <MenuList list={menus} />
    </div>
}