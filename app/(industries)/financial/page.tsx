import {useState,useEffect} from "react";

const Financial = () => {
    
    return (
        <div className="industries">
            <section className="pre_quote">
                With emerging technologies such as blockchain, the defi space
                will cause a disruption never before seen within Financial
                Services. Financial Services have long balanced the need for
                flexibility to meet customers needs with regulatory
                requirements. DeFi will most likely cause a paradigm shift in
                how Financial Services move forwards and the more agile the
                industry can become will likely determine its success.
            </section>
            <section className="industries_s">
                <section className="industries_s_t">
                    How can Oracle and OIAE help the Financial Services
                    Industry?
                </section>
                <p className={`industries_s_p testanim`}>
                    The need for agility has never been more important to an
                    industry. Heavy regulations have long been accepted, but
                    with new alternate technologies coming into the market,
                    traditional Financial Services need to look at how to
                    analyze current and future looking data, bring data from
                    multiple systems together to gain full visibility into the
                    business. OIAE looks to bring increased automation
                    throughout the company to streamline business processes,
                    accelerate internal approval and audit cycles, allow for
                    increased security and auditability. Leveraging technology
                    and automation will allow for Financial Services clients to
                    minimize the drag of regulatory requirements on their
                    business as they keep up with disruptive technologies coming
                    into the marketplace
                </p>
            </section>
        </div>
    );
};

export default Financial;
