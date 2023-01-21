import React from "react";
import "../../App.css";
import { List, Card, Button } from "antd";
import image6 from "../../assets/images/qr.png";

const data = [
  {
    title: "Traders & investors",
    content: [
      {
        price: "₹1800",
        space: "1 GB of space",
        user: "1 user",
        support:
          "In this course, various techniques and methods to reduce chances of loss and profit maximisation in trading of crypto, stocks, forex etc. will be taught to u which will lead you to an easy and successful road to become successful in trading. ",
        backup: "About the course",
        access: "Access from anywhere",
      },
    ],
  },
  // {
  //   title: "Business and Entrepreneur",
  //   content: [
  //     {
  //       price: "₹2100",
  //       space: "5 GB of space",
  //       user: "5 users",
  //       support:
  //         "In this course, various methods to used by internet marketer and affiliate marketer are taught to make you generate quality leads organically and make money online.",
  //       backup: "About the course",
  //       access: "Access from anywhere",
  //     },
  //   ],
  // },
  // {
  //   title: "Professionals and sales",
  //   content: [
  //     {
  //       price: "₹1800",
  //       space: "Unlimited space",
  //       user: "15 users",
  //       support:
  //         "In this course, various methods to used by internet marketer and affiliate marketer are taught to make you generate quality leads organically and make money online.",
  //       backup: "About the course",
  //       access: "Access from anywhere",
  //     },
  //   ],
  // },
];

function AppPricing() {
  return (
    <div id="pricing" className="block pricingBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Choose a plan to fit your needs</h2>
        </div>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 1,
            md: 1,
            lg: 1,
            xl: 1,
            xxl: 1,
          }} //change here if list increases
          dataSource={data}
          renderItem={(item) => (
            <>
              <List.Item>
                <Card title={item.title} bodyStyle={{ fontSize: "1rem" }}>
                  <p className="large">{item.content[0].price}</p>
                  {/* <p>{item.content[0].space}</p> */}
                  {/* <p>{item.content[0].user}</p> */}
                  <p>{item.content[0].support}</p>
                  <p>{item.content[0].backup}</p>
                  <p>{item.content[0].access}</p>
                  <Button type="primary" size="large">
                    Paytm - 9642622380
                  </Button>
                  <img src={image6} style={{ height: "5rem" }}></img>
                </Card>
              </List.Item>
            </>
          )}
        />
        <div className="paytm"></div>
      </div>
    </div>
  );
}

export default AppPricing;
