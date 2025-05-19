import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

export function StoriesBar({ items }) {
    const responsive = {
        large: { breakpoint: { max: 4000, min: 1200 }, items: 11, slidesToSlide: 4 },
        medium: { breakpoint: { max: 1200, min: 900 }, items: 10, slidesToSlide: 4 },
        small: { breakpoint: { max: 900, min: 600 }, items: 8, slidesToSlide: 2 },
        mobile: { breakpoint: { max: 600, min: 0 }, items: 6, slidesToSlide: 1 },
    }

    return (
        <div className="stories-bar-wrapper">
            <Carousel
                responsive={responsive}
                arrows={true}
                showDots={false}
                draggable
                keyBoardControl
                infinite={false}
                itemClass="story-carousel-item"
                containerClass="stories-bar"
                slidesToSlide={4}
                partialVisible={false}
            >
                {items.map((item, idx) => {
                    const { username, imgUrl } = item.by
                    return (
                        <div className="story-item" key={idx}>
                            <div className="story-gradient">
                                <img className="story-img" src={imgUrl} alt={username} />
                            </div>
                            <span className="story-username">{username}</span>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}
