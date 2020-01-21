<template>
  <div class="about">
    <div class="about__header">
      <div class="about__wrapper">
        <div class="about__header-inner" :style="'background-image: url(' + require('./../assets/img/temp/banner_about_page.jpg') + ')'">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 319.7 41.4" style="enable-background:new 0 0 319.7 41.4;" xml:space="preserve">
            <path d="M8.3,31.2l-1.6-7.3L3.3,9.4C3,8.3,2.7,7.6,2.4,7.5S1.5,7.2,0.5,7.1L0.4,7V6.2L0.5,6C2.2,6.1,3.7,6.2,5,6.2c1,0,2.4,0,4.3-0.1l0.2,0.2V7L9.3,7.1C8,7.2,7.2,7.2,7,7.3S6.6,7.6,6.6,7.9c0,0.2,0.1,1,0.4,2.3s0.4,2.4,0.6,3.2l2.8,12.2l4.3-10.8c1.1-2.9,2.3-5.9,3.4-9h1.1c0.9,2.9,1.9,5.8,2.9,8.6l4.1,11.5l3-10.5c0.3-1.1,0.7-2.5,1.1-4.3s0.7-2.8,0.7-3.1c0-0.3-0.1-0.5-0.4-0.6S29.4,7.2,28,7.1L27.8,7V6.2L28,6c2,0.1,3.2,0.1,3.6,0.1c0.4,0,1.6,0,3.7-0.1l0.1,0.1V7l-0.1,0.1c-0.7,0-1.1,0.1-1.3,0.2s-0.4,0.3-0.6,0.5s-0.4,0.8-0.7,1.8l-1,3.3l-1.8,5.9c-0.3,0.9-0.7,2.6-1.4,5.2l-2,7.3h-1.8c-1.2-3.6-2.2-6.5-3-8.7l-4-10.8l-3.5,8.7l-1.9,4.9c-0.5,1.3-0.9,2.4-1.2,3.2l-1,2.8H8.3z"/>
            <path d="M36.8,18.8c0-1.8,0.3-3.4,0.8-4.9s1.4-2.9,2.6-4.2s2.7-2.3,4.4-3s3.6-1.1,5.8-1.1c4,0,7.2,1.1,9.5,3.3s3.6,5.1,3.6,8.9c0,2.6-0.6,5-1.7,7.1s-2.8,3.8-5,4.9s-4.6,1.8-7.3,1.8c-1.9,0-3.7-0.3-5.3-1s-3-1.6-4.1-2.9s-2-2.7-2.5-4.4S36.8,20.1,36.8,18.8z M40.5,17.6c0,1.4,0.2,3,0.7,4.6s1.2,3.1,2.1,4.2s2,2.1,3.2,2.6S49,30,50.6,30c1.8,0,3.4-0.4,4.9-1.2s2.5-2.1,3.2-3.9s1.1-3.7,1.1-5.9c0-2.4-0.4-4.5-1.3-6.4s-2-3.3-3.6-4.2S51.6,7,49.7,7c-2.8,0-5.1,0.9-6.7,2.7S40.5,14.1,40.5,17.6z"/>
            <path d="M65,6.2L65.2,6c2.1,0.1,3.8,0.1,5,0.1c1.3,0,3.1,0,5.4-0.1c0.8,0,1.4,0,1.8,0c3,0,5,0.5,6,1.6S85,10,85,11.5c0,1-0.3,2-0.8,2.9s-1.3,1.8-2.3,2.4s-2.4,1.2-4.2,1.5c0.3,0.5,0.9,1.2,1.8,2.4L82,24c0.8,1.1,1.7,2.2,2.6,3.5s1.5,1.9,1.8,2.1s0.5,0.3,0.7,0.3s0.5,0.1,0.9,0.1l0.1,0.1v0.8L88,31c-0.6-0.1-1.2-0.1-2-0.1c-0.8,0-1.7,0-2.7,0.1c-0.8-1-2.1-2.7-3.8-5.1c-2-2.8-4.1-5.4-6.2-7.8l0.2-0.5c0.6,0,1.1,0.1,1.4,0.1c2,0,3.6-0.5,4.8-1.5s1.7-2.3,1.7-4c0-1.5-0.5-2.7-1.5-3.5s-2.4-1.2-4.2-1.2c-1.2,0-2.4,0.2-3.5,0.5c-0.2,0.3-0.3,2.5-0.3,6.6v8.1l0,3.4c0,1.3,0,2.2,0.1,2.6s0.1,0.6,0.3,0.8s0.3,0.2,0.6,0.3s1.1,0.2,2.3,0.2l0.1,0.1v0.9L75.3,31c-0.1,0-1.1,0-3.1-0.1c-0.8,0-1.5,0-2,0c-0.4,0-2,0-5,0.1L65,30.9V30l0.1-0.1c1.1,0,1.8-0.1,2.2-0.2s0.6-0.2,0.7-0.3s0.2-0.3,0.3-0.7s0.1-1.2,0.1-2.4l0-3.7v-8.1l0-3.4c0-1.3,0-2.2-0.1-2.6s-0.1-0.6-0.2-0.8s-0.3-0.2-0.6-0.3s-1.1-0.1-2.3-0.2L65,7V6.2z"/>
            <path d="M89,6.2L89.1,6c2.9,0.1,4.6,0.1,5,0.1c0.4,0,2.1,0,5-0.1l0.1,0.1V7l-0.1,0.1c-0.8,0-1.4,0.1-1.9,0.1s-0.8,0.1-1,0.3S96,8,96,8.4s-0.1,1.1-0.1,2l0,4v7.8c0,1.9,0,3.3,0,4.1l0.1,3h3.6c2.9,0,4.6,0,5.4-0.1s1.4-0.2,2-0.5c0.1-0.3,0.3-1,0.6-2s0.4-1.7,0.4-1.8l0.2-0.1h0.9l0.1,0.1c-0.1,0.5-0.2,1.4-0.3,2.7s-0.1,2.4-0.1,3.3l-0.1,0.1c-2.2-0.1-5.2-0.1-8.8-0.1l-5.1,0c-1.2,0-2.4,0-3.6,0.1l-0.1-0.1v-0.6l0.1-0.2c0.7-0.4,1.1-0.6,1.2-0.7s0.1-0.8,0.2-2.3s0.1-3.2,0.1-5.2v-7.5l0-3.4c0-1.3,0-2.2-0.1-2.6s-0.1-0.6-0.2-0.8s-0.3-0.2-0.6-0.3s-1.1-0.1-2.3-0.2L89,7V6.2z"/>
            <path d="M110.9,6.2L111,6c2,0.1,3.4,0.1,4.1,0.1l8.2-0.2c2.3,0,4.3,0.2,5.8,0.7s2.8,1.2,4,2.3s2.1,2.3,2.7,3.8s0.9,3,0.9,4.6c0,1.6-0.3,3.1-0.8,4.7s-1.3,2.9-2.3,4.2s-2.2,2.2-3.5,3s-2.6,1.3-3.9,1.5s-2.6,0.4-4,0.4c-0.9,0-2.6,0-5.2-0.1c-0.8,0-1.4,0-1.7,0c-0.8,0-1.8,0-2.9,0.1l-0.1-0.1v-0.6l0.1-0.2c0.7-0.4,1.1-0.6,1.2-0.7s0.2-1.1,0.2-3.1s0.1-3.5,0.1-4.5v-6.5l0-4c0-0.9,0-1.6,0-2.1s-0.1-0.9-0.1-1.2s-0.1-0.4-0.2-0.5s-0.2-0.2-0.4-0.2s-0.5-0.1-0.9-0.2L111,7.2L110.9,7V6.2z M117.4,29.1c1.2,0.2,2.6,0.4,4.1,0.4c2.7,0,4.9-0.5,6.5-1.4s2.9-2.3,3.7-4.1s1.2-3.8,1.2-6.1c0-3.3-0.9-5.9-2.7-7.7s-4.6-2.7-8.4-2.7c-1.6,0-3.1,0.1-4.5,0.4c-0.1,1.9-0.1,4.1-0.1,6.5v5.5l0,5.2C117.3,26.1,117.3,27.4,117.4,29.1z"/>
            <path d="M148,18.8c0-1.8,0.3-3.4,0.8-4.9s1.4-2.9,2.6-4.2s2.7-2.3,4.4-3s3.6-1.1,5.8-1.1c4,0,7.2,1.1,9.5,3.3s3.6,5.1,3.6,8.9c0,2.6-0.6,5-1.7,7.1s-2.8,3.8-5,4.9s-4.6,1.8-7.3,1.8c-1.9,0-3.7-0.3-5.3-1s-3-1.6-4.1-2.9s-2-2.7-2.5-4.4S148,20.1,148,18.8z M151.7,17.6c0,1.4,0.2,3,0.7,4.6s1.2,3.1,2.1,4.2s2,2.1,3.2,2.6s2.6,0.9,4.1,0.9c1.8,0,3.4-0.4,4.9-1.2s2.5-2.1,3.2-3.9s1.1-3.7,1.1-5.9c0-2.4-0.4-4.5-1.3-6.4s-2-3.3-3.6-4.2S162.8,7,160.9,7c-2.8,0-5.1,0.9-6.7,2.7S151.7,14.1,151.7,17.6z"/>
            <path d="M183.2,19v3.6l0,3.4c0,1.3,0,2.1,0.1,2.5s0.1,0.7,0.3,0.8s0.3,0.2,0.6,0.3s1.1,0.2,2.3,0.2l0.1,0.1v0.9l-0.1,0.1c-3-0.1-4.7-0.1-5-0.1c-0.4,0-2.1,0-5,0.1l-0.1-0.1V30l0.1-0.1c1.1,0,1.8-0.1,2.2-0.2s0.6-0.2,0.7-0.3s0.2-0.4,0.3-0.7s0.1-1.1,0.1-2.4l0-3.7v-8.1l0-3.4c0-1.3,0-2.2-0.1-2.6s-0.1-0.6-0.2-0.8s-0.3-0.2-0.6-0.3s-1.1-0.1-2.3-0.2L176.3,7V6.2l0.1-0.1c5,0.1,7.9,0.1,8.7,0.1c2.8,0,5.6,0,8.6-0.1l0.1,0.1c-0.2,0.6-0.3,1.3-0.4,2s-0.1,1.8-0.2,3.2l-0.1,0.1h-0.8l-0.1-0.1c0-0.1-0.1-0.5-0.2-1.4c-0.1-0.6-0.2-1.2-0.3-1.8c-1.2-0.4-2.9-0.6-5-0.6c-1,0-2.1,0.1-3.4,0.2c-0.1,0.9-0.2,3.1-0.2,6.7v3c1.5,0,2.5,0,3,0c1,0,1.9,0,2.6-0.1s1.1-0.1,1.3-0.2s0.2-0.2,0.3-0.4s0.1-0.6,0.2-1.3l0.1-0.9l0.1-0.1h0.9l0.1,0.2l-0.1,3.8c0,0.4,0,1.1,0.1,1.9c0,1,0.1,1.7,0.1,2.2l-0.2,0.1h-0.9l-0.1-0.1l-0.1-1.5c0-0.6-0.1-1-0.2-1.3s-0.2-0.4-0.4-0.5s-0.6-0.2-1.2-0.2s-1.6-0.1-3-0.1C184.7,19,183.8,19,183.2,19z"/>
            <path d="M205.2,7.2L205,7V6.2l0.1-0.1c2,0.1,3.6,0.1,4.6,0.1c0.4,0,2,0,4.9-0.1c0.9,0,1.6,0,2,0c1.6,0,2.8,0.2,3.8,0.5s1.7,0.9,2.2,1.7s0.8,1.7,0.8,2.7c0,1.3-0.5,2.5-1.4,3.6s-2.5,1.9-4.6,2.4c1.3,0.1,2.3,0.3,3.1,0.5s1.5,0.6,2.1,1s1.1,1.1,1.4,1.8s0.5,1.6,0.5,2.6c0,0.8-0.1,1.5-0.4,2.3s-0.7,1.6-1.3,2.3s-1.4,1.4-2.3,2s-1.8,0.9-2.7,1.2S216,31,214.6,31c-0.3,0-1.1,0-2.5-0.1c-1.6,0-2.4-0.1-2.5-0.1c-0.8,0-1.8,0-2.9,0.1l-0.1-0.1v-0.6l0.1-0.2c0.7-0.3,1.1-0.5,1.2-0.6s0.2-1.2,0.3-3.1s0.1-3.5,0.1-4.5v-6.5l0-4c0-0.9,0-1.6,0-2.1S208,8.4,208,8.2s-0.1-0.4-0.2-0.5s-0.2-0.2-0.4-0.2s-0.5-0.1-0.9-0.2L205.2,7.2z M211.5,16.4c0.6,0,1.2,0.1,2,0.1c2.4,0,4.1-0.4,5.1-1.3s1.4-2.1,1.4-3.6c0-0.9-0.2-1.6-0.5-2.2s-0.9-1.1-1.7-1.4s-1.8-0.5-3.2-0.5c-1.1,0-2.1,0.1-2.9,0.3c-0.1,1.1-0.2,2.9-0.2,5.5V16.4z M211.5,29.2c0.9,0.2,1.8,0.3,2.8,0.3c1.7,0,3-0.3,3.9-0.8s1.6-1.3,2.1-2.2s0.7-2,0.7-3.1c0-1.7-0.5-3-1.4-4.1s-3-1.5-6.2-1.5c-0.5,0-1.2,0-1.9,0.1v6L211.5,29.2z"/>
            <path d="M227.4,18.8c0-1.8,0.3-3.4,0.8-4.9s1.4-2.9,2.6-4.2s2.7-2.3,4.4-3s3.6-1.1,5.8-1.1c4,0,7.2,1.1,9.5,3.3s3.6,5.1,3.6,8.9c0,2.6-0.6,5-1.7,7.1s-2.8,3.8-5,4.9s-4.6,1.8-7.3,1.8c-1.9,0-3.7-0.3-5.3-1s-3-1.6-4.1-2.9s-2-2.7-2.5-4.4S227.4,20.1,227.4,18.8z M231,17.6c0,1.4,0.2,3,0.7,4.6s1.2,3.1,2.1,4.2s2,2.1,3.2,2.6s2.6,0.9,4.1,0.9c1.8,0,3.4-0.4,4.9-1.2s2.5-2.1,3.2-3.9s1.1-3.7,1.1-5.9c0-2.4-0.4-4.5-1.3-6.4s-2-3.3-3.6-4.2S242.1,7,240.2,7c-2.8,0-5.1,0.9-6.7,2.7S231,14.1,231,17.6z"/>
            <path d="M255.4,30.8V30l0.1-0.1c0.8,0,1.3-0.1,1.6-0.2s0.6-0.5,1-1s1.2-1.7,2.5-3.4l4.8-6.7l-3.1-5.3c-0.2-0.4-0.7-1.2-1.5-2.3s-1.4-1.9-1.9-2.4s-0.8-0.7-1-0.8S257,7.7,256,7.7l-0.2-0.2V6.8l0.2-0.2l5-0.8c0.4,0.3,0.9,0.7,1.4,1.4s1.2,1.8,2.2,3.4l3,5.1l6.7-9.8c1,0,1.6,0.1,1.8,0.1c0.1,0,0.6,0,1.6-0.1l0.1,0.2v0.8l-0.1,0.1c-0.7,0-1.2,0.1-1.5,0.2s-0.6,0.3-0.9,0.7s-1.2,1.4-2.3,3l-3.3,4.4l-1.3,1.8l6,9.6c0.6,0.9,1,1.6,1.4,2s0.6,0.7,0.8,0.8s0.7,0.1,1.4,0.1l0.1,0.1v0.9L278,31c-1.1,0-1.9-0.1-2.4-0.1c-0.6,0-1.5,0-2.7,0.1c-0.7-1-1.4-2.1-2-3.1l-4.6-7.9l-1.3,1.8c-1.7,2.3-3.7,5.4-6,9.2c-0.8,0-1.4-0.1-1.8-0.1c-0.4,0-1,0-1.8,0.1L255.4,30.8z"/>
            <path d="M280.1,6.2l0.1-0.1c4,0.1,6.6,0.1,7.7,0.1c3.8,0,7.3,0,10.3-0.1l0.1,0.1c-0.3,1.1-0.5,2.9-0.7,5.3l-0.1,0.1h-0.9l-0.2-0.1c0-0.1,0-0.2,0-0.3c0-1-0.1-1.9-0.2-2.8c-0.7-0.3-1.8-0.5-3.1-0.6s-2.3-0.1-2.9-0.1c-0.9,0-2.1,0.1-3.6,0.2l-0.1,2.8l-0.1,3.2l-0.1,3.6c1.3,0.1,2.4,0.1,3.5,0.1c1.1,0,2,0,2.7-0.1s1.2-0.1,1.3-0.2s0.2-0.2,0.3-0.4s0.1-0.6,0.2-1.2l0.1-1.1l0.1-0.1h0.8l0.1,0.1c0,1.3-0.1,2.6-0.1,3.8l0.1,4l-0.1,0.1h-0.8l-0.1-0.1l-0.1-1.1c-0.1-0.8-0.2-1.3-0.2-1.5s-0.2-0.3-0.3-0.4s-0.6-0.2-1.3-0.3s-1.7-0.1-2.9-0.1c-0.7,0-1.7,0-3.1,0.1c-0.1,1-0.1,2.6-0.1,4.9c0,2.5,0,4.3,0.1,5.4h3.2c2.8,0,4.6,0,5.3-0.1s1.4-0.2,2-0.5c0.1-0.3,0.3-0.9,0.5-1.9s0.4-1.6,0.4-1.8l0.2-0.1h0.8l0.1,0.1c-0.1,0.5-0.2,1.4-0.3,2.6s-0.1,2.3-0.1,3.2l-0.1,0.1c-2.2-0.1-5.2-0.1-8.8-0.1l-4.8,0c-1.1,0-2.3,0-3.5,0.1l-0.1-0.1v-0.6l0.1-0.2c0.7-0.4,1.1-0.6,1.2-0.7s0.2-1.1,0.2-3.1s0.1-3.5,0.1-4.5v-6.5l0-4c0-0.9,0-1.6,0-2.1s-0.1-0.9-0.1-1.2s-0.1-0.4-0.2-0.5s-0.2-0.2-0.4-0.2s-0.5-0.1-0.9-0.2l-1.3-0.1L280.1,7V6.2z"/>
            <path d="M302.2,24.8l0.1-0.1h0.9l0.1,0.1c0.1,1.5,0.1,2.4,0.2,2.8s0.4,0.7,0.9,1.1s1.2,0.7,2.1,0.9s1.8,0.4,2.7,0.4c1.2,0,2.4-0.2,3.3-0.7s1.8-1.1,2.3-2s0.8-1.9,0.8-3c0-0.8-0.1-1.4-0.4-2s-0.6-1-1.1-1.4s-1-0.6-1.6-0.8s-1.5-0.4-2.7-0.6c-1.2-0.2-2.1-0.4-2.8-0.5s-1.3-0.4-2-0.7s-1.2-0.7-1.6-1.2s-0.8-1.1-1.1-1.8s-0.4-1.5-0.4-2.3c0-2.2,0.8-4,2.3-5.4s3.6-2.1,6.1-2.1c1,0,2.1,0.1,3.3,0.4s2.3,0.6,3.3,1.1l0.1,0.2c-0.3,1.1-0.4,2.6-0.5,4.6l-0.2,0.1h-0.9l-0.1-0.1c0-1.4-0.1-2.3-0.1-2.7s-0.6-0.8-1.6-1.4S311.8,7,310.6,7c-1,0-1.9,0.2-2.8,0.6s-1.5,1-2,1.9s-0.7,1.7-0.7,2.6c0,0.7,0.1,1.3,0.4,1.8s0.6,1,1,1.3s0.9,0.5,1.5,0.7s1.6,0.3,3.1,0.6c2.1,0.3,3.6,0.6,4.5,1.1s1.7,1.1,2.3,2s0.9,2,0.9,3.3c0,2.5-1,4.6-3,6.2s-4.5,2.5-7.4,2.5c-2.4,0-4.6-0.4-6.4-1.3l-0.1-0.2C302.1,29.3,302.1,27.5,302.2,24.8z"/>
          </svg>
          <p class="about__header-subtitle">The most necessary boxes only with us.</p>
        </div>
      </div>
    </div>

    <div class="about__description">
      <div class="about__share" :class=" { 'is-open' : openSharePopup }">
        <a href="" class="about__share-link" @click.prevent="toggleSharePopup">Share</a>

        <div class="about__share-block">
        </div>
      </div>
      <div class="about__wrapper">
        <h2>Innovative technology for quality <span class="about__title-hide-mobile">World of Boxes</span></h2>
        <p class="about__description-text">Trading house "World of Boxes" is constantly improving customer service approaches and expanding its product range.</p>
        <p class="about__description-text">Our task is to provide customers with quality products at affordable prices.</p>
        <p class="about__description-text">At present, we are interested in expanding the circle of wholesale suppliers of packaging, building materials and household goods.</p>
      </div>
    </div>

    <div class="about__slider">
      <div class="about__slider-scroll" ref="scroll">
        <div class="about__slider-item" v-for="slide in slides" :key="slide.id_slide" @touchstart="touchScroll($event)">
          <div class="about__slider-content">
            <div class="about__slider-headline">{{ slide.headline }}</div>
            <h2><span class="about__title--color">{{ slide.title }}</span>{{ slide.subtitle }}</h2>
            <p class="about__slider-text">{{ slide.text }}</p>
            <p class="about__slider-text">{{ slide.textAdditional }}</p>
          </div>
          <div class="about__slider-image" :style="'background-image: url(' + slide.img + ')'"></div>
        </div>
      </div>
      <div class="about__slider-controls">
        <a href="" class="about__slider-arrow about__slider-arrow--prev" @click.prevent="moveSlider(-1)" :class=" { 'is-disabled' : currentIndex < 1 }"></a>
        <span class="about__slider-number about__slider-number--current" v-html="this.currentIndex + 1"></span>/<span class="about__slider-number about__slider-number--total" v-html="this.slides.length"></span>
        <a href="" class="about__slider-arrow about__slider-arrow--next" @click.prevent="moveSlider(1)" :class=" { 'is-disabled': currentIndex > this.slides.length - 2 }"></a>
      </div>
    </div>

    <AboutSpecification></AboutSpecification>

    <div class="about__experts">
      <div class="about__wrapper">
        <h2>Our experts</h2>
        <div class="about__experts-list">
          <div class="about__experts-item">
            <div class="about__experts-img" :style="'background-image: url(' + require('./../assets/img/temp/expert1.jpg') + ')'"></div>
            <div class="about__experts-content">
              <h3>Oscar</h3>
              <p class="about__experts-detail">Accomplished operations executive with a successful track record overseeing testing cardboard boxes,<br/>
                and property in company and franchise operations for a large chain of delivery.
              </p>
              <div class="about__experts-content-wrapper" :class="{ 'is-show': openFirstExpertsText }">
                <p class="about__experts-education about__experts--border-bottom">Education:<br/>
                  Psychology Operations Management Speech and Communication, Sociology and Psychology
                </p>
                <div class="about__experts-text">— Directed recruitment/training/staff development initiatives to maximize productivity and revenue potential through development of a sales team.<br/>
                  — Administered daily operations to ensure policies were adhered to and understood by sales staff<br/>
                  — Cultivated strong business relationships with customers to drive business development.<br/>
                  — Planned and executed floor merchandising initiatives in collaboration with merchandise management.
                </div>
              </div>
            </div>

            <div class="about__experts-button-wrapper">
              <a href="" class="about__experts-button" @click.prevent="toggleFirstExpertsText">
                <div class="about__experts-button-text about__experts-button-text--show" :class=" { 'is-hide' : openFirstExpertsText }">
                  <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.01 9.303L17.314 2l.707.707-7.303 7.303 7.303 7.304-.707.707-7.304-7.303-7.303 7.303L2 17.314l7.303-7.304L2 2.707 2.707 2z"/>
                  </svg>
                  <span>Show full</span>
                </div>
                <div class="about__experts-button-text about__experts-button-text--hide" :class=" { 'is-hide' : !openFirstExpertsText }">
                  <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10,9.3L17.3,2L18,2.7L10.7,10c-0.1,0.1-0.2,0.2-0.3,0.3c-0.1,0.1-0.1,0.1-0.2,0.2c-0.1,0.1-0.1,0.1-0.2,0.2L2.7,18L2,17.3L9.3,10c0.1-0.1,0.2-0.2,0.2-0.3c0.1-0.1,0.1-0.1,0.2-0.2C9.8,9.5,9.9,9.4,10,9.3z"/></svg>
                  <span>Hide</span>
                </div>
              </a>
            </div>
          </div>

          <div class="about__experts-item">
            <div class="about__experts-img" :style="'background-image: url(' + require('./../assets/img/temp/expert2.jpg') + ')'"></div>
            <div class="about__experts-content">
              <h3>Molly</h3>
              <p class="about__experts-detail about__experts--border-bottom">
                Head of Laboratory, Professor, Doctor of Biological Sciences, author of dozens of successful boxed brands in the market
              </p>

              <div class="about__experts-content-wrapper" :class="{ 'is-show': openSecondExpertsText }">
                <div class="about__experts-text">— Oversaw opening/closing operations for a $4 million annual revenue store in compliance with current company policies/procedures.<br/>
                  — Managed operational costs by spearheading inventory control and leading shipping department activities as well as setting wage targets.<br/>
                  — Administered financial processes including accounts payable/accounts receivable, managing an accounting office and updating customer service files.
                </div>
                <p class="about__experts-addition">«The World of Boxes line of products is our latest and super progressive creation. We are grateful to the customers for their professional approach to the selection. We have a great product!»</p>
              </div>
            </div>

            <div class="about__experts-button-wrapper">
                <a href="" class="about__experts-button" @click.prevent="toggleSecondExpertsText">
                  <div class="about__experts-button-text about__experts-button-text--show" :class=" { 'is-hide' : openSecondExpertsText }">
                    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.01 9.303L17.314 2l.707.707-7.303 7.303 7.303 7.304-.707.707-7.304-7.303-7.303 7.303L2 17.314l7.303-7.304L2 2.707 2.707 2z"/>
                    </svg>
                    <span>Show full</span>
                  </div>
                  <div class="about__experts-button-text about__experts-button-text--hide" :class=" { 'is-hide' : !openSecondExpertsText }">
                    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10,9.3L17.3,2L18,2.7L10.7,10c-0.1,0.1-0.2,0.2-0.3,0.3c-0.1,0.1-0.1,0.1-0.2,0.2c-0.1,0.1-0.1,0.1-0.2,0.2L2.7,18L2,17.3L9.3,10c0.1-0.1,0.2-0.2,0.2-0.3c0.1-0.1,0.1-0.1,0.2-0.2C9.8,9.5,9.9,9.4,10,9.3z"/></svg>
                    <span>Hide</span>
                  </div>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AboutSpecification from './AboutSpecification';
