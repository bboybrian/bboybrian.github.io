import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Contact me
            </p>
            <p>Email: {resumeData.email}
              <br />
              Phone: {resumeData.phone}</p>
          </div>
        </div>
      </section>
    );
  }
}