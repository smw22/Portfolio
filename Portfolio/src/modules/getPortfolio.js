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
        description: 'I dette projekt har vi arbejdet på at lave en komplet hjemmeside til et ejendomsselskab, med funktioner til at leje en ejendom eller bestille en bolig management',
        button: 'Læse mere',
        image: image1,
        category: "web",
        },
        {
        id: 2,
        title: 'Trapholt',
        description: 'Trapholt er et projekt for et dansk kunst- og designmuseum. Det er en komplet redesignet hjemmeside med alle de nødvendige oplysninger og funktioner.',
        image: image2,
        category: "web",
        },
        {
        id: 3,
        title: 'Assasin App',
        description: 'I dette projekt arbejdede vi med at designe en app til at finde studiejobs til studerende i vores område. ',
        button: 'Læse mere',
        image: image3,
        category: "design",
        },
        {
        id: 4,
        title: 'Watch Shop',
        description: 'En lille praktisk hjemmeside til salg af ure online. Et godt eksempel på et nyt urmærke, der ønsker at blive digitalt.',
        button: 'Læse mere',
        image: image4,
        category: "web",
        },
        {
        id: 5,
        title: 'Kantine App',
        description: 'Dette er designet af en app til kantinen på vores skole. Projektet kan også bruges i en hvilken som helst kantine.',
        button: 'Læse mere',
        image: image5,
        category: "design",
        }
    ])
    
    return { portfolioItems }
}

export default getPortfolioItems