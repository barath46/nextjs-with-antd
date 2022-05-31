import React from "react";
import { Input, Space, Button } from "antd";
import ClockCircleOutlined from "@ant-design/icons/ClockCircleOutlined";

const App = () => (
  <Space direction="vertical" style={{ width: "100%" }}>
    <Input status="error" placeholder="Error" />
    <Input status="warning" placeholder="Warning" />
    <Input
      status="error"
      prefix={<ClockCircleOutlined />}
      placeholder="Error with prefix"
    />
    <Input
      status="warning"
      prefix={<ClockCircleOutlined />}
      placeholder="Warning with prefix"
    />
    <Button type="primary">hello</Button>
  </Space>
);

export default App;
