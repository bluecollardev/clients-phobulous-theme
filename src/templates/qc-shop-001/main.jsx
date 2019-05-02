/**
 * The actual QuickCommerce app
 */
import assign from 'object-assign'

import React, { Component } from 'react'
import {inject, observer, Provider} from 'mobx-react'

import { DragDropContext } from 'react-dnd'
import { HashRouter, Switch, Route } from 'react-router-dom'
import HTML5Backend from 'react-dnd-html5-backend'

import { Alert, Table, Grid, Col, Row, Thumbnail, Modal, Accordion, Panel, HelpBlock } from 'react-bootstrap'
import { Button, Checkbox, Radio } from 'react-bootstrap'

/* Gfx */
// import { TimelineLite } from 'gsap' // Facade for GSAP parallax containers and effects
import { Parallax, ParallaxContainer } from 'react-gsap-parallax' // Facade for GSAP parallax containers and effects

/* Generic imports */
import SiteLogo from 'qc-react/legacy/components/common/SiteLogo.jsx'
import Toolbar from 'qc-react/legacy/components/common/Toolbar.jsx'
import Hero from 'qc-react/legacy/components/shop/Hero.jsx'

/* Site specific imports */
import PagePreloader from 'qc-react/legacy/components/common/PagePreloader.jsx'
import HomePage from '../../js/components/Home.jsx'
import Footer from '../../js/Footer.jsx'

import Stepper from 'qc-react/legacy/components/stepper/BrowserStepper.jsx'

import config from '../../config.js'

// Pre-configured step types
import CategoryStep from 'qc-react/legacy/steps/Category.jsx'
import ProductStep from 'qc-react/legacy/steps/Product.jsx'
import ProductOptionStep from 'qc-react/legacy/steps/ProductOption.jsx'

@inject(deps => ({
  config: deps.config,
  steps: deps.steps,
  homepageSteps: deps.homepageSteps,
  instagramFeed: deps.instagramFeed,
  actions: deps.actions,
  authService: deps.authService,
  customerService: deps.customerService,
  productService: deps.productService,
  checkoutService: deps.checkoutService,
  settingService: deps.authService,
  loginStore: deps.loginStore,
  userStore: deps.userStore,
  customerStore: deps.customerStore,
  catalogStore: deps.catalogStore,
  checkoutStore: deps.checkoutStore,
  starMicronicsStore: deps.starMicronicsStore,
  productStore: deps.productStore,
  settingStore: deps.settingStore,
  mappings: deps.mappings, // Per component or global scope?
  translations: deps.translations, // i8ln transations
  roles: deps.roles, // App level roles, general authenticated user (not customer!)
  userRoles: deps.userRoles, // Shortcut or implement via HoC?
  user: deps.user // Shortcut or implement via HoC?
}))
@observer
export class QcShop001 extends Component {
  // Theme constructor
  constructor(props) {
    super(props)

    console.log('CONFIG')
    console.log(props.config)
    props.actions.setting.setConfig(props.config)

    let { actions } = props
    let { checkoutStore, checkoutService, cartStore } = props
    let { settingStore } = props

    /*cartStore.on('change', () => {
        this.forceUpdate() // TODO: This is a bit much! Temporary...
    })*/

    /*settingStore.once('settings-loaded', (payload) => {
        console.log('PosContext SETTINGS LOADED')
        checkoutStore.settings = payload

        // We only wanna do this once, so stick 'er right up top
       checkoutService.createOrder({
            action: 'insert'
            //orderTaxRates: this.orderTaxRates
        })
    })*/

    // TODO: Code above isn't working, see if I can temporarily wire this up outside the block
    // We only wanna do this once, so stick 'er right up top
    /*checkoutService.createOrder({
         action: 'insert',
         customer: this.props.customerStore.customer,
         //orderTaxRates: this.orderTaxRates
     })*/

    actions.setting.fetchStore()
    actions.setting.fetchSettings()

    console.log(config)
    props.actions.setting.setConfig(config)
    //props.actions.setting.setSettings(config)

    this.stepper = new Stepper()
    this.stepper.setSteps(this.configureSteps())

    this.state = {
      blockUi: false,
      displayPdfMenuModal: false,
      chooseQuantity: false,
      settings: {}
    }
  }

