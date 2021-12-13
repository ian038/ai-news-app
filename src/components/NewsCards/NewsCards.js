import React from 'react'
import { Grid, Grow, Typography } from '@material-ui/core'

import NewsCard from './NewsCard/NewsCard'
import useStyles from './styles.js'

const infoCards = [
    { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
    { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
    { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Joe Biden...', text: 'What\'s up with PlayStation 5' },
    { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' }
]

export default function NewsCards({ articles, activeArticle }) {
    return (
        <div>
            News Cards
        </div>
    )
}
