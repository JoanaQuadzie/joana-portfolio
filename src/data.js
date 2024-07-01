
import foodcart from "./assets/foodcart.png";
import Diash from "./assets/diash.png";
import P2 from "./assets/p2.png";
import P3 from "./assets/p3.png";
import P4 from "./assets/p4.png";
import P5 from "./assets/p5.png";



export const projectList = [
    {
        title: "DineRich JuiceBar",
        description:
            "DineRich JuiceBar is a local favorite known for its wide variety of natural fruit juices made from the freshest ingredients. it's offerings include custom juice blends, seasonal specials, wellness shots, and smoothies, with popular options like Tropical Delight and Berry Bliss. The dedicated team ensures the best experience for their customers. Developing the DineRich JuiceBar website was my first coding project, which helped me grow my skills and passion for web development.",
        image: P2,
        id: 1,
        screenshots: [P3, P4, P5]
    },
    {
        title: "Opal Foodcart",
        description:
            "A Food Market agricultural community which takes pride in connecting consumers with fresh, wholesome goods while supporting local growers digitally",
        image: foodcart,
        id: 2,
        screenshots: []
    },
    {
        title: "Diashi-Nam",
        description:
            "An online market place where you get to shop from the comfort of your homes and have items delivered to you in a few minutes",
        image: Diash,
        id: 3,
        screenshots: []
    },
];

export function getProject(projectId) {
    const project = projectList.find((project) => project.id == projectId)
    return project
}