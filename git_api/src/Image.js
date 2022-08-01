import React from 'react'
import classes from './Image.module.css'

function Image() {
  return (
    <div className={classes.parent}>
        <p>A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of three or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose</p>
        <div className={classes.Img}>
        <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt=''/>
        </div>
        
    </div>
  )
}

export default Image