import {mapGetters} from 'vuex';
import anime from 'animejs';

export default {
  components: {
    AboutSpecification
  },

  data() {
    return {
      openSharePopup: false,
      currentIndex: 0,
      startX: null,
      canAnimate: true,
      openFirstExpertsText: false,
      openSecondExpertsText: false,
    }
  },

  computed: {
    ...mapGetters('about', {
      slides: 'items'
    }),
  },

  created() {
    // при изменение размера окна, возвращаем позицию на текущий слайд
    window.addEventListener('resize', () => {
      if (this.$refs.scroll !== undefined) {
        const newX = this.$refs.scroll.clientWidth * this.currentIndex;

        this.$refs.scroll.scrollLeft = newX;
      }
    });
  },

  methods: {
    // открытие/закрытие popup - share
    toggleSharePopup() {
      if(this.openSharePopup) {
        this.openSharePopup = false;
      } else {
        this.openSharePopup = true;
      }
    },

    toggleFirstExpertsText() {
      if(this.openFirstExpertsText) {
        this.openFirstExpertsText = false;
      } else {
        this.openFirstExpertsText = true;
      }
    },

    toggleSecondExpertsText() {
      if(this.openSecondExpertsText) {
        this.openSecondExpertsText = false;
      } else {
        this.openSecondExpertsText = true;
      }
    },

    // прокрутка слайдов тачем
    touchScroll(e) {
      const target = e.changedTouches[0].target;
      const startCoord = e.changedTouches[0].screenX;

      const endHandler = e => {
        const endCoord = e.changedTouches[0].screenX;
        // движение на более чем 30 пикселей
        if (Math.abs(startCoord - endCoord) > 30) {
          if (endCoord > startCoord) {
            this.currentIndex === -1 ? null : this.moveSlider(-1);
          } else {
            this.currentIndex === this.slides.length - 1 ? null : this.moveSlider(1);
          }
        }

        target.removeEventListener('touchend', endHandler);
      };

      target.addEventListener('touchend', endHandler);
    },

    moveSlider(value) {
      if (this.canAnimate) {
        this.canAnimate = false;

        this.currentIndex += value;
        const newX = this.$refs.scroll.clientWidth * this.currentIndex;

        anime({
          targets: this.$refs.scroll,
          scrollLeft: {
            value: newX,
            duration: 500,
            easing: 'easeInOutCirc',
          },
          complete: () => {
            this.canAnimate = true;
          },
        });
      }
    }
  }
}
</script>
<style lang="scss">
@import './../assets/_globalscss/all.scss';

