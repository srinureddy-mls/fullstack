import { SettingOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Collapse, Select, Card, Row, Col } from 'antd';
const { Option } = Select;
const { Panel } = Collapse;

const baby_care = [
    {
        "id": 1,
        "name": "Cindra",
        "cost": 226,
        "qnty": 295,
        "selling_priz": 97,
        "image": "http://dummyimage.com/189x100.png/ff4444/ffffff"
      }, {
        "id": 2,
        "name": "Min",
        "cost": 448,
        "qnty": 78,
        "selling_priz": 366,
        "image": "http://dummyimage.com/202x100.png/ff4444/ffffff"
      }, {
        "id": 3,
        "name": "Melina",
        "cost": 87,
        "qnty": 135,
        "selling_priz": 122,
        "image": "http://dummyimage.com/185x100.png/ff4444/ffffff"
      }, {
        "id": 4,
        "name": "Harri",
        "cost": 259,
        "qnty": 327,
        "selling_priz": 20,
        "image": "http://dummyimage.com/178x100.png/5fa2dd/ffffff"
      }, {
        "id": 5,
        "name": "Bartholemy",
        "cost": 22,
        "qnty": 272,
        "selling_priz": 489,
        "image": "http://dummyimage.com/229x100.png/ff4444/ffffff"
      }, {
        "id": 6,
        "name": "Charleen",
        "cost": 182,
        "qnty": 408,
        "selling_priz": 308,
        "image": "http://dummyimage.com/152x100.png/ff4444/ffffff"
      }, {
        "id": 7,
        "name": "Coleman",
        "cost": 498,
        "qnty": 255,
        "selling_priz": 471,
        "image": "http://dummyimage.com/188x100.png/cc0000/ffffff"
      }, {
        "id": 8,
        "name": "Mickie",
        "cost": 388,
        "qnty": 497,
        "selling_priz": 205,
        "image": "http://dummyimage.com/142x100.png/dddddd/000000"
      }, {
        "id": 9,
        "name": "Skipper",
        "cost": 496,
        "qnty": 35,
        "selling_priz": 109,
        "image": "http://dummyimage.com/208x100.png/dddddd/000000"
      }, {
        "id": 10,
        "name": "Panchito",
        "cost": 201,
        "qnty": 157,
        "selling_priz": 479,
        "image": "http://dummyimage.com/180x100.png/ff4444/ffffff"
      }, {
        "id": 11,
        "name": "Lindsy",
        "cost": 392,
        "qnty": 253,
        "selling_priz": 453,
        "image": "http://dummyimage.com/110x100.png/ff4444/ffffff"
      }, {
        "id": 12,
        "name": "Dermot",
        "cost": 290,
        "qnty": 75,
        "selling_priz": 375,
        "image": "http://dummyimage.com/158x100.png/ff4444/ffffff"
      }, {
        "id": 13,
        "name": "Ilsa",
        "cost": 391,
        "qnty": 110,
        "selling_priz": 347,
        "image": "http://dummyimage.com/197x100.png/cc0000/ffffff"
      }, {
        "id": 14,
        "name": "Vladamir",
        "cost": 21,
        "qnty": 439,
        "selling_priz": 344,
        "image": "http://dummyimage.com/125x100.png/dddddd/000000"
      }, {
        "id": 15,
        "name": "Alma",
        "cost": 37,
        "qnty": 337,
        "selling_priz": 355,
        "image": "http://dummyimage.com/226x100.png/dddddd/000000"
      }, {
        "id": 16,
        "name": "Di",
        "cost": 351,
        "qnty": 42,
        "selling_priz": 194,
        "image": "http://dummyimage.com/149x100.png/ff4444/ffffff"
      }, {
        "id": 17,
        "name": "Kerwin",
        "cost": 434,
        "qnty": 119,
        "selling_priz": 156,
        "image": "http://dummyimage.com/207x100.png/ff4444/ffffff"
      }, {
        "id": 18,
        "name": "Nilson",
        "cost": 103,
        "qnty": 243,
        "selling_priz": 397,
        "image": "http://dummyimage.com/159x100.png/dddddd/000000"
      }, {
        "id": 19,
        "name": "Alaric",
        "cost": 405,
        "qnty": 474,
        "selling_priz": 301,
        "image": "http://dummyimage.com/107x100.png/5fa2dd/ffffff"
      }, {
        "id": 20,
        "name": "Horton",
        "cost": 340,
        "qnty": 279,
        "selling_priz": 119,
        "image": "http://dummyimage.com/130x100.png/ff4444/ffffff"
      }
];

const Home = () => {
  const [expandIconPosition, setExpandIconPosition] = useState('start');

  const onPositionChange = (newExpandIconPosition) => {
    setExpandIconPosition(newExpandIconPosition);
  };

  const onChange = (key) => {
    console.log(key);
  };

  const genExtra = (isShopByCategory) => (
    <SettingOutlined
      onClick={(event) => {
        event.stopPropagation();
      }}
    />
  );

  const items = [
    {
      key: '1',
      label: 'Best Selling Products',
      extra: genExtra(false), // Pass false for "Best Selling Products"
    },
    // Add more CollapsePanel items here if needed
  ];

  const prodts = [
    {
      key: '2',
      label: 'Shop By Category',
    },
    // Add more CollapsePanel items here if needed
  ];

  return (
    <>
      <Collapse
        defaultActiveKey={['2']} // Specify the default open panel key
        onChange={onChange}
        expandIconPosition={expandIconPosition}
      >
        {items.map((item) => (
          <Panel header={item.label} key={item.key} extra={item.extra}>
            <Row gutter={[16, 16]}>
              {baby_care.map((item) => (
                <Col key={item.id} span={8}>
                  <Card title={item.name}>
                    <img src={item.image} alt="Item" style={{ width: '100%' }} />
                    <p><strong>Cost:</strong> {item.cost}</p>
                    <p><strong>Quantity:</strong> {item.qnty}</p>
                    <p><strong>Selling Price:</strong> {item.selling_priz}</p>
                  </Card>
                </Col>
              ))}
            </Row>
          </Panel>
        ))}
        {prodts.map((item) => (
          <Panel header={item.label} key={item.key} extra={item.extra}>
            <Row gutter={[16, 16]}>
              {baby_care.map((item) => (
                <Col key={item.id} span={8}>
                  <Card title={item.name}>
                    <img src={item.image} alt="Item" style={{ width: '100%' }} />
                    <p><strong>Cost:</strong> {item.cost}</p>
                    <p><strong>Quantity:</strong> {item.qnty}</p>
                    <p><strong>Selling Price:</strong> {item.selling_priz}</p>
                  </Card>
                </Col>
              ))}
            </Row>
          </Panel>
        ))}
      </Collapse>
      <br />
      <span>Expand Icon Position: </span>
      <Select
        value={expandIconPosition}
        style={{
          margin: '0 8px',
        }}
        onChange={onPositionChange}
      >
        <Option value="end">end</Option>
        <Option value="start">start</Option>
      </Select>
    </>
  );
};

export default Home;
