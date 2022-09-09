//Dom manipulation
let myMain = document.querySelector('#container');

//dummy data
let dummyData = {
    text: `lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     Ut enim addEventListener domore et dolor eu fugiat nulla pariatur.
      Excepteur sint occaecat cupiditat non proident, sunt in culpa qui
       officia deserunt myMain et  dit esse cillum dolore magna aliqua.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna    aliqua.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore   et  dolore  
        magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing 
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`
};
let myBtn = myMain.querySelector('#btn');
let myPara = myMain.querySelector('.para');
myBtn.addEventListener('click', function(e) {
    requestData(populateDom);
})

function requestData(cb){
    let data = `Loading...`;
    cb(data);
    //simulating server request
    setTimeout(()=>{
        //Server response
        data = dummyData.text;
        cb(data);
    }, 2500)
}

//Populating the web with server response
function populateDom(data){
   myPara.innerHTML =`<p> ${data}</p>`
}