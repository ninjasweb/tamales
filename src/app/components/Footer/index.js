import Image from 'next/image'
import styles from './footer.module.css'
import WhatsappIcon from '@/assets/img/whatsapp_white.svg'
import FacebookIcon from '@/assets/img/facebook.svg'
import InstagramIcon from '@/assets/img/instagram.svg'
import Link from 'next/link'

const Footer = () => {
  const SocialIcons = [
    {
      name: 'Instagram',
      icon: InstagramIcon,
      url: 'https://instagram.com/tamalestolimenses.co'
    },
    {
      name: 'Facebook',
      icon: FacebookIcon,
      url: 'https://facebook.com/tamaltolimense'
    },
    {
      name: 'Whatsapp',
      icon: WhatsappIcon,
      url: 'https://wa.me/573142729497'
    }
  ]
  return ( 
    <footer className={styles.footer}>
      <div className={styles.social}>
        {SocialIcons.map((social)=>{
          return(
            <Link key={social.name} title={social.name} target='_blank' className={styles.link} href={social.url}>
              <Image  
                src={social.icon} 
                width={40} 
                height={40} 
                alt={social.name}
              />
            </Link>
          )
        })}
      </div>
      <div>2023 Todos los derechos reservados</div><br></br>
      <div>Diseño: <a href="https://ninjasweb.com" target="_blank">Ninjasweb</a></div>
    </footer>
   )
}
 
export default Footer