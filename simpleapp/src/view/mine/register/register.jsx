import React, { Component } from 'react'
import '../../../utils/patter'
import { Form, Input, Row, Col, Button } from 'antd'
import { BodyContainer } from './register.style'
// import GVerify from '../../../utils/gVerify'
class register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      password: '',
      phone: '',
      confirm: '',
      captcha: '',
      verifyCode: null,
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
                  <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: 'Please confirm your password!',
                      },
                      ({ getFieldValue }) => ({
                        validator(rule, value) {
                          if (!value || getFieldValue('password') === value) {
                            return Promise.resolve()
                          }

                          return Promise.reject(
                            'The two passwords that you entered do not match!'
                          )
                        },
                      }),
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                  <Form.Item label="Captcha">
                    <Row gutter={8}>
                      <Col span={12}>
                        <Form.Item
                          name="captcha"
                          noStyle
                          rules={[
                            {
                              required: true,
                              message: 'Please input the captcha you got!',
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <div id="v_container" className="yanz"></div>
                      {/* <Col span={12}>
                        <Button>Get captcha</Button>
                      </Col> */}
                    </Row>
                  </Form.Item>
                  <Form.Item className="register">
                    <Button type="primary" htmlType="submit">
                      Register
                    </Button>
                  </Form.Item>
                  <Form.Item className="login">
                    <Button
                      type="primary"
                      onClick={() => this.props.history.push('/login')}
                    >
                      login
                    </Button>
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
export default register
