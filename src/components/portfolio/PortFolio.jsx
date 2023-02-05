import React, { useState, useEffect } from "react";
import PortfolioList from "../portfolioList/PortfolioList"
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio
} from "../../data"
import "./portfolio.scss";

const PortFolio = () => {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);

    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "web",
            title: "Web App"
        },
        {
            id: "mobile",
            title: " Mobile App"
        },
        {
            id: "designing",
            title: "Designing"
        },
        {
            id: "branding",
            title: "Branding"
        }
    ]

    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "designing":
                setData(designPortfolio);
                break;
            case "branding":
                setData(contentPortfolio);
                break;
            default:
                setData(contentPortfolio);
        }

    }, [selected])
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item => (
                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                        key={item.id}
                    >
                    </PortfolioList>
                ))}
            </ul>
            <div className="container">
                {data.map((item) => (
                    <div className="item" key={item.title}>
                        <img
                            src={item.img}
                            alt={item.title}
                        />
                        <h3>{item.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PortFolio;