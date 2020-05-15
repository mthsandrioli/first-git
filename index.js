const classA = [
  {
    name: "Matheus",
    grade: 9
  },
  {
    name: "Diego",
    grade: 9.5
  },
  {
    name: "Giovana",
    grade: 10
  },
  {
    name: "Rafael",
    grade: 4.5
  }
]

const classB = [
  {
    name: "Ana",
    grade: 2
  },
  {
    name: "Guilherme",
    grade: 3
  },
  {
    name: "Lucas",
    grade: 6
  },
  {
    name: "Laura",
    grade: 7
  }
]

function calculateAverage(studentsclass) {
  let sum = 0

  for (let i = 0; i < studentsclass.length; i++) {
    sum = sum + studentsclass[i].grade
  }

  const average = sum / studentsclass.length

  return average
}

function sendMessage(average, studentsclass) {
  if (average >= 6) {
    console.log(`${studentsclass} average was ${average}. Congrats!`)
  } else {
    console.log(`${studentsclass} average was less than 6. Study more!`)
  }
}

function markAsFlunked(student) {
  student.flunked = false

  if (student.grade < 6) {
    student.flunked = true
  }
}

function sendFlunkedMessage(student) {
  if (student.flunked) {
    console.log(`The student ${student.name} is flunked!`)
  }
}

function flunkedStudents(studentsclass) {
  for (let student of studentsclass) {
    markAsFlunked(student)
    sendFlunkedMessage(student)
  }
}

const averageA = calculateAverage(classA)
const averageB = calculateAverage(classB)

sendMessage(averageA, 'Class A')
sendMessage(averageB, 'Class B')

flunkedStudents(classA)
flunkedStudents(classB)