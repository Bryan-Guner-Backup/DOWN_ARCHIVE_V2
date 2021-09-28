import React, { useContext, useEffect, useState } from 'react';
import HeaderElement from '../../common/Header/HeaderElement';
import { Typography, Card, Button, Layout, Input } from 'antd';
import { LocationContext } from '../../../state/contexts/LocationContext';
import DataResultCard from './DataResultCard';
import Map from '../Map/Map';
import 'antd/dist/antd.css';
import './searchResult.css';
import axiosWithAuth from '../../../utils/axiosWithAuth';

const { Title } = Typography;
const { Content, Footer } = Layout;
const { TextArea } = Input;

const ResultSearchPage = () => {
  const [cityData, setData] = useState([]);
  const { location } = useContext(LocationContext);
  const [comment, setComment] = useState('');
  let dataForApi = location
    .split(',')
    .slice(0, -1)
    .join(',');

  const apiURL = `/data/predict/${dataForApi}`;
  const postURL = '/saved';

  const getCitydata = () => {
    axiosWithAuth()
      .get(apiURL)
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log(err));
  };

  const postCityData = () => {
    axiosWithAuth()
      .post(postURL, { name: location, city_id: cityData.id_num })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getCitydata();
  }, []);

  return (
    <Layout className="layout" style={{ height: '100vh' }}>
      <HeaderElement />
      <Content style={{ padding: '0 50px' }}>
        <div className="container-fluid">
          <div className="resultWrapper">
            <div className="site-card-border-less-wrapper">
              <Card
                title={location}
                bordered={false}
                style={{ width: '100% ' }}
              >
                <DataResultCard citydata={cityData} />
                <Title level={4}>Comments</Title>
                <TextArea rows={4} onChange={e => setComment(e.target.value)} />
                <div className="buttonWrapper">
                  <Button
                    type="primary"
                    shape="round"
                    className="addButton"
                    onClick={postCityData}
                  >
                    Add
                  </Button>
                </div>
              </Card>
            </div>
          </div>
          <div className="mapWrapper">
            <Map />
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>CitySpire ©2021</Footer>
    </Layout>
  );
};

export default ResultSearchPage;
