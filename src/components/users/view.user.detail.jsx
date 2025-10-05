import { Drawer, Row, Col } from "antd";
import React from "react";

const DescriptionItem = ({ title, content }) => (
  <div style={{ marginBottom: "12px" }}>
    <p style={{ marginBottom: 0, fontWeight: 600 }}>{title}:</p>
    <p style={{ margin: 0 }}>{content}</p>
  </div>
);

const ViewUserDetail = ({ user, open, onClose }) => {
  if (!user) return null; // tránh lỗi khi user chưa được truyền

  return (
    <Drawer title="Chi tiết User" width={480} onClose={onClose} open={open}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <DescriptionItem title="Full Name" content={user?.fullName} />
        </Col>
        <Col span={24}>
          <DescriptionItem title="Email" content={user?.email} />
        </Col>
        <Col span={24}>
          <DescriptionItem title="Phone" content={user?.phone} />
        </Col>
      </Row>
    </Drawer>
  );
};

export default ViewUserDetail;