  componentDidMount() {
    /*let orderButton = document.getElementById('cart-button')
    console.log('order button')
    console.log(orderButton)

    orderButton.addEventListener('click', (e) => {
        e.preventDefault()

        let scrollDuration = 666
        let scrollStep = -window.scrollY / (scrollDuration / 15),
            scrollInterval = setInterval(() => {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep)
            } else clearInterval(scrollInterval)
        }, 15)

        this.setState({
            cart: 1
        })
    })*/

    /*this.setState({
        showLogin: (typeof this.props.loggedIn !== 'undefined' && this.props.loggedIn === true) ? true : false,
        cart: (typeof this.props.location !== 'undefined' && this.props.location.pathname === '/checkout/cart') ? 1 : 0
    })*/

    // Store our stepper instance
    // Stepper maintains its own state and store
    //this.stepper.setSteps(this.configureSteps())
    //this.stepper.start()

    let settings = this.props.settingStore.getSettings().posSettings

    settings['pinned_category_id'] = 9 // 'New' category
    let categoryId = null

    if (typeof this.topCategoryBrowser !== 'undefined' && this.topCategoryBrowser !== null) {
      //this.menuCategoryBrowser.actions.loadCategories() // Browser load categories via refs
      this.topCategoryBrowser.actions.loadTopCategories() // Browser load categories via refs
    }

    if (typeof this.props.match !== 'undefined' &&
      typeof this.props.match.params !== 'undefined' &&
      typeof this.props.match.params.cat !== 'undefined' && !isNaN(this.props.match.params.cat)) {
      console.log('load category id: ' + this.props.match.params.cat)
      categoryId = parseInt(this.props.match.params.cat)
    } else if (settings.hasOwnProperty('pinned_category_id') && !isNaN(settings['pinned_category_id'])) {
      categoryId = parseInt(settings['pinned_category_id'])
    } else {
      //categoryId = null
      categoryId = 9
    }

    // Just load browser products, don't trigger any steps
    //this.menuProductBrowser.actions.loadProducts(categoryId)

    // Just load browser products, don't trigger any steps
    //this.menuDrinksBrowser.actions.loadProducts(11) // Drinks TODO: Make this configurable

  }

