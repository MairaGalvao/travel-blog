import * as React from 'react'

import * as Mui from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'
import CarouselSlide from 'react-material-ui-carousel'

import './HomePage.css'
import { MetaTags } from '@redwoodjs/web'

import TopNavBarPage from '../TopNavBarPage/TopNavBarPage'

const HomePage = () => {
  const pictures = [
    {
      image:
        'https://images.unsplash.com/photo-1561942401-5f8274f4039c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
      title: 'Brazil',
    },
    {
      image:
        'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      title: 'USA',
    },
    {
      image:
        'https://images.unsplash.com/photo-1544085311-11a028465b03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
      title: 'Norway',
    },
    {
      image:
        'https://images.unsplash.com/photo-1452868195396-89c1af3b1b2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
      title: 'Estonia',
    },
  ]

  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <TopNavBarPage />

      <Mui.Box id="slider-pictures-main">
        {' '}
        <Carousel>
          {pictures.map(({ image, title }) => (
            <CarouselSlide key={image}>
              <Mui.Card>
                <Mui.CardMedia
                  image={image}
                  title={title}
                  style={{
                    height: 0,
                    paddingTop: '25%',
                  }}
                />
                <Mui.CardContent>
                  <Mui.Typography>{title}</Mui.Typography>
                </Mui.CardContent>
              </Mui.Card>
            </CarouselSlide>
          ))}
        </Carousel>
      </Mui.Box>
    </>
  )
}

export default HomePage
