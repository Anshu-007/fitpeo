import React from 'react'
import './home.css'
import Charts from '../Charts/Charts'
import ProductTable from '../Table/ProductTable'
import money from '../Assets/money.png'
import bag from '../Assets/bag.png'
import wallet from '../Assets/wallet.png'
import note from '../Assets/note.png'

const Home = () => {
    const income = [{name : "Earning", color : "#dcffeb", image : money , amount : "198", increament : 37.8},{name : "Orders", color : "#e7dbff", image : note , amount : "198", increament : -2},{name : "Balance", color : "#ccf2ff", image : wallet , amount : "198", increament : -2},{name : "Total Sales", color : "#feb0d8", image : bag , amount : "198", increament : 11}]
      return (
    <div className='home-wrapper'>
                <div className='user-input-wrapper'>
            <div className='username'>Hello  Fitpeo ,</div>
            <div>
                <img src="" alt="" />
                <input className='search' type="text" placeholder='search' />
            </div>
        </div>
        <div className='income-components'>
            {
                income.map((income)=>{
                    return <div className='main-wrapper'>
                        <div className='related-image-wrapper' style={{background : income.color}}>
                            <img className='image' src={income.image} alt='logo'/>
                        </div>
                        <div className='income-deatils'>
                            <div className='income-type'>
                                {income.name}
                            </div>
                            <div className='income-value'>
                            ${income.amount}k
                            </div>
                            <div className='increment'>
                                <div className={income.increament > 0 ? 'increment-month' : 'increment-month-down'}>
                                    {`${income.increament}% `} 
                                </div>
                                <div> this month</div>
                            </div>
                            
                        </div>

                    </div>
                })
            }
        </div> 
        <Charts/> 
        <ProductTable/>  
        </div>
  )
}

export default Home