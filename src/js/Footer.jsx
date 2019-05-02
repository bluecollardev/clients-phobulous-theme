import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <footer className="footer">
                    <div className="column hidden-sm hidden-xs">
                      {/*<h3 className="widget-title">
                        Payment Methods
                        <small>We support the following payment methods.</small>
                      </h3>
                      <div className="cards"><img src="img/cards.png" alt="Cards" /></div>
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
                      </div>*/}
                    </div>
                    <div className="column">
                        {/*<h3 className="widget-title">
                            Subscription
                            <small>To receive latest offers and discounts from the shop.</small>
                          </h3>
                          <form action="" method="post" target="_blank" className="subscribe-form" noValidate>
                            <input type="email" className="form-control" name="EMAIL" placeholder="Your e-mail" />
                            <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_c7103e2c981361a6639545bd5_1194bb7544" tabIndex={-1} defaultValue /></div>
                            <button type="submit"><i className="material-icons send" /></button>
                        </form>*/}
                        <p className="text-sm">Call us at <span className="text-primary">(780) 988-2696</span></p>
                    </div>
                    <div className="column hidden-sm hidden-xs">
                      {/* Scroll To Top Button */}
                      <div className="scroll-to-top-btn"><i className="material-icons trending_flat" /></div>
                    </div>{/* .column */}
                </footer>
                {this.props.children}
            </div>
        )
    }
}