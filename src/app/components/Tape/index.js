import styles from './tape.module.css'

const Tape = ({textToDisplay}) => {
  const repetitions = 12
  const tapeContent = Array.from({length: repetitions} , (_, index)=>(
    <span key={index}>{textToDisplay}</span>
  ))
  return ( 
    <div className={styles.wrapper}>
      <div className={styles.cinta}>
        {tapeContent}
      </div>
    </div>
   )
}
 
export default Tape