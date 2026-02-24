let interviewList = [];
let rejectedList = [];
let currentStatus = 'all'


let availableCount = document.getElementById('availableCount');




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


calculateCount()


function toggleStyle(id) {
  //adding blue bg for all
  allFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');
  InterviewFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');
  RejctedFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');


  //if any button has black bg then remove
  allFilterBtn.classList.add('bg-white', 'text-black');
  InterviewFilterBtn.classList.add('bg-white', 'text-black');
  RejctedFilterBtn.classList.add('bg-white', 'text-black');
  // console.log(id)
  const selected = document.getElementById(id);
  currentStatus = id;
  // console.log(selected)
  selected.classList.remove('bg-white', 'text-black')
  selected.classList.add('bg-[#3B82F6]', 'text-white');


  if(id== 'interview-filter-btn'){
    allcardSection.classList.add('hidden');
    filterSection.classList.remove('hidden');
    renderInterview();
  }
  else if(id == 'all-filter-btn'){
    allcardSection.classList.remove('hidden');
    filterSection.classList.add('hidden')
  }
  else if(id=='rejected-filter-btn'){
    allcardSection.classList.add('hidden');
    filterSection.classList.remove('hidden');
    renderRejected();
  }


}




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
      light:'Applied',
      notes
    }


    const interviewExist = interviewList.find(item => item.cardHeader == cardInfo.cardHeader);


    if (!interviewExist) {
      interviewList.push(cardInfo);
    }


    rejectedList = rejectedList.filter(item => item.cardHeader != cardInfo.cardHeader)
 


    if(currentStatus == 'rejected-filter-btn'){
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
      light:'Rejected',
      notes
    }


    const interviewExist = rejectedList.find(item => item.cardHeader == cardInfo.cardHeader);


    if (!interviewExist) {
      rejectedList.push(cardInfo);
    }


  interviewList = interviewList.filter(item => item.cardHeader != cardInfo.cardHeader)


  if(currentStatus == "interview-filter-btn"){
    renderInterview();
  }
    calculateCount();
 


  }
   else if (event.target.closest('.fa-trash-can')) {


  const card = event.target.closest('.card');
  const cardHeader = card.querySelector('.cardHeader').innerText;


  // remove from interviewlist
  interviewList = interviewList.filter(item => item.cardHeader !== cardHeader);


  // remove from rejectedlist
  rejectedList = rejectedList.filter(item => item.cardHeader !== cardHeader);
  card.remove();


  if (currentStatus === 'interview-filter-btn') {
    renderInterview();
  }
  else if (currentStatus === 'rejected-filter-btn') {
    renderRejected();
  }


  calculateCount();
  renderEmptyAll();
}


})




function renderInterview() {
  filterSection.innerHTML = ''


   if (interviewList.length === 0) {
    filterSection.innerHTML = `
      <div class="flex flex-col items-center justify-center py-20 text-center">
        <img src="./img/assignment-image.png" alt="">
        <h3 class="text-xl font-semibold text-gray-600">No jobs available</h3>
        <p class="text-gray-400">Check back soon for new job opportunities</p>
      </div>
    `;
    return;
  }




  for (let interview of interviewList) {
    console.log(interview);


    let div = document.createElement('div');
    div.className = 'card flex justify-between  shadow p-4 '
    div.innerHTML = `
   
    <div class="space-y-6">
 <!-- part 1 -->
  <div>
    <h3 class="cardHeader font-bold text-[#002C5C]">${interview.cardHeader}</h3>
    <p class="cardSubtitle text-[#64748B]">${interview.cardSubtitle}</p>
  </div>
  <!-- part 02 -->
   <div>
    <p class="salary text-[#64748B]">${interview.salary}</p>
   </div>
   <p class="light w-fit p-1 bg-[#EEF4FF]">${interview.light}</p>
   <!-- part 03 -->
    <p class="notes">${interview.notes}</p>


    <div>
      <button class="interview-btn border border-[#10B981] text-[#10B981] font-bold p-2 rounded">Interview</button>
      <button class="rejected-btn border border-[#EF4444] text-[#EF4444] font-bold p-2 rounded">Rejected</button>
    </div>
 </div>
 <!-- main part 2 -->
 <div>
  <button><i class="fa-regular fa-trash-can"></i></button>
 </div>
   
    `
   filterSection.appendChild(div);


  }




}


function renderRejected() {
  filterSection.innerHTML = ''


  if (rejectedList.length === 0) {
    filterSection.innerHTML = `
      <div class="flex flex-col items-center justify-center py-20 text-center">
        <img src="./img/assignment-image.png" alt="">
        <h3 class="text-xl font-semibold text-gray-600">No jobs available</h3>
        <p class="text-gray-400">Check back soon for new job opportunities.</p>
      </div>
    `;
    return;
  }


  for (let rejected of rejectedList) {


    let div = document.createElement('div');
    div.className = 'card flex justify-between  shadow p-4 '
    div.innerHTML = `
   
    <div class="space-y-6">
 <!-- part 1 -->
  <div>
    <h3 class="cardHeader font-bold text-[#002C5C]">${rejected.cardHeader}</h3>
    <p class="cardSubtitle text-[#64748B]">${rejected.cardSubtitle}</p>
  </div>
  <!-- part 02 -->
   <div>
    <p class="salary text-[#64748B]">${rejected.salary}</p>
   </div>
   <p class="light w-fit p-1 bg-[#EEF4FF]">${rejected.light}</p>
   <!-- part 03 -->
    <p class="notes">${rejected.notes}</p>


    <div>
      <button class="interview-btn border border-[#10B981] text-[#10B981] font-bold p-2 rounded">Interview</button>
      <button class="rejected-btn border border-[#EF4444] text-[#EF4444] font-bold p-2 rounded">Rejected</button>
    </div>
 </div>
 <!-- main part 2 -->
 <div>
  <button><i class="fa-regular fa-trash-can"></i></button>
 </div>
   
    `
   filterSection.appendChild(div);


  }




}


function renderEmptyAll() {


  if (allcardSection.children.length === 0) {


    allcardSection.innerHTML = `
      <div class="flex flex-col items-center justify-center py-20 text-center">
         <img src="./img/assignment-image.png" alt="">
        <h3 class="text-xl font-semibold text-gray-600">No jobs available</h3>
        <p class="text-gray-400">Check back soon for new job opportunities</p>
      </div>
    `;
  }
}
renderEmptyAll();



































