'use client'

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
    faAnglesRight,
    faBars,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./navigation.css";

const Navigation = () => {
    const [actNum, setActNum] = useState(0);
    const [isClient, setIsClient] = useState(false);

    const mobnavRef = useRef<HTMLUListElement>(null);
    const servRef = useRef<HTMLUListElement>(null);
    const indRef = useRef<HTMLUListElement>(null);
    const mobNavDevref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleClick = (value: number) => {
        setActNum(value);
    };

    const showMobNav = () => {
        mobnavRef.current?.classList.toggle("responsive_nav");
    };

    const showServeNav = () => {
        servRef.current?.classList.toggle("responsive_serv");
        servRef.current?.classList.remove("responsive_serv_back");
        mobNavDevref.current?.classList.toggle("navlisthide");
    };

    const hideServNav = () => {
        servRef.current?.classList.toggle("responsive_serv_back");
        servRef.current?.classList.remove("responsive_serv");
        mobNavDevref.current?.classList.remove("navlisthide");
    };

    const showIndNav = () => {
        indRef.current?.classList.toggle("responsive_serv");
        indRef.current?.classList.remove("responsive_serv_back");
        mobNavDevref.current?.classList.toggle("navlisthide");
    };

    const hideIndNav = () => {
        indRef.current?.classList.toggle("responsive_serv_back");
        indRef.current?.classList.remove("responsive_serv");
        mobNavDevref.current?.classList.remove("navlisthide");
    };

    return (
        <div className="navbar">
            <nav>
                <img
                    // src=" OIAE -logos_black_1.png"
                    src="OAIESLog3.png"
                    alt="OIAE"
                />
                <div />
                <ul className="navlist desktop">
                    <div className="desktop">
                        <button className="back-mob-menu" onClick={showMobNav}>
                            <FontAwesomeIcon
                                className="nav-close"
                                icon={faXmark}
                            />
                        </button>

                        <Link href="/" passHref>
                            <li
                                className={` ${actNum == 0 ? "active" : ""} `}
                                onClick={() => handleClick(0)}
                            >
                                Home
                            </li>
                        </Link>

                        <li
                            className={`nav_serv ${
                                actNum == 1 ? "active" : ""
                            } `}
                        >
                            Services
                            <ul onClick={() => handleClick(1)} id="servlist">
                                <Link href="/erp" passHref>
                                    <li>
                                        Enterprise Resource Planning Cloud (ERP)
                                    </li>
                                </Link>

                                <Link href="/epm" passHref>
                                    <li>
                                        Enterprise Performance Management Cloud
                                        (EPM)
                                    </li>
                                </Link>
                                <Link href="/scm" passHref>
                                    <li>
                                        Supply Chain & Manufacturing Cloud (SCM)
                                    </li>
                                </Link>
                                <Link href="/hcm" passHref>
                                    <li>
                                        Human Capital Management Cloud (HCM)
                                    </li>
                                </Link>

                                <Link href="/cx" passHref>
                                    <li>Sales Cloud (CX)</li>
                                </Link>

                                <Link href="/aat" passHref>
                                    <li>Automation and AI transformation</li>
                                </Link>
                                <Link href="/paas" passHref>
                                    <li>Platform as a Service (PaaS)</li>
                                </Link>
                                <Link href="/ams" passHref>
                                    <li>Application Managed Services (AMS)</li>
                                </Link>
                            </ul>
                        </li>

                        <li
                            className={`nav_ind ${actNum == 2 ? "active" : ""} `}
                            onClick={() => handleClick(2)}
                        >
                            Industries
                            <ul id="indlist">
                                <Link href="/financial" passHref>
                                    <li>Financial Services</li>
                                </Link>

                                <Link href="/mediaentertainment" passHref>
                                    <li>Media & Entertainment</li>
                                </Link>
                                <Link href="/professional" passHref>
                                    <li>Professional Services</li>
                                </Link>

                                <Link href="/retails" passHref>
                                    <li>Retail</li>
                                </Link>

                                <Link
                                    href="/transportationandLogistics"
                                    passHref
                                >
                                    <li>Transportation & Logistics</li>
                                </Link>
                                <Link href="/consumerproducts" passHref>
                                    <li>Consumer Products</li>
                                </Link>
                                <Link href="/hightechnology" passHref>
                                    <li>High Technology</li>
                                </Link>
                                <Link
                                    href="/industrialmanufacturing"
                                    passHref
                                >
                                    <li>Industrial Manufacturing</li>
                                </Link>

                                <Link href="/lifesciences" passHref>
                                    <li>Life Sciences</li>
                                </Link>

                                <Link href="/healthcare" passHref>
                                    <li>Healthcare</li>
                                </Link>
                            </ul>
                            <FontAwesomeIcon
                                className="fa-right"
                                icon={faAnglesRight}
                            />
                        </li>
                        <Link href="/career" passHref>
                            <li
                                className={` ${actNum == 3 ? "active" : ""} `}
                                onClick={() => handleClick(3)}
                            >
                                Career
                            </li>
                        </Link>
                        <Link href="/about" passHref>
                            <li
                                className={` ${actNum == 4 ? "active" : ""} `}
                                onClick={() => handleClick(4)}
                            >
                                About
                            </li>
                        </Link>
                    </div>
                </ul>
                {/* Mobile Responsive */}
                {isClient && (
                    <ul ref={mobnavRef} className="navlist mobile">
                        <div ref={mobNavDevref} className="mobile_div">
                            <button className="back-mob-menu" onClick={showMobNav}>
                                <FontAwesomeIcon
                                    className="nav-close"
                                    icon={faXmark}
                                />
                            </button>

                            <Link href="/" passHref>
                                <li
                                    className={` ${actNum == 0 ? "active" : ""} `}
                                    onClick={() => handleClick(0)}
                                >
                                    Home
                                </li>
                            </Link>
                            <li onClick={showServeNav} className="mob_ser_list">
                                Services
                                <FontAwesomeIcon
                                    className="fa-right"
                                    icon={faChevronRight}
                                />
                            </li>

                            <li
                                className={`nav_ind ${actNum == 2 ? "active" : ""} `}
                                onClick={showIndNav}
                            >
                                Industries
                                <FontAwesomeIcon
                                    className="fa-right"
                                    icon={faChevronRight}
                                />
                            </li>

                            <Link href="/career" passHref>
                                <li
                                    className={` ${actNum == 3 ? "active" : ""} `}
                                    onClick={() => handleClick(3)}
                                >
                                    Career
                                </li>
                            </Link>
                            <Link href="/about" passHref>
                                <li
                                    className={` ${actNum == 4 ? "active" : ""} `}
                                    onClick={() => handleClick(4)}
                                >
                                    About
                                </li>
                            </Link>
                        </div>
                        <ul
                            ref={servRef}
                            onClick={hideServNav}
                            className="servlist"
                        >
                            <li>
                                <FontAwesomeIcon
                                    style={{ marginRight: "10px" }}
                                    icon={faChevronLeft}
                                />
                                Services
                            </li>
                            <Link href="/erp" passHref>
                                <li>Enterprise Resource Planning Cloud (ERP)</li>
                            </Link>

                            <Link href="/epm" passHref>
                                <li>
                                    Enterprise Performance Management Cloud (EPM)
                                </li>
                            </Link>
                            <Link href="/scm" passHref>
                                <li>Supply Chain & Manufacturing Cloud (SCM)</li>
                            </Link>
                            <Link href="/hcm" passHref>
                                <li>Human Capital Management Cloud (HCM)</li>
                            </Link>

                            <Link href="/cx" passHref>
                                <li>Sales Cloud (CX)</li>
                            </Link>

                            <Link href="/aat" passHref>
                                <li>Automation and AI transformation</li>
                            </Link>
                            <Link href="/paas" passHref>
                                <li>Platform as a Service (PaaS)</li>
                            </Link>
                            <Link href="/ams" passHref>
                                <li>Application Managed Services (AMS)</li>
                            </Link>
                        </ul>

                        <ul ref={indRef} onClick={hideIndNav} className="servlist ">
                            <li>
                                <FontAwesomeIcon
                                    style={{ marginRight: "10px" }}
                                    icon={faChevronLeft}
                                />
                                Industries
                            </li>
                            <Link href="/financial" passHref>
                                <li>Financial Services</li>
                            </Link>

                            <Link href="/mediaentertainment" passHref>
                                <li>Media & Entertainment</li>
                            </Link>
                            <Link href="/professional" passHref>
                                <li>Professional Services</li>
                            </Link>

                            <Link href="/retails" passHref>
                                <li>Retail</li>
                            </Link>

                            <Link
                                href="/transportationandLogistics"
                                passHref
                            >
                                <li>Transportation & Logistics</li>
                            </Link>
                            <Link href="/consumerproducts" passHref>
                                <li>Consumer Products</li>
                            </Link>
                            <Link href="/hightechnology" passHref>
                                <li>High Technology</li>
                            </Link>
                            <Link
                                href="/industrialmanufacturing"
                                passHref
                            >
                                <li>Industrial Manufacturing</li>
                            </Link>

                            <Link href="/lifesciences" passHref>
                                <li>Life Sciences</li>
                            </Link>
                            <Link href="/healthcare" passHref>
                                <li>Healthcare</li>
                            </Link>
                        </ul>
                    </ul>
                )}
            </nav>
            <button onClick={showMobNav} className="mob-menu">
                <FontAwesomeIcon className="nav-open" icon={faBars} />
            </button>
        </div>
    );
};

export default Navigation;
