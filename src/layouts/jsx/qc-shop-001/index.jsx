React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="utf-8" />
        <title>M-Store | Modern E-Commerce Template</title>
        {/*SEO Meta Tags*/}
        <meta name="description" content="M-Store - Modern E-Commerce Template" />
        <meta name="keywords" content="shop, e-commerce, modern, minimalist style, responsive, online store, business, mobile, blog, bootstrap, html5, css3, jquery, js, gallery, slider, touch, creative, clean" />
        <meta name="author" content="Rokaux" />
        {/*Mobile Specific Meta Tag*/}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        {/*Favicon*/}
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        {/* Google Material Icons */}
        <link href="css/vendor/material-icons.min.css" rel="stylesheet" media="screen" />
        {/* Brand Icons */}
        <link href="css/vendor/socicon.min.css" rel="stylesheet" media="screen" />
        {/* Bootstrap */}
        <link href="css/vendor/bootstrap.min.css" rel="stylesheet" media="screen" />
        {/* Theme Styles */}
        <link href="css/theme.min.css" rel="stylesheet" media="screen" />
        {/* Page Preloading */}
        {/* Modernizr */}
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
                    <li className="menu-item-has-children current-menu-item">
                      <a href="#">Home</a>
                      <ul className="sub-menu">
                        <li className="current-menu-item"><a href="index.html">Home Version 1</a></li>
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
                    <li><a href="contacts.html">Contacts</a></li>
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
          {/* Hero Slider */}
          {/* Data API:
      data-loop="true/false" enable/disable looping
      data-autoplay="true/false" enable/disable carousel autoplay
      data-interval="3000" autoplay interval timeout in miliseconds
      Simply add necessary data attribute to the ".hero-carousel" with appropriate value to adjust carousel functionality.
     */}
          <section className="hero-slider" data-loop="true" data-autoplay="true" data-interval={7000}>
            <div className="inner">
              <div className="slide" style={{backgroundImage: 'url(img/hero-slider/01.jpg)'}}>
                <div className="container">
                  <div className="absolute from-top" style={{top: '13%'}}>
                    <span className="h1 hidden-xs">New SPA<br />Cosmetics</span>
                  </div>
                  <div className="absolute text-right from-bottom" style={{bottom: '13%', right: 15}}>
                    <span className="h2"><span className="text-thin">Only</span><br /><strong>$127.99</strong></span><br />
                    <a href="#" className="btn btn-primary btn-with-icon-right waves-effect waves-light space-top-none">
                      View Offer
                      <i className="material-icons arrow_forward" />
                    </a>
                  </div>
                </div>
              </div>{/* .slide */}
              <div className="slide" style={{backgroundImage: 'url(img/hero-slider/02.jpg)'}}>
                <div className="container text-center padding-top-3x">
                  <span className="h1 from-bottom">Stylish Chair</span><br />
                  <span className="h2 from-bottom"><span className="text-thin">Special offer: </span> <strong>-25%</strong></span><br />
                  <a href="#" className="btn btn-primary btn-with-icon-right waves-effect waves-light scale-up">
                    View Offer
                    <i className="material-icons arrow_forward" />
                  </a>
                </div>
              </div>{/* .slide */}
              <div className="slide" style={{backgroundImage: 'url(img/hero-slider/03.jpg)'}}>
                <div className="container padding-top-3x">
                  <span className="h1 space-top from-left">Dior Sunglasses</span><br />
                  <span className="h2 from-right"><span className="text-thin">Only <span className="hidden-xs">today</span></span> <strong>-30%</strong></span><br />
                  <a href="#" className="btn btn-primary btn-with-icon-right waves-effect waves-light scale-up">
                    View Offer
                    <i className="material-icons arrow_forward" />
                  </a>
                </div>
              </div>{/* .slide */}
            </div>{/* .inner */}
          </section>{/* .hero-slider */}
          {/* Content Wide */}
          <section className="container-fluid padding-top-3x">
            {/* Featured Categories */}
            <h3 className="text-center padding-top">Categories</h3>
            <div className="row padding-top padding-bottom-3x">
              <div className="col-sm-3 col-xs-6">
                <a href="#" className="category-link">
                  <img src="img/categories/cat01.jpg" alt="Category" />
                  Clocks
                </a>{/* .category-link */}
              </div>{/* .col-sm-4 */}
              <div className="col-sm-3 col-xs-6">
                <a href="#" className="category-link">
                  <img src="img/categories/cat02.jpg" alt="Category" />
                  Furniture
                </a>{/* .category-link */}
              </div>{/* .col-sm-4 */}
              <div className="col-sm-3 col-xs-6">
                <a href="#" className="category-link">
                  <img src="img/categories/cat03.jpg" alt="Category" />
                  Lightning
                </a>{/* .category-link */}
              </div>{/* .col-sm-4 */}
              <div className="col-sm-3 col-xs-6">
                <a href="#" className="category-link">
                  <img src="img/categories/cat04.jpg" alt="Category" />
                  Bags
                </a>{/* .category-link */}
              </div>{/* .col-sm-4 */}
            </div>{/* .row */}
            <div className="row padding-top">
              {/* Special Offer */}
              <div className="col-lg-3 col-md-4">
                <div className="info-box text-center">
                  <h2>Special Offer<br /><span className="text-danger">-30%</span></h2>
                  <a href="shop-single.html" className="inline">
                    <img src="img/shop/special-offer.jpg" alt="Special Offer" />
                  </a>
                  <h3 className="lead text-normal space-bottom-half"><a href="shop-single.html" className="link-title">FLOS Outdoor Lightning</a></h3>
                  <span className="lead text-normal text-gray text-crossed">$800.00</span>
                  <span className="h4 text-normal text-danger">$560.00</span>
                  {/* Countdown */}
                  {/* Date Format: month/day/year. "date-time" data attribute is required. */}
                  <div className="countdown space-top-half padding-top" data-date-time="07/30/2017 12:00:00">
                    <div className="item">
                      <div className="days">00</div>
                      <span className="days_ref">Days</span>
                    </div>
                    <div className="item">
                      <div className="hours">00</div>
                      <span className="hours_ref">Hours</span>
                    </div>
                    <div className="item">
                      <div className="minutes">00</div>
                      <span className="minutes_ref">Mins</span>
                    </div>
                    <div className="item">
                      <div className="seconds">00</div>
                      <span className="seconds_ref">Secs</span>
                    </div>
                  </div>{/* .counter */}
                </div>{/* .info-box */}
                <div className="padding-bottom-2x visible-xs" />
              </div>{/* .col-lg-3.col-md-4 */}
              {/* Products */}
              <div className="col-lg-9 col-md-8">
                {/* Nav Tabs */}
                <ul className="nav-tabs text-center" role="tablist">
                  <li className="active"><a href="#newcomers" role="tab" data-toggle="tab">New Arrivals</a></li>
                  <li><a href="#toprated" role="tab" data-toggle="tab">Top Rated</a></li>
                  <li><a href="#onsale" role="tab" data-toggle="tab">On Sale</a></li>
                </ul>{/* .nav-tabs */}
                {/* Tab Panes */}
                <div className="tab-content">
                  {/* #newcomers */}
                  <div role="tabpanel" className="tab-pane transition fade scale in active" id="newcomers">
                    <div className="row space-top-half">
                      <div className="col-lg-3 col-sm-6">
                        <div className="shop-item">
                          <div className="shop-thumbnail">
                            <span className="shop-label text-danger">Sale</span>
                            <a href="shop-single.html" className="item-link" />
                            <img src="img/shop/th01.jpg" alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                                <i className="material-icons favorite_border" />
                              </a>
                              <a href="#" className="add-to-cart">
                                <em>Add to Cart</em>
                                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                                  <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="shop-item-details">
                            <h3 className="shop-item-title"><a href="shop-single.html">Storage Box</a></h3>
                            <span className="shop-item-price">
                              <span className="old-price">$49.00</span>
                              $38.00
                            </span>
                          </div>
                        </div>{/* .shop-item */}
                      </div>{/* .col-lg-3.col-sm-6 */}
                      <div className="col-lg-3 col-sm-6">
                        <div className="shop-item">
                          <div className="shop-thumbnail">
                            <a href="shop-single.html" className="item-link" />
                            <img src="img/shop/th02.jpg" alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                                <i className="material-icons favorite_border" />
                              </a>
                              <a href="#" className="add-to-cart">
                                <em>Add to Cart</em>
                                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                                  <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="shop-item-details">
                            <h3 className="shop-item-title"><a href="shop-single.html">Shoulder Bag</a></h3>
                            <span className="shop-item-price">
                              $125.00
                            </span>
                          </div>
                        </div>{/* .shop-item */}
                      </div>{/* .col-lg-3.col-sm-6 */}
                      <div className="col-lg-3 col-sm-6">
                        <div className="shop-item">
                          <div className="shop-thumbnail">
                            <a href="shop-single.html" className="item-link" />
                            <img src="img/shop/th03.jpg" alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                                <i className="material-icons favorite_border" />
                              </a>
                              <a href="#" className="add-to-cart">
                                <em>Add to Cart</em>
                                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                                  <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="shop-item-details">
                            <h3 className="shop-item-title"><a href="shop-single.html">Glass Vase</a></h3>
                            <span className="shop-item-price">
                              $62.50
                            </span>
                          </div>
                        </div>{/* .shop-item */}
                      </div>{/* .col-lg-3.col-sm-6 */}
                      <div className="col-lg-3 col-sm-6">
                        <div className="shop-item">
                          <div className="shop-thumbnail">
                            <a href="shop-single.html" className="item-link" />
                            <img src="img/shop/th04.jpg" alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                                <i className="material-icons favorite_border" />
                              </a>
                              <a href="#" className="add-to-cart">
                                <em>Add to Cart</em>
                                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                                  <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="shop-item-details">
                            <h3 className="shop-item-title"><a href="shop-single.html">Alarm Clock</a></h3>
                            <span className="shop-item-price">
                              $178.00
                            </span>
                          </div>
                        </div>{/* .shop-item */}
                      </div>{/* .col-lg-3.col-sm-6 */}
                    </div>{/* .row */}
                    <div className="row">
                      <div className="col-lg-3 col-sm-6">
                        <div className="shop-item">
                          <div className="shop-thumbnail">
                            <a href="shop-single.html" className="item-link" />
                            <img src="img/shop/th05.jpg" alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                                <i className="material-icons favorite_border" />
                              </a>
                              <a href="#" className="add-to-cart">
                                <em>Add to Cart</em>
                                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                                  <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="shop-item-details">
                            <h3 className="shop-item-title"><a href="shop-single.html">Wall Clock</a></h3>
                            <span className="shop-item-price">
                              $69.00
                            </span>
                          </div>
                        </div>{/* .shop-item */}
                      </div>{/* .col-lg-3.col-sm-6 */}
                      <div className="col-lg-3 col-sm-6">
                        <div className="shop-item">
                          <div className="shop-thumbnail">
                            <a href="shop-single.html" className="item-link" />
                            <img src="img/shop/th06.jpg" alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                                <i className="material-icons favorite_border" />
                              </a>
                              <a href="#" className="add-to-cart">
                                <em>Add to Cart</em>
                                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                                  <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="shop-item-details">
                            <h3 className="shop-item-title"><a href="shop-single.html">LED Lighting</a></h3>
                            <span className="shop-item-price">
                              $130.00
                            </span>
                          </div>
                        </div>{/* .shop-item */}
                      </div>{/* .col-lg-3.col-sm-6 */}
                      <div className="col-lg-3 col-sm-6">
                        <div className="shop-item">
                          <div className="shop-thumbnail">
                            <span className="shop-label text-warning">Popular</span>
                            <a href="shop-single.html" className="item-link" />
                            <img src="img/shop/th07.jpg" alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                                <i className="material-icons favorite_border" />
                              </a>
                              <a href="#" className="add-to-cart">
                                <em>Add to Cart</em>
                                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                                  <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="shop-item-details">
                            <h3 className="shop-item-title"><a href="shop-single.html">Sunglasses</a></h3>
                            <span className="shop-item-price">
                              $99.00
                            </span>
                          </div>
                        </div>{/* .shop-item */}
                      </div>{/* .col-lg-3.col-sm-6 */}
                      <div className="col-lg-3 col-sm-6">
                        <div className="shop-item">
                          <div className="shop-thumbnail">
                            <a href="shop-single.html" className="item-link" />
                            <img src="img/shop/th08.jpg" alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                                <i className="material-icons favorite_border" />
                              </a>
                              <a href="#" className="add-to-cart">
                                <em>Add to Cart</em>
                                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                                  <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="shop-item-details">
                            <h3 className="shop-item-title"><a href="shop-single.html">Hook Basket</a></h3>
                            <span className="shop-item-price">
                              $112.35
                            </span>
                          </div>
                        </div>{/* .shop-item */}
                      </div>{/* .col-lg-3.col-sm-6 */}
                    </div>{/* .row */}
                  </div>{/* .tab-pane#newcomers */}
                  {/* #toprated */}
                  <div role="tabpanel" className="tab-pane transition fade scale" id="toprated">
                    <div className="row">
                      <div className="col-lg-3 col-sm-6">
                        <div className="shop-item">
                          <div className="shop-thumbnail">
                            <span className="item-rating text-warning">
                              <i className="material-icons star" />
                              <i className="material-icons star" />
                              <i className="material-icons star" />
                              <i className="material-icons star" />
                              <i className="material-icons star" />
                            </span>
                            <a href="shop-single.html" className="item-link" />
                            <img src="img/shop/th09.jpg" alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                                <i className="material-icons favorite_border" />
                              </a>
                              <a href="#" className="add-to-cart">
                                <em>Add to Cart</em>
                                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                                  <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="shop-item-details">
                            <h3 className="shop-item-title"><a href="shop-single.html">Leather Case</a></h3>
                            <span className="shop-item-price">
                              $118.00
                            </span>
                          </div>
                        </div>{/* .shop-item */}
                      </div>{/* .col-lg-3.col-sm-6 */}
                      <div className="col-lg-3 col-sm-6">
                        <div className="shop-item">
                          <div className="shop-thumbnail">
                            <span className="item-rating text-warning">
                              <i className="material-icons star" />
                              <i className="material-icons star" />
                              <i className="material-icons star" />
                              <i className="material-icons star" />
                              <i className="material-icons star" />
                            </span>
                            <a href="shop-single.html" className="item-link" />
                            <img src="img/shop/th10.jpg" alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                                <i className="material-icons favorite_border" />
                              </a>
                              <a href="#" className="add-to-cart">
                                <em>Add to Cart</em>
                                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                                  <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="shop-item-details">
                            <h3 className="shop-item-title"><a href="shop-single.html">Concrete Lamp</a></h3>
                            <span className="shop-item-price">
                              $85.90
                            </span>
                          </div>
                        </div>{/* .shop-item */}
                      </div>{/* .col-lg-3.col-sm-6 */}
                      <div className="col-lg-3 col-sm-6">
                        <div className="shop-item">
                          <div className="shop-thumbnail">
                            <span className="item-rating text-warning">
                              <i className="material-icons star" />
                              <i className="material-icons star" />
                              <i className="material-icons star" />
                              <i className="material-icons star" />
                              <i className="material-icons star_half" />
                            </span>
                            <a href="shop-single.html" className="item-link" />
                            <img src="img/shop/th11.jpg" alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                                <i className="material-icons favorite_border" />
                              </a>
                              <a href="#" className="add-to-cart">
                                <em>Add to Cart</em>
                                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                                  <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="shop-item-details">
                            <h3 className="shop-item-title"><a href="shop-single.html">Stylish Chair</a></h3>
                            <span className="shop-item-price">
                              $417.00
                            </span>
                          </div>
                        </div>{/* .shop-item */}
                      </div>{/* .col-lg-3.col-sm-6 */}
                      <div className="col-lg-3 col-sm-6">
                        <div className="shop-item">
                          <div className="shop-thumbnail">
                            <span className="item-rating text-warning">
                              <i className="material-icons star" />
                              <i className="material-icons star" />
                              <i className="material-icons star" />
                              <i className="material-icons star" />
                              <i className="material-icons star_border" />
                            </span>
                            <a href="shop-single.html" className="item-link" />
                            <img src="img/shop/th12.jpg" alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                                <i className="material-icons favorite_border" />
                              </a>
                              <a href="#" className="add-to-cart">
                                <em>Add to Cart</em>
                                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                                  <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="shop-item-details">
                            <h3 className="shop-item-title"><a href="shop-single.html">Desktop Light</a></h3>
                            <span className="shop-item-price">
                              $245.00
                            </span>
                          </div>
                        </div>{/* .shop-item */}
                      </div>{/* .col-lg-3.col-sm-6 */}
                    </div>{/* .row */}
                    <div className="row">
                      <div className="col-lg-3 col-sm-6">
                        <div className="shop-item">
                          <div className="shop-thumbnail">
                            <span className="item-rating text-warning">
                              <i className="material-icons star" />
                              <i className="material-icons star" />
                              <i className="material-icons star" />
                              <i className="material-icons star" />
                              <i className="material-icons star_border" />
                            </span>
                            <a href="shop-single.html" className="item-link" />
                            <img src="img/shop/th13.jpg" alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                                <i className="material-icons favorite_border" />
                              </a>
                              <a href="#" className="add-to-cart">
                                <em>Add to Cart</em>
                                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                                  <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="shop-item-details">
                            <h3 className="shop-item-title"><a href="shop-single.html">Storage Jar</a></h3>
                            <span className="shop-item-price">
                              $19.80
                            </span>
                          </div>
                        </div>{/* .shop-item */}
                      </div>{/* .col-lg-3.col-sm-6 */}
                      <div className="col-lg-3 col-sm-6">
                        <div className="shop-item">
                          <div className="shop-thumbnail">
                            <span className="item-rating text-warning">
                              <i className="material-icons star" />
                              <i className="material-icons star" />
                              <i className="material-icons star" />
                              <i className="material-icons star_half" />
                              <i className="material-icons star_border" />
                            </span>
                            <a href="shop-single.html" className="item-link" />
                            <img src="img/shop/th14.jpg" alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                                <i className="material-icons favorite_border" />
                              </a>
                              <a href="#" className="add-to-cart">
                                <em>Add to Cart</em>
                                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                                  <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="shop-item-details">
                            <h3 className="shop-item-title"><a href="shop-single.html">Ceramic Watch</a></h3>
                            <span className="shop-item-price">
                              $299.00
                            </span>
                          </div>
                        </div>{/* .shop-item */}
                      </div>{/* .col-lg-3.col-sm-6 */}
                      <div className="col-lg-3 col-sm-6">
                        <div className="shop-item">
                          <div className="shop-thumbnail">
                            <span className="item-rating text-warning">
                              <i className="material-icons star" />
                              <i className="material-icons star" />
                              <i className="material-icons star" />
                              <i className="material-icons star_half" />
                              <i className="material-icons star_border" />
                            </span>
                            <a href="shop-single.html" className="item-link" />
                            <img src="img/shop/th15.jpg" alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                                <i className="material-icons favorite_border" />
                              </a>
                              <a href="#" className="add-to-cart">
                                <em>Add to Cart</em>
                                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                                  <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="shop-item-details">
                            <h3 className="shop-item-title"><a href="shop-single.html">Tissue Holder</a></h3>
                            <span className="shop-item-price">
                              $76.40
                            </span>
                          </div>
                        </div>{/* .shop-item */}
                      </div>{/* .col-lg-3.col-sm-6 */}
                      <div className="col-lg-3 col-sm-6">
                        <div className="shop-item">
                          <div className="shop-thumbnail">
                            <span className="item-rating text-warning">
                              <i className="material-icons star" />
                              <i className="material-icons star" />
                              <i className="material-icons star" />
                              <i className="material-icons star_border" />
                              <i className="material-icons star_border" />
                            </span>
                            <a href="shop-single.html" className="item-link" />
                            <img src="img/shop/th16.jpg" alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                                <i className="material-icons favorite_border" />
                              </a>
                              <a href="#" className="add-to-cart">
                                <em>Add to Cart</em>
                                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                                  <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="shop-item-details">
                            <h3 className="shop-item-title"><a href="shop-single.html">Pendant Lamp</a></h3>
                            <span className="shop-item-price">
                              $27.00
                            </span>
                          </div>
                        </div>{/* .shop-item */}
                      </div>{/* .col-lg-3.col-sm-6 */}
                    </div>{/* .row */}
                  </div>{/* .tab-pane#toprated */}
                  {/* #onsale */}
                  <div role="tabpanel" className="tab-pane transition fade scale" id="onsale">
                    <div className="row">
                      <div className="col-lg-3 col-sm-6">
                        <div className="shop-item">
                          <div className="shop-thumbnail">
                            <span className="shop-label text-danger">Sale</span>
                            <a href="#" className="item-link" />
                            <img src="img/shop/th05.jpg" alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                                <i className="material-icons favorite_border" />
                              </a>
                              <a href="#" className="add-to-cart">
                                <em>Add to Cart</em>
                                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                                  <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="shop-item-details">
                            <h3 className="shop-item-title"><a href="#">Wall Clock</a></h3>
                            <span className="shop-item-price">
                              <span className="old-price">$69.00</span>
                              $48.00
                            </span>
                          </div>
                        </div>{/* .shop-item */}
                      </div>{/* .col-lg-3.col-sm-6 */}
                      <div className="col-lg-3 col-sm-6">
                        <div className="shop-item">
                          <div className="shop-thumbnail">
                            <span className="shop-label text-danger">Sale</span>
                            <a href="#" className="item-link" />
                            <img src="img/shop/th06.jpg" alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                                <i className="material-icons favorite_border" />
                              </a>
                              <a href="#" className="add-to-cart">
                                <em>Add to Cart</em>
                                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                                  <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="shop-item-details">
                            <h3 className="shop-item-title"><a href="#">LED Lighting</a></h3>
                            <span className="shop-item-price">
                              <span className="old-price">$155.00</span>
                              $130.00
                            </span>
                          </div>
                        </div>{/* .shop-item */}
                      </div>{/* .col-lg-3.col-sm-6 */}
                      <div className="col-lg-3 col-sm-6">
                        <div className="shop-item">
                          <div className="shop-thumbnail">
                            <span className="shop-label text-danger">Sale</span>
                            <a href="#" className="item-link" />
                            <img src="img/shop/th04.jpg" alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                                <i className="material-icons favorite_border" />
                              </a>
                              <a href="#" className="add-to-cart">
                                <em>Add to Cart</em>
                                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                                  <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="shop-item-details">
                            <h3 className="shop-item-title"><a href="#">Alarm Clock</a></h3>
                            <span className="shop-item-price">
                              <span className="old-price">$225.00</span>
                              $178.00
                            </span>
                          </div>
                        </div>{/* .shop-item */}
                      </div>{/* .col-lg-3.col-sm-6 */}
                      <div className="col-lg-3 col-sm-6">
                        <div className="shop-item">
                          <div className="shop-thumbnail">
                            <span className="shop-label text-danger">Sale</span>
                            <a href="#" className="item-link" />
                            <img src="img/shop/th08.jpg" alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                                <i className="material-icons favorite_border" />
                              </a>
                              <a href="#" className="add-to-cart">
                                <em>Add to Cart</em>
                                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                                  <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="shop-item-details">
                            <h3 className="shop-item-title"><a href="#">Hook Basket</a></h3>
                            <span className="shop-item-price">
                              <span className="old-price">$180.00</span>
                              $112.35
                            </span>
                          </div>
                        </div>{/* .shop-item */}
                      </div>{/* .col-lg-3.col-sm-6 */}
                      <div className="col-lg-3 col-sm-6">
                        <div className="shop-item">
                          <div className="shop-thumbnail">
                            <span className="shop-label text-danger">Sale</span>
                            <a href="shop-single.html" className="item-link" />
                            <img src="img/shop/th01.jpg" alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                                <i className="material-icons favorite_border" />
                              </a>
                              <a href="#" className="add-to-cart">
                                <em>Add to Cart</em>
                                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                                  <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="shop-item-details">
                            <h3 className="shop-item-title"><a href="shop-single.html">Storage Box</a></h3>
                            <span className="shop-item-price">
                              <span className="old-price">$49.00</span>
                              $38.00
                            </span>
                          </div>
                        </div>{/* .shop-item */}
                      </div>{/* .col-lg-3.col-sm-6 */}
                      <div className="col-lg-3 col-sm-6">
                        <div className="shop-item">
                          <div className="shop-thumbnail">
                            <span className="shop-label text-danger">Sale</span>
                            <a href="shop-single.html" className="item-link" />
                            <img src="img/shop/th07.jpg" alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                                <i className="material-icons favorite_border" />
                              </a>
                              <a href="#" className="add-to-cart">
                                <em>Add to Cart</em>
                                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                                  <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="shop-item-details">
                            <h3 className="shop-item-title"><a href="shop-single.html">Sunglasses</a></h3>
                            <span className="shop-item-price">
                              <span className="old-price">$122.00</span>
                              $99.00
                            </span>
                          </div>
                        </div>{/* .shop-item */}
                      </div>{/* .col-lg-3.col-sm-6 */}
                      <div className="col-lg-3 col-sm-6">
                        <div className="shop-item">
                          <div className="shop-thumbnail">
                            <span className="shop-label text-danger">Sale</span>
                            <a href="shop-single.html" className="item-link" />
                            <img src="img/shop/th09.jpg" alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                                <i className="material-icons favorite_border" />
                              </a>
                              <a href="#" className="add-to-cart">
                                <em>Add to Cart</em>
                                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                                  <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="shop-item-details">
                            <h3 className="shop-item-title"><a href="shop-single.html">Leather Case</a></h3>
                            <span className="shop-item-price">
                              <span className="old-price">$160.00</span>
                              $118.00
                            </span>
                          </div>
                        </div>{/* .shop-item */}
                      </div>{/* .col-lg-3.col-sm-6 */}
                      <div className="col-lg-3 col-sm-6">
                        <div className="shop-item">
                          <div className="shop-thumbnail">
                            <span className="shop-label text-danger">Sale</span>
                            <a href="shop-single.html" className="item-link" />
                            <img src="img/shop/th02.jpg" alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                                <i className="material-icons favorite_border" />
                              </a>
                              <a href="#" className="add-to-cart">
                                <em>Add to Cart</em>
                                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                                  <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="shop-item-details">
                            <h3 className="shop-item-title"><a href="shop-single.html">Shoulder Bag</a></h3>
                            <span className="shop-item-price">
                              <span className="old-price">$199.00</span>
                              $125.00
                            </span>
                          </div>
                        </div>{/* .shop-item */}
                      </div>{/* .col-lg-3.col-sm-6 */}
                    </div>{/* .row */}
                  </div>{/* .tab-pane#onsale */}
                </div>{/* .tab-content */}
              </div>{/* .col-lg-9.col-md-8 */}
            </div>{/* .row */}
          </section>{/* .container-fluid */}
          {/* Brands */}
          <section className="container padding-top-2x padding-bottom">
            <hr />
            <h3 className="text-center padding-top-2x">More brands</h3>
            <div className="row padding-top">
              {/* Brand */}
              <div className="col-sm-4 col-xs-6">
                <a href="#" className="brand">
                  <div className="brand-logo opacity-75">
                    <img src="img/brands/01.svg" alt="Brand" />
                  </div>
                  <p className="brand-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi est corrupti sapiente itaque.</p>
                </a>
              </div>
              {/* Brand */}
              <div className="col-sm-4 col-xs-6">
                <a href="#" className="brand">
                  <div className="brand-logo opacity-75">
                    <img src="img/brands/02.svg" alt="Brand" />
                  </div>
                  <p className="brand-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi est corrupti sapiente itaque.</p>
                </a>
              </div>
              {/* Brand */}
              <div className="col-sm-4 col-xs-6">
                <a href="#" className="brand">
                  <div className="brand-logo opacity-75">
                    <img src="img/brands/03.svg" alt="Brand" />
                  </div>
                  <p className="brand-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi est corrupti sapiente itaque.</p>
                </a>
              </div>
              {/* Brand */}
              <div className="col-sm-4 col-xs-6">
                <a href="#" className="brand">
                  <div className="brand-logo opacity-75">
                    <img src="img/brands/04.svg" alt="Brand" />
                  </div>
                  <p className="brand-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi est corrupti sapiente itaque.</p>
                </a>
              </div>
              {/* Brand */}
              <div className="col-sm-4 col-xs-6">
                <a href="#" className="brand">
                  <div className="brand-logo opacity-75">
                    <img src="img/brands/05.svg" alt="Brand" />
                  </div>
                  <p className="brand-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi est corrupti sapiente itaque.</p>
                </a>
              </div>
              {/* Brand */}
              <div className="col-sm-4 col-xs-6">
                <a href="#" className="brand">
                  <div className="brand-logo opacity-75">
                    <img src="img/brands/06.svg" alt="Brand" />
                  </div>
                  <p className="brand-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi est corrupti sapiente itaque.</p>
                </a>
              </div>
            </div>{/* .row */}
          </section>{/* .container */}
          {/* Video Popup */}
          <div className="fw-section space-top-2x padding-top-3x padding-bottom-3x" style={{backgroundImage: 'url(img/video_bg.jpg)'}}>
            <div className="container padding-top-3x padding-bottom-3x text-center">
              <div className="space-top-3x space-bottom">
                {/* Add ".light-skin" class to alter appearance. */}
                <a href="https://player.vimeo.com/video/135832597?color=77cde3&title=0&byline=0&portrait=0" className="video-popup-btn">
                  <i className="material-icons play_arrow" />
                </a>
              </div>
              <p className="space-bottom-2x">M-Store - your reliable partner.</p>
            </div>
          </div>{/* .fw-section */}
          {/* Features */}
          <section className="container space-top space-bottom padding-top-3x padding-bottom-3x">
            <div className="row">
              {/* Feature */}
              <div className="col-md-3 col-sm-6">
                <div className="feature text-center">
                  <div className="feature-icon">
                    <i className="material-icons location_on" />
                  </div>
                  <h4 className="feature-title">Free World-Wide Shipping</h4>
                  <p className="feature-text">Free shipping on all orders over $100</p>
                </div>
              </div>
              {/* Feature */}
              <div className="col-md-3 col-sm-6">
                <div className="feature text-center">
                  <div className="feature-icon">
                    <i className="material-icons autorenew" />
                  </div>
                  <h4 className="feature-title">Money Back Guarantee</h4>
                  <p className="feature-text">We return money within 30 days</p>
                </div>
              </div>
              {/* Feature */}
              <div className="col-md-3 col-sm-6">
                <div className="feature text-center">
                  <div className="feature-icon">
                    <i className="material-icons headset_mic" />
                  </div>
                  <h4 className="feature-title">24/7 Online Support</h4>
                  <p className="feature-text">Friendly 24/7 customer support</p>
                </div>
              </div>
              {/* Feature */}
              <div className="col-md-3 col-sm-6">
                <div className="feature text-center">
                  <div className="feature-icon">
                    <i className="material-icons credit_card" />
                  </div>
                  <h4 className="feature-title">Secure Online Payments</h4>
                  <p className="feature-text">We posess SSL / Secure Certificate</p>
                </div>
              </div>
            </div>{/* .row */}
          </section>{/* .container */}
          {/* Footer */}
          <footer className="footer">
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
    );
  }
});