import styles from './style.module.css'
import React from 'react'
//ANTES
// type ButtonProps = {
//   tamanho?: string
//   children: React.ReactNode
//   onClick?: () => void
// }

//DEPOIS
type ButtonProps2 = React.PropsWithChildren<{
  tamanho?: string
  onClick?: () => void
}>

//depois do depois rsrs
type ButtonProps3 = React.ComponentProps<'button'> & {
  tamanho?: string
}

const Button = ({ tamanho,  children, ...props }: ButtonProps3) => {
  return (
    <button
      {...props}
      style={{ fontSize: tamanho}}
      className={styles.btn}>{children}</button>
  )
}

export default Button