import React from "react";

export const HelpCom = () => {
  return (
    <div className="help_text_page">
      <div className="help_text_wrapper">
        <h3>
          Need help? Check our{" "}
          <a href="#" style={{ color: "#109ad2" }}>
            help pages
          </a>{" "}
          or{" "}
          <a href="#" style={{ color: "#109ad2" }}>
            contact us
          </a>
        </h3>
        When your order is placed, we'll send you an e-mail message
        acknowledging receipt of your order. If you choose to pay using an
        electronic payment method (credit card, debit card or net banking), you
        will be directed to your bank's website to complete your payment. Your
        contract to purchase an item will not be complete until we receive your
        electronic payment and dispatch your item. If you choose to pay using
        Pay on Arival (POA), you can pay using cash/card/net banking when you
        receive your item.
        <p>
          See On-Space Return{" "}
          <a href="#" style={{ color: "#109ad2" }}>
            Policy
          </a>
          .
        </p>
        <p>
          Need to add more items to your order? Continue shopping on the
          <a href="/" style={{ color: "#109ad2" }}>
            {" "}
            {"  "}On-Space
          </a>{" "}
          homepage.
        </p>
      </div>
    </div>
  );
};
