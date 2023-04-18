const Classes = require("../models/classes");
const Section = require("../models/section");
const Subject = require("../models/subject");
const Teacher = require("../models/teachers");
const Slots = require("../models/slots");

exports.generateTimeTable = async (req, res) => {
  const data = {
    time_slot: ["9", "10", "11", "12", "1", "2", "3", "4"],
    subject_array: [
      "Geography",
      "Biology",
      "History",
      "Maths",
      "Physics",
      "Chemistry",
      "English",
      "Sanskrit",
    ],
    teacher_array: [
      {
        subject: "Geography",
        teacher: "King",
        email: "princekumar2000.pks@gmail.com",
        classes: "7",
      },
      {
        subject: "Biology",
        teacher: "Claud",
        email: "admin@admin.com",
        classes: "7",
      },
      {
        subject: "Maths",
        teacher: "Queen",
        email: "test User",
        classes: "7",
      },
      {
        subject: "Sanskrit",
        teacher: "Pandey",
        email: "princekumar2000.pks@gmail.com",
        classes: "7",
      },
      {
        subject: "History",
        teacher: "Carolyn",
        email: "admin@admin.com",
        classes: "7",
      },
      {
        subject: "Computer",
        teacher: "Kira",
        email: "dd@dd.cm",
        classes: "7",
      },
      {
        subject: "Civics",
        teacher: "Salvador",
        email: "dd@dd.cm",
        classes: "7",
      },
      {
        subject: "Physics",
        teacher: "Emilia",
        email: "princekumar2000.pks@gmail.com",
        classes: "7",
      },
      {
        subject: "Chemistry",
        teacher: "Marietta",
        email: "admin@admin.com",
        classes: "7",
      },
      {
        subject: "English",
        teacher: "Mckayla",
        email: "test User",
        classes: "7",
      },
      {
        subject: "English",
        teacher: "Devansh",
        email: "test User",
        classes: "7",
      },
      //   new class
      {
        subject: "Geography",
        teacher: "King 2",
        email: "princekumar2000.pks@gmail.com",
        classes: "8",
      },
      {
        subject: "Biology",
        teacher: "Claud 2",
        email: "admin@admin.com",
        classes: "8",
      },
      {
        subject: "Maths",
        teacher: "Queen 2",
        email: "test User",
        classes: "8",
      },
      {
        subject: "Sanskrit",
        teacher: "Pandey 2",
        email: "princekumar2000.pks@gmail.com",
        classes: "8",
      },
      {
        subject: "History",
        teacher: "Carolyn 2",
        email: "admin@admin.com",
        classes: "8",
      },
      {
        subject: "Computer",
        teacher: "Kira 2",
        email: "dd@dd.cm",
        classes: "7",
      },
      {
        subject: "Civics",
        teacher: "Salvador 2",
        email: "dd@dd.cm",
        classes: "8",
      },
      {
        subject: "Physics",
        teacher: "Emilia 2",
        email: "princekumar2000.pks@gmail.com",
        classes: "8",
      },
      {
        subject: "Chemistry",
        teacher: "Marietta 2",
        email: "admin@admin.com",
        classes: "8",
      },
      {
        subject: "English",
        teacher: "Mckayla 2",
        email: "test User",
        classes: "8",
      },
      {
        subject: "English",
        teacher: "Devansh 2",
        email: "test User",
        classes: "8",
      },
    ],


  };

  // const section_array= Section.find({}).select("section_name");
  // const classes= Classes.find({}).select("class_name");
  // const subject_array= Subject.find({}).select("subject_name");
  // const teacher_array= Teacher.find({}).select("teacher_name");
  
  const section_array = ["A", "B", "C", "D", "E"];

  const classes = ["7", "8", "9", "10", "11", "12"];

  function generateSchedule(data, section_array, classes) {
    const { time_slot, subject_array, teacher_array } = data;

    const schedules = []; // array to hold schedules for each section

    // object to keep track of used teachers by time slot
    const usedTeachersByTimeSlot = {};

    classes.forEach((className) => {
      // Create a schedule array with empty arrays for each day of the week
      const schedule = [
        { day: "Monday", schedule: [] },
        { day: "Tuesday", schedule: [] },
        { day: "Wednesday", schedule: [] },
        { day: "Thursday", schedule: [] },
        { day: "Friday", schedule: [] },
        { day: "Saturday", schedule: [] },
      ];

      // object to keep track of used teachers by class
      const usedTeachersByClass = {};

      // Loop through each time slot and assign a random teacher and subject for each day of the week
      for (let i = 0; i < schedule.length; i++) {
        let usedSubjects = []; // keep track of which subjects have been assigned already

        // loop through each section and assign a random teacher and subject for this time slot
        section_array.forEach((section) => {
          let subject, teacher;
          // find a random subject that hasn't been used yet for this time slot
          do {
            subject =
              subject_array[Math.floor(Math.random() * subject_array.length)];
          } while (usedSubjects.includes(subject));

          // find a random teacher for that subject who hasn't been used yet for this time slot and class
          const availableTeachers = teacher_array.filter((t) => {
            const isAvailable =
              !usedTeachersByTimeSlot[i]?.includes(t) &&
              !usedTeachersByClass[t.teacher]?.includes(i) &&
              t.subject === subject;
            return isAvailable;
          });
          teacher =
            availableTeachers[
              Math.floor(Math.random() * availableTeachers.length)
            ];

          // add the subject, teacher, and class to the schedule for this day and time slot
          schedule[i].schedule.push({
            subject: subject,
            teacher: teacher?.teacher,
            class: className,
            section: section,
          });

          // mark the subject and teacher as used for this time slot and class
          usedSubjects.push(subject);
          if (!usedTeachersByTimeSlot[i]) {
            usedTeachersByTimeSlot[i] = [];
          }
          usedTeachersByTimeSlot[i].push(teacher);
          if (!usedTeachersByClass[teacher?.teacher]) {
            usedTeachersByClass[teacher?.teacher] = [];
          }
          usedTeachersByClass[teacher?.teacher].push(i);
        });
      }

      // add the class and its schedule to the schedules array
      schedules.push({ class: className, schedule: schedule });
    });

    return schedules;
  }

  const schedules = generateSchedule(data, section_array, classes);

  return res.status(200).json({
    schedules,
  });
};