.about {
  margin-top: 3rem;
  margin-bottom: 5rem;

  @include mq(767) {
      margin-bottom: 0;
  }

  &__wrapper {
      margin-right: 4.2rem;
      margin-left: 4.2rem;

      @include mq(1023) {
          margin-right: 3.2rem;
          margin-left: 3.2rem;
      }

      @include mq(767) {
          margin-right: 1.6rem;
          margin-left: 1.6rem;
      }
  }

  h1,
  h2 {
      position: relative;
      padding-top: 0;
      padding-right: 0;
      padding-bottom: 4rem;
      font-family: $Garamond;
      font-size: 4rem;
      line-height: (40 / 40);
      font-weight: 500;
      letter-spacing: 0.4px;
      margin-bottom: 3.8rem;

      &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: calc(50% - 4.6rem);
          width: 9.2rem;
          height: 2px;
          background: $colorOrange;
      }

      @include mq(1023) {
          padding-top: 0;
          padding-bottom: 2.4rem;
          font-size: 2.8rem;
          margin-bottom: 2.8rem;
      }
  }

  h3 {
      font-size: 3.2rem;
      line-height: (32 / 32);
      font-weight: 400;
      margin-top: 4rem;
      margin-bottom: 1.2rem;

      @include mq(1023) {
          font-size: 1.6rem;
          line-height: (24 / 16);
          margin-top: 0.4rem;
          margin-bottom: 0.4rem;
      }
  }

  &__title-hide-mobile {
      @include mq(767) {
          display: none;
      }
  }

  &__header-inner {
      padding-top: 13.8rem;
      padding-right: 83.7rem;
      padding-bottom: 11.5rem;
      padding-left: 13.6rem;
      border-radius: 5px;
      background: none no-repeat;
      background-size: cover;

      @include mq(1439) {
          padding-right: 63.7rem;
      }

      @include mq(1023) {
          padding-top: 4.2rem;
          padding-right: 3.2rem;
          padding-bottom: 4.2rem;
          padding-left: 3.2rem;
      }

      svg {
          display: block;
          width: 35.3rem;
          height: 5rem;
          fill: #fff;
          stroke: $colorGrayDark;
          margin-right: auto;
          margin-bottom: 2.7rem;
          margin-left: auto;

          @include mq(767) {
              width: 14.5rem;
              height: 2rem;
              fill: $colorGrayDark;
              margin-bottom: 1.9rem;
          }
      }
  }

  &__header-subtitle {
      font-size: 1.6rem;
      line-height: (24 / 16);
      text-align: center;
      color: #fff;
      text-shadow: $colorGrayDark 0 0 5px;

      @include mq(767) {
          font-size: 1.4rem;
          line-height: (20 / 14);
      }
  }

  &__description {
      display: flex;
      flex-direction: column;
      margin-bottom: 11.9rem;

      @include mq(1023) {
          margin-bottom: 4.5rem;
      }

      .about__wrapper {
          padding-right: 23rem;
          padding-left: 23rem;
          text-align: center;

          @include mq(1023) {
              padding-right: 0;
              padding-left: 0;
          }
      }

      h1,
      h2 {
          padding-top: 4rem;

          @include mq(1023) {
              padding-top: 2rem;
              border-top: 1px solid $colorGrayLight;
          }
      }
  }

  &__description-text {
      font-size: 2rem;
      line-height: (28 / 20);
      margin-bottom: 2.8rem;

      &:last-child {
          margin-bottom: 0;
      }

      @include mq(767) {
          font-size: 1.4rem;
          line-height: (20 / 14);
          margin-bottom: 1.5rem;
      }
  }

  &__share {
      position: relative;
      margin-top: 3.2rem;
      margin-right: 4rem;
      margin-left: auto;

      @include mq(1023) {
          margin-top: 2.8rem;
          margin-right: 1.6rem;
          margin-bottom: 1rem;
      }

      &.is-open {
          .about__share-link {
              opacity: 1;

              &::after {
                  top: calc(50% - 0.3rem);
                  transform: rotate(-225deg);
              }
          }

          .about__share-block {
              opacity: 1;
              pointer-events: all;
          }
      }
  }

  &__share-link {
      position: relative;
      z-index: 2;
      padding-right: 2rem;
      font-size: 1.6rem;
      line-height: (24 / 16);
      opacity: 0.4;
      transition: opacity 0.5s $easeInOutCirc;

      @include mq(767) {
          font-size: 1.4rem;
          line-height: (20 / 14);
      }

      &:hover {
          opacity: 1;
      }

      &::after {
          content: '';
          position: absolute;
          top: calc(50% - 0.6rem);
          right: 0.5rem;
          width: 0.6rem;
          height: 0.6rem;
          border: 0.1rem solid $colorBlack;
          border-top-color: transparent;
          border-right-color: transparent;
          transform: rotate(-45deg);
          transition: transform 0.5s $easeInOutCirc, top 0.5s $easeInOutCirc;
      }
  }

  &__share-block {
      position: absolute;
      z-index: 1;
      top: -1.2rem;
      right: -1.4rem;
      width: auto;
      min-width: 11rem;
      height: auto;
      padding-top: 4.4rem;
      padding-right: 1.6rem;
      padding-bottom: 1.6rem;
      padding-left: 1.6rem;
      opacity: 0;
      border-radius: 5px;
      background: #fff;
      box-shadow: 0 8px 40px 0 rgba(0, 0, 0, 0.08);
      transition: opacity 0.5s $easeInOutCirc;
      pointer-events: none;

      @include mq(767) {
          top: -0.8rem;
          right: -1rem;
          padding-top: 4rem;
          padding-right: 1rem;
          padding-bottom: 1.2rem;
          padding-left: 1rem;
      }
  }

  &__slider {
      position: relative;
      border-radius: 5px;
      margin-bottom: 10.7rem;

      @include mq(1023) {
          margin-bottom: 4rem;
      }

      h2 {
          text-transform: uppercase;
          margin-bottom: 4.4rem;

          &::after {
              left: 0;
          }

          @include mq(1023) {
              padding-bottom: 0;
              font-size: 2.4rem;
              line-height: (28 / 24);
              margin-bottom: 1.9rem;

              &::after {
                  display: none;
              }
          }
      }
  }

  &__slider-scroll {
      display: flex;
      overflow: hidden;
  }

  &__slider-item {
      position: relative;
      flex-shrink: 0;
      width: 100%;
      padding-top: 5.6rem;
      padding-right: 4.2rem;
      padding-bottom: 11rem;
      padding-left: 4.2rem;
      background-position-y: $colorGrayLight2;


      @include mq(1023) {
          padding-top: 2rem;
          padding-right: 1.6rem;
          padding-bottom: 5rem;
          padding-left: 1.6rem;
      }
  }

  &__slider-image {
      position: absolute;
      top: 0;
      right: 0;
      width: 50%;
      height: 100%;
      background: none no-repeat;
      background-size: cover;

      @include mq(1023) {
          position: static;
          width: 100%;
          height: 40rem;
      }

      @include mq(767) {
          height: 20rem;
      }
  }

  &__slider-content {
      padding-right: 54.5%;

      @include mq(1023) {
          padding-right: 0;
      }
  }

  &__slider-headline {
      font-size: 1.8rem;
      line-height: (24 / 18);
      margin-bottom: 7.2rem;

      @include mq(1023) {
          margin-bottom: 3.8rem;
      }

      @include mq(767) {
          border-bottom: 1px solid $colorGrayLight;
      }
  }

  &__title--color {
      display: block;
      color: rgba($colorBlack, 0.2);
  }

  &__slider-text {
      font-size: 1.8rem;
      line-height: (24 / 18);
      margin-bottom: 1.4rem;

      @include mq(767) {
          font-size: 1.4rem;
          line-height: (20 / 14);
      }
  }

  &__slider-controls {
      position: absolute;
      bottom: 4.7rem;
      left: 3.2rem;
      display: flex;
      line-height: 1.6;

      @include mq(1023) {
          top: 8rem;
          left: auto;
          right: 1.7rem;
          line-height: 1.8;
      }
  }

  &__slider-arrow {
      position: relative;
      display: flex;
      width: 4rem;
      height: 2rem;

      @include mq(1023) {
          width: 2.3rem;
      }

      @include mq(767) {
          width: 2rem;
      }


      &::after {
          content: '';
          position: absolute;
          top: calc(50% - 0.45rem);
          width: 0.9rem;
          height: 0.9rem;
          border: 1px solid $colorBlack;
          transform: rotate(-45deg);
          transition: opacity 0.5s $easeInOutCirc, border 0.5s $easeInOutCirc;
      }

      &--prev {
          border-right-color: rgba($colorBlack, 0.05);
          border-radius: 0.4rem 0 0 0.4rem;

          &::after {
              left: calc(50% - 0.25rem);
              border-bottom: 0;
              border-right: 0;
          }
      }

      &--next {
          border-left-color: rgba($colorBlack, 0.05);
          border-radius: 0 0.4rem 0.4rem 0;
          margin-left: -1px;

          &::after {
              right: calc(50% - 0.25rem);
              border-top: 0;
              border-left: 0;
          }
      }

      &:hover {
          &::after {
              border-color: $colorYellowDark;
          }
      }

      &.is-disabled {
          pointer-events: none;

          &::after {
              opacity: 0.3;
          }

          &:hover {
              &::after {
                  border-color: $colorBlack;
              }
          }
      }
  }

  &__slider-number {
      margin-right: 1rem;
      margin-left: 1rem;
  }

  &__experts {
      padding-bottom: 4rem;
      background: $colorGrayLight;
      margin-bottom: 6.3rem;

      @include mq(1023) {
          padding-bottom: 3rem;
          margin-bottom: 4rem;
      }

      .about__wrapper {
          margin-right: 7.4rem;
          margin-left: 7.4rem;

          @include mq(1023) {
              margin-right: 3.4rem;
              margin-left: 3.4rem;
          }

          @include mq(767) {
              margin-right: 1.6rem;
              margin-left: 1.6rem;
          }
      }

      h2 {
          padding-top: 6.8rem;
          text-align: center;
          margin-bottom: 8.2rem;

          @include mq(1023) {
              padding-top: 3rem;
              margin-bottom: 4.2rem;
          }
      }
  }

  &__experts-item {
      display: flex;
      margin-bottom: 8rem;

      @include mq(1023) {
          @include clearfix;

          display: block;
          border-bottom: 1px solid $colorGrayLight;
          margin-bottom: 5rem;

          &:last-child {
              border-bottom: 0;
              margin-bottom: 0;
          }
      }
  }

  &__experts-img {
      flex: 1 0 auto;
      width: 36rem;
      max-width: 36rem;
      height: 47.2rem;
      background: none no-repeat;
      background-size: cover;
      margin-right: 7.2rem;

      @include mq(1023) {
          float: left;
          width: 12.8rem;
          height: 15.6rem;
          border-radius: 5px;
          margin-right: 2rem;
          margin-bottom: 2rem;
      }
  }

  &__experts-content {
      padding-right: 3.1rem;

      @include mq(1023) {
          padding-right: 0;
      }
  }

  &__experts-content-wrapper {
      @include mq(767) {
          display: inline-block;
          vertical-align: middle;
          max-height: 9.3rem;
          transition: max-height 0.5s $easeInOutCirc;
          overflow: hidden;

          &.is-show {
              max-height: 99.9rem;
          }
      }
  }

  &__experts-button-wrapper {
      display: none;
      width: 100%;
      text-align: center;

      @include mq(767) {
          display: block;
          margin-bottom: 2.3rem;
      }
  }

  &__experts-button {
      @include mq(767) {
          position: relative;
          display: inline-block;
          vertical-align: bottom;
          font-size: 1.6rem;
          line-height: (24 / 16);
          margin-top: 1.9rem;
          margin-right: 15rem;

          svg {
              display: inline-block;
              vertical-align: middle;
              width: 1rem;
              height: 1rem;
              transform: rotate(45deg);
              margin-top: -0.3rem;
              margin-right: 1rem;
          }
      }

      span {
          display: inline-block;
          vertical-align: middle;
      }
  }

  &__experts-button-text {
      position: absolute;
      top: 0;
      left: 0;
      white-space: nowrap;
      opacity: 1;
      transition: opacity 0.5s 0.1s $easeInOutCirc;

      &.is-hide {
          opacity: 0;
          transition: opacity 0.5s 0s $easeInOutCirc;
          pointer-events: none;
      }
  }

  &__experts-detail {
      padding-bottom: 1.8rem;
      font-size: 1.4rem;
      line-height: (20 / 14);
      color: rgba($colorBlack, 0.4);

      @include mq(1023) {
          padding-bottom: 0;
          font-size: 1.2rem;
          line-height: (16 / 12);
      }

      &--border-bottom {
          border-bottom: 1px solid $colorGrayLight;
          margin-bottom: 3.5rem;

          @include mq(1023) {
              margin-bottom: 0;
          }

          @include mq(767) {
              border-bottom: none;
          }
      }
  }

  &__experts-education {
      padding-bottom: 2.3rem;
      font-size: 1.4rem;
      line-height: (20 / 14);

      @include mq(1023) {
          padding-bottom: 1.5rem;
          font-size: 1.2rem;
          line-height: (16 / 12);
      }

      &--border-bottom {
          border-bottom: 1px solid $colorGrayLight;
          margin-bottom: 3.5rem;

          @include mq(1023) {
              margin-bottom: 0;
          }

          @include mq(767) {
              border-bottom: none;
          }
      }
  }

  &__experts-text {
      font-size: 1.6rem;
      line-height: (24 / 16);
      margin-bottom: 4rem;

      @include mq(1023) {
          font-size: 1.2rem;
          line-height: 1.6rem;
          margin-bottom: 0;
      }
  }

  &__experts-addition {
    position: relative;
    padding-top: 1.5rem;
    font-size: 1.4rem;
    line-height: (20 / 14);
    font-weight: 400;
    font-style: italic;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 20rem;
        height: 1px;
        background: $colorGrayLight;
    }

    @include mq(1023) {
        font-size: 1.2rem;
        line-height: (16 / 12);
    }
  }
}
</style>
