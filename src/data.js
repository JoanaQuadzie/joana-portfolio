
import foodcart from "./assets/foodcart.png";
import Diash from "./assets/diash.png";
import P2 from "./assets/p2.png";
import P4 from "./assets/p4.png";
import P5 from "./assets/p5.png";
import Pr2 from "./assets/pr2.png";
import Pr3 from "./assets/pr3.png";
import Prp2 from "./assets/prp2.png";
import Prp3 from "./assets/prp3.png";
import Techimage from "./assets/techimage.jpg";
import Mark from "./assets/mark.png";
import Litmus from "./assets/litmus.png";
import Litmus1 from "./assets/litmus1.png";
import Litmus3 from "./assets/litmus3.png";
import Girlie from "./assets/girlie.jpg";
import Witen1 from "./assets/witen1.png";
import Witen from "./assets/witen.png";
import Witen2 from "./assets/witen2.png";



export const projectList = [
    {
        title: "DINERICH JUICEBAR",
        stack: "HTML, CSS",
        description:
            "Developing the DineRich JuiceBar website was my first coding project. This was me as a beginner putting in my all to demonstrate my newly acquired skills. Find out more here",
        challenges: <>
            <p>
                One of the most challenging moments as a learner was when I was tasked with developing a website after just one month of studies. Lacking confidence in both my design skills and technical abilities, I faced numerous doubts about how the final work would turn out. Despite these concerns, I was eager to test my knowledge and apply the lessons I had learned. Choosing an idea for the website was another significant hurdle. Initially, I struggled to come up with viable options. Ultimately, I decided to focus on my sister's local bar hub, which produces a variety of local drinks, fruit juices, and cocktails. This decision allowed me to explore different aspects of web development and showcase my skills in a practical context.
            </p>
            <p className="mt-5">
                As a novice, I initially struggled with attention to detail, leading to noticeable inconsistencies in paddings, margins, heights and widths of various elements across the page.
            </p>
            <p className="mt-5">
                However, over time, I made significant efforts to improve and ultimately succeeded in overcoming these challenges.
            </p>
        </>,
        image: P2,
        lessons: <>
            <p>
                After building this landing page, I realized there was still a lot for me to learn and improve on. However, that didn’t stop me from acknowledging and appreciating the effort I put into completing it.
            </p>
        </>,
        id: 1,
        screenshots: [P4, P5]
    },
    {
        title: "OPAL FOODCART",
        stack: "HTML, CSS, JavaScript",
        description:
            "Together with 3 other teammates, we developed the Opal Foodcart, an e-commerce marketplace which connects consumers to fresh and wholesome goods while supporting local growers digitally.",
        thoughtprocess: <>
            <p>
                As part of our training, we were encouraged to develop teamwork skills. To practice this, we were organized into groups to learn how to collaborate effectively. We decided to divide the tasks, with two members focusing on the frontend and the other two on the backend. We began by outlining and structuring the content to determine the sequence of elements. We listed the sections on a sheet and used a ballot system to ensure fair task assignment.
            </p>
            <p className="mt-5">
                In the end, each team member focused on their respective tasks and worked diligently to execute them. The team lead created a repository, which we cloned and used to create our individual branches. We worked separately on our assignments, and after weeks of effort, merged our code and presented a successful project.
            </p>
        </>,
        image: foodcart,
        lessons: <>
            <p>
                I learnt that teamwork and collaboration are essential and play a significant role in the tech industry. Additionally, I gained hands-on experience in creating a working branch within a group repository and effectively working within it to prevent conflicts.
            </p>
        </>,
        id: 2,
        screenshots: [Pr2, Pr3]
    },
    {
        title: "DIASHI - NAM",
        stack: "React, JavaScript, Tailwindcss",
        description:
            "This project was particularly significant to me, as it was my final project after three intensive months of learning. I dedicated myself wholeheartedly to it, culminating in a pitch and a short demo presentation.",
        thoughtprocess: <>
            <p>Recognizing how unappealing it can be to step out into the scorching sun just to buy a few items from the market, I came up with this idea: from the comfort of your home, you can sign up on the platform, choose a rider, create a shopping list with your budget, and simply wait for a confirmation call from the rider. It’s that simple and convenient.</p>

            <p className="mt-5">
                Finding inspiration for this project was exhausting and mentally draining. I had to comb through numerous websites and pages, comparing their structures and extracting elements to piece together for my own site. After extensive searching, I had gathered a variety of ideas and designs, many with sleek UI elements. However, narrowing them down proved to be a challenge, as I needed to be selective to avoid creating a cluttered and hard-to-navigate interface
            </p>
        </>,
        image: Diash,
        lessons: <>
            <p>
                I found that simplicity is the key to creating an excellent user interface and experience. After exploring countless design templates and gathering inspiration, I focused on keeping my website clean and easy to navigate. This project taught me valuable skills in research analysis and decision-making - showing me how to sift through many options to find the perfect design elements for my site.
            </p>
        </>,
        id: 3,
        screenshots: [Prp2, Prp3]
    },
    {
        title: "LITMUS - TEST PROJECT",
        stack: "React, JavaScript, Tailwindcss",
        description:
            "The Litmus Test project, led by Alpha Virtual Academy, aims to digitalize the GES curriculum by making all learning materials, guides, coursework, and textbooks accessible online. This initiative is designed to enhance learning efficiency for both students and teachers",
        thoughtprocess: <>
            <p>
                When structuring the layout of this project, our first step was to create a design or mockup using Figma before moving on to development. Once the design was finalized, tasks were assigned. I was responsible for implementing the features and FAQs section on the homepage, as well as developing the entire About section
            </p>
        </>,
        challenges: <>
            <p>
                As a first-timer working on an open-source project, I initially cloned the repository, eager to get started, only to realize that’s not how things work. I reached out for assistance and was advised to watch YouTube videos on contributing to open-source projects. Through those videos, I learned that forking is the crucial first step. Forking allows you to create your own copy of the project to work on, since direct access to the main repository is usually restricted. Once you fork the project, you can proceed to clone, initialize, create branches, and start working. Although the process wasn’t entirely smooth, it was incredibly insightful, and I gained valuable knowledge along the way."
            </p>
        </>,
        image: Litmus1,
        lessons: <>
            <p>
                First of all, I now have the confidence to contribute to an open-source project right away. Secondly, this experience helped me strengthen my teamwork and collaboration skills, especially as I had to exercise patience when coordinating with teammates who had difficulty joining meetings. Also, there’s an undeniable joy that comes with seeing the notification that your branch has been merged—it’s such a rewarding feeling! I truly enjoyed this experience and look forward to contributing to more open-source projects in the future!
            </p>
        </>,
        id: 4,
        screenshots: [Litmus, Litmus3]
    },
    {
        title: "WOMEN IN TECH ",
        stack: "Next.js, JavaScript, Shadcn, Tailwindcss",
        description:
            "The WITEN concept was born out of an unexpected challenge. What I initially believed to be an assessment test for a React frontend developer role turned out to be a comprehensive project—designing a fully functional website for a fictional NGO.",
        thoughtprocess: <>
            <p>
                With the deadline approaching and the need to complete the project, host it on Vercel, and submit a shareable link without delay, I reached out to my mentor for guidance. I expressed my interest in the position and sought advice on how to efficiently complete the task before the deadline. He recommended the Next.js documentation, which helped me successfully set up the project. Additionally, he structured an outline for me, breaking down the tasks in order of priority and allocating time for each. By the end of the third day, I had already compiled my ideas and concepts, allowing me to make significant progress. Thanks to my mentor's support, I successfully submitted the project on the fifth day, meeting all the requirements.
            </p>
        </>,
        challenges: <>
            <p>
                One of the challenges I faced while working on this project was the structure of the assessment and the time limit. The email sent for the test did not provide any description or heads-up about what to expect. It was only after clicking the link that I could see the details of the test. This lack of prior information caught me off guard, and I panicked as soon as I accessed the test.
            </p>
            <p className="mt-5">
                Secondly, the test was scheduled to be completed within five days of receiving the email. However, before starting the project, I needed time to brainstorm and develop my own concept or idea, which also required thoughtful consideration. This made the time constraint even more challenging.
            </p>
            <p className="mt-5">
                Lastly, one of the requirements was to set up the project in Next.js, which was completely new to me. This meant I had to take additional time to watch tutorials on YouTube and familiarize myself with the framework before I could even begin working on the project.
            </p>
        </>,
        image: Witen,
        lessons: <>
            <p>
                This project taught me that when taking an assessment test, it’s important to be prepared for the unexpected because anything can happen. While recruiters may have high expectations, giving your best effort is still valuable, as it exposes you to new learning experiences from different perspectives. However, putting in your best effort doesn’t always guarantee an offer, so it’s important to manage expectations and stay grounded. In the end, I didn’t get called—but hey, it was still a great learning experience! 😆
            </p>
        </>,
        id: 5,
        screenshots: [Witen1, Witen2]
    },
];


export const ARTICLES = [
    {
        slug: 'my-journey-into-tech',
        title: 'My Journey Into Tech',
        image: Techimage,
        description: `In this article, I write about my inlikely journey into tech. I hope you enjoy it.`

    },
    {
        slug: 'markdown',
        title: 'Markdown',
        image: Mark,
        description: `I discovered markdown after months of finishing school. How about you?`

    },
    {
        slug: 'test-assessment',
        title: 'Assessment Tests in Tech',
        image: Girlie,
        description: 'Thought I applied for a React Frontend role but ended up in a hackathon! lol'
    },

]