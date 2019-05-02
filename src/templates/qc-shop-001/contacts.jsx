import React, { Component } from 'react'

export default class Contacts extends Component {
  render() {
    return (
      <div>
        {/* Page Preloading */}
        {/*Google Maps API*/}
        {/* Body */}
        {/* Adding/Removing class ".page-preloading" is enabling/disabling background smooth page transition effect and spinner. Make sure you also added/removed link to page-preloading.js script in the <head> of the document. */}
        {/* Page Pre-Loader */}
        <div className="page-preloader">
          <div className="preloader">
            <img src="img/preloader.gif" alt="Preloader" />
          </div>
        </div>{/* .page-preloader */}
        {/* Page Wrapper */}
        <div className="page-wrapper">
          {/* Navbar */}
          {/* Remove ".navbar-sticky" class to make navigation bar scrollable with the page. */}
          <header className="navbar navbar-sticky">
            {/* Site Logo */}
            <a href="index.html" className="site-logo visible-desktop">
              <span>[</span> M
              <span className="text-gray">/</span>
              STORE <span>]</span>
            </a>{/* site-logo.visible-desktop */}
            <a href="index.html" className="site-logo visible-mobile">
              <span>[</span> M <span>]</span>
            </a>{/* site-logo.visible-mobile */}
            {/* Language Switcher */}
            <div className="lang-switcher">
              <div className="lang-toggle">
                <img src="img/flags/GB.png" alt="English" />
                <i className="material-icons arrow_drop_down" />
                <ul className="lang-dropdown">
                  <li><a href="#"><img src="img/flags/FR.png" alt="French" />FR</a></li>
                  <li><a href="#"><img src="img/flags/DE.png" alt="German" />DE</a></li>
                  <li><a href="#"><img src="img/flags/IT.png" alt="Italian" />IT</a></li>
                </ul>
              </div>
            </div>{/* .lang-switcher */}
            {/* Toolbar */}
            <div className="toolbar">
              <div className="inner">
                <a href="#menu" className="toolbar-toggle"><i className="material-icons menu" /></a>
                <a href="#account" className="toolbar-toggle"><i className="material-icons person" /></a>
                <a href="#cart" className="toolbar-toggle">
                  <i>
                    <span className="material-icons shopping_basket" />
                    <span className="count">2</span>
                  </i>
                </a>
              </div>
            </div>{/* .toolbar */}
            {/* Toolbar Dropdown */}
            <div className="toolbar-dropdown">
              {/* Menu */}
              <div className="toolbar-section" id="menu">
                <div className="inner">
                  <ul className="main-navigation space-bottom">
                    <li className="menu-item-has-children">
                      <a href="#">Home</a>
                      <ul className="sub-menu">
                        <li><a href="index.html">Home Version 1</a></li>
                        <li><a href="home-v2.html">Home Version 2</a></li>
                        <li><a href="home-v3.html">Home Version 3</a></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Shop</a>
                      <ul className="sub-menu">
                        <li><a href="shop-fullwidth-sl.html">Full Width Sidebar Left</a></li>
                        <li><a href="shop-fullwidth-sr.html">Full Width Sidebar Right</a></li>
                        <li><a href="shop-fullwidth-ft.html">Full Width Filters Top</a></li>
                        <li><a href="shop-boxed-sl.html">Boxed Sidebar Left</a></li>
                        <li><a href="shop-boxed-sr.html">Boxed Sidebar Right</a></li>
                        <li><a href="shop-boxed-ft.html">Boxed Filters Top</a></li>
                        <li><a href="shop-single.html">Single Product</a></li>
                      </ul>
                    </li>
                    <li><a href="blog.html">Blog</a></li>
                    <li className="menu-item-has-children">
                      <a href="#">Gallery</a>
                      <ul className="sub-menu">
                        <li><a href="gallery-fullwidth-with-gap.html">Full Width With Gap</a></li>
                        <li><a href="gallery-fullwidth-no-gap.html">Full Width No Gap</a></li>
                        <li><a href="gallery-boxed-with-gap.html">Boxed With Gap</a></li>
                        <li><a href="gallery-boxed-no-gap.html">Boxed No Gap</a></li>
                      </ul>
                    </li>
                    <li><a href="about.html">About</a></li>
                    <li className="current-menu-item"><a href="contacts.html">Contacts</a></li>
                    <li><a href="faq.html">FAQ</a></li>
                    <li><a href="elements.html">Elements</a></li>
                  </ul>{/* .main-navigation */}
                  <ul className="list-icon text-sm">
                    <li>
                      <i className="material-icons location_on" />
                      45 Park Avenue, Apt. 303<br />New York, NY 10016, USA
                    </li>
                    <li>
                      <i className="material-icons phone" />
                      001 (917) 555-4836
                    </li>
                    <li>
                      <i className="material-icons email" />
                      <a href="mailto:info@m-store.com">info@m-store.com</a>
                    </li>
                    <li>
                      <i className="socicon-skype" />
                      <a href="#">skype_id</a>
                    </li>
                  </ul>{/* .list-icon */}
                  <span className="text-sm display-inline" style={{marginBottom: 6}}>Social accounts: &nbsp;&nbsp;</span>
                  <div className="social-bar display-inline">
                    <a href="#" className="sb-facebook" data-toggle="tooltip" data-placement="top" title="Facebook">
                      <i className="socicon-facebook" />
                    </a>
                    <a href="#" className="sb-google-plus" data-toggle="tooltip" data-placement="top" title data-original-title="Google+">
                      <i className="socicon-googleplus" />
                    </a>
                    <a href="#" className="sb-twitter" data-toggle="tooltip" data-placement="top" title="Twitter">
                      <i className="socicon-twitter" />
                    </a>
                    <a href="#" className="sb-instagram" data-toggle="tooltip" data-placement="top" title data-original-title="Instagram">
                      <i className="socicon-instagram" />
                    </a>
                  </div>
                </div>{/* .inner */}
              </div>{/* .toolbar-section#menu */}
              {/* Account (Login) */}
              <div className="toolbar-section" id="account">
                <h3 className="toolbar-title space-bottom">You are not logged in.</h3>
                <div className="inner">
                  <form method="post" className="login-form">
                    <input type="text" className="form-control" placeholder="Username" required />
                    <input type="password" className="form-control" placeholder="Password" required />
                    <div className="form-footer">
                      <div className="rememberme">
                        <label className="checkbox">
                          <input type="checkbox" defaultChecked /> Remember me
                        </label>
                      </div>
                      <div className="form-submit">
                        <button type="submit" className="btn btn-primary btn-block waves-effect waves-light">Login</button>
                      </div>
                    </div>
                  </form>{/* .login-form */}
                  <p className="text-sm space-top">Don’t have an account? <a href="#signup" className="toggle-section">Signup here</a> or with social account:</p>
                  <a href="#" className="social-signup-btn ssb-facebook">
                    <i className="socicon-facebook" />
                    <span>Signup with Facebook</span>
                  </a>
                  <a href="#" className="social-signup-btn ssb-google">
                    <i className="socicon-googleplus" />
                    <span>Signup with Google+</span>
                  </a>
                  <a href="#" className="social-signup-btn ssb-twitter">
                    <i className="socicon-twitter" />
                    <span>Signup with Twitter</span>
                  </a>
                </div>{/* .inner */}
              </div>{/* .toolbar-section#account */}
              {/* Account (Sign Up) */}
              <div className="toolbar-section" id="signup">
                <h3 className="toolbar-title space-bottom">Sign up, it's free</h3>
                <div className="inner">
                  <form method="post" className="login-form">
                    <input type="email" className="form-control" placeholder="E-mail" required />
                    <input type="password" className="form-control" placeholder="Password" required />
                    <input type="password" className="form-control" placeholder="Repeat password" required />
                    <div className="form-footer">
                      <div className="rememberme" />
                      <div className="form-submit">
                        <button type="submit" className="btn btn-primary btn-block waves-effect waves-light">Sign up</button>
                      </div>
                    </div>
                  </form>{/* .login-form */}
                  <p className="text-sm space-top">Already have an account? Than <a href="#account" className="toggle-section">Login here</a></p>
                </div>{/* .inner */}
              </div>{/* .toolbar-section#account */}
              {/* Cart */}
              <div className="toolbar-section" id="cart">
                <div className="shopping-cart">
                  {/* Item */}
                  <div className="item">
                    <a href="shop-single.html" className="item-thumb">
                      <img src="img/cart/item01.jpg" alt="Item" />
                    </a>
                    <div className="item-details">
                      <h3 className="item-title"><a href="shop-single.html">Concrete Lamp</a></h3>
                      <h4 className="item-price">$85.90</h4>
                      <div className="count-input">
                        <a className="incr-btn" data-action="decrease" href="#">–</a>
                        <input className="quantity" type="text" defaultValue={1} />
                        <a className="incr-btn" data-action="increase" href="#">+</a>
                      </div>
                    </div>
                    <a href="#" className="item-remove" data-toggle="tooltip" data-placement="top" title="Remove">
                      <i className="material-icons remove_shopping_cart" />
                    </a>
                  </div>{/* .item */}
                  {/* Item */}
                  <div className="item">
                    <a href="shop-single.html" className="item-thumb">
                      <img src="img/cart/item02.jpg" alt="Item" />
                    </a>
                    <div className="item-details">
                      <h3 className="item-title"><a href="shop-single.html">Resin Storage Box</a></h3>
                      <h4 className="item-price">$38.00</h4>
                      <div className="count-input">
                        <a className="incr-btn" data-action="decrease" href="#">–</a>
                        <input className="quantity" type="text" defaultValue={2} />
                        <a className="incr-btn" data-action="increase" href="#">+</a>
                      </div>
                    </div>
                    <a href="#" className="item-remove" data-toggle="tooltip" data-placement="top" title="Remove">
                      <i className="material-icons remove_shopping_cart" />
                    </a>
                  </div>{/* .item */}
                  {/* Subtotal */}
                  <div className="cart-subtotal space-bottom">
                    <div className="column">
                      <h3 className="toolbar-title">Subtotal:</h3>
                    </div>
                    <div className="column">
                      <h3 className="amount">$161.90</h3>
                    </div>
                  </div>{/* .subtotal */}
                  {/* Buttons */}
                  <div className="text-right">
                    <a href="#" className="btn btn-default btn-ghost close-dropdown">Continue Shopping</a>
                    <a href="#checkout" className="btn btn-primary waves-effect waves-light toggle-section">Proceed to Checkout</a>
                  </div>
                </div>{/* .shopping-cart */}
              </div>{/* .toolbar-section#cart */}
              {/* Checkout */}
              <div className="toolbar-section" id="checkout">
                <form method="post" className="checkout-form container">
                  <div className="cart-subtotal space-bottom">
                    <div className="column">
                      <h3 className="toolbar-title">Checkout</h3>
                    </div>
                    <div className="column">
                      <h3 className="amount"><small className="hidden-xs">3 items&nbsp;&nbsp;&nbsp;</small>$161.90</h3>
                    </div>
                  </div>{/* .subtotal */}
                  <div className="row">
                    <div className="col-sm-6">
                      <input type="text" className="form-control" name="co_f_name" placeholder="First name" required />
                      <input type="email" className="form-control" name="co_email" placeholder="Email" required />
                      <input type="text" className="form-control" name="co_address1" placeholder="Address 1" required />
                    </div>
                    <div className="col-sm-6">
                      <input type="text" className="form-control" name="co_l_name" placeholder="Last name" required />
                      <input type="tel" className="form-control" name="co_phone" placeholder="Phone" required />
                      <input type="text" className="form-control" name="co_address2" placeholder="Address 2" />
                    </div>
                  </div>{/* .row */}
                  <input type="text" className="form-control" name="co_company" placeholder="Company" />
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-element form-select">
                        <select className="form-control" name="co_country">
                          <option value>Country</option>
                          <option value="australia">Australia</option>
                          <option value="gb">Great Britain</option>
                          <option value="poland">Poland</option>
                          <option value="switzerland">Switzerland</option>
                          <option value="usa">USA</option>
                        </select>
                      </div>
                      <div className="form-element form-select">
                        <select className="form-control" name="co_city">
                          <option value>City</option>
                          <option value="bern">Bern</option>
                          <option value="london">London</option>
                          <option value="ny">New York</option>
                          <option value="warsaw">Warsaw</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-element form-select">
                        <select className="form-control" name="co_state">
                          <option value>State</option>
                          <option value={1}>State 1</option>
                          <option value={2}>State 2</option>
                          <option value={3}>State 3</option>
                          <option value={4}>State 4</option>
                          <option value={5}>State 5</option>
                        </select>
                      </div>
                      <input type="text" className="form-control" name="co_zip" placeholder="ZIP code" required />
                    </div>
                  </div>{/* .row */}
                  <div className="form-group">
                    <label className="radio radio-inline">
                      <input type="radio" name="co_shipping" defaultChecked /> Ship to this address
                    </label>
                    <label className="radio radio-inline">
                      <input type="radio" name="co_shipping" /> Ship to different address
                    </label>
                  </div>{/* .form-group */}
                  <div className="text-right">
                    <a href="#cart" className="btn btn-default btn-ghost icon-left toggle-section">
                      <i className="material-icons arrow_back" />
                      Back To Cart
                    </a>
                    <button type="submit" className="btn btn-primary waves-effect waves-light">Checkout</button>
                  </div>
                </form>{/* .checkout-form.container */}
              </div>{/* .toolbar-section#checkout */}
            </div>{/* .toolbar-dropdown */}
          </header>{/* .navbar.navbar-sticky */}
          {/* Google Map */}
          {/* Data API:
         data-height="500" height of the map in pixels
         data-address="Your address" string
         data-zoom="number" to control map zoom when loaded
         data-disable-controls="false/true" enable/disable map controls like pan, zoom, etc.
         data-scrollwheel="true/false" enable/disable mouse scroll wheel zoom
         data-marker="path_to_your_image" path to custom marker image
         data-marker-title=" Your title" appears on marker hover
         data-styles="[array]" you can adjust the look and feel of your map. Recommend to use https://snazzymaps.com
     */}
          <div className="google-map" data-height={480} data-address="New York, USA" data-zoom={6} data-disable-controls="false" data-scrollwheel="false" data-marker="img/map-marker.png" data-marker-title="A-Shop Office" data-styles="[{&quot;featureType&quot;:&quot;road&quot;,&quot;elementType&quot;:&quot;geometry&quot;,&quot;stylers&quot;:[{&quot;lightness&quot;:100},{&quot;visibility&quot;:&quot;simplified&quot;}]},{&quot;featureType&quot;:&quot;water&quot;,&quot;elementType&quot;:&quot;geometry&quot;,&quot;stylers&quot;:[{&quot;visibility&quot;:&quot;on&quot;},{&quot;color&quot;:&quot;#C6E2FF&quot;}]},{&quot;featureType&quot;:&quot;poi&quot;,&quot;elementType&quot;:&quot;geometry.fill&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#C5E3BF&quot;}]},{&quot;featureType&quot;:&quot;road&quot;,&quot;elementType&quot;:&quot;geometry.fill&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#D1D1B8&quot;}]}]" />{/* .google-map */}
          {/* Container */}
          <section className="container space-top-3x">
            <h1>Contacts</h1>
            <div className="row padding-top">
              <div className="col-sm-5 padding-bottom-2x">
                <ul className="list-icon">
                  <li>
                    <i className="material-icons location_on" />
                    45 Park Avenue, Apt. 303<br />New York, NY 10016, USA
                  </li>
                  <li>
                    <i className="material-icons phone" />
                    001 (917) 555-4836
                  </li>
                  <li>
                    <i className="material-icons phone_iphone" />
                    001 (800) 333-6578
                  </li>
                  <li>
                    <i className="material-icons email" />
                    <a href="mailto:info@m-store.com">info@m-store.com</a>
                  </li>
                  <li>
                    <i className="socicon-skype" />
                    <a href="#">skype_id</a>
                  </li>
                </ul>{/* .list-icon */}
                <p>Working hours: <span className="text-gray">10am - 8pm, Mn - St</span></p>
                <span className="display-inline" style={{marginBottom: 6}}>Social accounts: &nbsp;&nbsp;</span>
                <div className="social-bar display-inline">
                  <a href="#" className="sb-facebook" data-toggle="tooltip" data-placement="top" title="Facebook">
                    <i className="socicon-facebook" />
                  </a>
                  <a href="#" className="sb-google-plus" data-toggle="tooltip" data-placement="top" title data-original-title="Google+">
                    <i className="socicon-googleplus" />
                  </a>
                  <a href="#" className="sb-twitter" data-toggle="tooltip" data-placement="top" title="Twitter">
                    <i className="socicon-twitter" />
                  </a>
                  <a href="#" className="sb-instagram" data-toggle="tooltip" data-placement="top" title data-original-title="Instagram">
                    <i className="socicon-instagram" />
                  </a>
                </div>{/* .social-bar */}
              </div>{/* .col-sm-5 */}
              <div className="col-sm-7 padding-bottom-2x">
                <form method="post" className="ajax-form">
                  <div className="contact-form container">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-element">
                          <input type="text" className="form-control" name="name" placeholder="Name" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-element">
                          <input type="email" className="form-control" name="email" placeholder="E-mail" />
                        </div>
                      </div>
                    </div>{/* .row */}
                    <div className="form-element">
                      <textarea rows={6} className="form-control" name="message" placeholder="Message" defaultValue={""} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block waves-effect waves-light space-top-none">Send Message</button>
                  </div>
                  <div className="status-message" />
                </form>
              </div>{/* .col-sm-7 */}
            </div>{/* .row */}
          </section>{/* .container */}
          {/* Footer */}
          <footer className="footer space-top-3x">
            <div className="column">
              <p className="text-sm">Need support? Call <span className="text-primary">001 (917) 555-4836</span></p>
              <div className="social-bar text-center space-bottom">
                <a href="#" className="sb-skype" data-toggle="tooltip" data-placement="top" title="Skype">
                  <i className="socicon-skype" />
                </a>
                <a href="#" className="sb-facebook" data-toggle="tooltip" data-placement="top" title="Facebook">
                  <i className="socicon-facebook" />
                </a>
                <a href="#" className="sb-google-plus" data-toggle="tooltip" data-placement="top" title data-original-title="Google+">
                  <i className="socicon-googleplus" />
                </a>
                <a href="#" className="sb-twitter" data-toggle="tooltip" data-placement="top" title="Twitter">
                  <i className="socicon-twitter" />
                </a>
                <a href="#" className="sb-instagram" data-toggle="tooltip" data-placement="top" title data-original-title="Instagram">
                  <i className="socicon-instagram" />
                </a>
              </div>{/* .social-bar */}
              <p className="copyright">© 2016. Made with <i className="text-danger material-icons favorite" /> by rokaux.</p>
            </div>{/* .column */}
            <div className="column">
              <h3 className="widget-title">
                Subscription
                <small>To receive latest offers and discounts from the shop.</small>
              </h3>
              <form action="//rokaux.us12.list-manage.com/subscribe/post?u=c7103e2c981361a6639545bd5&id=1194bb7544" method="post" target="_blank" className="subscribe-form" noValidate>
                <input type="email" className="form-control" name="EMAIL" placeholder="Your e-mail" />
                {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_c7103e2c981361a6639545bd5_1194bb7544" tabIndex={-1} defaultValue /></div>
                <button type="submit"><i className="material-icons send" /></button>
              </form>
            </div>{/* .column */}
            <div className="column">
              <h3 className="widget-title">
                Payment Methods
                <small>We support one of the following payment methods.</small>
              </h3>
              <div className="cards"><img src="img/cards.png" alt="Cards" /></div>
              {/* Scroll To Top Button */}
              <div className="scroll-to-top-btn"><i className="material-icons trending_flat" /></div>
            </div>{/* .column */}
          </footer>{/* .footer */}
        </div>{/* .page-wrapper */}
        {/* JavaScript (jQuery) libraries, plugins and custom scripts */}
        {/* <body> */}
      </div>
    )
  }
}