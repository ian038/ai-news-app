import React, { useState, useEffect } from 'react'
import { Typography } from '@material-ui/core'
import wordsToNumbers from 'words-to-numbers'
import alanBtn from '@alan-ai/alan-sdk-web'

import { NewsCards } from './components'
import useStyles from './styles'

const alanKey = process.env.REACT_APP_ALAN_SDK_KEY

function App() {
  const [activeArticle, setActiveArticle] = useState(0)
  const [newsArticles, setNewsArticles] = useState([])

  const classes = useStyles()

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles)
          setActiveArticle(-1)
        } else if (command === 'highlight') {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1)
        } else if (command === 'open') {
          const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number
          const article = articles[parsedNumber - 1]

          if (parsedNumber > articles.length) {
            alanBtn().playText('Please try that again...')
          } else if (article) {
            window.open(article.url, '_blank')
            alanBtn().playText('Opening...')
          } else {
            alanBtn().playText('Please try that again...')
          }
        }
      }
    })
  }, [])

  return (
    <div>
      <div className={classes.logoContainer}>
        {newsArticles.length ? (
          <div className={classes.infoContainer}>
            <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Open article number [4]</Typography></div>
            <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Go back</Typography></div>
          </div>
        ) : null}
        <img src="https://www.conversationdesigninstitute.com/assets/images/academy/POP/cover-card-EXT-Alan@2x.png" className={classes.alanLogo} alt="logo" />
      </div>
    <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    {!newsArticles.length ? (
      <div className={classes.footer}>
        <Typography variant="body1" component="h2">
          Created by
          <a className={classes.link} href="https://github.com/ian038/ai-news-app" target='_blank' rel="noreferrer"> Ian Phua</a> 
        </Typography>
      </div>
    ) : null}
  </div>
  )
}

export default App;
