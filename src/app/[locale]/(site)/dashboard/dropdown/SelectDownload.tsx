import React, { useState } from "react";
import { Flex } from "../../components/styles/flex";
import { Text, Dropdown } from "@nextui-org/react";

export const SelectDownload = () => {
  return (
    <Dropdown>
      <Dropdown.Button color="success" shadow css={{ padding: 10 }}>
        Download
      </Dropdown.Button>
      <Dropdown.Menu aria-label="locations">
        <Dropdown.Item key="pdf" css={{ fontSize: "smaller" }}>
          pdf
        </Dropdown.Item>
        <Dropdown.Item key="csv" css={{ fontSize: "smaller" }}>
          csv
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
