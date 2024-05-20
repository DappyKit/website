import React from 'react'

export function MainNoAuth() {
  return (
      <main>
        <div
            className="pt-56 pb-10 pt-lg-56 pb-lg-0 mt-n40 position-relative gradient-bottom-right start-red middle-purple end-white">
          <div className="container">
            <div className="row align-items-center g-10">
              <div className="col-lg-8">
                <h1 className="ls-tight fw-bolder display-3 text-white mb-5">
                  Web3 Nano Apps.
                </h1>
                <p className="w-xl-75 lead text-white">
                  DappyKit is a platform and SDK for rapid Web3 application development for multiple
                  networks and platforms with the goal of 1 billion active on-chain users.
                </p>

                <div className="d-block d-md-none d-flex justify-content-center align-items-center mt-5">
                  {/*<SignInButton onSuccess={(res: StatusAPIResponse) => onLogin(dispatch, res)} />*/}
                </div>
              </div>
              <div className="col-lg-3 d-flex flex-column align-items-center">
                <img className="pb-5 d-none d-lg-block" src="/oct-1.png" alt="Preview" style={{width: 170}}/>
                <div>
                  <a target="_blank" href="https://github.com/DappyKit/sdk"
                     className="btn btn-lg btn-dark rounded-pill border-0 shadow-none px-lg-8">
                    Explore more
                  </a>
                </div>
              </div>
            </div>
            <div className="d-none d-lg-block pb-16">
            </div>
          </div>
        </div>

        <div className="py-20 pt-lg-32 bg-dark rounded-bottom-4 overflow-hidden position-relative z-1">
          <div className="container mw-screen-xl">
            <div className="row">
              <div className="col-lg-6 col-md-10"><h5 className="h5 mb-5 text-uppercase text-primary">What you get</h5>
                <h1 className="display-4 font-display text-white fw-bolder lh-tight mb-4">Key features</h1>
                <p className="text-lg text-white text-opacity-75">
                  DappyKit enables to create user-friendly Web3 applications without users having to deal with the
                  complexities of crypto technologies. No <s>mnemonic phrases</s>, no <s>gas fees</s>, no <s>browser
                  extensions</s>, no <s>wallet downloads</s>.
                </p>
              </div>
            </div>
            <div className="row g-6 g-lg-20 my-10">
              <div className="col-md-4">
                <div className="card shadow-none border-0">
                  <div className="card-body p-7">
                    <div className="mt-4 mb-7">
                      <div className="icon icon-shape text-white bg-primary rounded-circle text-lg"><i
                          className="bi bi-lightbulb"></i></div>
                    </div>
                    <div className="pt-2 pb-3">
                      <h5 className="h3 font-display fw-bold mb-3">
                        Created with the latest tech and standards
                      </h5>
                      <p className="text-muted">
                        <a href="https://app.optimism.io/superchain/" target="_blank">Optimism Superchain</a>,&nbsp;
                        <a href="https://www.erc4337.io/" target="_blank">ERC-4337</a>,&nbsp;
                        <a href="https://docs.farcaster.xyz/" target="_blank">Farcaster</a>,&nbsp;
                        <a href="https://docs.farcaster.xyz/learn/what-is-farcaster/frames"
                           target="_blank">Frames</a>,&nbsp;
                        <a href="https://ipfs.tech/" target="_blank">IPFS</a>,&nbsp;
                        <a href="https://www.ledger.com/academy/topics/blockchain/what-is-a-soulbound-token"
                           target="_blank">SoulBound Tokens</a>,&nbsp;
                        <a href="https://webauthn.io/"
                           target="_blank">WebAuthn</a>.
                      </p>
                      <p>New technologies are aimed at making crypto easy to use. By combining them, you get all the
                        benefits of Web3 without its drawbacks.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow-none border-0">
                  <div className="card-body p-7">
                    <div className="mt-4 mb-7">
                      <div className="icon icon-shape text-white bg-primary rounded-circle text-lg"><i
                          className="bi bi-person-workspace"></i></div>
                    </div>
                    <div className="pt-2 pb-3">
                      <h5 className="h3 font-display fw-bold mb-3">
                        Billions of operations for pennies
                      </h5>
                      <p className="text-muted">
                        User actions on data and social connections are stored in smart contracts. But before they get
                        there, they are packaged by <a
                          href="https://github.com/DappyKit/farcaster-auth/tree/master/src/service/delegated-fs"
                          target="_blank">gateways</a>. Each action is verified using EVM-compatible cryptography. As a
                        result, most actions are free for users but are recorded on-chain.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow-none border-0">
                  <div className="card-body p-7">
                    <div className="mt-4 mb-7">
                      <div className="icon icon-shape text-white bg-primary rounded-circle text-lg"><i
                          className="bi bi-file-earmark-lock"></i></div>
                    </div>
                    <div className="pt-2 pb-3">
                      <h5 className="h3 font-display fw-bold mb-3">
                        Protection from Deplatforming in our DNA
                      </h5>
                      <p className="text-muted">
                        The core of the project is not just convenient tools but also the protection of user data and
                        subscribers from deletion. Our team has faced this problem multiple times, and we are here to
                        solve it. Any user can always opt out of using gateways and switch to their own or third-party
                        technology stack.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-6 g-lg-20 my-10">
              <div className="col-md-4">
                <div className="card shadow-none border-0">
                  <div className="card-body p-7">
                    <div className="mt-4 mb-7">
                      <div className="icon icon-shape text-white bg-primary rounded-circle text-lg"><i
                          className="bi bi-activity"></i></div>
                    </div>
                    <div className="pt-2 pb-3">
                      <h5 className="h3 font-display fw-bold mb-3">
                        Social Graph connects all applications
                      </h5>
                      <p className="text-muted">
                        Our friends and subscriptions are the foundations of social networks. They are what bring people
                        together. This is the essence of DappyKit. Every application, as a member of the DappyKit
                        family, has access to the entire social graph. Each new user of an application on DappyKit
                        becomes a new member available to all applications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow-none border-0">
                  <div className="card-body p-7">
                    <div className="mt-4 mb-7">
                      <div className="icon icon-shape text-white bg-primary rounded-circle text-lg"><i
                          className="bi bi-disc"></i></div>
                    </div>
                    <div className="pt-2 pb-3">
                      <h5 className="h3 font-display fw-bold mb-3">
                        Decentralized Storage
                      </h5>
                      <p className="text-muted">
                        To ensure people's data is protected, it must be distributed and accessible at any time. That's
                        why we use decentralized storage for storing content and social connections. It is
                        designed for scalability, ensuring that popular content is available to more users without
                        limitations. Have access at any moment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow-none border-0">
                  <div className="card-body p-7">
                    <div className="mt-4 mb-7">
                      <div className="icon icon-shape text-white bg-primary rounded-circle text-lg"><i
                          className="bi bi-emoji-laughing"></i></div>
                    </div>
                    <div className="pt-2 pb-3">
                      <h5 className="h3 font-display fw-bold mb-3">
                        One app's success is everyone's success
                      </h5>
                      <p className="text-muted">
                        A traffic exchange network has been created for all applications on DappyKit. Each application
                        that contributes its traffic to the network receives traffic from other applications in return.
                        This way, every application becomes more popular simply because it is built on DappyKit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
  )
}
