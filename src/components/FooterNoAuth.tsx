import React from 'react'

export function FooterNoAuth(){
  return (
    <footer className="pt-24 pb-10">
      <div className="container mw-screen-xl">
        <div className="row">
          <div className="col">
            <div className="pe-5">
              <h3 className="h2 text-heading fw-semibold lh-lg mb-3">Hello ;)</h3>
              <a href="mailto:dappykit@gmail.com" className="h3 text-primary">
                dappykit@gmail.com
                <span className="svg-icon svg-align-baseline ms-3">
                    <i className="bi bi-arrow-right"></i>
                  </span>
              </a>
            </div>
          </div>
        </div>
        <div className="row mt-5 mb-7">
          <div className="col">
            <ul className="nav mx-n4">
              <li className="nav-item">
                <a
                    target="_blank"
                    href="https://warpcast.com/dappykit"
                    className="nav-link text-lg text-muted text-primary-hover d-flex align-items-center justify-content-center"
                    style={{height: '100%'}}
                >
                  <img
                      src="/farcaster-40.png"
                      alt="FappyKit Farcaster"
                      style={{width: '20px'}}
                  />
                </a>
              </li>
              <li className="nav-item">
                <a
                    target="_blank"
                    href="https://twitter.com/DappyKit"
                    className="nav-link text-lg text-muted text-primary-hover"
                >
                  <i className="bi bi-twitter-x"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                    target="_blank"
                    href="https://github.com/DappyKit"
                    className="nav-link text-lg text-muted text-primary-hover"
                >
                  <i className="bi bi-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-auto">
            <p className="text-sm text-muted">&copy; Copyright 2024 DappyKit</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
