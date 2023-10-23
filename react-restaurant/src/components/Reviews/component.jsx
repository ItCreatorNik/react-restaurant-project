import { Review } from "../Review/component";

export const Reviews = ({ reviewIds }) => {
    return (
        <div>
            {!!reviewIds && reviewIds.map(reviewId => <Review key={reviewId} reviewId={reviewId}/>)}
        </div>
    )
}