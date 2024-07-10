import {useState,useEffect} from "react";

const EPM = () => {
    return (
        <div className="services">
            <section className="pre_quote">
                Enterprise Performance Management Cloud enables you to model and
                plan across finance, HR, supply chain, and sales, streamline the
                financial close process, and drive better decisions.
            </section>
            <section className="services_s">
                <section className="services_s_t">Planning </section>
                <p className={`services_s_p testanim`}>
                    Drive agile, connected plans—from scenario modeling and
                    long-range planning to budgeting and line of business
                    planning—that are built on best practices and advanced
                    technologies.
                </p>

                <section className="services_s_t">
                    Profitability and Cost Management
                </section>
                <p className={`services_s_p testanim`}>
                    Understand your most profitable products or lines of
                    business and, inversely, your biggest costs, to make more
                    informed decisions about where to take the business. Build
                    transparent allocation models for profitability analysis,
                    shared service costing, IT financial management, tax
                    transfer pricing.
                </p>

                <section className="services_s_t">
                    Financial Consolidation and Close
                </section>
                <p className={`services_s_p testanim`}>
                    Adapt quickly to changing business and compliance
                    requirements while delivering faster, more accurate, and
                    transparent reporting. Leverage built-in functionality that
                    covers the full spectrum of end-to-end close tasks
                </p>

                <section className="services_s_t">
                    Account Reconciliation
                </section>
                <p className={`services_s_p testanim`}>
                    Automate account reconciliations and transaction matching.
                    Improve the efficiency and accuracy of your financial
                    statements while addressing security and risk typically
                    associated with the process.
                </p>

                <section className="services_s_t">Tax Reporting</section>
                <p className={`services_s_p testanim`}>
                    Align tax with corporate financial reporting for better
                    visibility and compliance. Deliver transparent corporate tax
                    processes—including tax provision and country by country
                    reporting (CbCR).
                </p>

                <section className="services_s_t">Narrative Reporting</section>
                <p className={`services_s_p testanim`}>
                    Stay ahead of internal and external reporting requirements
                    with narrative reporting for collaboratively authoring and
                    publishing financial, management, and regulatory report
                    packages.
                </p>

                <section className="services_s_t">
                    Enterprise Data Management
                </section>
                <p className={`services_s_p testanim`}>
                    Manage business change with enterprise data management,
                    including enterprise data governance, change data
                    visualization, and hierarchy management.
                </p>
            </section>
        </div>
    );
};

export default EPM;
