let interviewList = [];
let rejectedList = [];

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





















mainContainer.addEventListener('click', function (event) {


  if (event.target.classList.contains('interview-btn')) {
    const parenNode = event.target.parentNode.parentNode;
    const cardHeader = parenNode.querySelector('.cardHeader').innerText
    const cardSubtitle = parenNode.querySelector('.cardSubtitle').innerText
    const salary = parenNode.querySelector('.salary').innerText;
    const light = parenNode.querySelector('.light').innerText;
    const notes = parenNode.querySelector('.notes').innerText;

    parenNode.querySelector('.light').innerText = 'Applied'

    const cardInfo = {
      cardHeader,
      cardSubtitle,
      salary,
      light: 'Applied',
      notes
    }


    const interviewExist = interviewList.find(item => item.cardHeader == cardInfo.cardHeader);


    if (!interviewExist) {
      interviewList.push(cardInfo);
    }

    rejectedList = rejectedList.filter(item => item.cardHeader != cardInfo.cardHeader)

    if (currentStatus == 'rejected-filter-btn') {
      renderRejected();
    }
    calculateCount();

  }
  else if (event.target.classList.contains('rejected-btn')) {
    const parenNode = event.target.parentNode.parentNode;
    const cardHeader = parenNode.querySelector('.cardHeader').innerText
    const cardSubtitle = parenNode.querySelector('.cardSubtitle').innerText
    const salary = parenNode.querySelector('.salary').innerText;
    const light = parenNode.querySelector('.light').innerText;
    const notes = parenNode.querySelector('.notes').innerText;

    parenNode.querySelector('.light').innerText = 'Rejected'


    const cardInfo = {
      cardHeader,
      cardSubtitle,
      salary,
      light: 'Rejected',
      notes
    }

    const interviewExist = rejectedList.find(item => item.cardHeader == cardInfo.cardHeader);

    if (!interviewExist) {
      rejectedList.push(cardInfo);
    }

    interviewList = interviewList.filter(item => item.cardHeader != cardInfo.cardHeader)

    if (currentStatus == "interview-filter-btn") {
      renderInterview();
    }
    calculateCount();
  }

})










