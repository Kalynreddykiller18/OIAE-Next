import {useState,useEffect} from "react";

const CX = () => {
    return (
        <div className="services">
            <section className="pre_quote">
                CX Sales Cloud guides sellers with intelligent recommendations
                to help them focus on the most valuable prospects at the right
                time. These machine learning-based CRM selling tools center
                around clean, complete customer data from internal and external
                sources that sellers can trust.
            </section>
            <section className="services_s">
                <section className="services_s_t">
                    Subscription Management
                </section>
                <p className={`services_s_p testanim`}>
                    Power growth and support recurring relationships and the
                    corresponding revenue through subscription pricing models
                    with a platform embedded across Oracle CX and ERP.
                    Subscription Management delivers rich features and
                    capabilities to support subscription-based orders and
                    quotes, automatic billing and payments, comprehensive
                    renewal options, varied pricing models, coverage services
                    management, warranties, comprehensive revenue recognition
                    support, different order types, handling of mixed orders of
                    goods and services, and AI-driven analytics.
                </p>
            </section>
        </div>
    );
};

export default CX;
