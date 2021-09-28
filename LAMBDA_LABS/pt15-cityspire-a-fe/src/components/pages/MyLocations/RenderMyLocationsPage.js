import React, { useState, useEffect } from 'react';
import HeaderElement from '../../common/Header/HeaderElement';
import { Typography, Layout, List, Card, Input } from 'antd';
import 'antd/dist/antd.css';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import './myLocations.css';
import axiosWithAuth from '../../../utils/axiosWithAuth';

const { Title } = Typography;
const { Content, Footer } = Layout;

const RenderMyLocationsPage = () => {
  const [locations, setLocation] = useState([]);
  const [comment, setComment] = useState('');
  const { TextArea } = Input;

  const editLocation = id => {
    const index = locations.findIndex(item => item.id === id);
    const editArray = [...locations];
    editArray[index] = {
      ...editArray[index],
      editing: !editArray[index].editing,
      comments: comment,
    };
    setLocation(editArray);
    setComment('');
  };

  const handleChange = (input, val) => {
    setComment(val);
    setComment(input);
  };

  const apiURL = '/saved';

  const getLocationData = () => {
    axiosWithAuth()
      .get(apiURL)
      .then(res => {
        setLocation(res.data);
      })
      .catch(err => console.log(`Error: ${err}`));
  };

  const deleteLocationData = id => {
    axiosWithAuth()
      .delete(`/saved/${id}`)
      .then(() => {
        getLocationData();
      })
      .catch(err => {
        console.log(`Error: ${err}`);
      });
  };

  useEffect(() => {
    getLocationData();
  }, []);

  return (
    <Layout className="layout" style={{ minHeight: '100vh' }}>
      <HeaderElement />
      <Content className="contentWrapper" style={{ padding: '100px 20px' }}>
        <div className="location-container">
          <Title
            className="locationsListTitle"
            style={{ fontWeight: 300, textAlign: 'center' }}
          ></Title>
          <div className="site-card-wrapper">
            <List
              style={{ padding: '10px' }}
              grid={{
                gutter: 24,
                sm: 1,
                md: 2,
                lg: 2,
                xl: 2,
                xxl: 4,
              }}
              dataSource={locations}
              renderItem={item => (
                <List.Item key={item.id}>
                  <Card
                    title={item.name}
                    actions={[
                      <EditOutlined
                        key="edit"
                        onClick={() => editLocation(item.id)}
                      />,
                      <DeleteOutlined
                        key="delete"
                        onClick={() => deleteLocationData(item.id)}
                      />,
                    ]}
                  >
                    <p>{/* <span>Population: {item.population}</span> */}</p>
                    <p>{/* <span>Density: {item.density}</span> */}</p>
                    <Title level={4}>Comments</Title>
                    {item.editing ? (
                      <TextArea
                        rows={4}
                        value={comment}
                        name="comment"
                        onChange={e =>
                          handleChange(e.target.value, item.comments)
                        }
                      />
                    ) : (
                      <p>{item.comments}</p>
                    )}
                  </Card>
                </List.Item>
              )}
            />
          </div>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
          zIndex: 100,
          position: 'sticky',
          bottom: '0',
        }}
      >
        CitySpire ©2021
      </Footer>
    </Layout>
  );
};

export default RenderMyLocationsPage;
