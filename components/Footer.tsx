import Head from "next/head";

const Footer = () => {
  return (
    <div>

      <footer className="footer">
        <div className="container navbar navpad">
          <a className="navbar-brand" href="/"><img className="small" src="../logosmall.png" /></a>
          <form className="form-inline">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </form>
        </div>
      </footer>

      <svg height="100%" width="100%" id="bg-svg" viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><path d="M 0,600 C 0,600 0,150 0,150 C 85.21794871794873,131.22051282051282 170.43589743589746,112.44102564102565 256,121 C 341.56410256410254,129.55897435897435 427.474358974359,165.45641025641027 503,165 C 578.525641025641,164.54358974358973 643.6666666666667,127.73333333333332 728,133 C 812.3333333333333,138.26666666666668 915.8589743589744,185.6102564102564 993,188 C 1070.1410256410256,190.3897435897436 1120.8974358974358,147.825641025641 1191,134 C 1261.1025641025642,120.17435897435898 1350.5512820512822,135.0871794871795 1440,150 C 1440,150 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="#ffffff66" className="transition-all duration-300 ease-in-out delay-150"></path><path d="M 0,600 C 0,600 0,300 0,300 C 100.17179487179487,294 200.34358974358975,288 277,296 C 353.65641025641025,304 406.7974358974359,326 482,317 C 557.2025641025641,308 654.4666666666666,268 733,256 C 811.5333333333334,244.00000000000003 871.3358974358976,260 938,278 C 1004.6641025641024,296 1078.1897435897436,316.00000000000006 1163,320 C 1247.8102564102564,323.99999999999994 1343.9051282051282,312 1440,300 C 1440,300 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="#ffffff88" className="transition-all duration-300 ease-in-out delay-150"></path><path d="M 0,600 C 0,600 0,450 0,450 C 94.21282051282054,465.84358974358975 188.42564102564108,481.6871794871795 271,483 C 353.5743589743589,484.3128205128205 424.5102564102564,471.09487179487184 508,455 C 591.4897435897436,438.90512820512816 687.5333333333334,419.9333333333333 755,417 C 822.4666666666666,414.0666666666667 861.3564102564101,427.17179487179493 928,429 C 994.6435897435899,430.82820512820507 1089.0410256410257,421.3794871794871 1179,423 C 1268.9589743589743,424.6205128205129 1354.479487179487,437.31025641025644 1440,450 C 1440,450 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="#ffffffff" className="transition-all duration-300 ease-in-out delay-150"></path></svg>
    </div>

  )
}

export default Footer;
