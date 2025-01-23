import { Component, useContext } from "react"
import LightDarkMode from "../light-dark"
import TicTacToe from "../tiktac"
import RandomColor from "../randomColor"
import Accordian from "../accordian"
import Tree from "../tree"
import { FeatureFlagsContext } from "./context/feature-flag"
import menus from "../tree/data"
import TabTest from "../tabs/tab-test"



export default function FeatureFlags() {

    const { loading, enabledFlags } = useContext(FeatureFlagsContext)

    const componentsToRender = [
        {
            key: 'showLightAndDarkMode',
            component: <LightDarkMode />
        },
        {
            key: 'showTicTacToeBoard',
            component: <TicTacToe />
        },
        {
            key: 'showRandomColorGenerator',
            component: <RandomColor />
        },
        {
            key: 'showAccordian',
            component: <Accordian />
        },
        {
            key: 'showTreeView',
            component: <Tree menus={menus}/>
        },
        {
            key: 'showTabs',
            component: <TabTest />
        }
    ]

    function checkEnabledFlags(getCurrentKey) {
        return enabledFlags [getCurrentKey]
    }

    if (loading) return <div>Loading data ! Please wait</div>

    return <div>
        <h1>Feature Flags</h1>
        {
            componentsToRender.map(componentItems => checkEnabledFlags(componentItems.key) ? componentItems.component : null)
        }
    </div>
}