import { Link } from 'react-router-dom';
import './Item.css';
import "bulma/css/bulma.css";


const Item = ({id, name, img, price, stock}) => {

    return (

        <article className='CardItem'>

            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={img} alt={name} className='ItemImg'/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <h2 className='IteamHeader is-size-2'>
                                {name}
                            </h2>
                        </div>
                    </div>
                    <div className="content">
                        <section>
                            <p className='Info'>
                                Precio: ${price}
                            </p>
                            <p className='Info'>
                                Stock disponible: {stock}
                            </p>
                        </section>
                        <footer className='ItemFooter'>
                            <Link to={`/item/${id}`} className='Option'>Ver detalle</Link>
                        </footer>
                    </div>
                </div>
            </div>

        </article>

    )

}

export default Item;