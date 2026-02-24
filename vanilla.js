

let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount')
let rejectedCount = document.getElementById('rejectedCount')


const allFilterBtn = document.getElementById('all-filter-btn');
const InterviewFilterBtn = document.getElementById('interview-filter-btn');
const RejctedFilterBtn = document.getElementById('rejected-filter-btn');




const allcardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main');
const filterSection = document.getElementById('filtered-section');


function calculateCount() {
  total.innerText = allcardSection.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
 
  // Available Jobs Count
  availableCount.innerText = allcardSection.children.length + " Jobs";


}


calculateCount();