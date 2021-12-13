import React, { useState, useEffect } from 'react'
import { Typography } from '@material-ui/core'
import wordsToNumbers from 'words-to-numbers'
import alanBtn from '@alan-ai/alan-sdk-web'

import useStyles from './styles'

const alanKey = process.env.REACT_APP_ALAN_SDK_KEY

function App() {
  const [activeArticle, setActiveArticle] = useState(0)
  const [newsArticles, setNewsArticles] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const classes = useStyles()

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === 'instructions') {
          setIsOpen(true);
        } else if (command === 'highlight') {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === 'open') {
          const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > articles.length) {
            alanBtn().playText('Please try that again...');
          } else if (article) {
            window.open(article.url, '_blank');
            alanBtn().playText('Opening...');
          } else {
            alanBtn().playText('Please try that again...');
          }
        }
      }
    })
  }, [])

  return (
    <div className="App">
      Hello world
    </div>
  );
}

export default App;
