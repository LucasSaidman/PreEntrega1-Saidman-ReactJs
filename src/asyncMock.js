import I3 from './img/productos/I3 13100.webp';
import I5 from './img/productos/I5 13600K.webp';
import I7 from './img/productos/I7 13700K.webp';
import I9 from './img/productos/I9 13900K.jpg';
import R3 from './img/productos/Ryzen 3 5300G.jpg';
import R5 from './img/productos/Ryzen 5 5600X.jpg';
import R7 from './img/productos/Ryzen 7 5800X.jpg';
import R9 from './img/productos/Ryzen 9 5900X.jpg';
import RTX4060 from './img/productos/RTX 4060 Aorus Elite.webp';
import RTX4070 from './img/productos/RTX 4070 MSI Gaming X Trio.webp';
import RTX4080 from './img/productos/RTX 4080 Gigabyte Gaming OC.webp';
import RTX4090 from './img/productos/RTX 4090 Asus Rog Strix Gaming OC.jpg';
import C680X from './img/productos/Gabinete Corsair Crystal 680X.jpg';
import CV27F from './img/productos/Monitor Aorus Curvo 165hz CV27F.jpg';
import Quadcast from './img/productos/Microfono HyperX Quadcast.jpg';
import G413 from './img/productos/Teclado Logitech G413 Carbon.jpg';
import Pulsefire from './img/productos/Mouse HyperX Pulsefire Surge.jpg';

const products = [
    {
        id: 'I3',
        name: 'I3 13100',
        price: 128999,
        category: 'procesadores',
        img: I3,
        stock: 25,
        description: 'Procesador Intel I3 de 13ra generación'
    },
    {
        id: 'I5',
        name: 'I5 13600K',
        price: 211999,
        category: 'procesadores',
        img: I5,
        stock: 25,
        description: 'Procesador Intel I5 de 13ra generación'
    },
    {
        id: 'I7',
        name: 'I7 13700K',
        price: 273999,
        category: 'procesadores',
        img: I7,
        stock: 25,
        description: 'Procesador Intel I7 de 13ra generación'
    },
    {
        id: 'I9',
        name: 'I9 13900K',
        price: 453999,
        category: 'procesadores',
        img: I9,
        stock: 25,
        description: 'Procesador Intel I9 de 13ra generación'
    },
    {
        id: 'R3',
        name: 'Ryzen 3 5300G',
        price: 123500,
        category: 'procesadores',
        img: R3,
        stock: 25,
        description: 'Procesador AMD Ryzen 3 de 5ta generación'
    },
    {
        id: 'R5',
        name: 'Ryzen 5 5600X',
        price: 204900,
        category: 'procesadores',
        img: R5,
        stock: 25,
        description: 'Procesador AMD Ryzen 5 de 5ta generación'
    },
    {
        id: 'R7',
        name: 'Ryzen 7 5800X',
        price: 269000,
        category: 'procesadores',
        img: R7,
        stock: 25,
        description: 'Procesador AMD Ryzen 7 de 5ta generación'
    },
    {
        id: 'R9',
        name: 'Ryzen 9 5900X',
        price: 435999,
        category: 'procesadores',
        img: R9,
        stock: 25,
        description: 'Procesador AMD Ryzen 9 de 5ta generación'
    },
    {
        id: 'RTX4060',
        name: 'RTX 4060 Aorus Elite',
        price: 568600,
        category: 'graficas',
        img: RTX4060,
        stock: 25,
        description: 'Placa gráfica NVIDIA RTX 4060 Aorus Elite'
    },
    {
        id: 'RTX4070',
        name: 'RTX 4070 MSI Gaming X Trio',
        price: 721400,
        category: 'graficas',
        img: RTX4070,
        stock: 25,
        description: 'Placa gráfica NVIDIA RTX 4070 MSI Gaming X Trio'
    },
    {
        id: 'RTX4080',
        name: 'RTX 4080 Gigabyte Gaming OC',
        price: 1347999,
        category: 'graficas',
        img: RTX4080,
        stock: 25,
        description: 'Placa gráfica NVIDIA RTX 4080 Gigabyte Gaming OC'
    },
    {
        id: 'RTX4090',
        name: 'RTX 4090 Asus Rog Strix Gaming OC',
        price: 1784999,
        category: 'graficas',
        img: RTX4090,
        stock: 25,
        description: 'Placa gráfica NVIDIA RTX 4090 Asus Rog Strix gaming OC'
    },
    {
        id: '680X',
        name: 'Gabinete Corsair Crystal 680X',
        price: 249000,
        category: 'perifericos',
        img: C680X,
        stock: 25,
        description: 'Gabinete Corsair Crystal 680X Full Tower'
    },
    {
        id: 'Aorus-CV27F',
        name: 'Monitor Aorus 27',
        price: 350000,
        category: 'perifericos',
        img: CV27F,
        stock: 25,
        description: 'Monitor Aorus CV27F, de 27 pulgadas curvo, con panel VA, 1ms de respuesta y 165hz'
    },
    {
        id: 'HyperX-Quadcast',
        name: 'Microfono HyperX Quadcast',
        price: 78290,
        category: 'perifericos',
        img: Quadcast,
        stock: 25,
        description: 'Microfono HyperX Quadcast'
    },
    {
        id: 'G413',
        name: 'Logitech G413 Carbon',
        price: 55000,
        category: 'perifericos',
        img: G413,
        stock: 25,
        description: 'Teclado mecánico Logitech G413 Carbon, con switches Romer G'
    },
    {
        id: 'HyperX-Pulsefire',
        name: 'HyperX Pulsefire Surge',
        price: 32000,
        category: 'perifericos',
        img: Pulsefire,
        stock: 25,
        description: 'Mouse HyperX Pulsefire Surge RGB, sensor optico y 16000 dpi'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}