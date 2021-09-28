import React, { useEffect, useState } from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import NewsCard from './NewsCard'
import { getNewsFeed } from '../apiStuff/axiosWithAuth'

const News = (props) => {
  const [news, setNews] = useState([])

  useEffect(() => {
    const apiCall = async () => {
      await getNewsFeed()
        .then((res) => {
          if (res) {
            setNews(res.data)
            // console.log(res)
          }
        })
        .catch((err) => console.log(err))
    }
    if (news.length === 0) {
      apiCall()
    }
  }, [])
  console.log(news)

  return (
    <>
      <Header />
      {
        news.length > 0 && news.map((newsItem, index) => (
          <NewsCard data={newsItem} key={index} />
        ))
      }
      <Footer />
    </>
  )
}

export default News
