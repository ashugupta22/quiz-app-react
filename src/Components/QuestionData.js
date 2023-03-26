const QuestionData = {
    topic: 'The Daily MS Excel Quiz',
    details: 'The Microsoft Excel Proficiency Test is a comprehensive evaluation of an individuals knowledge and skills in using Microsoft Excel. The test covers a wide range of topics, including data manipulation, formatting, functions, and more',
    level: 'Beginner',
    questions: [
      {
        question:
          'What is the intersection of a column and a row on a worksheet called ?',
        choices: ['Column', 'Value', 'Address', 'Cell'],
        type: 'MCQs',
        correctAnswer: 'Cell',
      },
      {
        question:
          'What type of chart is useful for comparing values over categories ?',
        choices: ['Pie Chart', 'Column Chart', 'Line Chart', 'Dot Graph'],
        type: 'MCQs',
        correctAnswer: 'Column Chart',
      },
      {
        question:
          'Which functionin Excel tells how many numeric entries are there ?',
        choices: [
          'NUM',
          'COUNT',
          'SUM',
          'CHKNUM',
        ],
        type: 'MCQs',
        correctAnswer: 'COUNT',
      },
      {
        question: 'A features that displays only the data in column (s) according to specified criteria',
        choices: ['Formula', 'Sorting', 'Filtering', 'Pivot'],
        type: 'MCQs',
        correctAnswer: 'Filtering',
      },
      {
        question: 'Statistical calculations and preparation of tables and graphs can be done using',
        choices: ['Adobe Photoshop', 'Excel', 'Notepad', 'Power Point'],
        type: 'MCQs',
        correctAnswer: 'Excel',
      },
    ],
  }
  export default QuestionData;