  configureSteps() {
    // An array of step functions
    return [{
      config: assign({}, CategoryStep, {
        stepId: 'shop',
        indicator: '1',
        title: 'Choose Category'
      }),
      before: (stepId, step) => {
        console.log('load category step...')
        return true
      },
      action: (step, data, done) => {
        //this.menuCategoryBrowser.actions.loadCategories()

        if (done) {
          // Process checkout if done
          this.onComplete()
        }
      },
      validate: (stepId, stepDescriptor, data) => {
        console.log('validating current step: ' + stepId)
        console.log(data)

        let categoryId = data['category_id'] || null

        if (categoryId === null) {
          alert('Please select a category to continue')
          return false
        }

        return true
      }
    },
      {
        config: assign({}, ProductStep, {
          stepId: 'cart',
          indicator: '2',
          title: 'Choose Product'
        }),
        before: (stepId, step) => {
          console.log('load product step...')
          return true
        },
        action: (step, data, done) => {
          data = data || null
          if (data !== null &&
            data.hasOwnProperty('category_id') &&
            !Number.isNaN(data.category_id)) {

            //this.menuProductBrowser.actions.loadProducts(data.category_id) // TODO: CONST for prop name?
          } else {
            //this.menuProductBrowser.actions.loadProducts()
          }

          if (done) {
            // Process checkout if done
            this.onComplete()
          }
        },
        validate: (stepId, stepDescriptor, data) => {
          console.log('validating current step: ' + stepId)
          console.log(data)

          let productId = data['id'] || null

          if (productId === null) {
            alert('Please select a product to continue')
            return false
          }

          return true
        }
      },
      {
        config: assign({}, ProductOptionStep, {
          stepId: 'options',
          indicator: '3',
          title: 'Customize Product'
        }),
        before: (stepId, step) => {
          console.log('load option step...')
          return true
        },
        action: (step, data, done) => {
          data = data || null
          // Store the selection

          if (data !== null &&
            data.hasOwnProperty('id') &&
            !Number.isNaN(data.id)) {

            //this.optionBrowser.actions.loadOptions(data) // TODO: CONST for prop name?
          } else {
            // Do nothing - options only correlate to a browser item
            // TODO: This is being triggered when clicking a browser item, but there's no data object...
          }

          if (done) {
            // Process checkout if done
            this.onComplete()
          }
        },
        validate: (stepId, stepDescriptor, data) => {
          console.log('validating current step: ' + stepId)
          console.log(data)

          return true
        }
      },
      /*{
          config: {
              stepId: 'checkout',
              indicator: '4',
              title: 'Review Your Order'
          },
          // 'action' must be defined, even if empty
          action: (step, data, done) => {
          }
      },*/
      /*{
          config: {
              stepId: 'confirm',
              indicator: '5',
              title: 'Confirm Order'
          },
          // 'action' must be defined, even if empty
          action: (step, data, done) => {
          }
      }*/]
  }

  categoryClicked(e, item) {
    e.preventDefault()
    e.stopPropagation()

    //let stepId = 'cart'
    //let stepDescriptor = this.stepper.getStepById(stepId) || null

    console.log(item);
    // Just load browser products, don't trigger any steps
    //this.menuProductBrowser.actions.loadProducts(item['category_id'])
  }

  itemClicked(e, item) {
    e.preventDefault()
    e.stopPropagation()

    // If the Quick Add button was clicked
    if (e.target.type === 'button') {
      this.addToCartClicked(e, item)

      return
    }

    window.location.hash = '#/product'

    /*let stepId = 'options'
    let stepDescriptor = this.stepper.getStepById(stepId) || null

    if (stepDescriptor !== null) {
        let data = item

        let isEnded = false
        // Execute the step handler
        this.stepper.load(stepDescriptor, data, isEnded, this.setStep.bind(this, stepId))
        this.stepper.addItem(item.id, 1, item)
    }*/
  }

