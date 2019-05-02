React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="utf-8" />
        <title>M-Store | Elements</title>
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
        {/* Large Modal */}
        <div className="modal fade bs-example-modal-lg" tabIndex={-1} role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <h4 className="modal-title">Modal title</h4>
              </div>
              <div className="modal-body">
                <p>One fine body…</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-sm btn-default" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-sm btn-primary">Save changes</button>
              </div>
            </div>{/* /.modal-content */}
          </div>{/* /.modal-dialog */}
        </div>{/* /.modal */}
        {/* Small Modal */}
        <div className="modal fade bs-example-modal-sm" tabIndex={-1} role="dialog">
          <div className="modal-dialog modal-sm" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <h4 className="modal-title">Modal title</h4>
              </div>
              <div className="modal-body">
                <p>One fine body…</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-sm btn-default" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-sm btn-primary">Save changes</button>
              </div>
            </div>{/* /.modal-content */}
          </div>{/* /.modal-dialog */}
        </div>{/* /.modal */}
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
                    <li><a href="faq.html">FAQ</a></li>
                    <li className="current-menu-item"><a href="elements.html">Elements</a></li>
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
          {/* Featured Image */}
          <div className="featured-image" style={{backgroundImage: 'url(img/featured-image/elements.jpg)'}} />
          {/* Content */}
          <section className="container padding-top-3x padding-bottom">
            <h1>Elements</h1>
            <div className="row">
              <div className="col-sm-3 padding-top space-bottom">
                <h5 className="text-uppercase text-gray text-thin space-bottom">Headings</h5>
                <h1>H1. Heading</h1>
                <h2>H2. Heading</h2>
                <h3>H3. Heading</h3>
                <h4>H4. Heading</h4>
                <h5>H5. Heading</h5>
                <h6>H6. Heading</h6>
              </div>{/* .col-sm-3 */}
              <div className="col-sm-5 padding-top space-bottom">
                <h5 className="text-uppercase text-gray text-thin space-bottom">Body Copy</h5>
                <p className="lead"><strong>Lead.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                <p><strong>Normal.</strong> Lorem ipsum <a href="#">link here</a> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                <p className="text-sm"><strong>Small.</strong> Lorem ipsum <a href="#">link here</a> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore occaecat cupidatat.</p>
                <p className="text-xs"><strong>Extra small.</strong> Lorem ipsum <a href="#">link here</a> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore occaecat cupidatat.</p>
              </div>{/* .col-sm-5 */}
              <div className="col-sm-4 padding-top space-bottom-2x">
                <h5 className="text-uppercase text-gray text-thin space-bottom">Lists</h5>
                <ul className="list-featured">
                  <li>Neque porro quisquam est, qui dolore</li>
                  <li>Lorem <a href="#">ipsum dolor sit</a> amet, consectetur</li>
                  <li>Excepteur sint occaecat cupidatat non</li>
                  <li>Duis aute irure dolor in reprehenderit</li>
                  <li>Nemo enim ipsam voluptatem quia</li>
                </ul>
                <ol>
                  <li>Neque porro quisquam est, qui dolore</li>
                  <li>Lorem <a href="#">ipsum dolor sit</a> amet, consectetur</li>
                  <li>Excepteur sint occaecat cupidatat non</li>
                  <li>Duis aute irure dolor in reprehenderit</li>
                  <li>Nemo enim ipsam voluptatem quia</li>
                </ol>
              </div>{/* .col-sm-4 */}
            </div>{/* .row */}
            <div className="row">
              <div className="col-sm-5 space-bottom-2x">
                <h5 className="text-uppercase text-gray text-thin space-bottom">Contextual Colors</h5>
                <ul className="list-unstyled">
                  <li className="text-gray"><strong>Gray text.</strong> Sed ut perspiciatis unde omnis iste natus.</li>
                  <li className="text-primary"><strong>Primary text.</strong> Maecenas sed diam eget risus varius.</li>
                  <li className="text-success"><strong>Success text.</strong> Et harum quidem rerum facilis est.</li>
                  <li className="text-info"><strong>Info text.</strong> Sed ut perspiciatis unde omnis iste natus.</li>
                  <li className="text-warning"><strong>Warning text.</strong> Maecenas sed diam eget risus varius.</li>
                  <li className="text-danger"><strong>Danger text.</strong> Et harum quidem rerum facilis est.</li>
                </ul>
              </div>{/* .col-sm-5 */}
              <div className="col-sm-7 space-bottom-2x">
                <h5 className="text-uppercase text-gray text-thin space-bottom">Contextual Backgrounds</h5>
                <p><span className="bg-primary">Lorem ipsum dolor sit amet,</span> primary background consectetur adipisicing elit. Nemo enim ipsam voluptatem quia voluptas sit. Success background <span className="bg-default">non,sequi amet obcaecati</span> quos <span className="bg-success">soluta quisquam harum</span> dolor ab veniam <span className="bg-info">molestias info background excepturi</span> ut vitae warning background rerum repellendus aut quaerat deleniti recusandae. Nemo enim ipsam voluptatem quia voluptas sit. Quas nam quod <span className="bg-warning">dolorem, ipsam impedit</span> danger background, saepe, <span className="bg-danger">expedita necessitatibus reprehenderit,</span> ratione modi a quis magnam. Sint vero fuga totam repellendus quae! Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>{/* .col-sm-7 */}
            </div>{/* .row */}
            <h5 className="text-uppercase text-gray text-thin space-bottom">Quotations</h5>
            <div className="row">
              <div className="col-sm-6 space-bottom-2x">
                <blockquote>
                  <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem.</p>
                  <cite>James Cameron</cite>
                </blockquote>
              </div>{/* .col-sm-6 */}
              <div className="col-sm-6 space-bottom-2x">
                <blockquote className="blockquote-reverse">
                  <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem.</p>
                  <cite>James Cameron</cite>
                </blockquote>
              </div>{/* .col-sm-6 */}
            </div>{/* .row */}
            {/* Rounded Buttons */}
            <div className="space-bottom-2x">
              <h5 className="text-uppercase text-gray text-thin space-bottom">Rounded Buttons</h5>
              <a href="#" className="btn btn-default waves-effect waves-light">Default button</a>
              <a href="#" className="btn btn-primary waves-effect waves-light">Primary button</a>
              <a href="#" className="btn btn-info waves-effect waves-light">Info button</a>
              <a href="#" className="btn btn-success waves-effect waves-light">Success button</a>
              <a href="#" className="btn btn-warning waves-effect waves-light">Warning button</a>
              <a href="#" className="btn btn-danger waves-effect waves-light">Danger button</a>
              <div>
                <a href="#" className="btn btn-sm btn-default waves-effect waves-light">Default button</a>
                <a href="#" className="btn btn-sm btn-primary waves-effect waves-light">Primary button</a>
                <a href="#" className="btn btn-sm btn-info waves-effect waves-light">Info button</a>
                <a href="#" className="btn btn-sm btn-success waves-effect waves-light">Success button</a>
                <a href="#" className="btn btn-sm btn-warning waves-effect waves-light">Warning button</a>
                <a href="#" className="btn btn-sm btn-danger waves-effect waves-light">Danger button</a>
              </div>
            </div>
            {/* Rounded Ghost Buttons */}
            <div className="space-bottom-2x">
              <h5 className="text-uppercase text-gray text-thin space-bottom">Rounded Ghost Buttons</h5>
              <a href="#" className="btn btn-ghost btn-default waves-effect waves-light">Default button</a>
              <a href="#" className="btn btn-ghost btn-primary waves-effect waves-light">Primary button</a>
              <a href="#" className="btn btn-ghost btn-info waves-effect waves-light">Info button</a>
              <a href="#" className="btn btn-ghost btn-success waves-effect waves-light">Success button</a>
              <a href="#" className="btn btn-ghost btn-warning waves-effect waves-light">Warning button</a>
              <a href="#" className="btn btn-ghost btn-danger waves-effect waves-light">Danger button</a>
              <div>
                <a href="#" className="btn btn-ghost btn-sm btn-default waves-effect waves-light">Default button</a>
                <a href="#" className="btn btn-ghost btn-sm btn-primary waves-effect waves-light">Primary button</a>
                <a href="#" className="btn btn-ghost btn-sm btn-info waves-effect waves-light">Info button</a>
                <a href="#" className="btn btn-ghost btn-sm btn-success waves-effect waves-light">Success button</a>
                <a href="#" className="btn btn-ghost btn-sm btn-warning waves-effect waves-light">Warning button</a>
                <a href="#" className="btn btn-ghost btn-sm btn-danger waves-effect waves-light">Danger button</a>
              </div>
            </div>
            {/* Square Buttons */}
            <div className="space-bottom-2x">
              <h5 className="text-uppercase text-gray text-thin space-bottom">Square Buttons</h5>
              <a href="#" className="btn btn-square btn-default waves-effect waves-light">Default button</a>
              <a href="#" className="btn btn-square btn-primary waves-effect waves-light">Primary button</a>
              <a href="#" className="btn btn-square btn-info waves-effect waves-light">Info button</a>
              <a href="#" className="btn btn-square btn-success waves-effect waves-light">Success button</a>
              <a href="#" className="btn btn-square btn-warning waves-effect waves-light">Warning button</a>
              <a href="#" className="btn btn-square btn-danger waves-effect waves-light">Danger button</a>
              <div>
                <a href="#" className="btn btn-square btn-sm btn-default waves-effect waves-light">Default button</a>
                <a href="#" className="btn btn-square btn-sm btn-primary waves-effect waves-light">Primary button</a>
                <a href="#" className="btn btn-square btn-sm btn-info waves-effect waves-light">Info button</a>
                <a href="#" className="btn btn-square btn-sm btn-success waves-effect waves-light">Success button</a>
                <a href="#" className="btn btn-square btn-sm btn-warning waves-effect waves-light">Warning button</a>
                <a href="#" className="btn btn-square btn-sm btn-danger waves-effect waves-light">Danger button</a>
              </div>
            </div>
            {/* Square Ghost Buttons */}
            <div className="space-bottom-2x">
              <h5 className="text-uppercase text-gray text-thin space-bottom">Square Ghost Buttons</h5>
              <a href="#" className="btn btn-ghost btn-square btn-default waves-effect waves-light">Default button</a>
              <a href="#" className="btn btn-ghost btn-square btn-primary waves-effect waves-light">Primary button</a>
              <a href="#" className="btn btn-ghost btn-square btn-info waves-effect waves-light">Info button</a>
              <a href="#" className="btn btn-ghost btn-square btn-success waves-effect waves-light">Success button</a>
              <a href="#" className="btn btn-ghost btn-square btn-warning waves-effect waves-light">Warning button</a>
              <a href="#" className="btn btn-ghost btn-square btn-danger waves-effect waves-light">Danger button</a>
              <div>
                <a href="#" className="btn btn-ghost btn-square btn-sm btn-default waves-effect waves-light">Default button</a>
                <a href="#" className="btn btn-ghost btn-square btn-sm btn-primary waves-effect waves-light">Primary button</a>
                <a href="#" className="btn btn-ghost btn-square btn-sm btn-info waves-effect waves-light">Info button</a>
                <a href="#" className="btn btn-ghost btn-square btn-sm btn-success waves-effect waves-light">Success button</a>
                <a href="#" className="btn btn-ghost btn-square btn-sm btn-warning waves-effect waves-light">Warning button</a>
                <a href="#" className="btn btn-ghost btn-square btn-sm btn-danger waves-effect waves-light">Danger button</a>
              </div>
            </div>
            {/* Pill Buttons */}
            <div className="space-bottom-2x">
              <h5 className="text-uppercase text-gray text-thin space-bottom">Pill Buttons</h5>
              <a href="#" className="btn btn-pill btn-default waves-effect waves-light">Default button</a>
              <a href="#" className="btn btn-pill btn-primary waves-effect waves-light">Primary button</a>
              <a href="#" className="btn btn-pill btn-info waves-effect waves-light">Info button</a>
              <a href="#" className="btn btn-pill btn-success waves-effect waves-light">Success button</a>
              <a href="#" className="btn btn-pill btn-warning waves-effect waves-light">Warning button</a>
              <a href="#" className="btn btn-pill btn-danger waves-effect waves-light">Danger button</a>
              <div>
                <a href="#" className="btn btn-pill btn-sm btn-default waves-effect waves-light">Default button</a>
                <a href="#" className="btn btn-pill btn-sm btn-primary waves-effect waves-light">Primary button</a>
                <a href="#" className="btn btn-pill btn-sm btn-info waves-effect waves-light">Info button</a>
                <a href="#" className="btn btn-pill btn-sm btn-success waves-effect waves-light">Success button</a>
                <a href="#" className="btn btn-pill btn-sm btn-warning waves-effect waves-light">Warning button</a>
                <a href="#" className="btn btn-pill btn-sm btn-danger waves-effect waves-light">Danger button</a>
              </div>
            </div>
            {/* Pill Ghost Buttons */}
            <div className="space-bottom-2x">
              <h5 className="text-uppercase text-gray text-thin space-bottom">Pill Ghost Buttons</h5>
              <a href="#" className="btn btn-ghost btn-pill btn-default waves-effect waves-light">Default button</a>
              <a href="#" className="btn btn-ghost btn-pill btn-primary waves-effect waves-light">Primary button</a>
              <a href="#" className="btn btn-ghost btn-pill btn-info waves-effect waves-light">Info button</a>
              <a href="#" className="btn btn-ghost btn-pill btn-success waves-effect waves-light">Success button</a>
              <a href="#" className="btn btn-ghost btn-pill btn-warning waves-effect waves-light">Warning button</a>
              <a href="#" className="btn btn-ghost btn-pill btn-danger waves-effect waves-light">Danger button</a>
              <div>
                <a href="#" className="btn btn-ghost btn-pill btn-sm btn-default waves-effect waves-light">Default button</a>
                <a href="#" className="btn btn-ghost btn-pill btn-sm btn-primary waves-effect waves-light">Primary button</a>
                <a href="#" className="btn btn-ghost btn-pill btn-sm btn-info waves-effect waves-light">Info button</a>
                <a href="#" className="btn btn-ghost btn-pill btn-sm btn-success waves-effect waves-light">Success button</a>
                <a href="#" className="btn btn-ghost btn-pill btn-sm btn-warning waves-effect waves-light">Warning button</a>
                <a href="#" className="btn btn-ghost btn-pill btn-sm btn-danger waves-effect waves-light">Danger button</a>
              </div>
            </div>
            {/* Buttons with Icons */}
            <div className="space-bottom-2x">
              <h5 className="text-uppercase text-gray text-thin space-bottom">Buttons with Icons</h5>
              <a href="#" className="btn btn-default btn-icon-left waves-effect waves-light"><i className="material-icons access_alarm" />Left icon</a>
              <a href="#" className="btn btn-info btn-icon-right waves-effect waves-light">Right icon<i className="material-icons arrow_forward" /></a>
              <a href="#" className="btn btn-ghost btn-default btn-icon-left waves-effect waves-light"><i className="material-icons bookmark_border" />Left icon</a>
              <a href="#" className="btn btn-ghost btn-info btn-icon-right waves-effect waves-light">Right icon<i className="material-icons perm_identity" /></a>
              <a href="#" className="btn btn-sm btn-default btn-icon-left waves-effect waves-light"><i className="material-icons mic" />Left icon</a>
              <a href="#" className="btn btn-sm btn-info btn-icon-right waves-effect waves-light">Right icon<i className="material-icons play_circle_outline" /></a>
              <div>
                <a href="#" className="btn btn-square btn-default btn-icon-left waves-effect waves-light"><i className="material-icons content_cut" />Left icon</a>
                <a href="#" className="btn btn-square btn-info btn-icon-right waves-effect waves-light">Right icon<i className="material-icons font_download" /></a>
                <a href="#" className="btn btn-square btn-ghost btn-default btn-icon-left waves-effect waves-light"><i className="material-icons reply_all" />Left icon</a>
                <a href="#" className="btn btn-square btn-ghost btn-info btn-icon-right waves-effect waves-light">Right icon<i className="material-icons publish" /></a>
                <a href="#" className="btn btn-square btn-sm btn-default btn-icon-left waves-effect waves-light"><i className="material-icons attachment" />Left icon</a>
                <a href="#" className="btn btn-square btn-sm btn-info btn-icon-right waves-effect waves-light">Right icon<i className="material-icons audiotrack" /></a>
              </div>
              <div>
                <a href="#" className="btn btn-pill btn-default btn-icon-left waves-effect waves-light"><i className="material-icons colorize" />Left icon</a>
                <a href="#" className="btn btn-pill btn-info btn-icon-right waves-effect waves-light">Right icon<i className="material-icons camera_alt" /></a>
                <a href="#" className="btn btn-pill btn-ghost btn-default btn-icon-left waves-effect waves-light"><i className="material-icons brightness_6" />Left icon</a>
                <a href="#" className="btn btn-pill btn-ghost btn-info btn-icon-right waves-effect waves-light">Right icon<i className="material-icons tag_faces" /></a>
                <a href="#" className="btn btn-pill btn-sm btn-default btn-icon-left waves-effect waves-light"><i className="material-icons local_grocery_store" />Left icon</a>
                <a href="#" className="btn btn-pill btn-sm btn-info btn-icon-right waves-effect waves-light">Right icon<i className="material-icons zoom_out_map" /></a>
              </div>
            </div>
            {/* Block Buttons */}
            <h5 className="text-uppercase text-gray text-thin space-bottom">Block Buttons</h5>
            <div className="row">
              <div className="col-sm-3">
                <a href="#" className="btn btn-block btn-default waves-effect waves-light">Block button</a>
              </div>{/* .col-sm-3 */}
              <div className="col-sm-3">
                <a href="#" className="btn btn-block btn-primary waves-effect waves-light">Block button</a>
              </div>{/* .col-sm-3 */}
              <div className="col-sm-3">
                <a href="#" className="btn btn-block btn-ghost btn-default waves-effect waves-light">Block button</a>
              </div>{/* .col-sm-3 */}
              <div className="col-sm-3">
                <a href="#" className="btn btn-block btn-ghost btn-primary waves-effect waves-light">Block button</a>
              </div>{/* .col-sm-3 */}
            </div>
            <div className="row">
              <div className="col-sm-3">
                <a href="#" className="btn btn-square btn-block btn-default waves-effect waves-light">Block button</a>
              </div>{/* .col-sm-3 */}
              <div className="col-sm-3">
                <a href="#" className="btn btn-square btn-block btn-primary waves-effect waves-light">Block button</a>
              </div>{/* .col-sm-3 */}
              <div className="col-sm-3">
                <a href="#" className="btn btn-square btn-block btn-ghost btn-default waves-effect waves-light">Block button</a>
              </div>{/* .col-sm-3 */}
              <div className="col-sm-3">
                <a href="#" className="btn btn-square btn-block btn-ghost btn-primary waves-effect waves-light">Block button</a>
              </div>{/* .col-sm-3 */}
            </div>
            <div className="row space-bottom-2x">
              <div className="col-sm-3">
                <a href="#" className="btn btn-pill btn-block btn-default waves-effect waves-light">Block button</a>
              </div>{/* .col-sm-3 */}
              <div className="col-sm-3">
                <a href="#" className="btn btn-pill btn-block btn-primary waves-effect waves-light">Block button</a>
              </div>{/* .col-sm-3 */}
              <div className="col-sm-3">
                <a href="#" className="btn btn-pill btn-block btn-ghost btn-default waves-effect waves-light">Block button</a>
              </div>{/* .col-sm-3 */}
              <div className="col-sm-3">
                <a href="#" className="btn btn-pill btn-block btn-ghost btn-primary waves-effect waves-light">Block button</a>
              </div>{/* .col-sm-3 */}
            </div>
            {/* Social Buttons */}
            <h5 className="text-uppercase text-gray text-thin space-bottom">Social Buttons</h5>
            <div className="social-bar space-bottom-2x">
              <a href="#" className="sb-behance" data-toggle="tooltip" data-placement="top" title="Behance">
                <i className="socicon-behance" />
              </a>
              <a href="#" className="sb-deviantart" data-toggle="tooltip" data-placement="top" title="DeviantArt">
                <i className="socicon-deviantart" />
              </a>
              <a href="#" className="sb-digg" data-toggle="tooltip" data-placement="top" title="Digg">
                <i className="socicon-digg" />
              </a>
              <a href="#" className="sb-dribbble" data-toggle="tooltip" data-placement="top" title="Dribbble">
                <i className="socicon-dribbble" />
              </a>
              <a href="#" className="sb-facebook" data-toggle="tooltip" data-placement="top" title="Facebook">
                <i className="socicon-facebook" />
              </a>
              <a href="#" className="sb-flickr" data-toggle="tooltip" data-placement="top" title="Flickr">
                <i className="socicon-flickr" />
              </a>
              <a href="#" className="sb-foursquare" data-toggle="tooltip" data-placement="top" title="Foursquare">
                <i className="socicon-foursquare" />
              </a>
              <a href="#" className="sb-github" data-toggle="tooltip" data-placement="top" title="Github">
                <i className="socicon-github" />
              </a>
              <a href="#" className="sb-google-plus" data-toggle="tooltip" data-placement="top" title data-original-title="Google+">
                <i className="socicon-googleplus" />
              </a>
              <a href="#" className="sb-instagram" data-toggle="tooltip" data-placement="top" title data-original-title="Instagram">
                <i className="socicon-instagram" />
              </a>
              <a href="#" className="sb-lastfm" data-toggle="tooltip" data-placement="top" title="last.fm">
                <i className="socicon-lastfm" />
              </a>
              <a href="#" className="sb-linkedin" data-toggle="tooltip" data-placement="top" title="LinkedIn">
                <i className="socicon-linkedin" />
              </a>
              <a href="#" className="sb-paypal" data-toggle="tooltip" data-placement="top" title="PayPal">
                <i className="socicon-paypal" />
              </a>
              <a href="#" className="sb-pinterest" data-toggle="tooltip" data-placement="top" title="Pinterest" data-original-title>
                <i className="socicon-pinterest" />
              </a>
              <a href="#" className="sb-reddit" data-toggle="tooltip" data-placement="top" title="Reddit">
                <i className="socicon-reddit" />
              </a>
              <a href="#" className="sb-skype" data-toggle="tooltip" data-placement="top" title="Skype">
                <i className="socicon-skype" />
              </a>
              <a href="#" className="sb-soundcloud" data-toggle="tooltip" data-placement="top" title="SoundCloud">
                <i className="socicon-soundcloud" />
              </a>
              <a href="#" className="sb-stackoverflow" data-toggle="tooltip" data-placement="top" title="Stack Overflow">
                <i className="socicon-stackoverflow" />
              </a>
              <a href="#" className="sb-steam" data-toggle="tooltip" data-placement="top" title="Steam">
                <i className="socicon-steam" />
              </a>
              <a href="#" className="sb-stumbleupon" data-toggle="tooltip" data-placement="top" title="StumbleUpon">
                <i className="socicon-stumbleupon" />
              </a>
              <a href="#" className="sb-tumblr" data-toggle="tooltip" data-placement="top" title="Tumblr">
                <i className="socicon-tumblr" />
              </a>
              <a href="#" className="sb-twitch" data-toggle="tooltip" data-placement="top" title="Twitch">
                <i className="socicon-twitch" />
              </a>
              <a href="#" className="sb-twitter" data-toggle="tooltip" data-placement="top" title="Twitter">
                <i className="socicon-twitter" />
              </a>
              <a href="#" className="sb-vine" data-toggle="tooltip" data-placement="top" title="Vine">
                <i className="socicon-vine" />
              </a>
              <a href="#" className="sb-vk" data-toggle="tooltip" data-placement="top" title="Vkontakte">
                <i className="socicon-vkontakte" />
              </a>
              <a href="#" className="sb-wordpress" data-toggle="tooltip" data-placement="top" title="WordPress">
                <i className="socicon-wordpress" />
              </a>
              <a href="#" className="sb-xing" data-toggle="tooltip" data-placement="top" title="Xing">
                <i className="socicon-xing" />
              </a>
              <a href="#" className="sb-yahoo" data-toggle="tooltip" data-placement="top" title="Yahoo!">
                <i className="socicon-yahoo" />
              </a>
              <a href="#" className="sb-yelp" data-toggle="tooltip" data-placement="top" title="Yelp">
                <i className="socicon-yelp" />
              </a>
              <a href="#" className="sb-youtube" data-toggle="tooltip" data-placement="top" title="YouTube">
                <i className="socicon-youtube" />
              </a>
            </div>
            {/* Market Buttons */}
            <h5 className="text-uppercase text-gray text-thin space-bottom">Market Buttons</h5>
            <div className="space-bottom-3x">
              <a href="#" className="app-store-btn" />
              <a href="#" className="google-play-btn" />
              <a href="#" className="windows-btn" />
              <a href="#" className="amazon-btn" />
            </div>
            {/* Form Controls */}
            <h5 className="text-uppercase text-gray text-thin space-bottom">Form Controls</h5>
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="form-element">
                  <input type="text" className="form-control" placeholder="Text input" />
                </div>
              </div>{/* .col-md-3.col-sm-6 */}
              <div className="col-md-3 col-sm-6">
                <div className="form-element valid">
                  <input type="text" className="form-control" placeholder="Error input" />
                </div>
              </div>{/* .col-md-3.col-sm-6 */}
              <div className="col-md-3 col-sm-6">
                <div className="form-element error">
                  <input type="text" className="form-control" placeholder="Error input" />
                </div>
              </div>{/* .col-md-3.col-sm-6 */}
              <div className="col-md-3 col-sm-6">
                <div className="form-element form-select">
                  <select className="form-control">
                    <option>Select</option>
                    <option>Option One</option>
                    <option>Option Two</option>
                    <option>Option Three</option>
                    <option>Option Four</option>
                    <option>Option Five</option>
                  </select>
                </div>
              </div>{/* .col-md-3.col-sm-6 */}
            </div>{/* .row*/}
            <div className="row space-top space-bottom-2x">
              <div className="col-sm-6">
                <div className="form-element">
                  <textarea rows={8} className="form-control" placeholder="Textarea" defaultValue={""} />
                </div>
              </div>{/* .col-sm-6*/}
              <div className="col-sm-6">
                <div className="row">
                  <div className="col-sm-6">
                    <h6 className="text-uppercase text-gray text-thin space-bottom">Checkboxes</h6>
                    <div className="form-group">
                      <label className="checkbox">
                        <input type="checkbox" /> Checkbox
                      </label>
                      <label className="checkbox">
                        <input type="checkbox" defaultChecked /> Checkbox
                      </label>
                      <label className="checkbox disabled">
                        <input type="checkbox" disabled /> Checkbox
                      </label>
                      <label className="checkbox disabled">
                        <input type="checkbox" defaultChecked disabled /> Checkbox
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <h6 className="text-uppercase text-gray text-thin space-bottom">Radios</h6>
                    <div className="form-group">
                      <label className="radio">
                        <input type="radio" name="rad_demo_1" /> Radio
                      </label>
                      <label className="radio">
                        <input type="radio" name="rad_demo_1" defaultChecked /> Radio
                      </label>
                      <label className="radio disabled">
                        <input type="radio" disabled /> Radio
                      </label>
                      <label className="radio disabled">
                        <input type="radio" defaultChecked disabled /> Radio
                      </label>
                    </div>
                  </div>
                </div>{/* .row*/}
              </div>{/* .col-sm-6*/}
            </div>{/* .row*/}
            {/* Tables */}
            <h5 className="text-uppercase text-gray text-thin space-bottom">Tables</h5>
            <div className="table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Position</th>
                    <th>Username</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Johnathan</td>
                    <td>Doe</td>
                    <td>CEO, Founder</td>
                    <td>@johny</td>
                    <td>+3 555 68 70</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Anna</td>
                    <td>Cabana</td>
                    <td>Designer</td>
                    <td>@cabana</td>
                    <td>+3 434 65 93</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Kale</td>
                    <td>Thornton</td>
                    <td>Developer</td>
                    <td>@thornton</td>
                    <td>+3 285 42 88</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Jane</td>
                    <td>Birkins</td>
                    <td>Support</td>
                    <td>@birkins</td>
                    <td>+3 774 28 50</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive space-bottom-2x">
              <table className="table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Position</th>
                    <th>Username</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Johnathan</td>
                    <td>Doe</td>
                    <td>CEO, Founder</td>
                    <td>@johny</td>
                    <td>+3 555 68 70</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Anna</td>
                    <td>Cabana</td>
                    <td>Designer</td>
                    <td>@cabana</td>
                    <td>+3 434 65 93</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Kale</td>
                    <td>Thornton</td>
                    <td>Developer</td>
                    <td>@thornton</td>
                    <td>+3 285 42 88</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Jane</td>
                    <td>Birkins</td>
                    <td>Support</td>
                    <td>@birkins</td>
                    <td>+3 774 28 50</td>
                  </tr>
                </tbody>
              </table>
            </div>{/* .table-responsive */}
            {/* Tabs */}
            <div className="padding-top visible-xs" />
            <h5 className="text-uppercase text-gray text-thin space-bottom">Tabs</h5>
            <div className="row">
              <div className="col-sm-6 space-bottom-2x">
                {/* Nav Tabs */}
                <ul className="nav-tabs" role="tablist">
                  <li className="active"><a href="#tab1" role="tab" data-toggle="tab">Tab 1</a></li>
                  <li><a href="#tab2" role="tab" data-toggle="tab">Tab 2</a></li>
                  <li><a href="#tab3" role="tab" data-toggle="tab">Tab 3</a></li>
                </ul>{/* .nav-tabs */}
                {/* Tab panes */}
                <div className="tab-content">
                  <div role="tabpanel" className="tab-pane transition fade in active" id="tab1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut dignissimos ipsam obcaecati corrupti modi, deserunt facere asperiores. Voluptatum laudantium ut, minus nam. Libero facilis aspernatur cumque, quisquam quod sint odit.</div>
                  <div role="tabpanel" className="tab-pane transition fade" id="tab2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui hic laboriosam odio doloribus suscipit error nostrum totam dignissimos esse numquam voluptatum, aspernatur est, at voluptatem minus temporibus reprehenderit culpa voluptates.</div>
                  <div role="tabpanel" className="tab-pane transition fade" id="tab3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ratione nulla asperiores repellat natus dolor delectus dolorum harum sequi fugiat vero, voluptatem reiciendis autem, vel. Repellendus ea laudantium pariatur eum!</div>
                </div>{/* .tab-content */}
              </div>{/* .col-sm-6 */}
              <div className="col-sm-6 space-bottom-2x">
                {/* Nav Tabs */}
                <ul className="nav-tabs text-right" role="tablist">
                  <li className="active"><a href="#tab4" role="tab" data-toggle="tab">Tab 1</a></li>
                  <li><a href="#tab5" role="tab" data-toggle="tab">Tab 2</a></li>
                  <li><a href="#tab6" role="tab" data-toggle="tab">Tab 3</a></li>
                </ul>{/* .nav-tabs */}
                {/* Tab panes */}
                <div className="tab-content">
                  <div role="tabpanel" className="tab-pane transition fade in active" id="tab4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut dignissimos ipsam obcaecati corrupti modi, deserunt facere asperiores. Voluptatum laudantium ut, minus nam. Libero facilis aspernatur cumque, quisquam quod sint odit.</div>
                  <div role="tabpanel" className="tab-pane transition fade" id="tab5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui hic laboriosam odio doloribus suscipit error nostrum totam dignissimos esse numquam voluptatum, aspernatur est, at voluptatem minus temporibus reprehenderit culpa voluptates.</div>
                  <div role="tabpanel" className="tab-pane transition fade" id="tab6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ratione nulla asperiores repellat natus dolor delectus dolorum harum sequi fugiat vero, voluptatem reiciendis autem, vel. Repellendus ea laudantium pariatur eum!</div>
                </div>{/* .tab-content */}
              </div>{/* .col-sm-6 */}
            </div>{/* .row */}
            <div className="row space-bottom">
              <div className="col-sm-6 space-bottom-2x">
                {/* Nav Tabs */}
                <ul className="nav-tabs text-center" role="tablist">
                  <li className="active"><a href="#tab7" role="tab" data-toggle="tab">Fade</a></li>
                  <li><a href="#tab8" role="tab" data-toggle="tab">Scale</a></li>
                  <li><a href="#tab9" role="tab" data-toggle="tab">Scale 2</a></li>
                  <li><a href="#tab10" role="tab" data-toggle="tab">Left</a></li>
                </ul>{/* .nav-tabs */}
                {/* Tab panes */}
                <div className="tab-content">
                  <div role="tabpanel" className="tab-pane transition fade in active" id="tab7">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut dignissimos ipsam obcaecati corrupti modi, deserunt facere asperiores. Voluptatum laudantium ut, minus nam. Libero facilis aspernatur cumque, quisquam quod sint odit.</div>
                  <div role="tabpanel" className="tab-pane transition fade scale" id="tab8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui hic laboriosam odio doloribus suscipit error nostrum totam dignissimos esse numquam voluptatum, aspernatur est, at voluptatem minus temporibus reprehenderit culpa voluptates.</div>
                  <div role="tabpanel" className="tab-pane transition fade scaledown" id="tab9">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ratione nulla asperiores repellat natus dolor delectus dolorum harum sequi fugiat vero, voluptatem reiciendis autem, vel. Repellendus ea laudantium pariatur eum!</div>
                  <div role="tabpanel" className="tab-pane transition fade left" id="tab10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut dignissimos ipsam obcaecati corrupti modi, deserunt facere asperiores. Voluptatum laudantium ut, minus nam. Libero facilis aspernatur cumque, quisquam quod sint odit.</div>
                </div>{/* .tab-content */}
              </div>{/* .col-sm-6 */}
              <div className="col-sm-6 space-bottom-2x">
                {/* Nav Tabs */}
                <ul className="nav-tabs text-center" role="tablist">
                  <li className="active"><a href="#tab11" role="tab" data-toggle="tab">Right</a></li>
                  <li><a href="#tab12" role="tab" data-toggle="tab">Top</a></li>
                  <li><a href="#tab13" role="tab" data-toggle="tab">Bottom</a></li>
                  <li><a href="#tab14" role="tab" data-toggle="tab">Flip</a></li>
                </ul>{/* .nav-tabs */}
                {/* Tab panes */}
                <div className="tab-content">
                  <div role="tabpanel" className="tab-pane transition fade right in active" id="tab11">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut dignissimos ipsam obcaecati corrupti modi, deserunt facere asperiores. Voluptatum laudantium ut, minus nam. Libero facilis aspernatur cumque, quisquam quod sint odit.</div>
                  <div role="tabpanel" className="tab-pane transition fade top" id="tab12">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui hic laboriosam odio doloribus suscipit error nostrum totam dignissimos esse numquam voluptatum, aspernatur est, at voluptatem minus temporibus reprehenderit culpa voluptates.</div>
                  <div role="tabpanel" className="tab-pane transition fade bottom" id="tab13">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ratione nulla asperiores repellat natus dolor delectus dolorum harum sequi fugiat vero, voluptatem reiciendis autem, vel. Repellendus ea laudantium pariatur eum!</div>
                  <div role="tabpanel" className="tab-pane transition fade flip" id="tab14">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut dignissimos ipsam obcaecati corrupti modi, deserunt facere asperiores. Voluptatum laudantium ut, minus nam. Libero facilis aspernatur cumque, quisquam quod sint odit.</div>
                </div>{/* .tab-content */}
              </div>{/* .col-sm-6 */}
            </div>{/* .row */}
            {/* Panels & Accordions */}
            <h5 className="text-uppercase text-gray text-thin space-bottom">Panels &amp; Accordions</h5>
            <div className="row space-bottom">
              <div className="col-sm-6 space-bottom-2x">
                <div className="panel">
                  <div className="panel-heading">
                    <h3 className="panel-title">Static Panel Example</h3>
                  </div>
                  <div className="panel-body text-gray">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nostrum hic quae ab nihil fuga? Maiores expedita quod eligendi accusamus, animi doloribus totam soluta, dolores sed laborum repudiandae repellendus praesentium?
                  </div>
                </div>{/* .panel */}
                <div className="panel-group">
                  <div className="panel">
                    <div className="panel-heading">
                      <a className="panel-title" data-toggle="collapse" href="#panel">
                        Collapsible Panel Example
                      </a>
                    </div>
                    <div id="panel" className="panel-collapse collapse in">
                      <div className="panel-body text-gray">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eum itaque consequuntur voluptate, vero officiis assumenda atque odit recusandae explicabo harum, adipisci aliquid illum quibusdam saepe repudiandae distinctio, tempora voluptates!
                      </div>
                    </div>
                  </div>{/* .panel */}
                </div>{/* .panel-group */}
              </div>{/* .col-sm-6 */}
              <div className="col-sm-6">
                <div className="panel-group" id="accordion">
                  <div className="panel">
                    <div className="panel-heading">
                      <a className="panel-title collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                        Collapsible Group Item #1
                      </a>
                    </div>
                    <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-expanded="false">
                      <div className="panel-body text-gray">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                      </div>
                    </div>
                  </div>{/* .panel */}
                  <div className="panel">
                    <div className="panel-heading">
                      <a className="panel-title" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                        Collapsible Group Item #2
                      </a>
                    </div>
                    <div id="collapseTwo" className="panel-collapse collapse in" role="tabpanel" aria-expanded="true">
                      <div className="panel-body text-gray">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                      </div>
                    </div>
                  </div>{/* .panel */}
                  <div className="panel">
                    <div className="panel-heading">
                      <a className="panel-title collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                        Collapsible Group Item #3
                      </a>
                    </div>
                    <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-expanded="false">
                      <div className="panel-body text-gray">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                      </div>
                    </div>
                  </div>{/* .panel */}
                </div>{/* .panel-group */}
              </div>{/* .col-sm-6 */}
            </div>{/* .row */}
            {/* Modals */}
            <h5 className="text-uppercase text-gray text-thin" style={{marginBottom: 10}}>Modals</h5>
            <div className="row padding-top padding-bottom-3x">
              <div className="col-md-3 col-sm-4">
                <button type="button" className="btn btn-primary btn-block" data-toggle="modal" data-target=".bs-example-modal-lg">Large modal</button>
              </div>
              <div className="col-md-3 col-sm-4">
                <button type="button" className="btn btn-primary btn-block" data-toggle="modal" data-target=".bs-example-modal-sm">Small modal</button>
              </div>
            </div>{/* .row */}
            {/* Team */}
            <h5 className="text-uppercase text-gray text-thin space-bottom">Team</h5>
            <div className="row padding-top">
              {/* Teammate */}
              <div className="col-xs-6 col-md-3">
                <div className="teammate">
                  <div className="teammate-thumb">
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
                    </div>{/* .social-bar */}
                    <img src="img/team/01.jpg" alt="Teammate" />
                  </div>
                  <h4 className="teammate-name">Jonathan Doe</h4>
                  <span className="teammate-position">Co-Founder, CEO</span>
                </div>{/* .teammate */}
              </div>{/* .col-xs-6.col-md-3 */}
              {/* Teammate */}
              <div className="col-xs-6 col-md-3">
                <div className="teammate">
                  <div className="teammate-thumb">
                    <div className="social-bar text-center space-bottom">
                      <a href="#" className="sb-twitter" data-toggle="tooltip" data-placement="top" title="Twitter">
                        <i className="socicon-twitter" />
                      </a>
                      <a href="#" className="sb-facebook" data-toggle="tooltip" data-placement="top" title="Facebook">
                        <i className="socicon-facebook" />
                      </a>
                      <a href="#" className="sb-instagram" data-toggle="tooltip" data-placement="top" title data-original-title="Instagram">
                        <i className="socicon-instagram" />
                      </a>
                    </div>{/* .social-bar */}
                    <img src="img/team/02.jpg" alt="Teammate" />
                  </div>
                  <h4 className="teammate-name">Branda Murray</h4>
                  <span className="teammate-position">Marketing Director</span>
                </div>{/* .teammate */}
              </div>{/* .col-xs-6.col-md-3 */}
              {/* Teammate */}
              <div className="col-xs-6 col-md-3">
                <div className="teammate">
                  <div className="teammate-thumb">
                    <div className="social-bar text-center space-bottom">
                      <a href="#" className="sb-twitter" data-toggle="tooltip" data-placement="top" title="Twitter">
                        <i className="socicon-twitter" />
                      </a>
                      <a href="#" className="sb-linkedin" data-toggle="tooltip" data-placement="top" title="LinkedIn">
                        <i className="socicon-linkedin" />
                      </a>
                      <a href="#" className="sb-dribbble" data-toggle="tooltip" data-placement="top" title data-original-title="Dribbble">
                        <i className="socicon-dribbble" />
                      </a>
                    </div>{/* .social-bar */}
                    <img src="img/team/03.jpg" alt="Teammate" />
                  </div>
                  <h4 className="teammate-name">Taylor White</h4>
                  <span className="teammate-position">Brand Director</span>
                </div>{/* .teammate */}
              </div>{/* .col-xs-6.col-md-3 */}
              {/* Teammate */}
              <div className="col-xs-6 col-md-3">
                <div className="teammate">
                  <div className="teammate-thumb">
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
                    </div>{/* .social-bar */}
                    <img src="img/team/04.jpg" alt="Teammate" />
                  </div>
                  <h4 className="teammate-name">Suasanna Davis</h4>
                  <span className="teammate-position">Sales Director</span>
                </div>{/* .teammate */}
              </div>{/* .col-xs-6.col-md-3 */}
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