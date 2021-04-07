import React, { useState, useEffect } from "react";
import {
  BottomSection,
  //   ReviewBox,
} from "../../styles/Product_Detail_Styles";
import { Section_Title, Section_Title_Text } from "../../styles/Section_Title";
// import styled from "styled-components";
// import { keyframes } from "styled-components";
import starFilled from "@iconify/icons-ant-design/star-filled";
import plusIcon from "@iconify/icons-bi/plus";
import { Icon } from "@iconify/react";
import { BgButton } from "../../styles/Button";
import GenerateRandomRatings from "./GenerateRandomRatings";
import {
  ReviewSection,
  ReviewBox,
  ReviewTitle,
  ReviewRating,
  ReviewAdd,
  ReviewInfo,
  BottomSectionContent,
  CommentSection,
  Comment,
  CommentsWrapper,
  SeemoreComments,
} from "../../styles/Product_Detail_Styles";

export default function ProductDetailBottom({ data }) {
  const [randomRatings, setRandomRatings] = useState({
    fiveStar: "",
    fourStar: "",
    threeStar: "",
    twoStar: "",
    oneStar: "",
  });

  // console.log(data);

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
                  <div className="comment-content">
                    <span>-</span>
                    <p className="content">{v.comment}</p>
                  </div>
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
