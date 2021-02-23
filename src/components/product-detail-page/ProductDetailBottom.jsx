import React, { useState, useEffect } from "react";
import {
  BottomSection,
  //   ReviewBox,
} from "../product-detail-page/Product_Detail_Styles";
import { Section_Title, Section_Title_Text } from "../../styles/Section_Title";
import styled from "styled-components";
import starFilled from "@iconify/icons-ant-design/star-filled";
import plusIcon from "@iconify/icons-bi/plus";
import { Icon } from "@iconify/react";
import { BgButton } from "../../styles/Button";
import GenerateRandomRatings from "./GenerateRandomRatings";
import { keyframes } from "styled-components";

const ReviewSection = styled.div``;
const ReviewBox = styled.div`
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  margin-right: var(--item-margin);
  width: 400px;
  min-height: 250px;
  background: var(--general-color);
`;

const ReviewTitle = styled.div`
  color: #fff;
  font-family: var(--secondary-font);
  margin-bottom: 15px;
  display: flex;
  align-items: baseline;

  .rating {
    margin-right: 7px;
  }

  .rating-amount {
    letter-spacing: 1px;
    font-size: 12px;
  }
`;
const ReviewRating = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const ReviewAdd = styled.div``;
const ReviewInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .review-star {
    margin-right: 35px;
    svg {
      margin-right: 4px;
    }
  }

  .meter {
    box-sizing: content-box;
    height: 5px; /* Can be anything */
    position: relative;
    min-width: 150px;
    /* margin: 60px 0 20px 0; Just for demo spacing */
    background: #434343;
    border-radius: 25px;
    /* padding: 7px; */
    /* box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.2); */

    span {
      display: block;
      height: 100%;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      position: relative;
      overflow: hidden;
      /* background-image: linear-gradient(#f1a165, #f36d0a); */
      background: #fff;

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;

        z-index: 1;
        background-size: 50px 50px;

        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        overflow: hidden;
      }
    }
  }
`;

const BottomSectionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
const CommentSection = styled.div`
  flex: 1;
`;
const CommentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Comment = styled.div`
  min-width: 250px;
  min-height: 150px;
  background: #fff;

  /* box-shadow: rgba(255, 201, 10, 0.2) 0px 0px 0px 1px inset,
    rgba(255, 201, 101, 0.9) 0px 0px 0px 1px; */
  box-shadow: rgba(229, 229, 229, 0.2) 0px 0px 0px 1px inset,
    rgba(229, 229, 229, 0.9) 0px 0px 0px 1px;
  padding: 25px;
  margin-bottom: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .comment-title {
    display: flex;
    align-items: baseline;

    .comment-name {
      font-size: 1.3rem;
      margin-right: 10px;
      font-family: var(--small-title-font);
      color: var(--text-color);
      /* font-weight: 400; */
    }

    .comment-stars {
      display: flex;
    }
  }
  .comment-content,
  .comment-date {
    font-family: var(--secondary-font);
  }

  .comment-content {
    color: var(--text-color);
    font-size: 14px;
  }

  .comment-date {
    color: var(--light-text-color);
    font-size: 12px;
  }
`;

// const rotateAnimation = keyframes`
//   from {
//     transform: rotate(0deg);
//   }

//   to {
//   }
// `;
const SeemoreComments = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--secondary-font);
  color: var(--text-color);
  cursor: pointer;
  /* background:  */
  padding: 4px 15px;
  margin: 0 auto;
  width: fit-content;
  /* transition: background 300ms; */

  svg {
    transform: rotate(0deg);
    transition: transform 300ms ease-in-out;
  }

  &.hovered {
    border-radius: 3px;
    /* background: rgba(53, 53, 53, 1); */
    /* background: #ececec; */
    /* color: #fff; */
    svg {
      transform: rotate(90deg);
    }
  }
`;

// const RotateAnimation = keyframes`
//   from {
//     trasnform: rotate(0)
//   }
// `;

