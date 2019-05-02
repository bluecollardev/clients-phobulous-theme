import React, { Component } from 'react'

import { Alert, Table, Grid, Col, Row, Thumbnail, Modal, Accordion, Panel, HelpBlock } from 'react-bootstrap'
import { Tabs, Tab, TabContent, TabContainer, TabPanes } from 'react-bootstrap'
import { Nav, Navbar, NavItem, MenuItem, NavDropdown } from 'react-bootstrap'
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import { Button, Checkbox, Radio, } from 'react-bootstrap'

export default class CategoryFilterBar extends Component {
    constructor(props) {
        super(props)
        
        this.onFilterSelected = this.onFilterSelected.bind(this)
        this.renderItems = this.renderItems.bind(this)
    }
    
    onFilterSelected(eventKey, e) {
        e.preventDefault()
        e.stopPropagation()
        
        if (typeof this.props.onFilterSelected === 'undefined') return false;
        
        console.log('executing onFilterSelected callback')
        if (typeof this.props.onFilterSelected === 'function') {
            console.log('execute handler')
            let fn = this.props.onFilterSelected
            fn.call(this, eventKey, e)
        }
    }
    
    renderItems() {
        let items = []
        if (typeof this.props.items !== 'undefined' && 
            this.props.items instanceof Array) {
            
            let elem = null
            let item = null
            let name = null

            for (let idx = 0; idx < this.props.items.length; idx++) {
                item = this.props.items[idx]
                
                // TODO: Replace with a string helper method... clean/decode name
                elem = document.createElement('textarea')
                elem.innerHTML = item.name
                name = elem.value
                // TODO: className="active" default tab

                items.push(<li key={idx}><a href="" role="tab" data-toggle="tab">{name}</a></li>)
            }
        }
        
        return items
    }
    
    render() {
        let items = this.renderItems()
        return (
            <ul className="nav-tabs text-center" role="tablist">
                {items}
            </ul>
        )
    }
}