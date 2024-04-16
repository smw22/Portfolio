import { ref } from 'vue'

import image1 from '@/assets/test-image.jpg'
import image2 from '@/assets/test-image.jpg'
import image3 from '@/assets/test-image.jpg'
import image4 from '@/assets/test-image.jpg'
import image5 from '@/assets/test-image.jpg'


const getPortfolioItems = () => {
    const portfolioItems = ref([
        {
        id: 1,
        title: 'Maysol',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolore accusamus est repellat asperiores at, id exercitationem quasi! Ipsa, consectetur? Exercitationem architecto doloribus magnam culpa ea quidem voluptatibus dolorem aut?',
        button: 'Læse mere',
        image: image1,
        category: web,
        },
        {
        id: 2,
        title: 'Trapholt',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolore accusamus est repellat asperiores at, id exercitationem quasi! Ipsa, consectetur? Exercitationem architecto doloribus magnam culpa ea quidem voluptatibus dolorem aut?',
        image: image2,
        category: web,
        },
        {
        id: 3,
        title: 'Assasin App',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolore accusamus est repellat asperiores at, id exercitationem quasi! Ipsa, consectetur? Exercitationem architecto doloribus magnam culpa ea quidem voluptatibus dolorem aut?',
        button: 'Læse mere',
        image: image3,
        category: design,
        },
        {
        id: 4,
        title: 'Watch Shop',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolore accusamus est repellat asperiores at, id exercitationem quasi! Ipsa, consectetur? Exercitationem architecto doloribus magnam culpa ea quidem voluptatibus dolorem aut?',
        button: 'Læse mere',
        image: image4,
        category: web,
        },
        {
        id: 5,
        title: 'Kantine App',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolore accusamus est repellat asperiores at, id exercitationem quasi! Ipsa, consectetur? Exercitationem architecto doloribus magnam culpa ea quidem voluptatibus dolorem aut?',
        button: 'Læse mere',
        image: image5,
        category: design,
        }
    ])
    
    return { portfolioItems }
}

export default getPortfolioItems