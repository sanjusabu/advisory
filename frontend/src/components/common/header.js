import React, { useState } from "react";

import { Anchor, Drawer, Button } from "antd";

const { Link } = Anchor;

function AppHeader() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <span
            style={{ fontSize: "1.5rem", fontWeight: "500", color: "black" }}
          >
            TheManishSharma
          </span>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="65">
            <Link href="#hero" title="Home" />
            {/* <Link href="#feature" title="Features" />  */}
            <Link href="#about" title="Importance" />
            <Link href="#pricing" title="Pricing" />
            <Link href="#works" title="How it works" />
            <Link href="#faq" title="FAQ" />
            <Link href="#contact" title="Contact" />
            <Link href="/adminlogin" title="Admin" />
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65">
              <Link href="#hero" title="Home" />
              {/* <Link href="#about" title="About" />
              <Link href="#feature" title="Features" /> */}
              <Link href="#pricing" title="Pricing" />
              <Link href="#works" title="How it works" />
              <Link href="#faq" title="FAQ" />
              <Link href="#contact" title="Contact" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
