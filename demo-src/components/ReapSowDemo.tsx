// ReapSow Platform Demo Component
// Patent-Protected Direct Payment Routing Technology

import React from 'react';

interface OrderFlow {
  customer: string;
  product: string;
  payment: number;
  supplier: string;
  profit: number;
}

export const ReapSowDemo: React.FC = () => {
  const demoOrder: OrderFlow = {
    customer: "Demo Customer",
    product: "Faith-Based Apparel",
    payment: 34.99,
    supplier: "Printful",
    profit: 15.00
  };

  return (
    <div className="reapsow-demo">
      <h1>ReapSow™ Direct Payment Routing</h1>
      <p>Patent Application #63/825,622</p>
      
      <div className="order-flow">
        <div>Customer Payment: ${demoOrder.payment}</div>
        <div>→ Supplier Cost: ${demoOrder.payment - demoOrder.profit}</div>
        <div>→ Entrepreneur Profit: ${demoOrder.profit}</div>
      </div>
      
      <p>Zero capital required. Instant profit extraction.</p>
    </div>
  );
};
