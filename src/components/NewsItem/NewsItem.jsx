import React, { Component } from 'react'
import './NewsItem.css'

export default class NewsItem extends Component {

    contentToggle(event) {
        const targetElement = event.currentTarget;
        targetElement.childNodes[0].classList.toggle("hide")
        targetElement.childNodes[1].classList.toggle("hide")
    }
    getTimeAgo(timeString) {
        const currentTime = new Date();
        const time = new Date(timeString);

        const timeDifference = currentTime.getTime() - time.getTime();
        const minutes = Math.floor(timeDifference / (1000 * 60));
        const hours = Math.floor(timeDifference / (1000 * 60 * 60));
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (days > 0) {
            return `${days} day${days > 1 ? 's' : ''} ago`;
        } else if (hours > 0) {
            return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        } else if (minutes > 0) {
            return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        } else {
            return 'Just now';
        }
    }

    render() {
        let { image, title, description, url, theme, publishedAt, source, content } = this.props
        return (
            <>
                <div className={`NewsItem ${theme}`}>
                    <div className="tc">
                        <div className="title-des">
                            <h3 className={`ItemTitle ${theme}`}>{title}</h3>
                        </div>
                    </div>

                    <img src={image} alt="" className={`ItemImage`} />
                    <p className="para">{description.slice(0, 200)}..</p>
                    <div onMouseEnter={this.contentToggle} onMouseLeave={this.contentToggle} className='info-container' >
                        <p className='content hide' >{content.split("...")[0]}...</p>
                    </div>
                    <a className="readmore" href={url} target="_blank" rel="noopener noreferrer" >Read More</a>
                    <h6 className={`daysAgo ${theme}`}>Published {this.getTimeAgo(publishedAt)} at <a href={source.url} target="_blank" rel="noopener noreferrer">{source.name}</a></h6>
                </div>
            </>
        )
    }
}

