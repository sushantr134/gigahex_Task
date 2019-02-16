import React from 'react'
import './styles/main.scss'

import {SideBar} from './components/sidebar/Sidebar'
import MainView from './components/mainBody/MainView'
import logo from '../adhoc-logo.png'


export default class App extends React.Component
{
    render()
    {
        return (
            <div id="react-gigahex-app">
               <section className="testApp">
                <div className="container">            
                    <SideBar name="Houz" logo={logo} />
                    <MainView heading="Choose Accomodation Type" />
                </div>  
               </section>
            </div>
        )
    }
} 