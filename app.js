function Sgpa() {
  let html = `
    <div class="container">
      <header>SGPA Calculator</header>
      <div class="main">
        <div class="sem">
          <label for="sem">SEMESTER</label>
          <select name="sem" id="semester" onchange="handleSelectChange(this.value)">
            <option value="SEM 1">SEM 1</option>
            <option value="SEM 2">SEM 2</option>
            <option value="SEM 3">SEM 3</option>
            <option value="SEM 4">SEM 4</option>
            <option value="SEM 5">SEM 5</option>
            <option value="SEM 6">SEM 6</option>
            <option value="SEM 7">SEM 7</option>
            <option value="SEM 8">SEM 8</option>
          </select>
        </div>
        <div class="branch">
          <label for="branch">BRANCH</label>
          <select name="branch" id="branch" onchange="handleSelect(this.value)">
            <option value="ise">ISE</option>
            <option value="cse">CSE</option>
            <option value="ece">ECE</option>
            <option value="aiml">AIML</option>
            <option value="aids">AIDS</option>
          </select>
        </div>
      </div>
        <div id="error-message"></div>
        <div class="subject"></div>
        
      </div>
      <div class="button">
          <button type="button" onclick="sum()">Calculate</button>
          <button type="button" class="reset" onclick="resetForm()">Reset</button>
          <div class="message">🎉 Congratulations!</div>
          <div class="result" id="result">CGPA IS</div>
        </div>
      <div class="about">
        <button onclick="showMess(this)">About</button>
        <div class="mess" style="display: none;"></div>
      </div>
   
  `;

 
  let container = document.querySelector('.sgpa-calculator');

 
  container.innerHTML = html;

   currentBranch = 'ise'; 
    currentSemester = 0; 
    semester("SEM 1");
  container.style.display = 'block';
  
   
  
}
const entity = {

  ise: [
    {
      Mathematics: ["MATHEMATICS-II FOR CSE STREAM", 4],
      Physics: ["APPLIED PHYSICS CSE STREAM", 4],
      POP: ["PRINCIPLES OF PROGRAMMING USING C", 3],
      English: ["PROFESSIONAL WRITING SKILLS IN ENGLISH", 1],
      Kannada: ["BALAKE KANNADA", 1],
      IDT: ["INNOVATION AND DESIGN THINKING", 1],
      Electronics: ["INTRODUCTION TO ELECTRONICS COMMUNICATIONG", 3],
      IOT: [" INTRODUCTION TO INTERNET OF THINGS", 3],
    },
    {
      Mathematics: ["MATHEMATICS FOR CSE STREAM-I", 4],
      Chemistry: ["CHEMISTRY FOR CSE STREAM", 4],
      CAED: ["COMPUTER-AIDED ENGINEERING DRAWING", 3],
      English: ["COMMUNICATIVE ENGLISH", 1],
      CIP: ["INDIAN CONSTITUTION", 1],
      SFH: ["SCIENTIFIC FOUNDATIONS OF HEALTH", 1],
      Python: ["INTRODUCTION TO PYTHON PROGRAMMING", 3],
      Electrical: ["INTRODUCTION TO ELECTRICAL ENGINEERING", 3],
    },
    {
      Maths: ["BCS301", 4],
      DDCO: ["BCS302", 4],
      OS: ["BCS303", 4],
      DSA: ["BCS304", 3],
      DSA_Lab: ["BCSL305", 1],
      ESC: ["BCS306x", 3],
      SCR: ["BSCK307", 1],
      DAE: ["BXX358x", 1]
  },
  {
      ADA: ["BCS401", 3],
      Adv_Java: ["BIS402", 4],
      DBMS: ["BCS403", 4],
      ADA_Lab: ["BCSL404", 1],
      ESC_ETC_PLC: ["BCS405x", 3],
      Biology: ["BBOK407", 3],
      Human_Values: ["BUHK408", 1],
      NSS: ["BNSK459", 0],
      PE: ["BPEK459", 0],
      Yoga: ["BYOK459", 0]
  },
  {
      Software_Eng: ["BIS501", 3],
      CN: ["BIS502", 4],
      Computations: ["BIS503", 4],
      DV_Lab: ["BISL504", 1],
      Pro_Elective: ["BIS515x", 3],
      Mini_Project: ["BIS586", 2],
      ResearchAndIPR: ["BRMK557", 3],
      EVS: ["BESK508", 2]
  },
  {
      Full_Stack: ["BIS601", 4],
      ML: ["BIS602", 4],
      Pro_Elective: ["BIS613x", 3],
      Open_Elective: ["BIS654x", 3],
      Project_P1: ["BIS685", 2],
      ML_Lab: ["BISL606", 1],
      AEC: ["BIS657x", 1]
  },
  {
      Big_Data: ["BIS701", 4],
      Parallel_Computing: ["BIS702", 4],
      Info_NetworkSecurity: ["BIS703", 4],
      Pro_Elective: ["BIS714x", 3],
      Open_Elective: ["BIS755x", 3],
      Project_P2: ["BIS786", 6]
  },
  {
      Pro_Elective_NPTEL: ["BIS801x", 3],
      Open_Elective_NPTEL: ["BIS802x", 3],
      Internship: ["BIS803", 10]
  }
  ],
  cse: [
    {
      Maths: ["BMATS101", 4],
      Chemistry: ["BCHES102", 4],
      CAED: ["BCEDK203", 3],
      English: ["BENGK106/BPWSK106", 1],
      CIP: ["BESCK204x", 1],
      SFH: ["BSFHK158", 1],
      Python: ["BPOPS103", 3],
      Electrical: ["BEEE103", 3]
  },
  {
      Maths: ["BMATS201", 4],
      Physics: ["BPHYS202", 4],
      POP: ["BPOPS203", 3],
      English: ["BENGK106/BPWSK106", 1],
      Kannada: ["BKSKK107/BKBKK107/BICOK107", 1],
      IDT: ["BIDTK158/BSFHK158", 1],
      Electronics: ["BETCK105x/BPLCK105x", 3],
      IOT: ["BETCK205x/BPLCK205x", 3]
  },
  {
      Maths: ["BCS301", 4],
      DDCO: ["BCS302", 4],
      OS: ["BCS303", 4],
      DSA: ["BCS304", 3],
      DSA_Lab: ["BCSL305", 1],
      ESC: ["BCS306x", 3],
      SCR: ["BSCK307", 1],
      DAE: ["BXX358x", 1]
  },
  {
      ADA: ["BCS401", 3],
      MC: ["BCS402", 4],
      DBMS: ["BCS403", 4],
      ADA_Lab: ["BCSL404", 1],
      ESC_ETC_PLC: ["BCS405x", 3],
      Biology: ["BBOK407", 3],
      Human_Values: ["BUHK408", 1]
  },
  {
      Software_Eng: ["BCS501", 3],
      CN: ["BCS502", 4],
      Computations: ["BCS503", 4],
      Web_Tech_Lab: ["BCSL504", 1],
      Pro_Elective: ["BCS515x", 3],
      Mini_Project: ["BCS586", 2],
      ResearchAndIPR: ["BRMK557", 3],
      EVS: ["BESK508", 2]
  },
  {
      Full_Stack: ["BCS601", 4],
      ML: ["BCS602", 4],
      Pro_Elective: ["BCS613x", 3],
      Open_Elective: ["BCS654x", 3],
      Project_P1: ["BCS685", 2],
      ML_Lab: ["BCSL606", 1],
      AEC: ["BCS657x", 1]
  },
  {
      Big_Data: ["BCS701", 4],
      Parallel_Computing: ["BCS702", 4],
      Info_NetworkSecurity: ["BCS703", 4],
      Pro_Elective: ["BCS714x", 3],
      Open_Elective: ["BCS755x", 3],
      Project_P2: ["BCS786", 6]
  },
  {
      Pro_Elective_NPTEL: ["BCS801x", 3],
      Open_Elective_NPTEL: ["BCS802x", 3],
      Internship: ["BCS803", 10]
  }
  ],
  ece: [
    {
      Maths: ["BMATS101", 4],
      Chemistry: ["BCHES102", 4],
      CAED: ["BCEDK203", 3],
      English: ["BENGK106/BPWSK106", 1],
      CIP: ["BESCK204x", 1],
      SFH: ["BSFHK158", 1],
      Python: ["BPOPS103", 3],
      Electrical: ["BEEE103", 3]
  },
  {
      Maths: ["BMATS201", 4],
      Physics: ["BPHYS102/202", 4],
      POP: ["BPOPS103/203", 3],
      English: ["BENGK106/BPWSK106", 1],
      Kannada: ["BKSKK107/BKBKK107/BICOK107", 1],
      IDT: ["BIDTK158/BSFHK158", 1],
      Electronics: ["BETCK105x/BPLCK105x", 3],
      IOT: ["BETCK205x/BPLCK205x", 3]
  },
  {
    Maths: ["BMATEC301", 3],
    DSDV: ["BEC302", 4],
    EPC: ["BEC303", 4],
    NA: ["BEC304", 3],
    ADSD: ["BECL305", 1],
    ESC: ["BXX306x", 3],
    SCR: ["BSCK307", 1]
},
{
    EM: ["BEC401", 3],
    PCS: ["BEC402", 4],
    CS: ["BEC403", 4],
    CommunicationLab: ["BECL404", 1],
    ESC_ETC_PLC: ["BEC405x", 3],
    Biology: ["BBOK407", 3],
    Human_Values: ["BUHK408", 1]
},
{
    Digital_Communication: ["BEC501", 3],
    OOP_with_Java_DS: ["BEC502", 4],
    Computer_Communication_Networks: ["BEC503", 3],
    Microwave_Theory_Antennas: ["BEC504", 3],
    Communication_Lab_II: ["BECL505", 1],
    Research_Methodology_IPR: ["BEC506", 2],
    Environmental_Studies: ["BEC507", 1]
},
{
    Innovation_Management: ["BEC601", 3],
    CO_ARM_Microcontrollers: ["BEC602", 4],
    VLSI_Design_Testing: ["BEC603", 3],
    Professional_Elective_I: ["BEC604x", 3],
    Open_Elective_I: ["BEC605x", 3],
    VLSI_Lab: ["BECL606", 1],
    Mini_Project: ["BECMP607", 2],
    Internship_IV_V: ["BECINT608", 3]
},
{
    Advanced_VLSI: ["BEC701", 3],
    Optical_Wireless_Communication: ["BEC702", 2],
    Professional_Elective_II: ["BEC702x", 3],
    Professional_Elective_III: ["BEC703x", 3],
    Open_Elective_II: ["BEC704x", 3],
    Project_Work: ["BECP705", 10]
},
{
    Technical_Seminar: ["BEC801", 1],
    Research_Industry_Internship: ["BECINT802", 15],
    NSS_PE_Yoga: ["BNSK803/BPEK803/BYOK803", 0]
}
  ],
  aiml: [{}],
  aids: [{}],
};


