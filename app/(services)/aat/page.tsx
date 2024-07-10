import {useState,useEffect} from "react";

const AAT = () => {
    return (
        <div className="services">
            <section className="pre_quote">
                Oracle AI is a family of artificial intelligence and machine
                learning services. Developers can add prebuilt models to
                applications and operations. Data scientists can build, train,
                and deploy models with favorite open-source frameworks or choose
                to benefit from the speed of in-database machine learning.
            </section>
            <section className="services_s">
                <section className="services_s_t">Blockchain and IoT</section>
                <p className={`services_s_p testanim`}>
                    Connect operational, customer, product, and machine data for
                    efficient issue detection, multi-tier visibility, and
                    advanced insights across the supply network. Make decisions
                    with confidence; optimize and automate supply chain
                    execution.{" "}
                </p>
                <p className={`services_s_p testanim`}>
                    Intelligent Track and Trace allows to record transactions
                    from multiple sources to provide track and trace reporting
                    in a purpose-built application with built-in connections to
                    Oracle supply chain products and easy integration to
                    third-party applications.
                </p>
                <p className={`services_s_p testanim`}>Leverage IoT applications to:</p>

                <ul className={`services_s_p testanim`}>
                    <li>
                        enable smart manufacturing and monitor work-in-progress
                        across factories, maximize product quality, and prevent
                        unplanned downtime. Detect, analyze, and respond to IoT
                        signals in factory settings. Enable real-time visibility
                        of asset health, location, and utilization{" "}
                    </li>
                    <li>
                        improve maintenance efficiency and increase the value of
                        your assets. Optimize asset availability and utilization
                        through continuous remote tracking and visualization of
                        usage, condition, performance, and operating
                        environments
                    </li>
                    <li>
                        optimize your end-to-end logistics operations with
                        proactive detection of anomalies and deviations for
                        private and third-party carriers and warehouse facility
                        operations
                    </li>
                    <li>
                        automate rule-driven enforcement of safety policies.
                        Monitor worker movement to prevent unsafe acts, such as
                        entering hazardous or unauthorized areas, and reduce
                        your response time for accidents and monitoring
                        compliance.
                    </li>
                    <li>
                        connect to service centers for proactive and immediate
                        issue resolution. Improve customer service by empowering
                        agents to resolve issues by sending commands directly to
                        assets. Provide field service workers with the
                        information they need to resolve issues on the first
                        visit.
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default AAT;
