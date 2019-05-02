React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="utf-8" />
        <title>M-Store | FAQ</title>
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
                    <li><a href="contacts.html">Contacts</a></li>
                    <li className="current-menu-item"><a href="faq.html">FAQ</a></li>
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
                      <a href="mailto:info@m-store.com">info@am-store.com</a>
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
          {/* Featured Image */}
          <div className="featured-image" style={{backgroundImage: 'url(img/featured-image/faq.jpg)'}} />
          {/* Content */}
          <section className="container padding-top-3x">
            <h1>FAQ</h1>
            <div className="row padding-top">
              <div className="col-sm-6">
                <div className="panel-group">
                  <div className="panel">
                    <div className="panel-heading">
                      <a className="panel-title" data-toggle="collapse" href="#panel1">
                        What payment methods do you accept?
                      </a>
                    </div>
                    <div id="panel1" className="panel-collapse collapse in">
                      <div className="panel-body text-gray">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eum itaque consequuntur voluptate, vero officiis assumenda atque odit recusandae explicabo harum, adipisci aliquid illum quibusdam saepe repudiandae distinctio, tempora voluptates!
                      </div>
                    </div>
                  </div>{/* .panel */}
                </div>{/* .panel-group */}
                <div className="panel-group">
                  <div className="panel">
                    <div className="panel-heading">
                      <a className="panel-title" data-toggle="collapse" href="#panel2">
                        How long will delivery take?
                      </a>
                    </div>
                    <div id="panel2" className="panel-collapse collapse in">
                      <div className="panel-body text-gray">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                      </div>
                    </div>
                  </div>{/* .panel */}
                </div>{/* .panel-group */}
                <div className="panel-group">
                  <div className="panel">
                    <div className="panel-heading">
                      <a className="panel-title" data-toggle="collapse" href="#panel3">
                        Do you ship internationally?
                      </a>
                    </div>
                    <div id="panel3" className="panel-collapse collapse in">
                      <div className="panel-body text-gray">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                      </div>
                    </div>
                  </div>{/* .panel */}
                </div>{/* .panel-group */}
              </div>{/* .col-sm-6 */}
              <div className="col-sm-6">
                <div className="panel-group">
                  <div className="panel">
                    <div className="panel-heading">
                      <a className="panel-title" data-toggle="collapse" href="#panel4">
                        Do I need an account to place an order?
                      </a>
                    </div>
                    <div id="panel4" className="panel-collapse collapse in">
                      <div className="panel-body text-gray">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                      </div>
                    </div>
                  </div>{/* .panel */}
                </div>{/* .panel-group */}
                <div className="panel-group">
                  <div className="panel">
                    <div className="panel-heading">
                      <a className="panel-title" data-toggle="collapse" href="#panel5">
                        Do you have discounts for returning customers?
                      </a>
                    </div>
                    <div id="panel5" className="panel-collapse collapse in">
                      <div className="panel-body text-gray">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                      </div>
                    </div>
                  </div>{/* .panel */}
                </div>{/* .panel-group */}
                <div className="panel-group">
                  <div className="panel">
                    <div className="panel-heading">
                      <a className="panel-title" data-toggle="collapse" href="#panel6">
                        How can I track my order?
                      </a>
                    </div>
                    <div id="panel6" className="panel-collapse collapse in">
                      <div className="panel-body text-gray">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eum itaque consequuntur voluptate, vero officiis assumenda atque odit recusandae explicabo harum, adipisci aliquid illum quibusdam saepe repudiandae distinctio, tempora voluptates!
                      </div>
                    </div>
                  </div>{/* .panel */}
                </div>{/* .panel-group */}
              </div>{/* .col-sm-6 */}
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
    );
  }
});