export default {
    settings: {
        siteName: 'Quick Commerce',
        title: 'Welcome to Quick Commerce',
        logo: { image: 'img/phobulous-logo_green.png' },
        address: {
            line1: '123 Test Street',
            line2: '',
            city: 'Edmonton',
            zone: 'Alberta',
            country: 'Canada',
            postcode: 'T6T6T6'
        },
        telephone: '(555) 555.5555',
        cell: '(666) 666.6666',
        fax: '(777) 777.7777',
        email: 'mysite@example.com',
        skype: 'mysiteexample',
        instagram: 'mysiteexample',
        facebook: 'mysiteexample',
        twitter: 'mysiteexample',
        google: 'mysiteexample',
        hours: '',
        copyright: 'Blue Collar development',
        paymentMethods: ['Visa', 'Paypal', 'MasterCard', 'Discover']
    },
    header: {

    },
    menu: {
        items: [
            { title: 'Home', url: '#/home'},
            { title: 'Shop', url: '#/shop'},
            { title: 'Blog', url: '#/blog'},
            { title: 'Gallery', url: '#/gallery'},
            { title: 'About', url: '#/about'},
            { title: 'Contacts', url: '#/contacts'},
            { title: 'Faq', url: '#/faq'},
            { title: 'Elements', url: '#/elements'}
        ]
    },
    pages: [
        {
            id: 'home',
            layout: {
                images: {
                    heroSlides: [
                        {
                            id: 'buns',
                            action: {
                                href: '#main-content'
                            },
                            title: 'Fabulously Delicious',
                            subtitle1: 'Vermicelli Bowls and Noodle Soups',
                            subtitle2: 'Explore our new',
                            subtitle3: 'take out menu!',
                            ctaText: 'View Menu',
                            className: 'slide',
                            backgroundImage: 'img/products/black/banner/jumbo-prawn-vermicelli.jpg',
                            textPosition: {
                                fromTop: {},
                                fromBottom: {}
                            }
                        },
                        {
                            id: 'salad-rolls',
                            action: {
                                href: '#main-content'
                            },
                            title: 'Fresh & Crunchy',
                            subtitle1: 'Shrimp & Pork Salad Rolls',
                            subtitle2: 'Explore our new',
                            subtitle3: 'take out menu!',
                            ctaText: 'View Menu',
                            className: 'slide',
                            backgroundImage: 'img/products/black/banner/pork-and-shrimp-salad-rolls.jpg',
                            textPosition: {
                                fromTop: {},
                                fromBottom: {}
                            }
                        },
                        {
                            id: 'spring-rolls',
                            action: {
                                href: '#main-content'
                            },
                            title: 'Hot and Delicious',
                            subtitle1: 'Spring Rolls, Dumplings and More',
                            subtitle2: 'Explore our new',
                            subtitle3: 'take out menu!',
                            ctaText: 'View Takeout Menu',
                            className: 'slide',
                            backgroundImage: 'img/products/black/banner/dumplings.jpg',
                            textPosition: {
                                fromTop: {},
                                fromBottom: {}
                            }
                        },
                        {
                            id: 'buns',
                            action: {
                                href: '#main-content'
                            },
                            title: 'Fabulously Delicious',
                            subtitle1: 'Vermicelli Bowls and Noodle Soups',
                            subtitle2: 'Explore our new',
                            subtitle3: 'take out menu!',
                            ctaText: 'View Menu',
                            className: 'slide',
                            backgroundImage: 'img/products/black/banner/jumbo-prawn-vermicelli.jpg',
                            textPosition: {
                                fromTop: {},
                                fromBottom: {}
                            }
                        }
                    ],
                    // Set if mapping static content
                    categories: [
                        {
                            id: 'pho',
                            title: 'Noodle Soups (Pho)',
                            className: 'featured-image',
                            backgroundImage: 'img/featured-image/phobulous/banner/20170911-DSCF5641.jpg'
                        },
                        {
                            id: 'bun',
                            title: 'Noodle Bowls (Bun)',
                            className: 'featured-image',
                            backgroundImage: 'img/featured-image/phobulous/banner/20170911-DSCF5683.jpg'
                        },
                        {
                            id: 'rice',
                            title: 'Rice Dishes',
                            className: 'featured-image',
                            backgroundImage: 'img/featured-image/phobulous/banner/20170911-DSCF5729.jpg'
                        },
                        {
                            id: 'appetizers',
                            title: 'Appetizers',
                            className: 'featured-image',
                            backgroundImage: 'img/featured-image/phobulous/banner/20170911-DSCF5578.jpg'
                        }
                    ],
                    featured: [
                        { id: null, className: 'featured-image', backgroundImage: 'img/featured-image/about.jpg' },
                        { id: null, className: 'featured-image', backgroundImage: 'img/featured-image/account.jpg' },
                        { id: null, className: 'featured-image', backgroundImage: 'img/featured-image/blog.jpg' },
                        { id: null, className: 'featured-image', backgroundImage: 'img/featured-image/elements.jpg' },
                        { id: null, className: 'featured-image', backgroundImage: 'img/featured-image/faq.jpg' }
                    ],
                    section: [
                        { id: 'features', className: 'video-bg', backgroundImage: 'img/features_bg.jpg' },
                        { id: 'video', className: 'video-bg', backgroundImage: 'img/video-bg.jpg' },
                        { className: 'fw-section', backgroundImage: 'img/video_bg.jpg' },
                    ]
                }
            }
        },
        {
            id: 'about',
            title: 'About',
            content: [
                { id: 'brand' },
                { id: 'mission' }
            ]
        }
    ],
    faq: [
        // Use markdown
    ],
    cart: [
        {
            id: '',
            name: 'Noodle Soup with Rare Beef, Brisket and Meat Balls',
            shortDescription: 'Rare Beef, Brisket and Meat Balls',
            description: 'Noodle Soup with Rare Beef, Brisket and Meat Balls',
            image: 'img/products/fhd/20170911-DSCF5603.jpg'
        },
        {
            id: '',
            name: 'Deep-Fried Spring Rolls',
            shortDescription: 'Deep-Fried Spring Rolls',
            description: 'Deep-Fried Spring Rolls',
            image: 'img/products/fhd/20170911-DSCF5509.jpg'
        }
    ],
    catalog: {
        items: [
            {   id: '',
                name: 'Spicy Satay Noodle Soup with Seafood',
                shortDescription: 'Spicy Satay Noodle Soup with Seafood',
                description: 'Spicy Satay Noodle Soup with Seafood',
                image: 'img/products/fhd/20170911-DSCF5650.jpg',
                options: [
                    {
                        id: '',
                        name: 'Add Squid',
                        price: 1.00
                    },
                    {
                        id: '',
                        name: 'Extra Shrimp',
                        price: 1.00
                    }
                ],
                price: 15.95
            },
            {
                id: '',
                name: 'Noodle Soup with Rare Beef, Brisket and Meat Balls',
                shortDescription: 'Noodle Soup with Rare Beef, Brisket and Meat Balls',
                description: 'Noodle Soup with Rare Beef, Brisket and Meat Balls',
                image: 'img/products/fhd/20170911-DSCF5603.jpg',
                options: [
                    {
                        id: '',
                        name: 'Meat Balls',
                        price: 1.00
                    },
                    {
                        id: '',
                        name: 'Extra Beef',
                        price: 1.00
                    }
                ],
                price: 15.95
            },
            {
                id: '',
                name: 'Vermicelli Bowl with Beef, Shrimp and Spring Rolls',
                shortDescription: 'Vermicelli Bowl with Beef, Shrimp and Spring Rolls',
                description: 'Vermicelli Bowl with Beef, Shrimp and Spring Rolls',
                image: 'img/products/fhd/20170911-DSCF5701.jpg',
                options: [
                    {
                        id: '',
                        name: 'Extra Shrimp',
                        price: 1.00
                    },
                    {
                        id: '',
                        name: 'Extra Beef',
                        price: 1.00
                    },
                    {
                        id: '',
                        name: 'Extra Spring Roll',
                        price: 1.00
                    }
                ],
                price: 15.95
            },
            {
                id: '',
                name: 'Vermicelli Bowl with Seafood and Spring Rolls',
                shortDescription: 'Vermicelli Bowl with Seafood and Spring Rolls',
                description: 'Vermicelli Bowl with Seafood and Spring Rolls',
                image: 'img/products/fhd/20170911-DSCF5683.jpg',
                options: [
                    {
                        id: '',
                        name: 'Extra spring roll',
                        price: 1.00
                    }
                ],
                price: 15.95
            },
            {
                id: '',
                name: 'Rice Bowl with Spicy Satay Shrimp',
                shortDescription: 'Rice Bowl with Spicy Satay Shrimp',
                description: 'Rice Bowl with Spicy Satay Shrimp',
                image: 'img/products/fhd/20170911-DSCF5727.jpg',
                options: [
                    {
                        id: '',
                        name: 'Extra shrimp',
                        price: 1.00
                    }
                ],
                price: 15.95
            },
            {
                id: '',
                name: 'Fresh Vietnamese Salad Rolls with Shrimp',
                shortDescription: 'Fresh Vietnamese Salad Rolls with Shrimp',
                description: 'Fresh Vietnamese Salad Rolls with Shrimp',
                image: 'img/products/fhd/20170911-DSCF5532.jpg',
                options: [
                    {
                        id: '',
                        name: 'Add BBQ Pork',
                        price: 1.00
                    }
                ],
                price: 15.95
            },
            {
                id: '',
                name: 'Steamed Gyoza Dumplings',
                shortDescription: 'Steamed Gyoza Dumplings',
                description: 'Steamed Gyoza Dumplings',
                image: 'img/products/fhd/20170911-DSCF5556.jpg',
                options: [
                    {
                        id: '',
                        name: 'Add extra dumpling',
                        price: 1.00
                    }
                ],
                price: 15.95
            },
            {
                id: '',
                name: 'Deep-Fried Spring Rolls',
                shortDescription: 'Deep-Fried Spring Rolls',
                description: 'Deep-Fried Spring Rolls',
                image: 'img/products/fhd/20170911-DSCF5509.jpg',
                options: [
                    {
                        id: '',
                        name: 'Add squid',
                        price: 1.00
                    }
                ],
                price: 15.95
            }
        ],
        categories: [
            { id: '', name: '', image: 'img/categories/cat01.jpg' },
            { id: '', name: '', image: 'img/categories/cat02.jpg' },
            { id: '', name: '', image: 'img/categories/cat03.jpg' },
            { id: '', name: '', image: 'img/categories/cat04.jpg' }
        ],
        manufacturers: [
            { id: '', name: '', image: 'img/brands/01.svg' },
            { id: '', name: '', image: 'img/brands/02.svg' },
            { id: '', name: '', image: 'img/brands/03.svg' },
            { id: '', name: '', image: 'img/brands/04.svg' },
            { id: '', name: '', image: 'img/brands/05.svg' },
            { id: '', name: '', image: 'img/brands/06.svg' }
        ]
    },
    random: [
        { image: 'img/shop/special-offer.jpg' },
        { image: 'img/cards.png' },
    ]
};
