import { v4 as uuid } from 'uuid'

let inventory = [
    {
        categories: ['country'],
        name: 'ARGENTINA SHIRT BLUE WHITE',
        price: '600', 
        image: '/images/argentina.jpg',
        description: 'A passionate following in the stands. Ice-cold play on the pitch. Argentina is superstars wear a version of this juniors adidas jersey on away days. Its eye-catching design reflects the country is natural beauty. Soft, moisture-absorbing fabric keeps you comfortable. A woven crest shows your devotion.',
        brand: 'Argentina',
        currentInventory: 4
    },
    {
        categories: ['division'], 
        name: 'ARSENAL SHIRT DIVISION ', 
        price: '450', 
        image: '/images/arsenal.jpg', 
        description: 'A passionate following in the stands. Ice-cold play on the pitch. Argentina is superstars wear a version of this juniors adidas jersey on away days. Its eye-catching design reflects the country is natural beauty. Soft, moisture-absorbing fabric keeps you comfortable. A woven crest shows your devotion.',
        brand: 'Arsenal', 
        currentInventory: 2
    },
    {
        categories: ['division'], 
        name: 'BARCELONA SHIRT DIVISION', 
        price: '800', 
        image: '/images/barca.jpg', 
        description: 'A passionate following in the stands. Ice-cold play on the pitch. Argentina is superstars wear a version of this juniors adidas jersey on away days. Its eye-catching design reflects the country is natural beauty. Soft, moisture-absorbing fabric keeps you comfortable. A woven crest shows your devotion.',
        brand: 'Barcelona', 
        currentInventory: 8
    },
    {
        categories: ['country'], 
        name: 'BRAZIL SHIRT GREEN YELLOW', 
        price: '900', 
        image: '/images/brazil.jpg', 
        description: 'A passionate following in the stands. Ice-cold play on the pitch. Argentina is superstars wear a version of this juniors adidas jersey on away days. Its eye-catching design reflects the country is natural beauty. Soft, moisture-absorbing fabric keeps you comfortable. A woven crest shows your devotion.',
        brand: 'Brazil', 
        currentInventory: 10
    },
    {
        categories: ['traditional'], 
        name: 'CHELSEA SHIRT TRADITIONAL', 
        price: '1200', 
        image: '/images/chelsea.jpg', 
        description: 'A passionate following in the stands. Ice-cold play on the pitch. Argentina is superstars wear a version of this juniors adidas jersey on away days. Its eye-catching design reflects the country is natural beauty. Soft, moisture-absorbing fabric keeps you comfortable. A woven crest shows your devotion.',
        brand: 'Chelsea', 
        currentInventory: 7
    },
    {
        categories: ['country'], 
        name: 'ENGLAND SHIRT RED', 
        price: '500', 
        image: '/images/england.jpg', 
        description: 'A passionate following in the stands. Ice-cold play on the pitch. Argentina is superstars wear a version of this juniors adidas jersey on away days. Its eye-catching design reflects the country is natural beauty. Soft, moisture-absorbing fabric keeps you comfortable. A woven crest shows your devotion.',
        brand: 'England', 
        currentInventory: 13
    },
    {
        categories: ['fire'], 
        name: 'ARSENAL SHIRT FIRE', 
        price: '650', 
        image: '/images/fire-arsenal.jpg', 
        description: 'A passionate following in the stands. Ice-cold play on the pitch. Argentina is superstars wear a version of this juniors adidas jersey on away days. Its eye-catching design reflects the country is natural beauty. Soft, moisture-absorbing fabric keeps you comfortable. A woven crest shows your devotion.',
        brand: 'Arsenal', 
        currentInventory: 9
    },
    {
        categories: ['dragon',], 
        name: 'DORTMUND SHIRT DRAGON', 
        price: '1230', 
        image: '/images/dortmund.jpg', 
        description: 'A passionate following in the stands. Ice-cold play on the pitch. Argentina is superstars wear a version of this juniors adidas jersey on away days. Its eye-catching design reflects the country is natural beauty. Soft, moisture-absorbing fabric keeps you comfortable. A woven crest shows your devotion.',
        brand: 'Dortmund',
        currentInventory: 4,
    },

    {
        categories: ['fire', 'super'], 
        name: 'BARCELONA SHIRT FIRE SUPER', 
        price: '800', 
        image: '/images/fire-barca.jpg', 
        description: 'A passionate following in the stands. Ice-cold play on the pitch. Argentina is superstars wear a version of this juniors adidas jersey on away days. Its eye-catching design reflects the country is natural beauty. Soft, moisture-absorbing fabric keeps you comfortable. A woven crest shows your devotion.',
        brand: 'Barcelona', 
        currentInventory: 43
    },
    {
        categories: ['fire'], 
        name: 'CHELSEA SHIRT FIRE', 
        price: '900', 
        image: '/images/fire-chelsea.jpg', 
        description: 'A passionate following in the stands. Ice-cold play on the pitch. Argentina is superstars wear a version of this juniors adidas jersey on away days. Its eye-catching design reflects the country is natural beauty. Soft, moisture-absorbing fabric keeps you comfortable. A woven crest shows your devotion.',
        brand: 'Chelsea', 
        currentInventory: 2
    },
    {
        categories: ['fire'], 
        name: 'DORTMUND SHIRT FIRE', 
        price: '1200', 
        image: '/images/fire-dortmund.jpg', 
        description: 'A passionate following in the stands. Ice-cold play on the pitch. Argentina is superstars wear a version of this juniors adidas jersey on away days. Its eye-catching design reflects the country is natural beauty. Soft, moisture-absorbing fabric keeps you comfortable. A woven crest shows your devotion.',
        brand: 'Dortmund',
        currentInventory: 14
    },

    {
        categories: ['fire', 'super'], 
        name: 'LIVERPOOL SHIRT FIRE SUPER', 
        price: '300', 
        image: '/images/fire-liverpool.jpg', 
        description: 'A passionate following in the stands. Ice-cold play on the pitch. Argentina is superstars wear a version of this juniors adidas jersey on away days. Its eye-catching design reflects the country is natural beauty. Soft, moisture-absorbing fabric keeps you comfortable. A woven crest shows your devotion.',
        brand: 'Liverpool', 
        currentInventory: 12
    },
    {
        categories: ['fire'], 
        name: 'MANCHESTER CITY SHIRT FIRE', 
        price: '825', 
        image: '/images/fire-man-city.jpg', 
        description: 'A passionate following in the stands. Ice-cold play on the pitch. Argentina is superstars wear a version of this juniors adidas jersey on away days. Its eye-catching design reflects the country is natural beauty. Soft, moisture-absorbing fabric keeps you comfortable. A woven crest shows your devotion.',
        brand: 'Manchester City', 
        currentInventory: 13
    },
    {
        categories: ['fire'], 
        name: 'MANCHESTER UNITED SHIRT FIRE', 
        price: '720', 
        image: '/images/fire-man-united.jpg', 
        description: 'A passionate following in the stands. Ice-cold play on the pitch. Argentina is superstars wear a version of this juniors adidas jersey on away days. Its eye-catching design reflects the country is natural beauty. Soft, moisture-absorbing fabric keeps you comfortable. A woven crest shows your devotion.',
        brand: 'Manchester United', 
        currentInventory: 33
    },
    {
        categories: ['fire'], 
        name: 'REAL MADRID SHIRT FIRE', 
        price: '2000', 
        image: '/images/fire-real-madrid.jpg', 
        description: 'A passionate following in the stands. Ice-cold play on the pitch. Argentina is superstars wear a version of this juniors adidas jersey on away days. Its eye-catching design reflects the country is natural beauty. Soft, moisture-absorbing fabric keeps you comfortable. A woven crest shows your devotion.',
        brand: 'Real Madrid', 
        currentInventory: 23
    },
    { 
        categories: ['country'], 
        name: 'FRANCE SHIRT FLAG', 
        price: '1100', 
        image: '/images/france.jpg', 
        description: 'A passionate following in the stands. Ice-cold play on the pitch. Argentina is superstars wear a version of this juniors adidas jersey on away days. Its eye-catching design reflects the country is natural beauty. Soft, moisture-absorbing fabric keeps you comfortable. A woven crest shows your devotion.',
        brand: 'France', 
        currentInventory: 13 
    },
    { 
        categories: ['country'], 
        name: 'GERMANY SHIRT', 
        price: '600', 
        image: '/images/germany.jpg', 
        description: 'A passionate following in the stands. Ice-cold play on the pitch. Argentina is superstars wear a version of this juniors adidas jersey on away days. Its eye-catching design reflects the country is natural beauty. Soft, moisture-absorbing fabric keeps you comfortable. A woven crest shows your devotion.',
        brand: 'Germany', 
        currentInventory: 15 
    },
    { 
        categories: ['country'], 
        name: 'ITALY SHIRT ', 
        price: '775', 
        image: '/images/italy.jpg', 
        description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.', 
        brand: 'Italy', 
        currentInventory: 44 
    },
    { 
        categories: ['traditional'], 
        name: 'JUVENTUS SHIRT TRADITIONAL', 
        price: '1200', 
        image: '/images/juventus.jpg', 
        description: 'A passionate following in the stands. Ice-cold play on the pitch. Argentina is superstars wear a version of this juniors adidas jersey on away days. Its eye-catching design reflects the country is natural beauty. Soft, moisture-absorbing fabric keeps you comfortable. A woven crest shows your devotion.',
        brand: 'Juventus', 
        currentInventory: 17 
    },
    { 
        categories: ['traditional'], 
        name: 'LIVERPOOL SHIRT TRADITIONAL', 
        price: '1600', 
        image: '/images/liverpool1.jpg', 
        description: 'A passionate following in the stands. Ice-cold play on the pitch. Argentina is superstars wear a version of this juniors adidas jersey on away days. Its eye-catching design reflects the country is natural beauty. Soft, moisture-absorbing fabric keeps you comfortable. A woven crest shows your devotion.',
        brand: 'Liverpool', 
        currentInventory: 28 
    },
    { 
        categories: ['traditional', 'universe'], 
        name: 'LIVERPOOL SHIRT UNIVERSE TRADITIONAL', 
        price: '550', 
        image: '/images/liverpool2.jpg', 
        description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.', 
        brand: 'Liverpool', 
        currentInventory: 31 
    },  // { 
]

inventory.map(i => {
    i.id = uuid()
    return i
})

export default inventory