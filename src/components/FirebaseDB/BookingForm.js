import React, { useState, useEffect } from "react";
import "./bookingform.css";
import Calendar from "react-calendar";
import toast, { Toaster } from "react-hot-toast";

// Firebase part to call
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";
//

const BookingForm = () => {
  const [selectedCollege, setSelectedCollege] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [courses, setCourses] = useState([]);
  const [name, setName] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [datePicked, setDatePicked] = useState(new Date());
  const [selectedService, setSelectedService] = useState("");

  const [openSubmit, setOpenSubmit] = useState(false);
  const [userData, setUserData] = useState([]);

  const colleges = {
    "Undergraduate Programs": [
      "College of Architecture and Urban Planning",
      "Bachelor of Science in Architecture",
    ],
    "College of Education": [
      "Bachelor of Elementary Education",
      "Bachelor of Early Childhood Education",
      "Bachelor of Special Needs Education",
      "Bachelor of Secondary Education major in English",
      "Bachelor of Secondary Education major in Filipino",
      "Bachelor of Secondary Education major Mathematics",
      "Bachelor of Secondary Education major in Sciences",
      "Bachelor of Secondary Education major in Social Studies",
      "Bachelor of Physical Education",
    ],
    "College of Engineering and Technology": [
      "Bachelor of Science in Chemical Engineering",
      "Bachelor of Science in Civil Engineering",
      "Bachelor of Science in Computer Engineering",
      "Bachelor of Science in Computer Science",
      "Bachelor of Science in Electrical Engineering",
      "Bachelor of Science in Electronics Engineering",
      "Bachelor of Science in Information Technology",
      "Bachelor of Science in Manufacturing Engineering",
      "Bachelor of Science in Mechanical Engineering",
    ],
    "College of Humanities, Arts, and Social Sciences": [
      "Bachelor of Arts in Communication",
      "Bachelor of Arts in Communication Major in Public Relations",
      "Bachelor of Arts in Public Relations",
      "Bachelor of Science in Social Work",
    ],
    "College of Nursing": ["Bachelor of Science in Nursing"],
    "College of Physical Therapy": ["Bachelor of Science in Physical Therapy"],
    "College of Science": [
      "Bachelor of Science in Biology",
      "Bachelor of Science in Chemistry",
      "Bachelor of Science in Mathematics",
      "Bachelor of Science in Psychology",
    ],
    "PLM Business School": [
      "Bachelor of Science in Accountancy",
      "Bachelor of Science in Business Administration Major in Business Economics",
      "Bachelor of Science in Business Administration Major in Financial Management",
      "Bachelor of Science in Business Administration Major in Human Resource Management",
      "Bachelor of Science in Business Administration Major in Marketing Management",
      "Bachelor of Science in Business Administration Major in Operations Management",
      "Bachelor of Science in Entrepreneurship",
      "Bachelor of Science In Hospitality Management",
      "Bachelor of Science in Real Estate Management",
      "Bachelor of Science in Tourism Management",
    ],
  };

  const services = [
    "Pasta Fillings",
    "Denture Repairs",
    "Canker Sore Treatment",
    "Braces Adjustment",
    "Cleaning (Oral Phylaxis)",
    "Extraction",
  ];

  // Firebase part for interaction of database
  const usersCollectionRef = collection(db, "accounts");

  //

  useEffect(() => {
    const getUser = async () => {
      setUserData(
        (await getDocs(usersCollectionRef)).docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };
    getUser();
  }, []);

  // Firebase part to add user data and check if account already created
  const createUser = async () => {
    await setDoc(doc(db, "accounts", studentNumber), {
      name: name,
      studentNumber: studentNumber,
      email: email,
      mobileNumber: mobileNumber,
      selectedCollege: selectedCollege,
      selectedCourse: selectedCourse,
      date: datePicked.toLocaleDateString(),
      service: selectedService,
    });
  };

  const checkAccount = async () => {
    const docRef = doc(db, "accounts", studentNumber);
    const docSnap = await getDoc(docRef);

    var checkEmail = false;

    // start
    if (docSnap.exists()) {
      userData.map((user, index) => {
        if (user.email === email) {
          console.log("Accepted Data:");
          console.log("Name: ", user.name);
          console.log("Student Number: ", user.studentNumber);
          console.log("Email: ", user.email);
          checkEmail = true;
        }
        return 0;
      });
    }
    // last

    if (docSnap.exists() && checkEmail === false) {
      toast.error("Invalid Response 02");
      return;
    } else if (docSnap.exists()) {
      alert("Account Found and Logged In!");
      return;
    } else {
      setOpenSubmit(true);
      toast.success("Account validated!");
    }
  };
  //

  const collegeList = Object.keys(colleges).map((key) => ({ name: key }));

  function handleCollegeSelect(e) {
    const collegeSel = e.target.value;
    const courseSel = collegeSel !== "" ? colleges[collegeSel] : "";
    setSelectedCollege(collegeSel);
    setCourses(courseSel);
    setSelectedCourse("");
  }

  function handleCourseSelect(e) {
    const courseSel = e.target.value;
    setSelectedCourse(courseSel);
  }

  function handleServiceSelect(e) {
    const serviceSel = e.target.value;
    setSelectedService(serviceSel);
  }

  const logData = (e) => {
    e.preventDefault();

    if (
      !name ||
      !studentNumber ||
      !studentNumber.substring(0, 2).match("20") ||
      studentNumber.length !== 9 ||
      /[a-zA-Z]/.test(studentNumber) ||
      !email ||
      email.slice(-11) !== "@plm.edu.ph"
    ) {
      toast.error("Invalid Response 01");
      return;
    }

    if (openSubmit === false) {
      checkAccount();
      return;
    }

    var matches = datePicked.toLocaleDateString().match(/\d+/g);

    if (
      parseInt(matches[2]) - new Date().getFullYear() === 1 ||
      parseInt(matches[2]) - new Date().getFullYear() === 0
    ) {
      if (parseInt(matches[2]) - new Date().getFullYear() === 0) {
        if (parseInt(matches[0]) < new Date().getMonth() + 1) {
          toast.error("Invalid Date 01");
          return;
        } else if (parseInt(matches[0]) === new Date().getMonth() + 1) {
          if (parseInt(matches[1]) - new Date().getDate() < 1) {
            toast.error("Invalid Date 02");
            return;
          }
        }
      }
    } else {
      return;
    }

    if (
      !mobileNumber ||
      !mobileNumber.substring(0, 2).match("09") ||
      mobileNumber.length !== 11 ||
      /[a-zA-Z]/.test(mobileNumber) ||
      !selectedCollege ||
      selectedCollege === "Select your College" ||
      !selectedCourse ||
      selectedCourse === "Select your Course" ||
      !datePicked.toLocaleDateString() ||
      !selectedService ||
      selectedService === "Select a Service"
    ) {
      toast.error("Invalid Response 03");
      return;
    }
    createUser();
    console.log("Accepted Data:");
    console.log("Name: ", name);
    console.log("Student Number: ", studentNumber);
    console.log("Email: ", email);
    console.log("Mobile Number: ", mobileNumber);
    console.log("College: ", selectedCollege);
    console.log("Course: ", selectedCourse);
    console.log("Date: ", datePicked.toLocaleDateString());
    console.log("Service: ", selectedService);
  };

  return (
    <div className="parentForm">
      <Toaster />
      <form className="childForm" onSubmit={logData}>
        <p>Student Credentials</p>
        <div className="form-control">
          <label>Student's Name</label>
          <input
            type="text"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            disabled={openSubmit}
          />
        </div>
        <div className="form-control">
          <label>Learner's Number</label>
          <input
            type="text"
            placeholder="Enter your Student Number"
            value={studentNumber}
            onChange={(e) => {
              setStudentNumber(e.target.value);
            }}
            disabled={openSubmit}
          />
        </div>
        <div className="form-control">
          <label>PLM Email</label>
          <input
            type="text"
            placeholder="Enter your PLM Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            disabled={openSubmit}
          />
        </div>
        {!openSubmit && (
          <div>
            <button className="btn">Check Account</button>
          </div>
        )}
        {openSubmit && (
          <div className="form-control">
            <label>Mobile Number</label>
            <input
              type="text"
              placeholder="Enter your Mobile Number"
              value={mobileNumber}
              onChange={(e) => {
                setMobileNumber(e.target.value);
              }}
            />
          </div>
        )}
        {openSubmit && (
          <div className="form-control">
            <label>College</label>
            <select
              id="collegeSelection"
              name="Colleges"
              onChange={(e) => {
                handleCollegeSelect(e);
              }}
              value={selectedCollege}
            >
              <option>Select your College</option>
              {collegeList.map((college, key) => {
                return (
                  <option key={key} value={college.name}>
                    {college.name}
                  </option>
                );
              })}
            </select>
          </div>
        )}
        {openSubmit && (
          <div className="form-control">
            <label>Program</label>
            <select
              id="courseSelection"
              name="Courses"
              onChange={(e) => {
                handleCourseSelect(e);
              }}
              value={selectedCourse}
            >
              <option>Select your Course</option>
              {courses.map((course, key) => {
                return (
                  <option key={key} value={course}>
                    {course}
                  </option>
                );
              })}
            </select>
          </div>
        )}
        {openSubmit && (
          <div>
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        )}
      </form>
      <form className="childForm">
        <p>Book Appointment</p>
        {!openSubmit && (
          <div>
            <label>CHECK ACCOUNT FIRST BEFORE CHOOSING APPOINTMENT DATE</label>
          </div>
        )}
        {openSubmit && (
          <div className="calendarForm">
            <label>Select a Date</label>
            <Calendar
              onChange={setDatePicked}
              value={datePicked}
              showNeighboringMonth={false}
            />
            <label>Selected Date: {datePicked.toLocaleDateString()}</label>
          </div>
        )}
        {openSubmit && (
          <div>
            <label>Select Service</label>
            <select
              id="serviceSelection"
              name="Services"
              onChange={(e) => {
                handleServiceSelect(e);
              }}
              value={selectedService}
            >
              <option>Select a Service</option>
              {services.map((service, key) => {
                return (
                  <option key={key} value={service}>
                    {service}
                  </option>
                );
              })}
            </select>
          </div>
        )}
      </form>
    </div>
  );
};

export default BookingForm;
