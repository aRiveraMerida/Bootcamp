import { useRef, useState } from 'react'

const UseRefSalary = () => {

  const [total, setTotal] = useState(0);

  const grossIncomeRef = useRef(null)
  const taxPercentRef = useRef(null)


  const hanldeClick = () => {
    const grossIncome = grossIncomeRef.current?.valueAsNumber;
    const taxtPercent = taxPercentRef.current?.valueAsNumber;
    setTotal(grossIncome - (grossIncome * (taxtPercent / 100)))
  }

  return (
    <div>
      <h3>Net Calculator</h3>
      <input type="number" placeholder='grossIncome' min="1" ref={grossIncomeRef} />
      <input type="number" placeholder='taxtPercent' min="0" max="100" ref={taxPercentRef} />
      <button onClick={hanldeClick}>Calculate 🧮</button>
      <div>
        <h3>Salary: {total}</h3>
      </div>
    </div>
  )
}

export default UseRefSalary