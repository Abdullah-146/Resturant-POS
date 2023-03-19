import React from 'react'

const Coupons = ({color="#2F2F2F",hover=false}) => {
  return (
    <svg width="19" height="30" viewBox="0 0 19 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.35714 0C0.997217 3.61594e-05 0.652044 0.143716 0.397538 0.39944C0.143032 0.655163 3.59872e-05 1.00199 0 1.36364V28.6364C3.59872e-05 28.998 0.143032 29.3448 0.397538 29.6006C0.652044 29.8563 0.997217 30 1.35714 30H6.78571C7.14564 30 7.49081 29.8563 7.74532 29.6006C7.99982 29.3448 8.14282 28.998 8.14286 28.6364C8.14286 27.8671 8.7344 27.2727 9.5 27.2727C10.2656 27.2727 10.8571 27.8671 10.8571 28.6364C10.8572 28.998 11.0002 29.3448 11.2547 29.6006C11.5092 29.8563 11.8544 30 12.2143 30H17.6429C18.0028 30 18.348 29.8563 18.6025 29.6006C18.857 29.3448 19 28.998 19 28.6364V1.36364C19 1.00199 18.857 0.655163 18.6025 0.39944C18.348 0.143716 18.0028 3.61594e-05 17.6429 0H12.2143C11.8544 3.61594e-05 11.5092 0.143716 11.2547 0.39944C11.0002 0.655163 10.8572 1.00199 10.8571 1.36364C10.8571 2.13291 10.2656 2.72727 9.5 2.72727C8.7344 2.72727 8.14286 2.13291 8.14286 1.36364C8.14282 1.00199 7.99982 0.655163 7.74532 0.39944C7.49081 0.143716 7.14564 3.61594e-05 6.78571 0H1.35714ZM2.71429 2.72727H5.99316C6.59491 4.23639 7.79454 5.45455 9.5 5.45455C11.2055 5.45455 12.4051 4.23639 13.0068 2.72727H16.2857V8.18182H12.2196C10.4096 8.18182 10.4096 10.9091 12.2196 10.9091H16.2857V27.2727H13.0068C12.4051 25.7636 11.2055 24.5455 9.5 24.5455C7.79454 24.5455 6.59491 25.7636 5.99316 27.2727H2.71429V10.9091H6.78836C8.59835 10.9091 8.59835 8.18182 6.78836 8.18182H2.71429V2.72727Z" fill={color} fill-opacity={!hover ? "0.53" : "null"}/>
    </svg>
  )
}

export default Coupons