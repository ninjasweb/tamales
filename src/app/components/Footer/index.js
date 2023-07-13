import styles from './footer.module.css'

const Footer = () => {
  return ( 
    <footer className={styles.footer}>
      <div>2023 Todos los derechos reservados</div><br></br>
      <div>Diseño: <a href="https://ninjasweb.com" target="_blank">Ninjasweb</a></div>
    </footer>
   )
}
 
export default Footer