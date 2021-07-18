import React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import { Select, Input } from "antd";
const { Option } = Select;
const { TextArea } = Input;

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    const params = new URLSearchParams(props.location.search);
    const parameter1 = params.get("service");
    if (parameter1) {
      this.state = { isValidated: false, multiSelect: [parameter1] };
    }
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    console.log(e);
    if (e.target) {
      console.log(e.target.name);
      this.setState({ [e.target.name]: e.target.value });
    } else {
      this.setState({ multiSelect: e });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  render() {
    const children = [
      <Option key="productMarketFit">Product Market Fit</Option>,
      <Option key="ideation">Ideation</Option>,
      <Option key="businessModel">Business Model</Option>,
      <Option key="infrastructure">Infrastructure</Option>,
      <Option key="privacy">Privacy</Option>,
      <Option key="reusability">Reusability</Option>,
      <Option key="security">Security</Option>,
      <Option key="services">Services</Option>,
      <Option key="data">Data</Option>,
    ];

    const params = new URLSearchParams(this.props.location.search);
    const parameter1 = params.get("service");

    return (
      <Layout>
        <Navbar></Navbar>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Get Started</h1>
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"name"}>
                    What do you need help with? (search/select all that apply)
                  </label>
                  <div className="control">
                    <Select
                      mode="multiple"
                      allowClear
                      style={{ width: "100%" }}
                      placeholder="Please select"
                      defaultValue={[parameter1]}
                      onChange={this.handleChange}
                      name="testing"
                    >
                      {children}
                    </Select>
                  </div>
                </div>
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <div className="field">
                  <label className="label" htmlFor={"name"}>
                    Your name
                  </label>
                  <div className="control flex">
                    <div className="mr-6 w-6/12">
                      <Input
                        onChange={this.handleChange}
                        name="firstName"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="ml-6 w-6/12">
                      <Input
                        onChange={this.handleChange}
                        name="lastName"
                        placeholder="Last Name"
                      />
                    </div>
                    {/* <input
                      className="input"
                      type={"text"}
                      name={"name"}
                      onChange={this.handleChange}
                      id={"name"}
                      required={true}
                    />
                    <input
                      className="input"
                      type={"text"}
                      name={"name"}
                      id={"name"}
                      required={true}
                    /> */}
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"email"}>
                    Email
                  </label>
                  <div className="control">
                    <Input
                      onChange={this.handleChange}
                      name="email"
                      placeholder="john_doe@web.com"
                    />
                    {/* <input
                      className="input"
                      type={"email"}
                      name={"email"}
                      onChange={this.handleChange}
                      id={"email"}
                      required={true}
                    /> */}
                  </div>
                </div>

                <div className="field">
                  <label className="label" htmlFor={"email"}>
                    Project Budget
                  </label>
                  <div className="control">
                    <Select
                      mode="multiple"
                      allowClear
                      style={{ width: "100%" }}
                      placeholder="Please select"
                      // defaultValue={[parameter1]}
                      onChange={this.handleChange}
                      name="projectBudget"
                    >
                      <Option key="25">$25,000-$50,000</Option>
                      <Option key="50">$50,000-$100,000</Option>
                      <Option key="100">$100,000-$250,000</Option>
                      <Option key="250">$250,000-$500,000</Option>
                      <Option key="500">$500,000-$1.000,000</Option>
                    </Select>
                    {/* <input
                      className="input"
                      type={"email"}
                      name={"email"}
                      onChange={this.handleChange}
                      id={"email"}
                      required={true}
                    /> */}
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"email"}>
                    Website
                  </label>
                  <div className="control">
                    <Input
                      onChange={this.handleChange}
                      name="website"
                      placeholder="mydreamproduct.com"
                    />
                    {/* <input
                      className="input"
                      type={"email"}
                      name={"email"}
                      onChange={this.handleChange}
                      id={"email"}
                      required={true}
                    /> */}
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"email"}>
                    Location
                  </label>
                  <div className="control">
                    <Select
                      mode="multiple"
                      allowClear
                      style={{ width: "100%" }}
                      placeholder="Please select"
                      // defaultValue={[parameter1]}
                      onChange={this.handleChange}
                      name="location"
                    >
                      <Option key="usa">U.S.A.</Option>
                      <Option key="canada">Canada</Option>
                      <Option key="other">Other</Option>
                    </Select>
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"message"}>
                    Message
                  </label>
                  <div className="control">
                    <TextArea
                      name="message"
                      showCount
                      maxLength={100}
                      onChange={this.handleChange}
                    />
                    {/* <textarea
                      className="textarea"
                      name={"message"}
                      onChange={this.handleChange}
                      id={"message"}
                      required={true}
                    /> */}
                  </div>
                </div>
                <div className="field">
                  <button className="button is-link" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
