import { ref } from 'vue'

import image1 from '@/assets/maysol.png'
import project_image1 from '@/assets/maysol-img.png'

import image2 from '@/assets/trapholt.png'
import project_image2 from '@/assets/trapholt-img.png'

import image3 from '@/assets/kantine-app-phone.png'
import project_image3 from '@/assets/kantine-app-image.png'

import image4 from '@/assets/fantasy-festival-img.png'
import project_image4 from '@/assets/fantasy-festival.jpg'

import image5 from '@/assets/assasin-app-phone.png'
import project_image5 from '@/assets/assasin-app-image.png'


const getPortfolioItems = () => {
    const portfolioItems = ref([
        {
        id: 1,
        title: 'Maysol',
        description: 'I dette projekt har jeg arbejdet med en komplet hjemmeside til et ejendomsselskab. Hjemmesiden har virkede som inspiration til at udvikle en hjemmeside med funktioner til at leje en ejendom eller bestille vedligeholdelse af en ejendom. Designet er simpelt og visualt for at skabe en følelse af professionalisme og give tillid og sikkerhed til kunderne.',
        button: 'Læse mere',
        image: image1,
        project_image: project_image1,
        date: "23/03/2024",
        category: "UI Design / Kodning",
        overview: "Udvikling af hjemmeside for Maysol, en ejemdomsmægler i Fuengirola, Spanien.",
        github_link: "https://github.com/smw22/maysol-website",
        demo_link: "https://smwur.dk/"
        },
        {
        id: 2,
        title: 'Fantasy Festival',
        description: 'En hjemmeside for Fantasy Festivals "quest event". Det er en hjemmeside der forklare questen og hjælper med at sælger billeter. For at skabe spænding og interesse blandt questens deltagerne har man brugt visualle baggrunde. ',
        button: 'Læse mere',
        image: image4,
        project_image: project_image4,
        date: "30/05/2024",
        category: "UI Design / Kodning",
        overview: "Udviklet hjemmeside for Fantasy Festivalen, en årlig festival i Esbjerg",
        github_link: "https://github.com/smw22/fantasy_festival",
        demo_link: "https://sergioswordpresstest.dk",
        },
        {
        id: 3,
        title: 'Kantine App',
        description: 'Dette er designet af en app til vores skolekantine. Projektet blev udviklet med den idé, at folk kunne bestille deres mad på forhånd og ikke spilde tid på at stå i kø, når de f.eks. har et stramt program. Projektet kan også bruges i en hvilken som helst kantine.',
        button: 'Læse mere',
        image: image3,
        project_image: project_image3,
        date: "28/04/2024",
        category: "Design",
        overview: "Design af en kantine app for vores akademi, Easv i Esbjerg, Danmark.",
        demo_link: "https://www.figma.com/design/eU3TgI3e5vNIwxGKDs0Gpp/Kantine-App?m=auto&t=qCN339xrHSpYBbcu-1",
        },
        {
        id: 4,
        title: 'Trapholt',
        description: 'Trapholt er et projekt for et dansk kunst- og designmuseum. Det er en komplet redesignet hjemmeside med alle de nødvendige oplysninger og funktioner.',
        image: image2,
        project_image: project_image2,
        date: "16/12/2023",
        category: "UI Design / Kodning",
        overview: "Redesignet og udviklet hjemmeside for Trapholt, en kunst museum i Kolding, Danmark.",
        github_link: "https://github.com/smw22/Trapholt",
        },
        {
        id: 5,
        title: 'Assasin App',
        description: 'I dette projekt arbejdede vi med at designe en app som hjælper studerende i Esbjerg med at finde et studiejob. I appen kan du finde jobsektorklassifikation, funktioner som at gemme jobtilbud eller sende beskeder til virksomheder og et login system.',
        button: 'Læse mere',
        image: image5,
        project_image: project_image5,
        date: "18/11/2023",
        category: "Design",
        overview: "Design af en app for studerende der leder efter studiejobs",
        demo_link: "https://xd.adobe.com/view/9b623c57-0dde-47e9-8ce5-db1f3854b644-ce31/",
        },
    ])
    
    return { portfolioItems }
}

export default getPortfolioItems