import {useSelector} from "react-redux";
import {selectReviewById} from "../../redux/enitities/review/selectors";
import {selectUserById} from "../../redux/enitities/user/selectors";

export const Review = ({ reviewId }) => {
    const review = useSelector(state => selectReviewById(state, reviewId))
    const reviewer = useSelector(state => selectUserById(state, review.userId))
    return (
        <div>
            {reviewer.name}: {review.text}
        </div>
    )
}