let currentBranch = 'ise'; 
let currentSemester = 0;    


function handleSelectChange(value) {
  semester(value);
}

function handleSelect(bran) {
  if (bran.toLowerCase() === 'aiml' || bran.toLowerCase() === 'aids' ||bran.toLowerCase() === 'csds') {
    currentBranch = 'cse';
   }
   else {
      currentBranch = bran.toLowerCase();
    }

  
  semester(`SEM ${currentSemester + 1}`);
}

function semester(value) {
  
  currentSemester = parseInt(value.replace("SEM ", "")) - 1;
  
  
 
  if (!entity[currentBranch][currentSemester]) {
    document.getElementById("error-message").innerHTML = `Semester ${currentSemester + 1} data is not available for ${currentBranch.toUpperCase()}.`;
    const subjectContainer = document.querySelector('.subject');
    subjectContainer.innerHTML = ""; 
    const resultElement = document.getElementById("result");
    resultElement.innerText = `CGPA IS `; 
    return;
  }
  
  
  const selectedSemesterData = entity[currentBranch][currentSemester];
  let html = "";

  for (const [key, course] of Object.entries(selectedSemesterData)) {
    html += `
      <div>
        <label for="${key.toLowerCase()}"> (${key}):</label>
        <input type="number" id="${key.toLowerCase()}"  placeholder="${course[0]}"  min="0" max="100" required>
      </div>
    `;
  }

  const subjectContainer = document.querySelector('.subject');
  subjectContainer.innerHTML = html;
}
  

