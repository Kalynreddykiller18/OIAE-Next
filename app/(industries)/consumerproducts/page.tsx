import {useState,useEffect} from "react";

const ConsumerProducts = () => {
        return (
        <div className="industries">
            <section className="pre_quote">
                Consumer Product companies are increasingly required to shorten
                product development times, reduce cost all while having a
                broader array of product options targeted at specific consumer
                bases.
            </section>
            <section className="industries_s">
                <section className="industries_s_t">
                    How does Oracle and OIAE help drive CPG Success?
                </section>
                <p className={`industries_s_p testanim`}>
                    The Produce Development suite of products can be implemented
                    to increase innovation, bring products to market faster at a
                    lower cost. When this function is tightly integrated into
                    the supply chain it can dramatically improve the ability to
                    be successful. Adjusting through hot new market trends with
                    the right products on the shelves at the right time bundled
                    with proper pricing and promotions is what drives CPG
                    success. The Automos team is experienced in projects in
                    which the product development lifecycle needs to be tightly
                    integrated into the supply chain and will bring these
                    concepts and ideas to your project to leverage as a
                    baseline.
                </p>
                <p className={`services_s_p testanim`}>
                    As much as technologies have evolved there are still some
                    core functions that are required to run the business. EDI
                    has long been a core technology in CPG, but often with many
                    challenges to implement and maintain. OIAE has deep
                    experience in EDI specific to CPG and can significantly
                    reduce the cost and risk that goes into the EDI requirements
                    in an ERP implementation.
                </p>
            </section>
        </div>
    );
};

export default ConsumerProducts;
