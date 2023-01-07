import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Collapse, Button } from "antd";

const { Panel } = Collapse;

function AppFaq() {
  const navigate = useNavigate();

  return (
    <div id="faq" className="block faqBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Frequently Asked Questions</h2>
          <p>Familiar Questions?</p>
        </div>
        <Collapse defaultActiveKey={["1"]}>
          <Panel header="Who are these Training Course for?" key="1">
            <p>
              The training course is specially designed for traders, marketers
              and entrepreneurs.{" "}
            </p>
          </Panel>
          <Panel header="How is it different from other courses?" key="2">
            <p>
              It’s not just a course. It’s pure action-based step-by-step
              process training which can help you to generate a career with very
              less or no investment organically using social media, trading
              techniques and business secrets. You don’t need to spend money on
              various expenses of business, Just follow the steps given in the
              training… that’s it.
            </p>
          </Panel>
          <Panel header="How to access through cloud?" key="3">
            <p>Yes, you get access to the courses instantly.</p>
          </Panel>
          <Panel
            header="I don’t have too many followers in my Facebook account, How will I be able to generate money?
"
            key="4"
          >
            <p>
              You don’t need to promote any product to your existing contacts or
              friends. In these courses you learn how to identify your setbacks
              and will learn to overcome those.
            </p>{" "}
          </Panel>
          <Panel
            header="I am bad at trading and marketing content. I mean… really BAD! Can this work for me?
"
            key="5"
          >
            <p>
              No worry at all, in these courses we teach different ways to do
              certain tasks without any risk and loss. Practicing it will surely
              help you to improve your skills as well.
            </p>
          </Panel>
        </Collapse>
        <div className="quickSupport">
          <h3>Want quick support?</h3>
          <p>Feel free to email, if you have any other queries</p>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mani724a@gmail.com">
            {" "}
            <Button type="primary" size="large">
              <i className="fas fa-envelope"></i> Email your question
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AppFaq;