const getPoints = (marks) => {
  if (marks >= 90) return 10;
  if (marks >= 80) return 9;
  if (marks >= 70) return 8;
  if (marks >= 60) return 7;
  if (marks >= 55 && marks <= 59) return 6;
  if (marks >= 50 && marks <= 54) return 5;
  if (marks >= 45 && marks <= 49) return 4;
  if (marks >= 40 && marks <= 44) return 3;
  else return 0;
};



function sum() {
  
  const selectedSemesterData = entity[currentBranch][currentSemester];
    let totalGradePoints = 0;
    let totalCredits = 0;
  
    for (const [key, course] of Object.entries(selectedSemesterData)) {
      const subjectId = key.toLowerCase();
      const marksInput = document.getElementById(subjectId);
      if (!marksInput) continue; 
  
      let marks = parseInt(marksInput.value) || 0;
      let grade = getPoints(marks);
      let credit = course[1]; 
  
      totalGradePoints += grade * credit;
      totalCredits += credit;
    }
  
  
    let totalcgpa = totalGradePoints / totalCredits;
  
    const resultElement = document.getElementById("result");
    resultElement.innerText = `CGPA IS ${totalcgpa.toFixed(2)}`;
  }

function resetForm() {
    
    const inputs = document.querySelectorAll('.subject input');
    inputs.forEach(input => input.value = '');
  
   
    const resultElement = document.getElementById("result");
    resultElement.innerText = `CGPA IS `;
  
    
    document.getElementById('semester').value = 'SEM 1';
    document.getElementById('branch').value = 'cse';
  
    
    currentBranch = 'ise';
    currentSemester = 0;
  
    
    semester('SEM 1');
  }
  document.addEventListener("DOMContentLoaded", () => {
    semester('SEM 1');
  });
  function showMess(button) {
    button.style.display = 'none';
    document.querySelector('.mess').innerHTML = 'Built by Sagar';
    document.querySelector('.mess').style.display = 'block';
    

    setTimeout(function() {
      document.querySelector('.mess').style.display = 'none';
    }, 3000); 
  }






  const cgpa = document.getElementsByClassName("gcpa");


