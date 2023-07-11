import styles from './cta.module.css'

const CallToAction = ({children}) => {
  return ( 
    <>
      <button className={styles.cta}>{children}</button>
    </>
   )
}
 
export default CallToAction