import Image from "next/image"

const Product = ({title, image, price, stock}) => {
  return ( 
    <article style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      marginTop: '2rem'
    }}>
      <p style={{
        marginBottom: '5px',
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
      {stock ? '' :
        <p style={{
          position: 'absolute',
          left: '70px',
          bottom: '10px',
          backgroundColor: 'var(--yellow)',
          color: 'var(--green)',
          padding: '5px 10px',
          borderRadius: '10px',
          fontWeight: 'bold',
          border: '2px solid var(--green)'
        }}>Agotado</p>
      }
    </article>
   )
}
 
export default Product