import React from 'react';
import QRCode from 'qrcode.react';
import { Button } from 'antd';
import logo from '../../layout-navs/BGC_logo2.png';

const QRCodeGenerator = props => {
  const { newMemberId } = props;

  return (
    <div
      style={{
        margin: '100px',
      }}
    >
      <Button size="large" type="primary" onClick={() => window.print()}>
        Print IDs
      </Button>

      {newMemberId.map(memberId => (
        <div
          style={{
            // Pixel dimensions for a credit card size card
            width: '324px',
            height: '204px',
            borderStyle: 'dashed',
            borderColor: 'gray',
            margin: '25px',
            padding: 20,
            pageBreakBefore: 'always',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} height="75px" alt="logo" />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <QRCode
                value={memberId}
                renderAs="svg"
                fgColor="#333"
                bgColor="#fff"
                key={`level-${memberId}`}
              />
              <h2>{memberId}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QRCodeGenerator;
