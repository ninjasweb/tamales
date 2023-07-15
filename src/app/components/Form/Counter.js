import { useState } from 'react'
import { useFormikContext } from 'formik'

const Counter = ({ productName, type, price }) => {
  const [count, setCount] = useState(0)
  const { setFieldValue } = useFormikContext()

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1)
      setSelectedCount(type, count - 1)
    }
  }

  const handleIncrease = () => {
    setCount(count + 1)
    setSelectedCount(type, count + 1)
  }

  const setSelectedCount = (type, count) => {
    setFieldValue(`selectedCount.${type}`, count)
  }

  return (
    <>
      <div className="product">
        <p>{productName} ({price})</p>
        <div className="counter">
          <span className={`button ${count === 0 ? 'disabled' : ''}`} onClick={handleDecrease}>
            -
          </span>
          <span className="number">{count}</span>
          <span className="button" onClick={handleIncrease}>
            +
          </span>
        </div>
      </div>
      <style jsx>{`
        .product {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          border-bottom: 1px solid var(--yellow);
          padding-bottom: 10px;
          gap: 2rem;
        }
        .product p {
          width: 60%;
          color: var(--white);
          font-weight: bold;
        }
        .product .counter {
          width: 40%;
          display: flex;
          justify-content: flex-end;
          height: 40px;
          background-color: var(--white);
          border-radius: 10px;
          overflow: hidden;
        }
        .product .counter span {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .product .counter .button {
          background-color: var(--yellow);
          cursor: pointer;
          font-size: 1.5rem;
          color: var(--green);
          font-weight: bold;
          -webkit-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        .product .counter .number {
          color: var(--green);
          font-weight: bold;
        }
        .product .counter .disabled {
          background-color: #ffe09c !important;
          cursor: not-allowed;
        }
      `}</style>
    </>
  )
}

export default Counter
