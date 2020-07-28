import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import { BodyContainer } from '../register/register.style'
class login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      password: '',
      phone: '',
    }
  }

  render() {
    return (
      <div>
        <BodyContainer>
          <img
            src="https://m.juooo.com/static/img/login_logo.4a43235.png"
            alt=""
            className="img"
          />
          <div className="code">
            <div>
              <div>
                <Form>
                  <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your phone number!',
                      },
                      {
                        pattern: new RegExp(
                          /^((\+)?86|((\+)?86)?)0?1[3458]\d{9}$/
                        ),
                        message: '请正确输入',
                      },
                    ]}
                  >
                    <Input
                      style={{
                        width: '100%',
                      }}
                      onBlur={this.checkAccount}
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your password!',
                      },
                      {
                        pattern: new RegExp('^[0-9a-zA-Z_]{1,}$', 'g'),
                        message: '只允许包含数字、字母、下划线',
                      },
                    ]}
                    hasFeedback
                  >
                    <Input.Password />
                  </Form.Item>
                  <Form.Item className="register">
                    <Button
                      type="primary"
                      onClick={() => this.props.history.push('/register')}
                    >
                      Register
                    </Button>
                  </Form.Item>
                  <Form.Item className="login">
                    <Button type="primary">login</Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </BodyContainer>
      </div>
    )
  }
}
export default login