  render() {
    let steps = this.stepper.getSteps() // Stepper extends store, we're good

    let logo = (this.props.settingStore.config.hasOwnProperty('settings')) ? this.props.settingStore.config.settings.logo : ''
    console.log('LOGO PATH')
    console.log(logo)

    return (
      <div>
        {/*<div className="parallax-element right condiment condiment-onion"></div>*/}
        {/* Page Preloading */}
        {/* Modernizr */}
        {/* Body */}
        <PagePreloader
          settings = {this.props.settingStore} />
        {/* Page Wrapper */}
        <div className="page-wrapper dark">
          {/* Navbar */}
          {/* Remove ".navbar-sticky" class to make navigation bar scrollable with the page. */}
          <header className="navbar navbar-sticky">
            <SiteLogo
              image = {logo.image} />
            {/*<LanguageSwitcher
                settings = {settings} />*/}
            <Toolbar
              settings = {this.props.settingStore}
              cart = {this.props.settingStore.config.cart} />
          </header>{/* .navbar.navbar-sticky */}

          <section className="hero-slider" data-loop="true" data-autoplay="true" data-interval={7000}>
            <Hero
              settings = {this.props.settingStore}
              slides = {this.props.settingStore.config.pages[0].layout.images.heroSlides}
              loop = {false}
            />

            <div className='hero-bottom'>
              <div className='container'>
                <div id='takeout-and-delivery' className='parallax_title_intro' data-stellar-ratio='-2.3'>
                  <div className='parallax_title banner_title'>
                    <div className='circle circle-90'>
                      <span className='top'>Save</span>
                      <span className='bottom'><strong>10 %</strong></span>
                    </div>
                    <h2 className='ppb_title cursive space-top-3x space-bottom-2x'><span className='ppb_title_first'>~ Take-out and Delivery ~</span></h2>
                    <h4 className='ppb_title'>Do you want to <a href='https://skipthedishes.ca' target='_blank' style={{ textDecoration: 'underline' }}>skip the dishes</a> or <a href='https://simplydine.ca' style={{ textDecoration: 'underline' }}>simply dine</a> tonight? Or maybe you're going to be passing by and would like to <a href='https://order.phobulous.ca' target='_self' style={{ textDecoration: 'underline' }}><strong>place a take-out order online</strong></a>.  Don't worry, Phobulous has you covered with a variety of online ordering and city-wide delivery options.
                      <span className='ppb_title_first'></span>
                    </h4>
                    <br />
                    <div className='display-flex space-around'>
                      <div>
                        <a href='https://simplydine.ca' className='display-block'><img className='simplydine' src={QC_APP_IMAGES_PATH + 'template/phobulous/simply-dine-qr-logo.png'} /></a>
                        <a href='https://skipthedishes.ca' className='display-block space-top-2x'><img className='skipthedishes' src={QC_APP_IMAGES_PATH + 'template/phobulous/skip-the-dishes-tagline-small.png'} /></a>
                      </div>
                      <div>
                        <ul className='no-list-style text-left'>
                          <li className='text-center'><strong>Find us on the Free SimplyDine App</strong></li>
                          <li><i className='fa fa-check margin-right-1x' />Conveniently place orders from anywhere</li>
                          <li><i className='fa fa-check margin-right-1x' />Easily repeat favorite orders within seconds</li>
                          <li><i className='fa fa-check margin-right-1x' />Receive the latest discounts and specials</li>
                        </ul>
                        <div className='space-top'>
                          <small><small><strong>NEW!</strong> Place a takeout order at <a href='https://order.phobulous.ca' target='_self' style={{ textDecoration: 'underline' }}>https://order.phobulous.ca</a></small></small>
                          <br />
                          <small><small>
                            *Save 10% on orders through online OR the <strong>SimplyDine app</strong>.<br />
                            Discounts and specials are subject to change without notice.<br />
                            <strong>Minimum order of $30</strong>.
                          </small></small>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/*<div className='cta-buttons'>
                            <div className='btn-group'>
                              <a href='https://order.phobulous.ca' target='_blank' className='button btn cta'>
                                <i className='fa'></i> Place Take-out Order
                              </a>
                            </div>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <div className='btn-group'>
                              <a href='#' className='button btn cta'>
                                <i className='fa'></i> Get the SkipTheDishes App
                              </a>

                              <button type='button' className='button btn cta dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                                <span className='caret'></span>
                                <span className='sr-only'>Toggle Dropdown</span>
                              </button>

                              <ul className='dropdown-menu'>
                                <li><a href='https://itunes.apple.com/ca/app/skipthedishes-food-delivery/id969229981?mt=8' target='_blank'>App Store (iOS)</a></li>
                                <li><a href='https://play.google.com/store/apps/details?id=com.ncconsulting.skipthedishes_android' target='_blank'>Play Store (Android)</a></li>
                              </ul>
                            </div>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <div className='btn-group'>
                              <a href='#' className='button btn cta'>
                                <i className='fa'></i> Download Our Ordering App
                              </a>

                              <button type='button' className='button btn cta dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                                <span className='caret'></span>
                                <span className='sr-only'>Toggle Dropdown</span>
                              </button>

                              <ul className='dropdown-menu'>
                                <li><a href='https://play.google.com/store/apps/details?id=ca.simplydine.phobulous' target='_blank'>Play Store (Android)</a></li>
                                <li><a href='#'>App Store (iOS) Coming Soon</a></li>
                              </ul>
                            </div>
                        </div>*/}
                </div>
              </div>
            </div>
            <div id='about-us' className='hero-bottom'>
              <div className='container'>
                <div className='parallax_title banner_title'>
                  <h3 className='cursive text-center padding-top'>~ Welcome to Phobulous ~</h3>
                  {/*<Categories
                            ref = {(browser) => this.topCategoryBrowser = browser}
                            settings = {this.props.settingStore}
                            activeStep = 'shop'
                            title = {this.props.title}
                            displayTitle = {false}
                            displayProductFilter = {false}
                            displayCategoryFilter = {false}
                            displayTextFilter = {false}
                            stepper = {this.props.stepper}
                            steps = {steps}
                            customRowComponent = {CategoryRow4x}
                            results = {this.state.items}
                            resultsPerPage = {4}
                            maxResults = {4}
                            onItemClicked = {this.categoryClicked}
                            onFilterSelected = {this.categoryFilterSelected}
                            onStepClicked = {this.stepClicked}
                        />*/}
                  <span className='text-center'
                        style = {{
                          display: 'block'
                        }}>
                            Here you will find the opportunity to sample the diverse and intricate cuisine of Vietnam. The Vietnamese cuisine has been influenced, throughout history, by different ingredients and cooking techniques, it incorporates Southeastern Asia and the West, particularly the French. The following menu items was chosen, because the dishes embody the spirit and charm that gave Vietnam it's large and rich culinary repertoire.
                        </span>
                  <div className="flex-column action-wrapper">
                    <a className="more style03 scroll-to" href="#main-content"><span></span></a>
                  </div>
                </div>
              </div>

              <HashRouter>
                <div id='main-content' className='container react-app-wrapper'>
                  <Switch>
                    <Route
                      exact
                      path='/'
                      render={() => {
                        return (
                          <HomePage
                            {...this.props}
                            steps = {steps}
                            stepper = {this.props.stepper}
                            configureSteps = {this.configureSteps}
                            categoryFilterSelected = {this.categoryFilterSelected}
                            categoryClicked = {this.categoryClicked}
                            itemClicked = {this.itemClicked}
                            addToCartClicked = {this.addToCartClicked}
                            stepClicked = {this.stepClicked}
                          />
                        )
                      }} />
                    {/*<Route path='/product' render={() => <ProductPage {...this.props} /> } />*/}
                    {/*<Route path='/about' render={() => <AboutPage {...this.props} /> } />*/}
                  </Switch>
                  {/*<Route path='/contact' render={() => <ContactPage {...this.props} /> } />*/}
                </div>
              </HashRouter>
            </div>
          </section>

          {/*<ParallaxContainer
            height = {800}
            scrolljack = {false}
            top = {0}
            onScroll = {x => x}>*/}

          {/*<Parallax>*/}
          {/*<div className='parallax-element left condiment condiment-chili'></div>*/}
          {/*</Parallax>*/}

          {/*<Parallax
                style = {{ width: '100%', left: '10vw' }}
                keyframes = {{
                }}>*/}
          {/*<div className='parallax-element left herb green-onions-1'></div>*/}
          {/*</Parallax>*/}

          {/*<Parallax
                style = {{ width: '100%', left: '90vw' }}
                keyframes = {{
                }}>*/}
          {/*<div className='parallax-element right condiment condiment-cilantro'></div>*/}
          {/*</Parallax>*/}

          {/*<Parallax
                style = {{ width: '100%', top: '350vh', left: '70vw' }}
                keyframes = {{
                }}>
                <div className='parallax-element right herb green-onions-2'></div>
            </Parallax>*/}

          {/*<Parallax
                style = {{ width: '100%', top: '85vh', left: '70vw' }}
                keyframes = {{
            }}>*/}
          {/*<div className='parallax-element right herb basil'></div>*/}
          {/*</Parallax>*/}

          {/*<Parallax
                style = {{ width: '100%', top: '100vh', left: '-6vw' }}
                keyframes = {{
                }}>*/}
          {/*<div className='parallax-element left condiment condiment-lime'></div>*/}
          {/*</Parallax>*/}
          {/*<Brands
            settings = {this.props.settingStore} />*/}

          {/*<div className='fw-section space-top-2x padding-top-3x padding-bottom-3x' style={{backgroundImage: 'url(img/video_bg.jpg)'}}>
            <div className='container padding-top-3x padding-bottom-3x text-center'>
              <div className='space-top-3x space-bottom'>

                <a href='https://player.vimeo.com/video/135832597?color=77cde3&title=0&byline=0&portrait=0' className='video-popup-btn'>
                  <i className='material-icons play_arrow' />
                </a>
              </div>
              <p className='space-bottom-2x'>Quick Commerce - your reliable partner.</p>
            </div>
            </div>

            <Features
                settings = {this.props.settingStore} />
            */}
          {/*</ParallaxContainer>*/}

        </div>
        <Footer
          settings = {this.props.settingStore}>
          <div className='parallax-element bottom herb left cilantro'></div>
          {/*<div className='parallax-element bottom herb right mint'></div>*/}
          <div
            className = 'takeout-menu parallax-element fixed bottom left'
            ref = {(toggle) => this.pdfMenuToggle = toggle}
            onClick = {(e) => {
              // PdfMenuModal onClick trigger
              e.preventDefault()
              e.stopPropagation()

              console.log('click')
              this.setState({
                displayPdfMenuModal: !this.state.displayPdfMenuModal
              })
            }}>
          </div>
          <a  href='#takeout-and-delivery'
              className = 'scroll-to delivery-widget parallax-element fixed bottom right hidden-xs'
              ref = {(toggle) => this.pdfMenuToggle = toggle}
              onClick = {(e) => {
                // PdfMenuModal onClick trigger
                e.preventDefault()
                e.stopPropagation()

                console.log('click')
                //this.setState({
                //    displayPdfMenuModal: !this.state.displayPdfMenuModal
                //})
              }}>
          </a>
          <div className='copyright-wrapper'><p className='copyright'>© 2017 Phobulous. Made with <i className='text-danger material-icons favorite' /> by Firebrand Web Solutions.</p></div>
        </Footer>
        {this.state.displayPdfMenuModal && (
          <div className='dark'>
            <Modal
              dialogClassName = 'pdf-menu-modal'
              show = {true}>
              <Modal.Header>
                <Modal.Title>
                  <div className='column_attr clearfix align_center'>
                    <h2 className='heading-with-border'
                        style={{
                          textAlign: 'center'
                        }}>Takeout Menu</h2>
                    <Button
                      onClick = {() => {
                        this.setState({
                          displayPdfMenuModal: false
                        })
                      }}
                      className = 'close'
                      dataDismiss = 'modal'>&times;</Button>
                  </div>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <iframe className='menu-pdf-viewer' src = '../viewer-js/#../menu-pdf/phobulous_menu.pdf' allowFullScreen webkitAllowFullScreen></iframe>
                <Button
                  onClick = {() => {
                    // Trigger invisible link
                    this.pdfMenuTrigger.click()

                    this.setState({
                      displayPdfMenuModal: !this.state.displayPdfMenuModal
                    })
                  }}
                  bsStyle='success'
                  block>
                  Download as PDF
                </Button>
                {/* Programatically click this link */}
                <a download
                   ref = {(trigger) => this.pdfMenuTrigger = trigger}
                   href = {QC_BASE_URI + 'menu-pdf/phobulous_menu.pdf'}
                   style = {{
                     display: 'none'
                   }} />
              </Modal.Body>
            </Modal>
          </div>
        )}
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(QcShop001)
