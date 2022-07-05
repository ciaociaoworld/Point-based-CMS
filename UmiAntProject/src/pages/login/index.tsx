import { doLogin } from "@/api/user/user"
import { Button, Form, Input, message } from "antd"
import { useHistory } from "umi"

function index() {
    const history = useHistory()
    const login = (user: API.IUser) => {
        doLogin(user).then(response => {
            if (response.code === 0) {
                history.push('/')
            } else {
                message.error('Error')
            }
        })
    }

    return (
        <>
            <Form
                onFinish={login}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
            >
                <Form.Item
                    label='Account' name={'name'}
                    rules={[
                        {
                            type: 'string',
                            required: true,
                            message: 'Account could not be empty'
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item label='Password' name={'password'}
                    rules={[
                        {
                            type: 'string',
                            required: true,
                            message: 'Password could not be empty'
                        }
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default index