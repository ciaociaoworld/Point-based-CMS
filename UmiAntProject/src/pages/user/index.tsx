import { Button, Space } from "antd"
import { Link, useHistory, useModel } from "umi"
import { Access, useAccess } from 'umi'


const Index = () => {
    // Histroy to do switch, like routes in original React
    const history = useHistory()
    const { initialState } = useModel('@@initialState')
    // const { user, singout } = useModel('user')
    const access = useAccess()
    return (
    // if (!access.isAdmin) {
    //     return null
    // }
        // <> Fragment shortcut
        <>  
            {initialState?.id}
            <br />
            {initialState?.name}
            <br />

            {/* {user?.id}
            <br />
            {user?.name}
            <br /> */}

            <Space>
                <Access
                    accessible={access.isAdmin !== undefined && access.isAdmin}
                    fallback={<>Not Allowed</>}
                >
                    <Button type="primary">test</Button>
                </Access>

                {/* <Button type='primary' onClick={() => { singout() }}>Sign Out</Button> */}
            </Space>


            <Link to="/userInfo">Home</Link>
            <br />
            <Button type="primary" onClick={() => { history.push('/userInfo') }}>userInfo</Button>
            <br />
            user index
        </>
    )
}

export default Index