export default function ProductDetailBottom({ data }) {
  const [randomRatings, setRandomRatings] = useState({
    fiveStar: "",
    fourStar: "",
    threeStar: "",
    twoStar: "",
    oneStar: "",
  });

  console.log(data);

  useEffect(() => {
    const chance = Math.random();

    if (chance < 0.85) {
      console.log("yes");

      setRandomRatings(r => {
        return {
          ...r,
          fiveStar: GenerateRandomRatings(data.ratingAmount, 1).fiveStar,
          fourStar: GenerateRandomRatings(data.ratingAmount, 1).fourStar,
          threeStar: GenerateRandomRatings(data.ratingAmount, 1).threeStar,
          twoStar: GenerateRandomRatings(data.ratingAmount, 2).twoStar,
          oneStar: GenerateRandomRatings(data.ratingAmount, 2).oneStar,
        };
      });
      // setRandomRatings({
      //   ...randomRatings,
      //   // Math.floor((number1 / number2) * 100)
      //  v
      // });
    } else {
      setRandomRatings(r => {
        return {
          ...r,
          fiveStar: GenerateRandomRatings(data.ratingAmount, 2).fiveStar,
          fourStar: GenerateRandomRatings(data.ratingAmount, 2).fourStar,
          threeStar: GenerateRandomRatings(data.ratingAmount, 1).threeStar,
          twoStar: GenerateRandomRatings(data.ratingAmount, 1).twoStar,
          oneStar: GenerateRandomRatings(data.ratingAmount, 1).oneStar,
        };
      });
    }
  }, []);

  function generateCommentStars(rating) {
    // console.log(data.rating);

    const _rating = Math.floor(rating);
    let finalJSX = [];

    for (let i = 1; i < 6; i++) {
      // console.log(i);
      if (i <= _rating) {
        finalJSX.push(
          <Icon
            icon={starFilled}
            style={{ color: "#ffc965", fontSize: "15px" }}
          />
        );
      } else {
        finalJSX.push(
          <Icon
            icon={starFilled}
            style={{ color: "#e2e2e2", fontSize: "15px" }}
          />
        );
      }
    }

    // console.log(finalJSX);

    //     <Icon
    //     icon={starFilled}
    //     style={{ color: "#ffc965", fontSize: "15px" }}
    //   />

    //   <Icon
    //   icon={starFilled}
    //   style={{ color: "#e2e2e2", fontSize: "15px" }}
    // />
    return finalJSX;
  }

  // useEffect(() => {
  //   generateCommentStars();
  // }, []);

  return (
    <BottomSection>
      <Section_Title fullWidth>
        <Section_Title_Text>Reviews</Section_Title_Text>
      </Section_Title>
      <BottomSectionContent>
        <ReviewSection>
          <ReviewBox>
            <ReviewTitle>
              <h1 className="rating">{data.rating}</h1>
              <span className="rating-amount">({data.ratingAmount})</span>
            </ReviewTitle>
            <ReviewRating>
              <ReviewInfo className="five-star">
                <div className="review-star">
                  <Icon
                    icon={starFilled}
                    style={{ color: "#ffc965", fontSize: "15px" }}
                  />
                  <Icon
                    icon={starFilled}
                    style={{ color: "#ffc965", fontSize: "15px" }}
                  />
                  <Icon
                    icon={starFilled}
                    style={{ color: "#ffc965", fontSize: "15px" }}
                  />
                  <Icon
                    icon={starFilled}
                    style={{ color: "#ffc965", fontSize: "15px" }}
                  />
                  <Icon
                    icon={starFilled}
                    style={{ color: "#ffc965", fontSize: "15px" }}
                  />
                </div>
                <div className="meter orange nostripes">
                  <span style={{ width: `${randomRatings.fiveStar}` }}></span>
                </div>
              </ReviewInfo>
              <ReviewInfo className="four-star">
                <div className="review-star">
                  <Icon
                    icon={starFilled}
                    style={{ color: "#ffc965", fontSize: "15px" }}
                  />
                  <Icon
                    icon={starFilled}
                    style={{ color: "#ffc965", fontSize: "15px" }}
                  />
                  <Icon
                    icon={starFilled}
                    style={{ color: "#ffc965", fontSize: "15px" }}
                  />
                  <Icon
                    icon={starFilled}
                    style={{ color: "#ffc965", fontSize: "15px" }}
                  />
                  <Icon
                    icon={starFilled}
                    style={{ color: "#e2e2e2", fontSize: "15px" }}
                  />
                </div>
                <div className="meter orange nostripes">
                  <span style={{ width: `${randomRatings.fourStar}` }}></span>
                </div>
              </ReviewInfo>
              <ReviewInfo className="three-star">
                <div className="review-star">
                  <Icon
                    icon={starFilled}
                    style={{ color: "#ffc965", fontSize: "15px" }}
                  />
                  <Icon
                    icon={starFilled}
                    style={{ color: "#ffc965", fontSize: "15px" }}
                  />
                  <Icon
                    icon={starFilled}
                    style={{ color: "#ffc965", fontSize: "15px" }}
                  />
                  <Icon
                    icon={starFilled}
                    style={{ color: "#e2e2e2", fontSize: "15px" }}
                  />
                  <Icon
                    icon={starFilled}
                    style={{ color: "#e2e2e2", fontSize: "15px" }}
                  />
                </div>
                <div className="meter orange nostripes">
                  <span style={{ width: `${randomRatings.threeStar}` }}></span>
                </div>
              </ReviewInfo>
              <ReviewInfo className="two-star">
                <div className="review-star">
                  <Icon
                    icon={starFilled}
                    style={{ color: "#ffc965", fontSize: "15px" }}
                  />
                  <Icon
                    icon={starFilled}
                    style={{ color: "#ffc965", fontSize: "15px" }}
                  />
                  <Icon
                    icon={starFilled}
                    style={{ color: "#e2e2e2", fontSize: "15px" }}
                  />
                  <Icon
                    icon={starFilled}
                    style={{ color: "#e2e2e2", fontSize: "15px" }}
                  />
                  <Icon
                    icon={starFilled}
                    style={{ color: "#e2e2e2", fontSize: "15px" }}
                  />
                </div>
                <div className="meter orange nostripes">
                  <span style={{ width: `${randomRatings.twoStar}` }}></span>
                </div>
              </ReviewInfo>
              <ReviewInfo className="one-star">
                <div className="review-star">
                  <Icon
                    icon={starFilled}
                    style={{ color: "#ffc965", fontSize: "15px" }}
                  />
                  <Icon
                    icon={starFilled}
                    style={{ color: "#e2e2e2", fontSize: "15px" }}
                  />
                  <Icon
                    icon={starFilled}
                    style={{ color: "#e2e2e2", fontSize: "15px" }}
                  />
                  <Icon
                    icon={starFilled}
                    style={{ color: "#e2e2e2", fontSize: "15px" }}
                  />
                  <Icon
                    icon={starFilled}
                    style={{ color: "#e2e2e2", fontSize: "15px" }}
                  />
                </div>
                <div className="meter orange nostripes">
                  <span style={{ width: `${randomRatings.oneStar}` }}></span>
                </div>
              </ReviewInfo>
              {/* {data.reviews.reviews.map(v => {
                  return (
                      <div>

                      </div>
                  )
              })} */}
            </ReviewRating>
          </ReviewBox>
          <ReviewAdd>
            <BgButton>Add a review</BgButton>
          </ReviewAdd>
        </ReviewSection>
        <CommentSection>
          <CommentsWrapper>
            {data.reviews.reviews.map(v => {
              return (
                <Comment>
                  <div className="comment-title">
                    <h2 className="comment-name">{v.name}</h2>
                    <span className="comment-stars">
                      {generateCommentStars(v.rating)}
                    </span>
                  </div>
                  <p className="comment-content">- {v.comment}</p>
                  <span className="comment-date">
                    <time dateTime={v.date}>{v.date.replace(/\//gi, "-")}</time>
                  </span>
                </Comment>
              );
            })}
          </CommentsWrapper>
          <SeemoreComments
            onMouseEnter={e => e.target.classList.add("hovered")}
            onMouseLeave={e => e.target.classList.remove("hovered")}
          >
            <Icon
              icon={plusIcon}
              style={{ color: "#353535", fontSize: "16px" }}
            />
            See more customer reviews
          </SeemoreComments>
        </CommentSection>
      </BottomSectionContent>
    </BottomSection>
  );
}