function handleSelectt(value) {
  const inputFieldsContainer = document.getElementById('inputFieldsContainer');
  

  inputFieldsContainer.innerHTML = '';
  

  for (let i = 1; i <= value; i++) {
    const inputDiv = document.createElement('div');
    inputDiv.style.marginBottom = '10px';
    inputDiv.innerHTML = `
      <label for="sem${i}">Semester ${i} </label>
      <input type="text" id="sem${i}" name="sem${i}" placeholder="Enter  SEM ${i} SGPA">
    `;
    inputFieldsContainer.appendChild(inputDiv);
   
  }
  
  const calculateButton = document.createElement('button');
  calculateButton.textContent = 'Calculate CGPA';
  calculateButton.addEventListener('click', calculateCGPA);
  inputFieldsContainer.appendChild(calculateButton);
}


function calculateCGPA() {
  const inputFieldsContainer = document.getElementById('inputFieldsContainer');
  const inputs = inputFieldsContainer.getElementsByTagName('input');
  
  let totalSGPA = 0;
  let count = 0;

  
  for (let i = 0; i < inputs.length; i++) {
    const value = parseFloat(inputs[i].value);
    if (!isNaN(value)) { 
      totalSGPA += value;
      count++;
    }
  }


  const cgpaValue = count > 0 ? (totalSGPA / count).toFixed(2) : 0; 

 
   
    result.innerHTML = `
                           Your CGPA is: ${cgpaValue}`;
}


for (let i = 0; i < cgpa.length; i++) {
  cgpa[i].addEventListener("click", function() {
    let html = `
      <div class="container">
        <div class="main">
          <div class="sem">
            <label for="sem">TOTAL SEMESTERS </label>
            <select name="sem" id="semester">
              <option value="0">Select Semester</option>
              <option value="1">SEM 1</option>
              <option value="2">SEM 2</option>
              <option value="3">SEM 3</option>
              <option value="4">SEM 4</option>
              <option value="5">SEM 5</option>
              <option value="6">SEM 6</option>
              <option value="7">SEM 7</option>
              <option value="8">SEM 8</option>
            </select>
          </div>
        </div>
        <div id="inputFieldsContainer"></div> 
        <div id="result"></div> 
      </div>
    `;
    
   
    let container = document.querySelector('.cgpa-calculator');
    container.innerHTML = html;
    container.classList.add('show');
    
    
    let selectElement = document.getElementById('semester');
    selectElement.addEventListener('change', function() {
      
      handleSelectt(parseInt(this.value));
    });
  });
}
     
