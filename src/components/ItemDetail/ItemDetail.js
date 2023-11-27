import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import "bulma/css/bulma.css";


const ItemDetail = ({id, name, img, category, description, price, stock}) => {

    return (

        <div className="card ItD">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={img} alt={name} className='ItemImg'/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <h2 className='ItemHeader is-size-2'>             
                            {name}        
                        </h2>
                    </div>
                </div>
                <div className="content">
                    <section>
                        <p className='Info'>
                            Categoria: {category}
                        </p>
                        <p className='Info'>
                            Descripción: {description}
                        </p>
                        <p className='Info'>
                            Precio: ${price}
                        </p>
                    </section>
                    <footer className='ItemFooter'>
                        <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}/>
                    </footer>
                </div>
            </div>
        </div>

        // <article className='CardItem'>
        //     <header className='Header'>
        //         <h2 className='ItemHeader'>
        //             {name}
        //         </h2>
        //     </header>
        //     <picture>
        //         <img src={img} alt={name} className='ItemImg'/>
        //     </picture>
        //     <section>
        //         <p className='Info'>
        //             Categoria: {category}
        //         </p>
        //         <p className='Info'>
        //             Descripción: {description}
        //         </p>
        //         <p className='Info'>
        //             Precio: ${price}
        //         </p>
        //     </section>
        //     <footer className='ItemFooter'>
        //         <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}/>
        //     </footer>
        // </article>

    )

}


export default ItemDetail;