import Image from "next/image"

const Product = ({title, image, price}) => {
  return ( 
    <article style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      marginTop: '2rem'
    }}>
      <p style={{
        marginBottom: '1rem',
        color: 'var(--yellow)',
        fontSize: '1.5rem',
        fontWeight: 'bold'
      }}>{title}</p>
      <Image style={{
        borderRadius: '100%'
      }} src={image} width={220} height={220} alt={title}/>
      <span style={{
        backgroundColor: 'var(--yellow)',
        width: '50px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        color: 'var(--green)',
        fontWeight: 'bold',
        position: 'absolute',
        bottom: '0',
        right: '50px'
      }}>{price}</span>
    </article>
   )
}
 
export default Product