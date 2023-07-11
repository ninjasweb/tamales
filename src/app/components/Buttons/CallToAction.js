'use client'

const CallToAction = ({children}) => {
  return ( 
    <>
      <button>{children}</button>
      <style jsx>{`
        button {
          background-color: var(--white);
          padding: 0.25rem 1rem;
          font-weight: bold;
          border: none;
          border-radius: 10px;
          height: 35px;
          cursor: pointer;
          width: max-content;
        }
      `}</style>
    </>
   )
}
 
export default CallToAction