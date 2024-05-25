import camisetaAdelanteFidelCastro from '@/assets/images/carrouselPrincipal/camisetaAdelanteFidelCastro_1.webp';

export default () => ({
    filterRopa: {},
    categories: [
        {
            image: {"url":'https://i.pinimg.com/736x/56/59/34/565934cb75ebd858222913a76e2c8001.jpg' },
            name: 'Camisetas',
            slug: 'camisetas'
        },
        {
            image: {"url": 'https://ih1.redbubble.net/image.2720416359.7093/ssrco,baseball_cap,womens,B7B4B8:25c8fc6a4c,front_three_quarter,tall_portrait,750x1000-bg,f8f8f8.jpg'},
            name: 'Gorras',
            slug: 'gorras'
        },
        {
            image: {"url": 'https://cdn-images.threadless.com/threadless-media/artist_shops/shops/burroart/products/2608005/neck-gaiter_performance_single-layer-1639783341-ba93ffc970590f97847e1bc8061d6b92.jpg?v=3&d=eyJvcHMiOiBbWyJyZXNpemUiLCBbODAwXSwge31dLCBbImNhbnZhc19jZW50ZXJlZCIsIFs4MDAsIDgwMCwgIiNmZmZmZmYiXSwge31dLCBbImVuY29kZSIsIFsianBnIiwgODVdLCB7fV1dLCAiZm9yY2UiOiBmYWxzZSwgIm9ubHlfbWV0YSI6IGZhbHNlfQ=='},
            name: 'Cuellos',
            slug: 'cuellos'
        },
        {
            image: {"url": 'https://i.etsystatic.com/7509119/r/il/c86209/5629388129/il_570xN.5629388129_tvot.jpg'},
            name: 'Bufandas',
            slug: 'bufandas'
        },
    ],
    ropa: [
        {
            id: 1,
            slug: 'camiseta-revolucion-comunista',
            title: 'Camiseta Revolución Comunista',
            author: 'Ernesto Ché Guevara',
            iconColor: 'red',
            icon: 'mdi-fire-circle',
            rating: 4.5,
            reviews: 413,
            price: 30000,
            description: 'Expresa tu apoyo a la revolución con esta elegante camiseta de temática comunista.',
            availableSizes: ['XS', 'S', 'M', 'L', 'XL'],
            avalibleColors: ['green'],
            image: camisetaAdelanteFidelCastro,
            category: 'camisetas',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Juco.jpg',
        },
        {
            id: 2,
            slug: 'camiseta-libertad-palestina',
            title: 'Camiseta Libertad Palestina',
            author: 'Ana González',
            iconColor: 'red',
            icon: 'mdi-fire-circle',
            rating: 4.2,
            reviews: 320,
            price: 27000,
            description: 'Demuestra tu creatividad y pasión por el marxismo con esta vibrante camiseta.',
            availableSizes: ['S', 'M', 'L', 'XL'],
            avalibleColors: ['black'],
            image: 'https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140,2000%7C81dk7kHurTL.png%7C0,0,2140,2000+0.0,0.0,2140.0,2000.0._UL1500_.png',
            category: 'camisetas',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Juco.jpg'
        },
        {
            id: 3,
            title: 'Palestina Vencerá',
            author: 'Carlos Rodríguez',
            iconColor: 'red',
            icon: 'mdi-fire-circle',
            rating: 4.8,
            reviews: 240,
            price: 32000,
            description: 'Muestra tu apoyo a la solidaridad internacional con esta camiseta única.',
            availableSizes: ['XS', 'M', 'XL'],
            avalibleColors: ['red'],
            image: 'https://lalokomotora.com/wp-content/uploads/2021/10/camiseta_palestina_vencera.jpg',
            category: 'camisetas',
            logo: 'https://ih1.redbubble.net/image.540361567.5111/gtdr,x1500,front,black-c,216,320,600,600-bg,f8f8f8.u1.jpg'
        },
        {
            id: 4,
            title: 'Camiseta Feminismo Socialista',
            author: 'María López',
            iconColor: 'red',
            icon: 'mdi-fire-circle',
            rating: 4.6,
            reviews: 380,
            price: 29000,
            description: 'Celebra la unión del feminismo y el socialismo con esta poderosa camiseta.',
            availableSizes: ['S', 'L', 'XL'],
            image: 'https://render.fineartamerica.com/images/rendered/default/t-shirt/35/2/images/artworkimages/medium/3/ussr-soviet-union-communist-star-communism-russia-tony-rubino-transparent.png?targetx=0&targety=0&imagewidth=350&imageheight=327&modelwidth=350&modelheight=425',
            category: 'gorras',
            logo: 'https://render.fineartamerica.com/images/rendered/default/t-shirt/35/2/images/artworkimages/medium/3/ussr-soviet-union-communist-star-communism-russia-tony-rubino-transparent.png?targetx=0&targety=0&imagewidth=350&imageheight=327&modelwidth=350&modelheight=425'
        },
        {
            id: 5,
            title: 'Camiseta Revolución de Octubre',
            author: 'Iván Petrov',
            iconColor: 'red',
            icon: 'mdi-fire-circle',
            rating: 4.4,
            reviews: 310,
            price: 31000,
            description: 'Conmemora la Revolución de Octubre con esta histórica camiseta.',
            availableSizes: ['M', 'L', 'XL'],
            image: 'https://communist-clothing.com/cdn/shop/products/product-image-556527966_grande_c842d9b5-11ea-4f19-af07-dcb8f13c9750_large.jpg?v=1518141004',
            category: 'cuellos',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Juco.jpg'
        },
        {
            id: 6,
            title: 'Camiseta Che Vive',
            author: 'Rosa Jiménez',
            iconColor: 'red',
            icon: 'mdi-fire-circle',
            rating: 4.7,
            reviews: 360,
            price: 28000,
            description: 'Rinde homenaje al Che Guevara con esta vibrante camiseta que celebra su legado.',
            availableSizes: ['XS', 'S', 'L', 'XL'],
            image: 'https://ih1.redbubble.net/image.546980332.3329/gtdr,x1500,front,black-c,216,320,600,600-bg,f8f8f8.u5.jpg',
            category: 'bufandas',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Juco.jpg'
        },
        {
            id: 7,
            title: 'Camiseta Proletariado Unido',
            author: 'Pablo Hernández',
            iconColor: 'red',
            icon: 'mdi-fire-circle',
            rating: 4.5,
            reviews: 290,
            price: 33000,
            description: 'Únete al movimiento con esta camiseta que aboga por la unidad del proletariado.',
            availableSizes: ['S', 'M', 'XL'],
            image: 'https://alitools.io/en/showcase/image?url=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHTB1YJ5or21TBuNjy0Fjq6yjyXXaz%2FCuba-Rip-Communist-Che-Guevara-Men-s-T-shirt-Fashion-Casual-O-neck-Men-T-Shirt.jpg_480x480.jpg',
            category: 'bufandas',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Juco.jpg'
        },
        {
            id: 8,
            title: 'Camiseta Socialismo en Acción',
            author: 'Elena Ramírez',
            iconColor: 'red',
            icon: 'mdi-fire-circle',
            rating: 4.3,
            reviews: 260,
            price: 30000,
            description: 'Inspira cambio con esta camiseta que promueve el socialismo en acción.',
            availableSizes: ['XS', 'L', 'XL'],
            image: 'https://teefury.com/cdn/shop/products/flat-tee-color-blk_5803d13c-5ad6-4e44-bc51-13f07bc54535_650x650.jpg?v=1572665710',
            category: 'gorras',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Juco.jpg'
        },
        {
            id: 9,
            title: 'Camiseta Revolución Popular',
            author: 'Javier Martínez',
            iconColor: 'red',
            icon: 'mdi-fire-circle',
            rating: 4.6,
            reviews: 340,
            price: 31000,
            description: 'Lucha por la revolución popular con esta impactante camiseta.',
            availableSizes: ['S', 'M', 'L', 'XL'],
            image: 'https://rlv.zcache.com/communiste_cold_war_flag_baby_bodysuit-r536d59f3874b4bd89b3309083bcd86b4_j82wr_307.jpg',
            category: 'cuellos',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Juco.jpg'
        },
        {
            id: 10,
            title: 'Camiseta Antifascista',
            author: 'Luisa Castro',
            iconColor: 'red',
            icon: 'mdi-fire-circle',
            rating: 4.8,
            reviews: 370,
            price: 32000,
            description: 'Haz frente al fascismo con esta camiseta que defiende los valores antifascistas.',
            availableSizes: ['S', 'M', 'XL'],
            image: 'https://res.cloudinary.com/dzdgpwtox/image/upload/w_900,c_scale,q_auto/u_final_designs:seller_design_391159:f_20220624061317.png,w_220,h_275,y_-270,a_1,c_fit/l_tshirt_dresses:map.png,e_displace,y_8/u_tshirt_dresses:colors:Red.jpg,w_900,h_1040/v1688465154/tshirt_dresses/mockup.webp',
            category: 'bufandas',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Juco.jpg'
        },
        // Agrega más objetos de datos para más tarjetas
        // ...
    ],
    actualProducto:{

    }
});