import React from 'react'
import styles from './InputOption.module.css'

function InputOption({Icon, title, color}) {
  return (
    <div className={styles.inputOption}>
        <Icon style={{color:color}} />
        <h4>{title}</h4>
    </div>
  )
}

export default InputOption