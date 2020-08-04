import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import { BodyContainer } from '../register/register.style'
<<<<<<< HEAD
=======
import axios from 'axios'
// import '../../../mock1/index
>>>>>>> wyy1
class login extends Component {
  constructor(props) {
    super(props)
    this.state = {
<<<<<<< HEAD
=======
      id: 1,
>>>>>>> wyy1
      password: '',
      phone: '',
    }
  }
<<<<<<< HEAD

=======
  onFinish = (values) => {
    console.log(values, this.state.userPattern)
    axios({
      //   headers: { 'Content-Type': 'application/json;charset=utf-8' },
      method: 'get',
      url: 'http://192.168.9.78:8081/live/juooo/myModuleController/userLogin',
      params: {
        phone: values.phone,
        password: values.password,
      },
    }).then((res) => {
      console.log(res)
      if (res.data.data == '登录失败') {
        alert('错误')
        this.setState({
          phone: '',
          password: '',
        })
      } else {
        localStorage.setItem('user', values.phone)
        this.props.history.push('/mine')
      }
    })
  }
  tologin = (values) => {
    let { phone, password } = this.state
    console.log(phone, password)
  }
  componentDidMount() {
    this.tologin()
  }
>>>>>>> wyy1
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
<<<<<<< HEAD
                <Form>
                  <Form.Item
                    name="phone"
                    label="Phone Number"
=======
                <Form
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={this.onFinish}
                >
                  <Form.Item
                    name="phone"
                    label="phone"
>>>>>>> wyy1
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
<<<<<<< HEAD
                    label="Password"
=======
                    label="password"
>>>>>>> wyy1
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
<<<<<<< HEAD
                    <Button type="primary">login</Button>
=======
                    <Button
                      type="primary"
                      htmlType="submit"
                      onClick={this.tologin}
                    >
                      login
                    </Button>
>>>>>>> wyy1
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
<<<<<<< HEAD
=======

>>>>>>> wyy1
export default login
