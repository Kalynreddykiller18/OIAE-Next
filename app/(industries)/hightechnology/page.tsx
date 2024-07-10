import {useState,useEffect} from "react";

const HighTechnology = () => {
    return (
        <div className="industries">
            <section className="pre_quote">
                Faster innovation, lower costs, transformative ideas, higher
                quality in initial products, managing a global network of
                engineers and manufacturing – all of this must be mastered to
                compete in High Tech. How can companies increase collaboration
                to not only improve the product development process, but allow
                manufacturing to participate to ensure that the product can
                scale within manufacturing.
            </section>
            <section className="industries_s">
                <section className="industries_s_t">
                    How Oracle and OIAE can help.
                </section>
                <p className={`industries_s_p testanim`}>
                    OIAE can bring collaborative technologies that allow for
                    increased communication and collaboration across the
                    enterprise. While this is traditionally though of as
                    specific to engineering, OIAE believes that the integration
                    of supply chain into the design process is critical for
                    overall success through product launch and scale. Designing
                    in parts that are already in use, that have a predictable
                    supply and lead time, that align to manufacturing processes
                    already in place where possible all help in reducing issues
                    downstream upon product launch. OIAE has extensive
                    experience helping clients view the entire lifecycle of a
                    product and ensuring this processes and overall strategy are
                    built into the core functions of an ERP system.
                </p>
            </section>
        </div>
    );
};

export default HighTechnology;
