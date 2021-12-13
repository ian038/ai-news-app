import React from 'react'
import { Typography, Divider, Chip, TextField, Button } from '@material-ui/core'
import SimpleModal from '@material-ui/core/Modal'
import emailjs from 'emailjs-com'

import useStyles from './styles'

export default function Modal({ isOpen, setIsOpen, showFeedback }) {
    const classes = useStyles()
    let body

    return (
        <div>
            Modal
        </div>
    )
}
