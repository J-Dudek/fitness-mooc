const cards = {
    "title": "First Week",
    "content": [
        {
            "id": "0",
            "title": "Essential of Running",
            "program": "Blabla de run"
        },
        {
            "id": "1",
            "title": "Explications",
            "program": "Blabla de run detaillé"
        },
        {
            "id": "2",
            "title": "Video of the week",
            "program": "Here is The video",
            "url": "https://www.youtube.com/watch?v=mWaoIDtEe1c&ab_channel=Doctissimo"
        },
        {
            "id": "3",
            "title": "Quizz of the week",
            "program": "Good luck",
            "quizz": [{
                id: '1',
                questionText: 'What is the capital of France?',
                answerOptions: [
                    { answerText: 'New York', isCorrect: false, id: '0' },
                    { answerText: 'London', isCorrect: false, id: '1' },
                    { answerText: 'Paris', isCorrect: true, id: '2' },
                    { answerText: 'Dublin', isCorrect: false, id: '3' },
                ],
            },
            {
                id: '2',
                questionText: 'Who is CEO of Tesla?',
                answerOptions: [
                    { answerText: 'Jeff Bezos', isCorrect: false, id: '0' },
                    { answerText: 'Elon Musk', isCorrect: true, id: '1' },
                    { answerText: 'Bill Gates', isCorrect: false, id: '2' },
                    { answerText: 'Tony Stark', isCorrect: false, id: '3' },
                ],
            },
            {
                id: '3',
                questionText: 'The iPhone was created by which company?',
                answerOptions: [
                    { answerText: 'Apple', isCorrect: true, id: '0' },
                    { answerText: 'Intel', isCorrect: false, id: '1' },
                    { answerText: 'Amazon', isCorrect: false, id: '2' },
                    { answerText: 'Microsoft', isCorrect: false, id: '3' },
                ],
            },
            {
                id: '4',
                questionText: 'How many Harry Potter books are there?',
                answerOptions: [
                    { answerText: '1', isCorrect: false, id: '0' },
                    { answerText: '4', isCorrect: false, id: '1' },
                    { answerText: '6', isCorrect: false, id: '2' },
                    { answerText: '7', isCorrect: true, id: '3' },
                ],
            },

            ]

        }
    ]
};


export default cards;
