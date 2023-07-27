import Product from "./Product"
import Picante from '@/assets/img/picante.jpg'
import Tradicional from '@/assets/img/tradicional.jpg'
import Light from '@/assets/img/light.jpg'
import styles from './products.module.css'

const ProductGrid = () => {
  const productList = [
    {
      title: 'Picante',
      image: Picante.src,
      price: '$8.5',
      stock: true
    },
    {
      title: 'Tradicional',
      image: Tradicional.src,
      price: '$8',
      stock: true
    },
    {
      title: 'Vegetariano',
      image: Light.src,
      price: '$9',
      stock: false
    }
  ]
  return ( 
      <div className={styles.grid}>
        {productList.map((product, index)=>{
          return(
            <Product
              key={index}
              title={product.title}
              image={product.image}
              price={product.price}
              stock={product.stock}
            />
          )
        })}
      </div>
   )
}
 
export default ProductGrid