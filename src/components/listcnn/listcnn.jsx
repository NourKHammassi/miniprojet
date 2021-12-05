import React from 'react'
import './listcnn.css'
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

export default function Listcnn() {
    return(
       
        <div className="listprop">
            <h2>actualites CNN</h2>
            <ul className="ul">
                <li className="li">
            <Link to='/articlecnn'>
                <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
            <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            </Link>
            </li>
            <li className="li">
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
            <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            </li>
            <li className="li">
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
            <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            </li>
            <li className="li">
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
            <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            </li>
            <li className="li">
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
            <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            </li>
           </ul> 
            <ul className="ul">
            <li className="li">
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
            <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            </li>
            <li className="li">
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
            <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            </li>
            <li className="li">
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
            <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            </li> <li className="li">
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
            <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            </li>
            </ul>
       </div>
        
    )
}
