import { Tab } from "../Tab/component";

export const Tabs = ({ tabs, onChange }) => {
    return (
        <nav>
            <ul>
                {!!tabs && tabs.map(tab => <Tab key={tab.id} id={tab.id} text={tab.text} onClick={onChange}/>)}
            </ul>
        </nav>
    )
}