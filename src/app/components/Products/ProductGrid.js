import Product from "./Product"
import Picante from '@/assets/img/picante.jpg'
import Tradicional from '@/assets/img/tradicional.jpg'
import Light from '@/assets/img/light.jpg'

const ProductGrid = () => {
  const productList = [
    {
      title: 'Picante',
      image: Picante.src,
      price: '$8.5'
    },
    {
      title: 'Tradicional',
      image: Tradicional.src,
      price: '$8'
    },
    {
      title: 'Light',
      image: Light.src,
      price: '$9'
    }
  ]
  return ( 
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        maxWidth: '1000px',
        margin: '0 auto',
        marginTop: '2rem',
        marginBottom: '2rem'
      }}>
        {productList.map((product, index)=>{
          return(
            <Product
              key={index}
              title={product.title}
              image={product.image}
              price={product.price}
            />
          )
        })}
      </div>
   )
}
 
export default ProductGrid