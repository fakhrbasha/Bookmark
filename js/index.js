// --------------------------------------------------------------------------------------------------------------------------------------- //
// --------------------------------------------------------- F A K H R ------------------------------------------------------------------- //
// --------------------------------------------------------------------------------------------------------------------------------------- //


var siteName = document.getElementById('siteName');
var siteUrl = document.getElementById('siteUrl');

var siteList ;

if(localStorage.getItem('site')==null){
    siteList = [];
}else{
    siteList = JSON.parse(localStorage.getItem('site'));
    displaySite();
}


function create() {
    var site = {
        sName: siteName.value,
        sUrl: siteUrl.value
    }

    siteList.push(site);
    displaySite();
    resetSite();
    localStorage.setItem('site' , JSON.stringify(siteList));
}

function resetSite() {
    siteName.value = '';
    siteUrl.value = '';
}

function displaySite() {
    var cont = '';
    for (let i = 0; i < siteList.length; i++) {
        cont += `
        <tr class="border-bottom">
            <td class="p-2 fw-light">${i + 1}</td>
            <td class="p-2 fw-light">${siteList[i].sName}</td>
            <td class="p-2"><a href="${siteList[i].sUrl}" target="_blank" class="btn visit btn-success text-white ">Visit</a></td>
            <td class="p-2"><button class="btn delete btn-danger" onclick="deleteSite(${i})">Delete</button></td>
        </tr>`;
    }
    document.getElementById('siteTable').innerHTML = cont;
}
function deleteSite(i) {
    siteList.splice(i, 1);
    displaySite();
    localStorage.setItem('site' , JSON.stringify(siteList));


}

function validateName(){
    var regex = /[A-Za-z]{3,}/;
    var correct = document.getElementById('correct');
    var notC = document.getElementById('notCorrect');

    var input = document.getElementById('siteName');

    if(regex.test(input.value) == true){
        // correct.innerHTML = `<i class="fa-solid fa-check position-absolute top-50 end-0 translate-middle-y me-3 text-success"></i>`;
        // notC.innerHTML = ``;

        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
    }else{
        // notC.innerHTML = `<i class="fa-solid fa-xmark position-absolute top-50 end-0 translate-middle-y me-3 text-danger"></i>`;
        // correct.innerHTML = ``;

        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
    }
}

function validateUrl(){
    var reg = /\.c\w+$/i;

    var inp = document.getElementById('siteUrl');
    if(reg.test(inp.value) == true){
        inp.classList.add("is-valid");
        inp.classList.remove("is-invalid");
    }else{
        inp.classList.add("is-invalid");
        inp.classList.remove("is-valid");
    }

}





function handle(){
    var siteNam = document.getElementById('siteName');
    var siteURL = document.getElementById('siteUrl');

    var regN = /[A-Za-z]{3,}/.test(siteNam.value);
    var regURL =  /\.c\w+$/i.test(siteURL.value);
    if(!regN || !regURL){
        document.getElementById("errorModal").classList.remove("d-none");
    }else{
        create();
    }
}

function closeModal() {
    document.getElementById("errorModal").classList.add("d-none");
}



// --------------------------------------------------------------------------------------------------------------------------------------- //
// --------------------------------------------------------- F A K H R ------------------------------------------------------------------- //
// --------------------------------------------------------------------------------------------------------------------------------------- //