// import React from "react";

export default function GenerateRandomRatings(total, ratingMultiply) {
  //   total;
  //   if (chance < 0.85) {
  return {
    fiveStar:
      (
        (Math.floor(Math.random() * (total - 0 + 1) + 0) /
          (total * ratingMultiply)) *
        100
      ).toFixed(2) + "%",
    fourStar:
      (
        (Math.floor(Math.random() * (total - 0 + 1) + 0) /
          (total * ratingMultiply)) *
        100
      ).toFixed(2) + "%",
    threeStar:
      (
        (Math.floor(Math.random() * (total - 0 + 1) + 0) /
          (total * ratingMultiply)) *
        100
      ).toFixed(2) + "%",
    twoStar:
      (
        (Math.floor(Math.random() * (total - 0 + 1) + 0) /
          (total * ratingMultiply)) *
        100
      ).toFixed(2) + "%",
    oneStar:
      (
        (Math.floor(Math.random() * (total - 0 + 1) + 0) /
          (total * ratingMultiply)) *
        100
      ).toFixed(2) + "%",
  };
}
