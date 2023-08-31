import React from "react";
import "../assets/styles/Features.css";
import featureLogo1 from "../assets/images/feature-logo-1.svg";
import featureLogo2 from "../assets/images/feature-logo-2.svg";
import featureLogo3 from "../assets/images/feature-logo-3.svg";


const features = [
    {
        id: 1,
        featureLogo: `${featureLogo1}`,
        featureText: "Easy 7 days replacement only if the product is faulty."
    },
    {
        id: 2,
        featureLogo: `${featureLogo2}`,
        featureText: "Free home delivery. We don't sell your info."
    },
    {
        id: 3,
        featureLogo: `${featureLogo3}`,
        featureText: "Quality ensured. Every product's quality is ensured."
    }
];

const Features = () => {
    return (
        <main id="features">
            <section className="features-sec">
                {
                    features.map(
                        feature => <Feature key={feature.id} feature={feature} />
                    )
                }
            </section>
        </main>
    );
};


const Feature = ({feature: {featureLogo, featureText}}) => {
    return (
        <div className="feature">
            <div className="orange-bg">
                <img src={featureLogo} alt="logo" />
            </div>
            <p>{featureText}</p>
        </div>
    );
};


export default Features;