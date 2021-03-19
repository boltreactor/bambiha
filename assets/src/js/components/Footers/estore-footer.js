import React, {Component, Fragment} from 'react';
import {Link, withRouter} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <div>
                  <footer className="default-footer my-page">
          <div className="container xl pt5">
            <div className="default-footer__flex">
              <div className="default-footer__flex-box xs">
                <h2 className="bold">The BAMBIHA</h2>
                <ul>
                  <li><Link to="#">News</Link></li>
                  <li><Link to="#">Careers</Link></li>
                  <li><Link to="#">Site Map</Link></li>
                  <li><Link to="#">Purpose</Link></li>
                  <li><Link to="#">Sustainability</Link></li>
                </ul>
              </div>
              <div className="default-footer__flex-box xs">
                <h2 className="bold">Get Help</h2>
                <ul>
                  <li><Link to="#">Order Status</Link></li>
                  <li><Link to="#">Shipping & Delivery</Link></li>
                  <li><Link to="#">Returns</Link></li>
                  <li><Link to="#">Payment Options</Link></li>
                  <li><Link to="#">Gift Card Balance</Link></li>
                </ul>
              </div>
              <div className="default-footer__flex-box xs">
                <h2 className="bold">Resources</h2>
                <ul>
                  <li><Link to="#">Guides</Link></li>
                  <li><Link to="#">Blog</Link></li>
                  <li><Link to="#">Knowledge Base</Link></li>
                  <li><Link to="#">FAQs</Link></li>
                </ul>
              </div>
              <div className="default-footer__flex-box xs">
                <h2 className="bold">Contact Us</h2>
                <ul>
                  <li><Link to="#">Contact Us</Link></li>
                  <li>(92) 316 5953458</li>
                  <li className="truncate"><Link to="mailto:hello@boltreactor.com">hello@boltreactor.com</Link></li>
                  <li>24/7 chat support — message us at anytime!</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        <footer className="container xl pv5" style={{backgroundColor: '#051325'}}>
          <div className="row pt5">
            <div className="col s12">
              <div className="flex flex-wrap mv2">
                <div className="flex-grow-1">
                  <div className="mdc-typography--label2 mr2 silver">
                    <div className="mdc-typography--headline5 fw9 mb1" style={{fontFamily: 'var(--font-family-montserrat)'}}>
                      <div className="white">THE BAMBIHA</div>
                    </div>
                  </div>
                </div>
                <div className="mt2">
                  <div>
                    <Link className="link hover-white silver dib h1 w1 mr3" to="https://facebook.com" title="Facebook">
                      <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414">
                        <path d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.476-1.195 1.176v1.54h2.39l-.31 2.416h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0" fillRule="nonzero" />
                      </svg>
                    </Link>
                    <Link className="link hover-white silver dib h1 w1 mr3" to="https://youtube.com" title="youtube">
                      <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414">
                        <path d="M0 7.345c0-1.294.16-2.59.16-2.59s.156-1.1.636-1.587c.608-.637 1.408-.617 1.764-.684C3.84 2.36 8 2.324 8 2.324s3.362.004 5.6.166c.314.038.996.04 1.604.678.48.486.636 1.588.636 1.588S16 6.05 16 7.346v1.258c0 1.296-.16 2.59-.16 2.59s-.156 1.102-.636 1.588c-.608.638-1.29.64-1.604.678-2.238.162-5.6.166-5.6.166s-4.16-.037-5.44-.16c-.356-.067-1.156-.047-1.764-.684-.48-.487-.636-1.587-.636-1.587S0 9.9 0 8.605v-1.26zm6.348 2.73V5.58l4.323 2.255-4.32 2.24h-.002z" />
                      </svg>
                    </Link>
                    <Link className="link silver hover-white dib h1 w1 mr3" to="https://slack.com" title="Slack">
                      <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414">
                        <g fillRule="nonzero">
                          <path d="M6.586 7.33l.69 2.057 2.137-.716-.69-2.056-2.137.716z" />
                          <path d="M12.55 9.37l-1.037.347.36 1.073c.145.434-.09.904-.524 1.05-.096.03-.19.045-.287.042-.338-.01-.65-.226-.765-.566l-.36-1.072-2.138.716.36 1.072c.145.435-.09.905-.523 1.05-.096.032-.192.045-.286.043-.34-.01-.65-.226-.764-.566l-.36-1.075-1.037.348c-.096.03-.19.045-.286.042-.34-.008-.65-.226-.765-.565-.146-.434.09-.904.522-1.05L5.7 9.914l-.69-2.058-1.037.347c-.094.032-.19.045-.285.043-.338-.01-.65-.226-.765-.566-.145-.434.09-.904.523-1.05l1.037-.347-.36-1.073c-.145-.434.09-.904.524-1.05.435-.145.905.09 1.05.524l.36 1.072 2.137-.716-.36-1.072c-.144-.435.09-.905.524-1.05.435-.145.906.09 1.05.523l.36 1.075 1.037-.347c.434-.146.904.088 1.05.522.145.434-.09.904-.523 1.05l-1.037.347.69 2.057 1.036-.347c.435-.145.905.09 1.05.523.146.434-.09.904-.522 1.05zm2.78-3.57C13.68.304 11.298-.98 5.8.67.304 2.32-.98 4.7.67 10.2c1.65 5.497 4.03 6.78 9.53 5.13 5.497-1.65 6.78-4.03 5.13-9.53z" />
                        </g>
                      </svg>
                    </Link>
                    <Link className="link silver hover-white dib h1 w1 mr3" to="https://medium.com/@mrmrs_/" title="Medium">
                      <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414">
                        <path d="M11.824 12.628l-.276.45.798.398 2.744 1.372c.15.076.294.11.418.11.278 0 .467-.177.467-.492V5.883l-4.15 6.745zm4.096-8.67c-.004-.003 0-.01-.003-.012l-4.825-2.412c-.06-.03-.123-.038-.187-.044-.016 0-.03-.01-.047-.01-.184 0-.368.092-.467.254l-.24.39-.5.814-1.89 3.08 1.89 3.076.5.813.5.812.59.95 4.71-7.64c.02-.03.01-.06-.02-.08zm-6.27 7.045L7.17 6.97l-.295-.477-.294-.477-.25-.416v4.867l3.32 1.663.5.25.5.25-.5-.813-.5-.813zM.737 1.68L.59 1.608c-.085-.042-.166-.062-.24-.062-.206 0-.35.16-.35.427v10.162c0 .272.2.594.442.716l4.145 2.08c.107.06.208.08.3.08.257 0 .438-.2.438-.53V4.01c0-.02-.012-.04-.03-.047L.738 1.68z" />
                      </svg>
                    </Link>
                    <Link className="link hover-white silver dib h1 w1 mr3" to="https://linkedin.com" title="LinkedIn">
                      <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414">
                        <path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51V7.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z" fillRule="nonzero" />
                      </svg>
                    </Link>
                    <Link className="link hover-white silver dib h1 w1 mr3" to="https://twitter.com/mrmrs_" title="Twitter">
                      <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414">
                        <path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z" fillRule="nonzero" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <div style={{borderBottom: '1px solid #dee4e71a'}} />
            </div>
          </div>
          <div className="row">
            <div className="col s12 m4 tl-l">
              <div className="mdc-typography--label2 silver mv2">
                ©2021 BAMBIHA (Private) Limited.
              </div>
            </div>
            <div className="col s12 m4 tc-m tc-l">
              <div className="mdc-typography--label2 silver mv2">
                Made with <i className="material-icons-outlined v-mid red" style={{fontSize: '18px'}}>favorite</i> in Islamabad, Pakistan
              </div>
            </div>
            <div className="col s12 m4 tr-m tr-l">
              <div className="mdc-typography--label2 mv2">
                <Link to="#" className="mr2 link-mute silver hover-light-silver">Legal</Link>
                <Link to="#" className="link-mute silver hover-light-silver">Terms & Conditions</Link>
              </div>
            </div>
          </div>
        </footer>
            </div>
        );
    }
}
export default withRouter(Footer);
