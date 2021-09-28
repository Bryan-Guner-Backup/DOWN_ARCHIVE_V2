import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Space } from 'antd';
import axios from 'axios';
function Village() {
  const [village, setVillage] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get('https://54.158.134.245/api/village/1')
      .then(res => setVillage(res.data))
      .catch(err => setError(err));
  }, []);

  return (
    <div>
      <Row>
        <Col span={12} offset={6} style={{ textAlign: 'center' }}>
          <h1>Village Info</h1>
        </Col>
      </Row>
      <Row>
        <Col span={12} offset={6} id={village.id}>
          <p>
            <b>Longitude:</b> {village.longitude}
          </p>
          <p>
            <b>Longitude:</b> {village.latitude}
          </p>
          <p>
            <b>Education Contact Name:</b> {village.educationContactName}
          </p>
          <p>
            <b>Education Contact Email:</b> {village.educationContactEmail}
          </p>
          <p>
            <b>Education Contact Phone:</b> {village.educationContactPhone}
          </p>
          <p>
            <b>Drive Folder:</b> <a href={village.driveLink}>Google Drive</a>
          </p>
          <p>
            <b>Notes:</b> {village.notes}
          </p>
          <p>
            <b>Village Contact:</b> {village.villageContactName}
          </p>
          <p>
            <b>Village Contact Phone:</b> {village.villageContactPhone}
          </p>
          <Button
            shape="round"
            type="primary"
            htmlType="submit"
            href={`/village/${village.id}`}
          >
            Update Village
          </Button>
        </Col>
      </Row>
      );
    </div>
  );
}

export default Village;
