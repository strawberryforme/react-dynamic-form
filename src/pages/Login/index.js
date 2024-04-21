import {Button, Card,Input,Form} from 'antd';
import logo from '@/assets/image.png';
import './index.scss';
// const layout = {
//   labelCol: {
//     span: 8,
//   },
//   wrapperCol: {
//     span: 16,
//   },
// };
const Login = () => {
  return (
    <div className='login-pages'>
      <img src={logo} alt='登录模块'/>
      <h1>Sign in to Github </h1>
      <Card
      >
        <Form
        layout="vertical"
        >
          <Form.Item
           label="Email Address"
           name="username"
           >
            <Input placeholder="" />
          </Form.Item>
          <Form.Item
           label="Password"
           name="Password"
           >
            <Input />
          </Form.Item>
          <Button className='login-button'>
            Sign in
          </Button>
        </Form>
      </Card>
    </div>
  )
};

export default Login;