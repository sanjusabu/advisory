import React from "react";

import { Button, Modal } from "antd";

class AppWorks extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div id="works" className="block worksBlock">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>How it works</h2>
            <p>Click on the video to know more</p>
          </div>
          <div className="contentHolder">
            <Button size="large" onClick={this.showModal}>
              <i className="fas fa-play"></i>
            </Button>
          </div>
          <Modal
            title="Explaining the courses"
            visible={this.state.visible}
            onCancel={this.handleCancel}
            footer={null}
            destroyOnClose={true}
          >
            <iframe
              title="Tutorial"
              width="100%"
              height="350"
              src="https://www.youtube.com/embed/cpg78ouK54I"
            ></iframe>
          </Modal>
        </div>
      </div>
    );
  }
}

export default AppWorks;
