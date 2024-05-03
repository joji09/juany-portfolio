import fittracker1 from "./image/fittracker1.png";
import fittracker2 from "./image/fittracker2.png";

const content = {
    about: {
        short: `Fullstack developer with interest in web dev. Eager to learn more.`
    },
    projects: [
        {
            bgfixed: true,
            span: 1,
            path: "fit-tracker",
            title: "Fit Tracker",
            short:
            "React app that uses free workout API to fetch workouts, saves them in the database and allows users to plan their workout split.",
            long: (
                <>
                Fit-Tracker is a web app that allows you to plan your workout splits using a database with thousands of workouts to choose from. The code is available <a href="https://github.com/joji09/Fit-Tracker-Frontend">on my Github</a>. 
                </>
            ),
            images: {
                cover: [fittracker1],
                horizontal: [fittracker2],
                vertical: [],
            },
        },
    ],
}

export default content;