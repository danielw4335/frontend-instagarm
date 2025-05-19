import { useSelector } from "react-redux";
import { CommentBubble, CommentOutline, NotificationsActive } from "../assets/SVG/icons";
import { useNavigate } from "react-router";

export function Explore() {
const navigate = useNavigate()
  const stories = useSelector((storeState) => storeState.storyModule.stories)

    function onOpenModal(story) {
        navigate(`/${story._id}`)
        setIsDetails({ story: story, from: 'index'})
    }

  return (
    <div className="explore-grid">
      {stories.map((story) => {
        return (
          <div
            className="explore-preview"
            key={story._id}
            onClick={() => onOpenModal(story)}
          >
            <div className="hover">
              <div className="icon-with-count">
                <CommentOutline className="icon comment" />
                <span>{story?.comments?.length}</span>
              </div>
              <div className="icon-with-count">
                <NotificationsActive className="icon like" />
                <span>{story?.likes?.length}</span>
              </div>
            </div>
            <img src={story.imgUrl} alt="" />
          </div>
        )
      })}
    </div >
  )
}
