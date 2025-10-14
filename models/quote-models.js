 /**
  * @name quotes
  * @type JSON Object
    * @description quotes from famous people
    * @author miromina
    */
export const quotes = [
    {
        id: 0, 
        tags: ["Success","Motivation","Positivity"],
        quote:
        "Success is not final, failure is not fatal: it is the courage to continue that counts",
        by: "Winston Churchill",
        status: 0,
        upvote: 25,
        downvote: 10,
        commentCount: 15,  //parse object - JSON.parse() - stringify object into parse object
    },
    {
        id: 1,
        tags: ["Motivation","Mindset", "BelieveInYourself" ,"Inspiration"],
        quote: "Do what you can, with what you have, where you are.",
        by: "Theodore Roosevelt",
        status: -1,
        upvote: 5,
        downvote: 1,
        commentCount: 25,
    },
    {
        id: 2,
        tags: ["Productivity","Focus", "TimeManagement", "LifeQuotes"],
        quote: "Don't count the days, make the days count.",
        by: "Muhammad Ali",
        status: 0,
        upvote: 29,
        downvote: 2,
        commentCount: 145,
    },
    {
        id: 3,
        tags: ["Confidence", "DreamBig", "SelfBelief", "Motivation"],
        quote: "Doubt kills more dreams than failure ever will.",
        by: "Suzy Kassem",
        status: -1,
        upvote: 48,
        downvote: 3,
        commentCount: 20,
    },
];