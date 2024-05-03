import React, { useEffect } from 'react';
import { useState } from 'react';
import './Cardbevande.css';

   
const url="https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
const Drinks = () =>{

    //usestate to store the products//       
     const [products, setProducts] = useState([]);

     //call the api
     useEffect(()=>{
        const fetchProducts= async()=>{
            const response = await fetch(url);
            const data = await response.json();
            const drinksArray = data.drinks; // Estrai l'array di drink dall'oggetto drinks
            setProducts(drinksArray);

            


        }
        fetchProducts();
     }, []);

    return (
        <div className='contenitoregigante'>
        <div className='containerr my-2 my-md-5'>
            
            <div className='cocktails-containerr row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3'>
                {
                    products.map((product) => (
                        <div className='cocktail-card card' key={product.id}>
                            <img alt="" src={product.strDrinkThumb}  className='cocktail-img card-img-top'/>
                            <div className='cocktail-info card-body'>
                                <h2 className='cocktail-name'>{product.strDrink}</h2>
                                <p className='cocktail-info'>{product.strCategory}</p>
                            </div>
                            <div className='btn'>view details</div>
                        </div>
                            
                ))}
            </div>
        </div>  
        </div>
    )


}
export default Drinks;
