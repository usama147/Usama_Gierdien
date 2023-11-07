import React from "react";


export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div className="formS">
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/mwkwadvo"
        method="POST"
      >
        
        <label>Email:</label>
        <input type="email" name="email" placeholder="Your email" size='50' />
        <label>Full Name:</label>
        <input type='text' name="Name" placeholder="Name and Surname" ></input>
        <label>Message:</label>
        <input type="text" name="message" placeholder="Type your message" />
        {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
      </div>
    );
  }
  

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}