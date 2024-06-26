
import foodcart from "./assets/foodcart.png";
import Diash from "./assets/diash.png";
import Beauristraw from "./assets/Beauristraw.jpeg";
import Akuvi from "./assets/akuvi.jpg";
import Tonybytes from "./assets/Tonybytes.jpg";
import Melon from "./assets/melon.jpg";



export const projectList = [
    {
        title: "DineRich JuiceBar",
        description:
            "A locally made drink hub with a unique taste which happens to be the preferrence of everyone upon having a sip",
        image: Melon,
        id: 1,
        screenshots: [Beauristraw, Akuvi, Tonybytes]
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