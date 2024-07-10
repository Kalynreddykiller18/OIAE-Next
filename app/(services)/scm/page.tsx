import React,{useState,useEffect} from "react";

const SCM = () => {

    return (
        <div className="services">
            <section className="pre_quote">
                With Oracle Supply Chain Management (SCM) & Manufacturing,
                organizations can respond quickly to changing demand, supply,
                and market conditions. Seamlessly connect your supply chain to
                create a resilient network and process built to outpace change.
            </section>
            <section className="services_s">
                <section className="services_s_t">
                    Order Management Cloud
                </section>
                <p className={`testanim services_s_p`}>
                    Gain visibility and improve coordination across channels and
                    fulfillment sources, facilitate rapid order execution, and
                    integrate the customer experience for excellent service and
                    improved margins.
                </p>
                <p className={`testanim services_s_p`}>
                    Order Management Cloud offers rich features and
                    functionality for omnichannel order management including
                    order orchestration and fulfillment for end-to-end order
                    flow processes across multiple ERP systems and existing
                    order taking systems, advanced pricing management, global
                    order promising, simplified products and services
                    configuration and channel revenue management.
                </p>

                <section className="services_s_t">Procurement Cloud</section>
                <p className={`testanim services_s_p ` }>
                    Streamline and integrate source-to-pay with an intuitive
                    user experience, built-in analytics, and collaboration that
                    simplifies supplier management, enables best supplier
                    selection, enforces compliant spending, and improves
                    profitability.
                </p>
                <p className={`testanim services_s_p`}>
                    Procurement Cloud simplifies employee shopping and maximizes
                    user adoption with a consumer-like, guided experience.
                    Intuitive search allows you to quickly find the goods and
                    services you need at negotiated prices and ensure compliant
                    buying. Realize cost savings by directing purchases to
                    approved suppliers offering negotiated prices. Configure
                    approval rules to ensure spend compliance and simplify
                    exception management on all platforms including smart phones
                    and tablets. Simplify purchasing with automated purchase
                    order creation from approved requisitions and easily manage
                    revisions with full change history. Automated invoice
                    processing minimizes workload, reduces errors, and speeds
                    supplier payments.
                </p>

                <section className="services_s_t">
                    Inventory Management Cloud
                </section>
                <p className={`testanim services_s_p`}>
                    Optimize inventory levels and use of working capital to
                    reduce costs and drive higher customer satisfaction. Gain
                    full visibility and control of product flow across your
                    organization and global supply chains.
                </p>
                <p className={`testanim services_s_p`}>
                    Inventory Management Cloud delivers rich capabilities for
                    comprehensive materials management, optimization of
                    inventory and service levels, costing management and
                    optimization of profitability.
                </p>

                <section className="services_s_t">Logistics Cloud</section>
                <p className={`testanim services_s_p`}>
                    Maximize perfect order fulfillment and minimize logistics
                    costs while adapting to business disruptions and changes in
                    your supply chain.
                </p>

                <section className="services_s_t">Warehouse Management</section>
                <p className={`testanim services_s_p`}>
                    Transform warehouse operations to meet the challenges of
                    today’s demand driven marketplace, successfully managing
                    complex fulfillment operations, and gaining total inventory
                    visibility—from the distribution center to the store shelf.{" "}
                </p>
                <p className={`testanim services_s_p`}>
                    Warehouse Management Cloud caters for retail and ecommerce,
                    wholesale distribution, consumer goods, manufacturing, and
                    logistics segments and supports omnichannel fulfillment,
                    business-to-business and direct-to-consumer fulfillment,
                    advanced wave management for outbound shipments, returns
                    management, optimized order picking for smaller and more
                    frequent orders, and end-to-end inventory management from
                    manufacturer to distribution center and from store to
                    consumer.
                </p>
                <section className="services_s_t">
                    Transportation Management
                </section>
                <p className={`testanim services_s_p`}>
                    Manage all transportation activity throughout your global
                    supply chain, combining ease of use with industry leading
                    capabilities, resulting in reduced freight costs and
                    optimized service levels, so you can run your logistics
                    operations efficiently.
                </p>
                <p className={`testanim services_s_p`}>
                    Transportation Management includes rich features and
                    functionality for operational planning, transportation
                    management for inbound and outbound shipments, fleet
                    management, and network modeling. Leverage Digital Assistant
                    to receive and respond to inquiries and resolve issues
                    faster while providing better customer service. The Machine
                    Learning capabilities in Transportation Management help
                    predict transit times accurately, eliminate excess inventory
                    and allocate resources efficiently.
                </p>
                <section className="services_s_t">Manufacturing Cloud</section>
                <p className={`testanim services_s_p`}>
                    Streamline global, mixed-mode manufacturing with an
                    integrated manufacturing execution system (MES). Built-in
                    supply chain integration, IoT, and AI simplify shop floor
                    scheduling and execution, optimize decisions, and control
                    quality and cost.
                </p>
                <p className={`testanim services_s_p`}>
                    Manufacturing Cloud delivers rich features and functionality
                    to support discrete manufacturing, process manufacturing,
                    mixed-mode manufacturing, production scheduling,
                    project-driven supply chain and contract manufacturing.
                    Leverage IoT applications to improve efficiency, increase
                    supply chain visibility, and prevent downtime by using IoT
                    sensor data for real-time visibility and maintenance of
                    machines, vehicles, and other assets.
                </p>
                <section className="services_s_t">Maintenance Cloud</section>
                <p className={`testanim services_s_p`}>
                    Increase reliability and uptime while reducing overall
                    maintenance costs with a connected, smart maintenance
                    management solution.
                </p>
                <p className={`testanim services_s_p`}>
                    Maintenance Cloud delivers best-in-class features and
                    functionality for asset management, service logistics,
                    maintenance scheduling and work execution, work order
                    costing, spare parts procurement and inventory, preventive
                    and predictive maintenance and project-driven maintenance.
                    Leverage IoT Asset Monitoring Cloud for automated and
                    continuous asset monitoring with rule-based warnings, asset
                    health, utilization, availability and predictive insights on
                    asset failures, and recommendations to prevent failures with
                    ML algorithms.
                </p>
                <section className="services_s_t">
                    Product Lifecycle Management
                </section>
                <p className={`testanim services_s_p`}>
                    Accelerate time to market, reduce costs, and improve product
                    quality with a connected digital thread that unifies your
                    supply chain and harmonizes product master data.
                </p>
                <p className={`testanim services_s_p`}>
                    Product Lifecycle Management delivers capabilities for
                    innovation management, product development, quality
                    management, configurator modeling and product master data
                    management.
                </p>
                <section className="services_s_t">SCM Analytics Cloud</section>
                <p className={`testanim services_s_p`}>
                    Accelerate understanding of your supply chain operations
                    with a prebuilt analytics solution for Oracle Cloud SCM that
                    helps supply chain professionals uncover ways to improve
                    efficiency, increase revenue, reduce costs, and ensure
                    customer satisfaction. Enhance and enrich your analytic
                    insights using SCM Analytics’ embedded machine learning and
                    third-party data sources to detect, understand, and resolve
                    supply chain issues faster.
                </p>
                <p className={`testanim services_s_p`}>
                    SCM Analytics is fully integrated with Oracle Cloud SCM
                    applications and delivers the following capabilities:
                </p>
                <ul className={`testanim services_s_p`}>
                    <li>
                        Identify cost-saving opportunities and operational
                        bottlenecks, and predict future outcomes
                    </li>
                    <li>
                        Correlate supply chain operations with business results
                    </li>
                    <li>
                        Identify opportunities for spend consolidation and
                        greater supplier value
                    </li>
                    <li>
                        Improve customer satisfaction through consistent perfect
                        order execution
                    </li>
                </ul>
                <p className={`testanim services_s_p`}>
                    Gain inventory visibility across locations to better fill
                    customer demand.
                </p>
            </section>
        </div>
    );
};

export default SCM;
