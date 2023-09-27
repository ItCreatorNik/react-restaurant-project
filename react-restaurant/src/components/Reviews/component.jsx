import { Review } from "../Review/component";

export const Reviews = ({ reviews }) => {
    return (
        <div>
            {!!reviews && reviews.map(review => <Review key={review.id} reviewerName={review.user} review={review.text}/>)}
        </div>
    )
}