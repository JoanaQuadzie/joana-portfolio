
import foodcart from "./assets/foodcart.png";
import Diash from "./assets/diash.png";
import P2 from "./assets/p2.png";
import P3 from "./assets/p3.png";
import P4 from "./assets/p4.png";
import P5 from "./assets/p5.png";
import Pr1 from "./assets/pr1.png";
import Pr2 from "./assets/pr2.png";
import Pr3 from "./assets/pr3.png";
import Prp1 from "./assets/prp1.png";
import Prp2 from "./assets/prp2.png";
import Prp3 from "./assets/prp3.png";
import Techimage from "./assets/techimage.jpg";



export const projectList = [
    {
        title: "DineRich JuiceBar",
        description:
            "Developing the DineRich JuiceBar website was my first coding project. This was me as a beginner putting in my all to demonstrate my newly acquired skills. Find out more here",
        challenges: <>
            <p>
                One of the most challenging moments as a learner was when I was tasked with developing a website after just one month of studies. Lacking confidence in both my design skills and technical abilities, I faced numerous doubts about how the final work would turn out. Despite these concerns, I was eager to test my knowledge and apply the lessons I had learned. Choosing an idea for the website was another significant hurdle. Initially, I struggled to come up with viable options. Ultimately, I decided to focus on my sister's local bar hub, which produces a variety of local drinks, fruit juices, and cocktails. This decision allowed me to explore different aspects of web development and showcase my skills in a practical context.
            </p>
            <p>
                As a novice, I initially struggled with attention to detail, leading to noticeable inconsistencies in paddings, margins, heights and widths of various elements across the page.
            </p>
            <p>
                However, over time, I made significant efforts to improve and ultimately succeeded in overcoming these challenges.
            </p>
        </>,
        image: P2,
        id: 1,
        screenshots: [P3, P4, P5]
    },
    {
        title: "Opal Foodcart",
        description:
            "Together with 3 other teammates, we developed the Opal Foodcart, an e-commerce marketplace which connects consumers to fresh and wholesome goods while supporting local growers digitally.",
        thoughtprocess: <>
            <p>
                As part of our training, we were encouraged to develop teamwork skills. To practice this, we were organized into groups to learn how to collaborate effectively. We decided to divide the tasks, with two members focusing on the frontend and the other two on the backend. We began by outlining and structuring the content to determine the sequence of elements. We listed the sections on a sheet and used a ballot system to ensure fair task assignment.
            </p>
            <p>
                In the end, each team member focused on their respective tasks and worked diligently to execute them. The team lead created a repository, which we cloned and used to create our individual branches. We worked separately on our assignments, and after weeks of effort, merged our code and presented a successful project.
            </p>
        </>,
        image: foodcart,
        id: 2,
        screenshots: [Pr1, Pr2, Pr3]
    },
    {
        title: "Diashi-Nam",
        description:
            "This project was particularly significant to me, as it was my final project after three intensive months of learning. I dedicated myself wholeheartedly to it, culminating in a pitch and a short demo presentation.",
        image: Diash,
        id: 3,
        screenshots: [Prp1, Prp2, Prp3]
    },
];


export const ARTICLES = [
    {
        slug: 'my-journey-into-tech',
        title: 'My Journey Into Tech',
        image: Techimage,
        description: `In this article, I write about my inlikely journey into tech. I hope you enjoy it.`

    },

]