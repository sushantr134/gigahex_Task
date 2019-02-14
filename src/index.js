import React from 'react'
import ReactDOM from 'react-dom'

import {Provider} from 'react-redux'
import Store from '../redux/Store'

import App from './App.jsx'

ReactDOM.render(
    <Provider store={Store()}><App/></Provider>
    ,document.getElementById('gigahex-test'))