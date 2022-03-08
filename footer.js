import React from "react";
import "./_footer.scss";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
    <footer className="footer bg-light">
        <div className="container text-center">
          <span className="text-muted text-light"
            >v0.1 Developed <b> &lt;/&gt; </b> by
            <a href="https://twitter.com/rugleh"> Rugleh</a></span
          >
        </div>
      </footer>
    );
  }
}

export default Footer;
