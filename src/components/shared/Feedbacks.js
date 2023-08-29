import React from "react";
import "../../assets/styles/Feedbacks.css";
import pfp1 from "../../assets/images/pfp-1.svg";
import pfp2 from "../../assets/images/pfp-2.svg";
import pfp3 from "../../assets/images/pfp-3.svg";


const feedbacks = [
    {
        id: 1,
        pfp: `${pfp1}`,
        name: "John Smith",
        date: "17 February,2023",
        feedbackText: `Thank's for offering these beautifully
                       unique shirts. They are flattering and gorgeous.`
    },
    {
        id: 2,
        pfp: `${pfp2}`,
        name: "Thomas Adams",
        date: "4 April,2023",
        feedbackText: `This is my very first order through site,
                       and I'm totally and completely satisfied!
                       I'll definitely return again.`
    },
    {
        id: 3,
        pfp: `${pfp3}`,
        name: "Lucas Wilson",
        date: "23 July,2023",
        feedbackText: `Great service, great shirts and fast delivery!
                       Loved the shirts, now buying more! Happy! Happy!`
    }
];

const Feedbacks = () => {
    return (
        <main>
            <section className="feedbacks">
                <h2>What Our Customers Say?</h2>
                <div className="feedbacks-boxes">
                    {
                        feedbacks.map(
                            feedback => <Feedback key={feedback.id} feedback={feedback} />
                        )
                    }
                </div>
            </section>
        </main>
    );
};


const Feedback = ({feedback: {pfp, name, date, feedbackText}}) => {
    return (
        <div className="feedback-box">
            <i className="fa-solid fa-quote-right"></i>
            <div className="pfp">
                {
                    Array(3).fill().map(
                        (item, index) => <span key={index}></span>
                    )
                }
                <img src={pfp} alt="pfp" />
            </div>
            <h3>{name}</h3>
            <div className="stars">
                {
                    Array(5).fill().map(
                        (item, index) => <i key={index} className="fa-solid fa-star"></i>
                    )
                }
            </div>
            <h4>{date}</h4>
            <p>{feedbackText}</p>
        </div>
    );
};


export default Feedbacks;