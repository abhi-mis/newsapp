import React, { Component } from "react";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <>
        <div id="about">
          <div className="bottomline about-div">
            {/* Introduction to Aconews */}
            <h1 style={{ marginBottom: "15px" }}>
              Discover the Essence of Aconews
            </h1>
            <p>
              Welcome to Aconews, your go-to open-source platform for staying up-to-date with the latest global stories. Powered by{" "}
              <a
                href="https://gnews.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                GNewsAPI
              </a>
              , we aim to deliver real-time, accurate news in a user-friendly format that makes staying informed easier than ever.
              Whether you're catching up on breaking news or exploring in-depth reports, Aconews ensures you never miss a beat.
            </p>
          </div>

          <div className="features bottomline about-div">
            {/* Highlighting Aconews features */}
            <h1>What Makes Aconews Unique:</h1>
            <div>
              <h3>Real-Time News Updates:</h3> 
              Stay ahead of the curve with live news feeds from trustworthy sources across the globe, ensuring you're always in the loop.
            </div>
            <div>
              <h3>Tailored News Experience:</h3> 
              Personalize your news consumption by selecting from a wide range of categories, so you're always viewing content that matters to you.
            </div>
            <div>
              <h3>Advanced Search Capabilities:</h3> 
              Easily find the news stories, topics, or keywords you care about with our fast, responsive search functionality.
            </div>
            <div>
              <h3>Seamless Cross-Device Accessibility:</h3> 
              With a fully responsive design, enjoy a flawless news reading experience on any device—be it desktop, tablet, or smartphone.
            </div>
          </div>

          <h3>
            {/* Mission and values */}
            At Aconews, we prioritize accuracy, integrity, and inclusivity in our reporting. We are committed to delivering diverse perspectives
            and in-depth coverage, so our readers are always well-informed. Our platform evolves continually, ensuring that we meet the ever-changing
            demands of our user community.
          </h3>

          <h3 className="bottomline">
            {/* Community engagement and GitHub link */}
            We believe in the power of collaboration. Aconews is an open-source initiative made possible by the contributions of developers and enthusiasts like you. 
            A special thanks goes out to Acowale for their support. Want to help us grow? Feel free to contribute or provide feedback through our{" "}
            <a
              href="https://github.com/Nishka30"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub repository
            </a>
            .
          </h3>

          <h4 className="thank-you">
            {/* Closing note */}
            <span className="thank-you-symbol">⭐</span>
            Thank you for visiting Aconews. We hope your experience was insightful and enjoyable.
            <span className="thank-you-symbol">⭐</span>
          </h4>
        </div>
      </>
    );
  }
}
