import React from "react";
import { ConfigProvider } from "antd";

const testGreenColor = "#017D03";
const testRedColor = "#ff0000";

const withTheme = (node) => (
  <>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: testGreenColor,
        },
      }}
    >
      {node}
    </ConfigProvider>
  </>
)

export default withTheme;