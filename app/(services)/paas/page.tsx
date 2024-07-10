import {useState,useEffect} from "react";

const PAAS = () => {
    return (
        <div className="services">
            <section className="pre_quote">
                As you embark on the journey to transform your business and move
                to Oracle Cloud SaaS Applications, there may be requirements to
                build integrations to existing or third-party systems or to
                extend delivered capabilities in Oracle Cloud Applications.
                Oracle’s world-class PaaS platform provides the tools and
                technology to build, test and deploy integrations, extensions,
                and custom applications.
            </section>
            <section className="services_s">
                <section className="services_s_t">
                    Oracle Cloud Infrastructure (OCI) provides many PaaS
                    solutions
                </section>
                <p className={`services_s_p testanim`}>
                    PaaS, or platform as a service, is a set of cloud services
                    to build and manage modern applications in the digital era.
                    PaaS delivers the infrastructure and middleware components
                    in the cloud to enable developers, IT administrators, and
                    end users to build, integrate, migrate, deploy, secure, and
                    manage mobile and web applications. PaaS offers ready-to-use
                    programming components that allow developers to build new
                    capabilities into their applications, including innovative
                    technologies such as artificial intelligence (AI), chatbots,
                    blockchain, Internet of Things (IoT). This also includes
                    suites of application development tools, including cloud
                    native services, Kubernetes, Docker, container engines, and
                    more.
                </p>
                <p className={`services_s_p testanim`}>
                    Automus’ team of certified technical architects and
                    developers have many years of development experience in
                    building, testing and deployment of complex integrations,
                    extensions and custom applications in PaaS and can help
                    address all your custom development requirements to maximize
                    and accelerate your return on investment in Oracle Cloud
                    Applications.
                </p>
            </section>
        </div>
    );
};

export default PAAS;
