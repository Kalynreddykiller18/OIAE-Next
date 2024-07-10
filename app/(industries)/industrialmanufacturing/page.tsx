import {useState,useEffect} from "react";

const IndustrialManufacturing = () => {
    return (
        <div className="industries">
            <section className="pre_quote">
                Often overlooked by flashier industries, Industrial
                Manufacturing is still the staple of the American manufacturing
                sector. The ability to produce industrial products of high
                quality that are affordable has become the rule instead of the
                exception. So how can Industrial Manufacturers continue to
                refine their business to align to customer expectations?
            </section>
            <section className="industries_s">
                <section className="industries_s_t">
                    How can Oracle and OIAE help with Industrial Manufacturing?
                </section>
                <p className={`industries_s_p testanim`}>
                    As cost is driven down a lean supply chain is imperative.
                    From understanding your demand forecast, to ensuring the
                    right inventory is in the right place at the right time to
                    meet that demand, and subsequently shipping in a cost
                    effective manner, OIAE can help you refine the true end to
                    end supply chain for Industrial Manufacturers to compete in
                    this space. Within manufacturing, deep expertise in cost
                    accounting allows clients to truly understand their costs
                    and ensure the amount of value is created in these areas to
                    justify the cost it produces. This in depth analysis allows
                    for strategic business decisions around outsourcing vs.
                    internal optimization and adjustments to refine the business
                    and drive profitability.
                </p>
            </section>
        </div>
    );
};

export default IndustrialManufacturing;
