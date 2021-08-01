import React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import { Select, Form, Input, Button, Checkbox } from "antd";
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

  handleSubmit = async (e) => {
    console.log(e, "checking");

    try {
      await fetch("https://naughty-swartz-81e212.netlify.app/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": 'contacttest',
          ...this.state,
          isValidated: true
        }),
      });
      navigate('/contact/thanks/');
    } catch (err) {
      alert(err);
    }
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
    console.log(parameter1, "check");


    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

    return (
      <Layout>
        <Navbar></Navbar>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Get Started</h1>
              <Form
                name="test"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={this.handleSubmit}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  label="Help"
                  name="help"
                  rules={[
                    {
                      required: true,
                      message: "Please input your what you need help with!",
                    },
                  ]}
                >
                  <Select
                    mode="multiple"
                    allowClear
                    style={{ width: "100%" }}
                    placeholder="Please select"
                    defaultValue={parameter1 ? [parameter1] : undefined}
                    onChange={this.handleChange}
                    name="testing"
                  >
                    {children}
                  </Select>
                </Form.Item>
                <Form.Item
                  label="First Name"
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your first name!",
                    },
                  ]}
                >
                  <Input
                    onChange={this.handleChange}
                    name="firstName"
                    placeholder="First Name"
                  />
                </Form.Item>
                <Form.Item
                  label="Last Name"
                  name="lastName"
                  rules={[
                    { required: true, message: "Please input your last name!" },
                  ]}
                >
                  <Input
                    onChange={this.handleChange}
                    name="lastName"
                    placeholder="Last Name"
                  />
                </Form.Item>

                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                >
                  <Input
                    onChange={this.handleChange}
                    name="email"
                    placeholder="john_doe@web.com"
                  />
                </Form.Item>

                <Form.Item
                  label="Project Budget"
                  name="projectBudget"
                  rules={[
                    {
                      required: true,
                      message: "Please input your project budget!",
                    },
                  ]}
                >
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
                    <Option key="500">$500,000-$1,000,000</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label="Website"
                  name="website"
                  rules={[
                    { required: true, message: "Please input your website!" },
                  ]}
                >
                  <Input
                    onChange={this.handleChange}
                    name="website"
                    placeholder="mydreamproduct.com"
                  />
                </Form.Item>
                <Form.Item
                  label="Location"
                  name="location"
                  rules={[
                    { required: true, message: "Please input your location!" },
                  ]}
                >
                  <Select
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
                </Form.Item>
                <Form.Item
                  label="Message"
                  name="message"
                  rules={[
                    { required: true, message: "Please input your message!" },
                  ]}
                >
                  <TextArea
                    name="message"
                    showCount
                    maxLength={100}
                    onChange={this.handleChange}
                  />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
