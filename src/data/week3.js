import muscleGroups from './img/week3/muscleGroups.jpg'
import abdominals from './img/week3/absWorkout.jpg'
const cards = {
    "title": "Third Week - GPP",
    "autor": "Julien Dudek",
    "content": [
        {
            "id": "0",
            "title": "What is GPP",
            "program": [{
                id: 0,
                subtitle: `What will we learn this week?`,
                content: `Work in progress for a video about the program of the week`
            }, {
                id: 1,
                subtitle: "GPP : GENERAL PHYSICAL PREPARATION",
                content: `How do you improve your performance in a way that supplements your sports training? By doing general physical preparation exercises, also known as GPP!`
            },
            ]
        }, {
            "id": "1",
            "title": "Why and how many sessions?",
            "program": [{
                id: 1,
                subtitle: "Why pratice GPP ?",
                content: `Technically, the practice of a particular sport solicits a specific muscle group.In order to avoid an imbalance in the body you must prepare yourself so as not to injure yourself.`,
            },
            {
                id: 2,
                subtitle: `Training frequency per week`,
                content: `It is obvious that an athlete who practices a sport very regularly (running, cycle touring, gymnastics, etc.) will not be able to do PPG in addition to his sessions each day. This is for several reasons such as the time factor and physical fatigue. There are still exceptions for so-called high level athletes, but I think that if we are here it is because we are not. On the other hand, someone who wants to maintain his physical condition without having intense activities at the same time will be able to perform these exercises on a daily basis without any problem.`
            }
            ]
        }, {
            "id": "2",
            "title": "Structure your training",
            "program": [{
                id: 1,
                subtitle: "Physical specification",
                content: `As you can see from the diagram below, our body is divided into several muscle groups. Out of respect for him and to avoid overwork, we must alternate the solicitations of those latter.`,
                img: muscleGroups
            },
            {
                id: 2,
                content: `We therefore strongly advise you to vary the pleasures and to work one day the upper body and the other the lower one. You can do a full and particularly intense session at the end of the week, or on the day you want, but the next day it is mandatory to rest.`
            }, {
                id: 3,
                subtitle: 'Effort / Recovery',
                content: 'The duration of each exercise is 30 seconds at a sustained pace. You can then go to 40 seconds and then increment up to 1 minute. But I advise you to keep a pace for 3 weeks before increasing.About the recovery, you can start with 30 seconds of recovery and go to 20 then 10. During the first exercises these 30 seconds can seem long but after 4 or 5 repetitions they seem really very short to you.',
            }
            ]
        }, {
            "id": "3",
            "title": "UPPER BODY",
            "program": [{
                id: 1,
                subtitle: "Abdominals",
                content: `Speech about abdox ;)`,
                img: abdominals
            },
            {
                id: 2,
                content: `We therefore strongly advise you to vary the pleasures and to work one day the upper body and the other the lower one. You can do a full and particularly intense session at the end of the week, or on the day you want, but the next day it is mandatory to rest.`
            }
            ]
        },

    ]
};

export default cards;