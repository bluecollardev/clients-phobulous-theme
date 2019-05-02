import React, { Component } from 'react'

import ProductBrowser from '../browser/ProductBrowser.jsx'

import { Alert, Table, Grid, Col, Row, Thumbnail, Modal, Accordion, Panel, HelpBlock } from 'react-bootstrap'
import { Tabs, Tab, TabContent, TabContainer, TabPanes } from 'react-bootstrap'
import { Nav, Navbar, NavItem, MenuItem, NavDropdown } from 'react-bootstrap'
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import { Button, Checkbox, Radio } from 'react-bootstrap'
import { Well } from 'react-bootstrap'

import Griddle from 'griddle-react'

import StarRating from 'react-star-rating'

import CategoryFilterBar from '../common/CategoryFilterBar.jsx'
import FilterBar from '../common/FilterBar.jsx'
import BootstrapPager from '../common/GriddleBootstrapPager.jsx'


export default class Menu extends ProductBrowser {
    render() {
        let rowComponent = this.configureRow(this.props.customRowComponent)
        let item = this.props.item || null

        console.log('what is up with the sort algo')
        console.log(this.props.initialSort)

        return (
            <div className="col-xs-12 col-sm-10 col-sm-push-1">
                {this.props.displayCategoryFilter && (
                <CategoryFilterBar
                    items = {this.state.categories}
                    onFilterSelected = {this.props.onFilterSelected}
                />
                )}

                {/*<ul className="nav-tabs text-center" role="tablist">
                  <li className="active"><a href="#pho" role="tab" data-toggle="tab">Noodle Soups</a></li>
                  <li><a href="#bun" role="tab" data-toggle="tab">Noodle Bowls</a></li>
                  <li><a href="#rice" role="tab" data-toggle="tab">Rice Dishes</a></li>
                  <li><a href="#appetizers" role="tab" data-toggle="tab">Appetizers</a></li>
                </ul>*/}

                <div className='browser-container'>
                  <div className='browser-menu-container'>
                      {/*<BrowserMenu
                          steps = {this.props.steps}
                          activeStep = {this.props.activeStep}
                          onStepClicked = {this.props.onStepClicked}
                          />*/}
                      {this.props.displayProductFilter && (
                      <FilterBar
                          />
                      )}
                  </div>

                  {this.props.displayTitle && (
                      <div>
                          <hr />
                          <h4 className='browser-product-title'>{this.props.title}</h4>
                      </div>
                  )}

                  {this.props.children && !(Object.keys(this.state.items).length > 0) && (
                  <div className='browser-content row'>
                      <Col sm={12}>
                          {item !== null && (
                          <FormGroup>
                              <ControlLabel><h4>{this.props.title}</h4></ControlLabel>
                              <Well>
                                  <Row>
                                      <Col xs={12}>
                                          <Box margin={{top: 'none'}}>
                                              <Box pad={{vertical: 'small'}}
                                                  direction='row'
                                                  align='center'
                                                  justify='between'>
                                                  <Label size='small'>Retail Price</Label>
                                                  <Paragraph size='large' margin='none'>
                                                      <strong style={{ fontSize: '1.5rem' }}>${parseFloat(item.price).toFixed(2)}</strong>
                                                  </Paragraph>
                                              </Box>
                                              <Box pad={{vertical: 'small'}}
                                                  direction='row'
                                                  align='center'
                                                  justify='between'
                                                  separator='top'>
                                                  <Label size='small'>Rating</Label>
                                                  <StarRating name='react-star-rating' size={20} totalStars={5} rating={item.rating} />
                                              </Box>
                                          </Box>
                                          <Box pad={{vertical: 'small'}}
                                              direction='row'
                                              align='center'
                                              justify='between'>
                                              <Label size='small'>Status</Label>
                                              <Paragraph size='large' margin='none'>
                                                  <strong style={{ fontSize: '1rem' }}>{item.stock_status}</strong>
                                              </Paragraph>
                                          </Box>
                                          <Box margin={{top: 'none'}}>
                                              <Box pad={{vertical: 'small'}}
                                                  direction='row'
                                                  align='center'
                                                  justify='between'
                                                  separator='top'>
                                                  <Label size='small'>Quantity</Label>
                                                  <Paragraph size='large' margin='none'>
                                                      <strong style={{ fontSize: '1rem' }}>{item.quantity}</strong>
                                                  </Paragraph>
                                              </Box>
                                          </Box>
                                      </Col>
                                  </Row>
                              </Well>
                          </FormGroup>
                          )}
                      </Col>
                      <Col sm={12}>
                          {this.props.children}
                      </Col>
                  </div>
                  )}

                  {this.props.children && (Object.keys(this.state.items).length > 0) && (
                  <div className='browser-content row'>
                      <Col sm={12}>
                          <Griddle
                              showFilter = {this.props.displayTextFilter}
                              columns = {[
                                  'manufacturer',
                                  'name',
                                  'model',
                                  //'location',
                                  //'date_added',
                                  //'options',
                                  'price'
                              ]}
                              useGriddleStyles = {false}
                              showPager = {this.props.showPager}
                              useCustomPagerComponent = {true}
                              customPagerComponent = {BootstrapPager}
                              useCustomRowComponent = {true}
                              initialSort = {this.props.initialSort}
                              resultsPerPage = {this.props.resultsPerPage}
                              customRowComponent = {rowComponent}
                              results = {this.state.items}
                          />
                      </Col>
                      <Col xs={12}>
                        {this.props.children}
                      </Col>
                  </div>
                  )}

                  {!this.props.children && (
                  <div className='browser-content row'>
                      <Griddle
                          showFilter = {this.props.displayTextFilter}
                          columns = {[
                              'manufacturer',
                              'name',
                              'model',
                              //'location',
                              //'date_added',
                              //'options',
                              'price'
                          ]}
                          useGriddleStyles = {false}
                          showPager = {this.props.showPager}
                          useCustomPagerComponent = {true}
                          customPagerComponent = {BootstrapPager}
                          useCustomRowComponent = {true}
                          sortAlgorithm = {this.props.sortAlgorithm}
                          initialSort = {this.props.initialSort}
                          resultsPerPage = {this.props.resultsPerPage}
                          customRowComponent = {rowComponent}
                          results = {this.state.items}
                      />
                  </div>
                  )}
              </div>
            </div>
        )
    }
}
