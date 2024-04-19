import { ref } from 'vue'

import image1 from '@/assets/maysol.png'
import project_image1 from '@/assets/maysol-img.png'

import image2 from '@/assets/trapholt.png'
import project_image2 from '@/assets/trapholt-img.png'

import image3 from '@/assets/kantine-app-phone.png'
import project_image3 from '@/assets/kantine-app-image.png'

import image4 from '@/assets/watch-shop-img.png'
import project_image4 from '@/assets/watch-shop-img.png'

import image5 from '@/assets/assasin-app-phone.png'
import project_image5 from '@/assets/assasin-app-image.png'


const getPortfolioItems = () => {
    const portfolioItems = ref([
        {
        id: 1,
        title: 'Maysol',
        description: 'I dette projekt har jeg arbejdet på at lave en komplet hjemmeside til et ejendomsselskab, med funktioner til at leje en ejendom eller bestille en bolig management.',
        button: 'Læse mere',
        image: image1,
        project_image: project_image1,
        date: "23/03/2024",
        category: "UI Design / Coding",
        overview: "Udvikling af hjemmeside til Maysol, en ejemdomsmægler i Fuengirola, Spanien.",
        },
        {
        id: 2,
        title: 'Trapholt',
        description: 'Trapholt er et projekt for et dansk kunst- og designmuseum. Det er en komplet redesignet hjemmeside med alle de nødvendige oplysninger og funktioner.',
        image: image2,
        project_image: project_image2,
        date: "16/12/2023",
        category: "UI Design / Coding",
        overview: "Redesignet hjemmeside til Trapholt, en kunst museum i Kolding, Danmark.",
        },
        {
        id: 3,
        title: 'Kantine App',
        description: 'Dette er designet af en app til kantinen på vores skole. Projektet kan også bruges i en hvilken som helst kantine.',
        button: 'Læse mere',
        image: image3,
        project_image: project_image3,
        date: "28/04/2024",
        category: "Design",
        overview: "Design af en kantine app for vores akademi, Easv i Esbjerg, Danmark.",
        },
        {
        id: 4,
        title: 'Watch Shop',
        description: 'En lille praktisk hjemmeside til salg af ure online. Et godt eksempel på et nyt urmærke, der ønsker at blive digitalt.',
        button: 'Læse mere',
        image: image4,
        project_image: project_image4,
        date: "23/11/2023",
        category: "UI Design / Coding",
        overview: "Test hjemmeside til en urmærke.",
        },
        {
        id: 5,
        title: 'Assasin App',
        description: 'I dette projekt arbejdede vi med at designe en app til at finde studiejobs til studerende i vores område. ',
        button: 'Læse mere',
        image: image5,
        project_image: project_image5,
        date: "18/11/2023",
        category: "Design",
        overview: "Design af en app forstuderende der leder efter studiejobs",
        },
    ])
    
    return { portfolioItems }
}

export default getPortfolioItems