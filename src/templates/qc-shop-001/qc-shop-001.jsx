/**
 * This file is a wrapper that allows for isomorphic rendering of the application, and is also the main entry point for webpack.
 * You can include any MainComponent. Here, we're including the QuickCommerce app itself.
 */
if (!global.setTimeout) {
    global.setTimeout = function() {}
}

if (!global.setInterval) {
    global.setInterval = function() {}
}

import React from 'react'
import ReactDOM from 'react-dom'
import {renderToString} from 'react-dom/server'

import {inject, observer, Provider} from 'mobx-react'

// Start App imports
import AppDispatcher from 'qc-react/legacy/dispatcher/AppDispatcher.jsx'
import AuthenticatedApp from 'qc-react/legacy/components/AuthenticatedApp.jsx'

import LoginActions from 'qc-react/legacy/actions/LoginActions.jsx'
import UserActions from 'qc-react/legacy/actions/UserActions.jsx'
import CustomerActions from 'qc-react/legacy/actions/CustomerActions.jsx'
import CustomerListActions from 'qc-react/legacy/actions/CustomerListActions.jsx'
import CustomerSearchActions from 'qc-react/legacy/actions/CustomerSearchActions.jsx'
//import OmniSearchActions from 'qc-react/legacy/actions/OmniSearchActions.jsx'
import CheckoutActions from 'qc-react/legacy/actions/CheckoutActions.jsx'
import ProductActions from 'qc-react/legacy/actions/ProductActions.jsx'
import SettingActions from 'qc-react/legacy/actions/SettingActions.jsx'

import AuthService from 'qc-react/legacy/services/AuthService.jsx'
import UserService from 'qc-react/legacy/services/UserService.jsx'
//import LoginService from 'qc-react/legacy/services/LoginService.jsx'
import CustomerService from 'qc-react/legacy/services/CustomerService.jsx'
import CustomerAddressService from 'qc-react/legacy/services/CustomerAddressService.jsx'
import CheckoutService from 'qc-react/legacy/services/CheckoutService.jsx'

import { LoginStore } from 'qc-react/legacy/stores/LoginStore.jsx'
import { UserStore } from 'qc-react/legacy/stores/UserStore.jsx'
import { CustomerStore } from 'qc-react/legacy/stores/CustomerStore.jsx'
//import { CustomerListStore } from 'qc-react/legacy/stores/CustomerListStore.jsx'
import { ProductStore } from 'qc-react/legacy/stores/ProductStore.jsx'
import { CheckoutStore } from 'qc-react/legacy/stores/CheckoutStore.jsx'
import { SettingStore } from 'qc-react/legacy/stores/SettingStore.jsx'
import { StarMicronicsStore } from 'qc-react/legacy/stores/StarMicronicsStore.jsx'

const dispatcher = AppDispatcher

// Initialize stores
const loginStore = new LoginStore(dispatcher)
const userStore = new UserStore(dispatcher)
const customerStore = new CustomerStore(dispatcher)
//const customerListStore = new CustomerListStore(dispatcher)
const productStore = new ProductStore(dispatcher)
const checkoutStore = new CheckoutStore(dispatcher)
const settingStore = new SettingStore(dispatcher)
const starMicronicsStore = new StarMicronicsStore(dispatcher)

import FluxHelper from 'qc-react/legacy/helpers/Flux.js'
import HashProxy from 'qc-react/legacy/utils/HashProxy.js'
//FluxHelper.bindActionCreators()

const actionRegistry = new HashProxy()

let actionCreators = [
    { key: 'user', value: UserActions },
    { key: 'login', value: LoginActions },
    { key: 'customer', value: CustomerActions },
    //{ key: 'customerList', value: CustomerListActions },
    //{ key: 'customerSearch', value: CustomerSearchActions },
    //{ key: 'omniSearch', value: OmniSearchActions },
    { key: 'product', value: ProductActions },
    { key: 'checkout', value: CheckoutActions },
    { key: 'setting', value: SettingActions }
]

function registerActions(registry, dispatcher, actionCreators) {
	if (!actionCreators instanceof Array) {
		throw new Error('registerActions expects an array of actionCreators')
	}

	return actionCreators.reduce((registry, obj) => {
		const action = obj.value(dispatcher)
		registry[obj.key] = action
		return registry
	}, registry)
}

registerActions(actionRegistry, dispatcher, actionCreators)

const authService = new AuthService({ actions: actionRegistry })
const userService = new UserService({ actions: actionRegistry })
const customerService = new CustomerService({ actions: actionRegistry })
const customerAddressService = new CustomerAddressService({ actions: actionRegistry })
const checkoutService = new CheckoutService({ actions: actionRegistry })

import MainComponent from './main.jsx'

if ('undefined' !== typeof document) {
    ReactDOM.render(
        <Provider
            dispatcher = {dispatcher}
            actions = {actionRegistry}
            authService = {authService}
            customerService = {customerService}
            customerAddressService = {customerAddressService}
            checkoutService = {checkoutService}
            userStore = {userStore}
            loginStore = {loginStore}
            customerStore = {customerStore}
            productStore = {productStore}
            checkoutStore = {checkoutStore}
            settingStore = {settingStore}>
            <AuthenticatedApp>
                <MainComponent />
            </AuthenticatedApp>
        </Provider>,
        document.getElementById('react-ws')
    )
} else {
    print(renderToString(<MainComponent />))
}
