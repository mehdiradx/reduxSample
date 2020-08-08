import React from "react";
import { connect } from "react-redux";
import { Form, Input } from 'antd';
import Button from '../../component/Kit/Button/Button';
import { load } from '../../redux/modules/login';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

function Login({ name, loadConnect }) {

    const onFinish = values => {
        loadConnect({ values });
      };
    
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };

    return (
        <>
            <Form
                {...layout}
                style={{ marginTop: 50 }}
                name="login"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    colon={false}
                    label="نام کاربری"
                    name="username"
                    rules={[{ required: true, message: 'لطفا نام کاربری را وارد کنید' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="رمزعبور"
                    name="password"
                    rules={[{ required: true, message: 'لطفا رمز عبور را وارد کنید!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        تایید
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
};

export default connect(state => ({
        name: state.login.testState
    }),{
        loadConnect: load,
    }
)(Login);
