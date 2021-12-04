import React from 'react'
import './footer.css'
import { Form, Input,  Button } from 'antd';

export default function Footer() {
    return(
        
        <div className="footerprop">
            <h5 className="h5"> CONTACT US!</h5>
            <div className="adj">
            <Form>
                <div className="sep1">
                <Form.Item name={['user', 'firstName']} label="FirstName"  >
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'lastname']} label="LastName"  >
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'Email']} label="Email"  >
                    <Input />
                </Form.Item>
                </div>
                <div className="sep2">
                <Form.Item name={['user', 'numero']} label="numero"  >
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'message']} label="message">
                    <Input.TextArea />
                </Form.Item>
                <Button type="primary" htmlType="submit">
                send                                                                                                                          
                </Button>
                </div>
            </Form>
            </div>
        </div>
    )
}
