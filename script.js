let pfpNum = 0
let q1 = 0
let q2 = 0
let q3 = 0
let q4 = 0
let q5 = 0
let questionType
let score = 0
let numQuestion;
let correctAnswer = ""
let nextCount = 0
let userImg;
let averageScore = 0

function loadingHomePage(){
    let i = 0
    let txt = 'The ultimate one-stop for SAT prep. '
    let speed = 30
    typeWriter()

    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("ultimateStopId").innerHTML += txt.charAt(i)
            i++
            console.log(i)
            setTimeout(typeWriter, speed)
        }
    }
}


function nextButton(){
    if (nextCount == 0){
        document.getElementById('askFirstNameDiv').style.display = "none"
        document.getElementById('askLastNameDiv').style.display = "block"
        document.getElementById('askUsernameDiv').style.display = "none"
        document.getElementById('askPasswordId').style.display = "none"
        document.getElementById('askPasswordId2').style.display = "none"
        document.getElementById('choosePfp').style.display = "none"
        document.getElementById('enterNameText').innerHTML = "And now your last name."


    } else if(nextCount == 1){
        document.getElementById('askFirstNameDiv').style.display = "none"
        document.getElementById('askLastNameDiv').style.display = "none"
        document.getElementById('askUsernameDiv').style.display = "block"
        document.getElementById('askPasswordId').style.display = "none"
        document.getElementById('askPasswordId2').style.display = "none"
        document.getElementById('choosePfp').style.display = "none"
        document.getElementById('enterNameText').innerHTML = "And how about a username?"

    } else if (nextCount == 2){
        document.getElementById('askFirstNameDiv').style.display = "none"
        document.getElementById('askLastNameDiv').style.display = "none"
        document.getElementById('askUsernameDiv').style.display = "none"
        document.getElementById('askPasswordId').style.display = "block"
        document.getElementById('askPasswordId2').style.display = "block"
        document.getElementById('choosePfp').style.display = "none"
        document.getElementById('enterNameText').innerHTML = "Now choose a strong password."
    } else if (nextCount == 3){
        document.getElementById('askFirstNameDiv').style.display = "none"
        document.getElementById('askLastNameDiv').style.display = "none"
        document.getElementById('askUsernameDiv').style.display = "none"
        document.getElementById('askPasswordId').style.display = "none"
        document.getElementById('askPasswordId2').style.display = "none"
        document.getElementById('choosePfp').style.display = "block"
        document.getElementById('enterNameText').innerHTML = "And finally, an avatar that fits you."

    } else if (nextCount == 4){
        register()
    }


    nextCount++
}


function signUp(){
    window.location.href="login1.html"
}


function register(){
    let strfName = document.getElementById('fName').value;
    let strlName = document.getElementById('lName').value;
    let strUserId = document.getElementById('registerUserId').value;
    let strPass = document.getElementById('registerPass').value;
    let strPassRepeat = document.getElementById('repeatPass').value;



    if (strPass == strPassRepeat){

        // Build formData object.
        let formData = new FormData();
        formData.append('fName', strfName);
        formData.append('lName', strlName);
        formData.append('registerUserId', strUserId);
        formData.append('registerPass', strPass);
        formData.append('pfpNum', pfpNum);

        //set options for fetch
        let options = {
            method: 'POST',
            body: formData
        };
        fetch('register.py', options)
            .then(response => {
                // Check if the request was successful
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                // Parse the response as JSON
                return response.json();
            })
            .then(data => {
                // Handle the JSON data
                console.log(data);


                if (data.result == "false"){
                    document.getElementById('output1').innerHTML = "That username is already taken!"
                } else {
                    window.location.href = "testpage.html"
                }



            })
            .catch(error => {
                // Handle any errors that occurred during the fetch
                console.error('Fetch error:', error);
            });


    } else{
        document.getElementById('output1').innerHTML = "Please enter the same password!"
        return

    }







}


function signIn2(){

    let strUserId = document.getElementById('registerUserId').value;
    let strPass = document.getElementById('registerPass').value;

    // Build formData object.
    let formData = new FormData();
    formData.append('registerUserId', strUserId);
    formData.append('registerPass', strPass);

    //set options for fetch
    let options = {
        method: 'POST',
        body: formData
    };
    fetch('login.py', options)
        .then(response => {
            // Check if the request was successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the response as JSON
            return response.json();
        })
        .then(data => {
            // Handle the JSON data
            console.log(data);
            checkUser(data)




        })
        .catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('Fetch error:', error);
        });

}


function checkUser(data){

    if (data.result == "false"){
        document.getElementById('output1').innerHTML = "Please enter a correct password."
    } else {
        window.location.href = "home.html?Username=" + data[0].username + "&First_Name=" + data[0].first_name + "&Last_Name=" + data[0].last_name
    }
}


function register2(){
    window.location.href="register.html"
}

function search(){

    let searchedItem = document.getElementById('searchValue').value

    if (searchedItem.length > 0){
        console.log("yessssir")
    }

    window.location = "faq.html"

}


function start(){

    window.location.href="questions.html?subject=main_idea_questions"
}


function home(){
    document.getElementById('homeDiv').style.display = "block"
    document.getElementById('accountDiv').style.display = "none"
    document.getElementById('chatDiv').style.display = "none"
    document.getElementById('notifsDiv').style.display = "none"
    document.getElementById('helpDiv').style.display = "none"
    document.getElementById('modulesDiv').style.display = "none"
    document.getElementById('skillsDiv').style.display = "none"

}

function skills(){
    document.getElementById('homeDiv').style.display = "none"
    document.getElementById('skillsDiv').style.display = "block"
    document.getElementById('accountDiv').style.display = "none"
    document.getElementById('chatDiv').style.display = "none"
    document.getElementById('notifsDiv').style.display = "none"
    document.getElementById('helpDiv').style.display = "none"
    document.getElementById('modulesDiv').style.display = "none"

}

function chat(){
    document.getElementById('homeDiv').style.display = "none"
    document.getElementById('skillsDiv').style.display = "none"
    document.getElementById('accountDiv').style.display = "none"
    document.getElementById('chatDiv').style.display = "block"
    document.getElementById('notifsDiv').style.display = "none"
    document.getElementById('helpDiv').style.display = "none"
    document.getElementById('modulesDiv').style.display = "none"
}

function account(){
    document.getElementById('homeDiv').style.display = "none"
    document.getElementById('skillsDiv').style.display = "none"
    document.getElementById('accountDiv').style.display = "block"
    document.getElementById('chatDiv').style.display = "none"
    document.getElementById('notifsDiv').style.display = "none"
    document.getElementById('helpDiv').style.display = "none"
    document.getElementById('modulesDiv').style.display = "none"
}


function practice(subject){

    let queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const Username = urlParams.get('Username')
    const First_Name = urlParams.get('First_Name')
    const Last_Name = urlParams.get('Last_Name')

    window.location.href = "questions.html?subject=" + subject + "&Username=" + Username  + "&First_Name=" + First_Name  + "&Last_Name=" + Last_Name


    // http://52.207.72.171/prepgo/home.html?Username=ahsan_rah&First_Name=Ahsan&Last_Name=Rahman#
}

function notifs(){
    document.getElementById('homeDiv').style.display = "none"
    document.getElementById('skillsDiv').style.display = "none"
    document.getElementById('accountDiv').style.display = "none"
    document.getElementById('chatDiv').style.display = "none"
    document.getElementById('notifsDiv').style.display = "block"
    document.getElementById('helpDiv').style.display = "none"
    document.getElementById('modulesDiv').style.display = "none"
}

function help(){
    document.getElementById('homeDiv').style.display = "none"
    document.getElementById('skillsDiv').style.display = "none"
    document.getElementById('accountDiv').style.display = "none"
    document.getElementById('chatDiv').style.display = "none"
    document.getElementById('notifsDiv').style.display = "none"
    document.getElementById('helpDiv').style.display = "block"
    document.getElementById('modulesDiv').style.display = "none"
}

function modules(){
    document.getElementById('homeDiv').style.display = "none"
    document.getElementById('accountDiv').style.display = "none"
    document.getElementById('chatDiv').style.display = "none"
    document.getElementById('notifsDiv').style.display = "none"
    document.getElementById('helpDiv').style.display = "none"
    document.getElementById('modulesDiv').style.display = "block"
    document.getElementById('skillsDiv').style.display = "none"

}

function begin(){
    let queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const subject = urlParams.get('subject')
    const Username = urlParams.get('Username')
    const First_Name = urlParams.get('First_Name')
    const Last_Name = urlParams.get('Last_Name')

    window.location.href = "practice.html?subject=" + subject + "&Username=" + Username  + "&First_Name=" + First_Name  + "&Last_Name=" + Last_Name


    // window.location.href = "practice.html?subject=" + subject

}

function setPfp(num){
    pfpNum = num
}


function setPfp2(num){
    let queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const Username = urlParams.get('Username')
    let pfpNumber = num
    let formData = new FormData();

    formData.append('pfpNumber', pfpNumber);
    formData.append('Username', Username);

    //set options for fetch
    let options = {
        method: 'POST',
        body: formData
    };
    fetch('updatePfp.py', options)
        .then(response => {
            // Check if the request was successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the response as JSON
            return response.json();
        })
        .then(data => {
            // Handle the JSON data
            console.log(data)

            document.getElementById("successMessage").style.display = "block"




        })
        .catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('Fetch error:', error);
        });
}

function setInfo(){
    let queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const Username = urlParams.get('Username')


    let formData = new FormData();

    formData.append('Username', Username);

    //set options for fetch
    let options = {
        method: 'POST',
        body: formData
    };
    fetch('getUser.py', options)
        .then(response => {
            // Check if the request was successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the response as JSON
            return response.json();
        })
        .then(data => {
            // Handle the JSON data
            console.log(data)




            console.log("testing")

            userImg = data[0].profile_pic

            console.log("images/pfp" + data[0].profile_pic + ".png")




            document.getElementById('pfp2').src = "images/pfp" + data[0].profile_pic + ".png"
            document.getElementById('pfp').src = "images/pfp" + data[0].profile_pic + ".png"
            document.getElementById('wlcMessage').innerHTML = "Welcome back, " + data[0].first_name
            document.getElementById('userName').innerHTML =  data[0].first_name + " " + data[0].last_name






        })
        .catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('Fetch error:', error);
        });


        getScores()


    document.getElementById('dayOfTheWeek').innerHTML = day

}

function getScores(){

    let queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const Username = urlParams.get('Username')
    let numberOfEntries = 0

    let formData = new FormData();

    formData.append('Username', Username);

    //set options for fetch
    let options = {
        method: 'POST',
        body: formData
    };
    fetch('getScores2.py', options)
        .then(response => {
            // Check if the request was successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the response as JSON
            return response.json();
        })
        .then(data => {
            // Handle the JSON data
            console.log(data)

            if(data.result == "false"){
                document.getElementById("mainIdeaScore").innerHTML = "You've mastered " + 0 + "% of the main idea questions."
                document.getElementById('percntageId').innerHTML = 0 + "%"
                document.getElementById("skill-per").style.width = 0 + "%"
            } else {

                for (i = 0; i < data.length; i++) {
                    numberOfEntries++
                    averageScore = averageScore + data[i].score


                }

                let percentageScore = 0

                percentageScore = Math.round((averageScore / (numberOfEntries*5))*100)

                console.log("Your score is: " + percentageScore + "%" )

                document.getElementById("mainIdeaScore").innerHTML = "You've mastered " + percentageScore + "% of the main idea questions."
                document.getElementById('percntageId').innerHTML = percentageScore + "%"
                document.getElementById("skill-per").style.width = percentageScore + "%"

            }











        })
        .catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('Fetch error:', error);
        });
}

let calcOpen = 0

function showCalc(){


    if (calcOpen == 0){
        console.log(calcOpen)
        calcOpen = 1
        document.getElementById('popup').style.display = "block"
    } else {
        console.log("testing123")
        document.getElementById('popup').style.display = "none"
        calcOpen = 0
    }
}

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];


// Get the input field
// var input = document.getElementById("registerPass");
//
// // Execute a function when the user presses a key on the keyboard
// input.addEventListener("keypress", function(event) {
//     // If the user presses the "Enter" key on the keyboard
//     if (event.key === "Enter") {
//         // Cancel the default action, if needed
//         event.preventDefault();
//         // Trigger the button element with a click
//         document.getElementById("signInB").click();
//     }
// });

function loadPracticePage()
{
    console.log("IT WORKED!!")
    numQuestion = 1
}


function practiceModule(){

    let queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const subject = urlParams.get('subject')
    console.log(subject)




    if (subject == "main_idea_questions"){
        questionType = arrMainIdeaQues
    } else if (subject == "words_in_context"){
        questionType = arrWordsInContextQues
    } else if (subject == "comparing_questions"){
        questionType = arrComparingPassages
    } else if (subject == "standard_english_conventions"){
        questionType = arrStandardEnglishConventions
    } else if (subject ==  "transition"){
        questionType = arrTransition
    }


    document.getElementById('typeOfQuestion').innerHTML = questionType[q1].TypeofQuestion

        console.log(q1)
        q1 = Math.floor((Math.random() * (questionType.length-1)))

    document.getElementById('typeOfQuestion').innerHTML = questionType[q1].TypeofQuestion

        // q2 = Math.floor((Math.random() * (questionType.length-1)))
        // q3 = Math.floor((Math.random() * (questionType.length-1)))
        // q4 = Math.floor((Math.random() * (questionType.length-1)))
        // q5 = Math.floor((Math.random() * (questionType.length-1)))

        let pass1 = questionType[q1].Passage
        // let pass2 = questionType[q2].Passage
        // let pass3 = questionType[q3].Passage
        // let pass4 = questionType[q4].Passage
        // let pass5 = questionType[q5].Passage

        let strQ1 = questionType[q1].Question
        // let strQ2 = questionType[q2].Question
        // let strQ3 = questionType[q3].Question
        // let strQ4 = questionType[q4].Question
        // let strQ5 = questionType[q5].Question

        let q1A = questionType[q1].AnswerChoiceA
        let q1B = questionType[q1].AnswerChoiceB
        let q1C = questionType[q1].AnswerChoiceC
        let q1D = questionType[q1].AnswerChoiceD

        // let q2A = questionType[q2].AnswerChoiceA
        // let q2B = questionType[q2].AnswerChoiceB
        // let q2C = questionType[q2].AnswerChoiceC
        // let q2D = questionType[q2].AnswerChoiceD
        //
        // let q3A = questionType[q3].AnswerChoiceA
        // let q3B = questionType[q3].AnswerChoiceB
        // let q3C = questionType[q3].AnswerChoiceC
        // let q3D = questionType[q3].AnswerChoiceD
        //
        // let q4A = questionType[q4].AnswerChoiceA
        // let q4B = questionType[q4].AnswerChoiceB
        // let q4C = questionType[q4].AnswerChoiceC
        // let q4D = questionType[q4].AnswerChoiceD
        //
        // let q5A = questionType[q5].AnswerChoiceA
        // let q5B = questionType[q5].AnswerChoiceB
        // let q5C = questionType[q5].AnswerChoiceC
        // let q5D = questionType[q5].AnswerChoiceD


    document.getElementById("passageId").innerHTML = pass1
    document.getElementById("questionId").innerHTML = strQ1
    document.getElementById("acA").innerHTML = q1A
    document.getElementById("acB").innerHTML = q1B
    document.getElementById("acC").innerHTML = q1C
    document.getElementById("acD").innerHTML = q1D

    console.log(strQ1)








        // document.getElementById(i).innerHTML = diceRollArray[x]



    // for (z = 0; z < arrReport.length; z++){
    //     console.log(arrReport[z].StudentId)
    //
    //     if (userID == arrReport[z].StudentId && arrReport[z].DateSignOut == false){
    //         console.log("testimg")
    //         document.getElementById("errorMsg").innerHTML = "You're already signed in!"
    //         return
    //     }
    // }
}


function answer(choice){
    console.log(choice)

    let selectedChoice = document.getElementById('ac' + choice).innerHTML

    showAnswer(selectedChoice, choice)
}


function showAnswer(choice, letter){


    document.getElementById('explanation').innerHTML = "Explanation: " + questionType[q1].Explanation
    if(questionType[q1].AnswerChoiceA == questionType[q1].CorrectAnswer){
        correctAnswer = "A"
    } else if  (questionType[q1].AnswerChoiceB == questionType[q1].CorrectAnswer){
        correctAnswer = "B"
    } else if (questionType[q1].AnswerChoiceC == questionType[q1].CorrectAnswer){
        correctAnswer = "C"
    } else {
        correctAnswer = "D"
    }

    console.log("The correct answer was: " + correctAnswer)

    if(choice == questionType[q1].CorrectAnswer){
        console.log("The correct answer was chosen!!")
        score ++
        document.getElementById('ac'+ letter).style.setProperty('background-color', '#73dc57', 'important');
        document.getElementById('ac'+ letter).style.setProperty('color', '#ffffff', 'important');
        document.getElementById('progressBar').innerHTML += "🟢"

    } else {
        console.log("The wrong answer was chosen!")
        document.getElementById('ac'+ letter).style.setProperty('background-color', '#ea2222', 'important');
        document.getElementById('ac'+ letter).style.setProperty('color', '#ffffff', 'important');
        document.getElementById('ac'+ correctAnswer).style.setProperty('background-color', '#73dc57', 'important');
        document.getElementById('ac'+ correctAnswer).style.setProperty('color', '#ffffff', 'important');
        document.getElementById('progressBar').innerHTML += "🔴"

    }

    const buttons = document.querySelectorAll('.btn-disable');

    // Loop through the NodeList and disable each button
    buttons.forEach(button => {
        button.disabled = true;
    });

}


function next(){
    const buttons = document.querySelectorAll('.btn-disable');

    // Loop through the NodeList and disable each button
    buttons.forEach(button => {
        button.disabled = false;
        button.style.setProperty('background-color', 'white');
        button.style.setProperty('color', 'black');

    });

    document.getElementById('hint').innerHTML = ""
    document.getElementById('explanation').innerHTML = ""

    numQuestion++


    if (numQuestion == 6){
        endPractice()
        console.log("thats 6")
    }
    practiceModule()

    document.getElementById('questionNumber').innerHTML = numQuestion

    console.log(numQuestion + " score: " + score)
}



function post(){

    let postId = document.getElementById('enterMessage').value;
    let queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const userId = urlParams.get('Username')
    const now = new Date();

// get the current date and time as a string
    const currentDateTime = now.toLocaleString();

    console.log(currentDateTime); // output: "7/20/2021, 2:28:15 PM" (will vary depending on your time zone)

    // Build formData object.
    let formData = new FormData();
    formData.append('enterMessage', postId);
    formData.append('Username', userId);
    formData.append('currentDateTime', currentDateTime);
    formData.append('userImg', userImg);


    //set options for fetch
    let options = {
        method: 'POST',
        body: formData
    };
    fetch('post.py', options)
        .then(response => {
            // Check if the request was successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the response as JSON
            return response.json();
        })
        .then(data => {
            // Handle the JSON data
            console.log(data);
            loadPosts()

            // loadPosts()
            // console.log("Not loading posts!")




        })
        .catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('Fetch error:', error);
        });
}



function loadPosts(){


    console.log("loading posts...")
    let queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const Username = urlParams.get('Username')
    let content = ""
    document.getElementById("postDiv").innerHTML = ""


    // Build formData object.
    let formData = new FormData();
    formData.append('Username', Username);

    //set options for fetch
    let options = {
        method: 'POST',
        body: formData
    };
    fetch('getPosts.py', options)
        .then(response => {
            // Check if the request was successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the response as JSON
            return response.json();
        })
        .then(data => {
            // Handle the JSON data
            console.log(data);

            //
            for (i = 0; i < data.length; i++) {
                console.log(data[i])
                // content += "<h1>" + data[i].pContent + " </h1><br>"
                content += "<div" +
                    "  style='margin-top:" + (i*100) + "; color: black;" +
                    " left: 33%; width: 70%; padding: 20px; -ms-transform: translate(-50%, -50%);" +
                    " border-radius: 40px; background-color: #white; margin-bottom: 20px; transform:" +
                    " translate(-50%, -50%); position: relative;'  class='postDivs2, bodyDark' id='postDiv" + i +"'> <img" +
                    " src='images/pfp" + data[i].pfp + ".png' style='height: 30px; width: 30px;'> <h6 style='margin-top: -35px;" +
                    " margin-left: 40px;' class='text2'>" + data[i].uid + " <p style='font-size: 10px;' class='text2'>" + data[i].time + "</p></h6><br> <p style='font-size: 15px;' class='text2'>" + data[i].pContent + "</p> <br> </div>"

                // "  style='margin-top:" + (i*100) + "; color: black;" +
                // " left: 50%; width: 70%; padding: 10px; -ms-transform: translate(-50%, -50%);" +
                // " border-radius: 40px; background-color: #white; margin-bottom: 50px; transform:" +
                // " translate(-50%, -50%); position: relative;'  id='postDiv" + i +"'> <img" +
                // " src='images/pfp3.png' style='height: 20px; width: 20px;'> <h6 style='margin-top: -25px;" +
                // " margin-left: 25px;'>" + data[i].uid + " </h6><br> <p style='font-size: 10px;'>" + data[i].pContent + "</p> <br> </div>"



            }

            numPosts = data.length


            document.getElementById("postDiv").innerHTML += content
            // document.getElementById('postDiv0').style.marginTop = '100px'



            //
            // position: relative;
            // position: absolute;
            // margin-top: 400px;
            // left: 50%;
            // -ms-transform: translate(-50%, -50%);
            // transform: translate(-50%, -50%);
            // background-color: #3e4c58;
            // height: auto;
            // width: 500px;
            // border-radius: 40px;
            // padding: 20px;
            //
            //


        })
        .catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('Fetch error:', error);
        });



}


function hint(){
    document.getElementById('hint').innerHTML = "Hint: " + questionType[q1].Hint
}



document.addEventListener('DOMContentLoaded', () => {
    // Your existing code inside this event listener
    const popup = document.getElementById("popup");
    const popupHeader = document.getElementById("popup-header");
    const closeBtn = document.getElementById("close-btn");

    let offsetX = 0, offsetY = 0, mouseX = 0, mouseY = 0;

    popupHeader.onmousedown = dragMouseDown;
    // closeBtn.onclick = () => popup.style.display = "none";

    function dragMouseDown(e) {
        e.preventDefault();
        mouseX = e.clientX;
        mouseY = e.clientY;

        document.onmousemove = drag;
        document.onmouseup = stopDrag;
    }

    function drag(e) {
        e.preventDefault();

        offsetX = mouseX - e.clientX;
        offsetY = mouseY - e.clientY;
        mouseX = e.clientX;
        mouseY = e.clientY;

        popup.style.top = (popup.offsetTop - offsetY) + "px";
        popup.style.left = (popup.offsetLeft - offsetX) + "px";
    }

    function stopDrag() {
        document.onmousemove = null;
        document.onmouseup = null;
    }
});

function endPractice(){

    document.getElementById("mainDiv5").style.display = "none"
    document.getElementById("mainDiv6").style.display = "block"
    if (score === 1) {
        document.getElementById('score').innerHTML = "You answered " + score + " question correctly. "
    } else {
        document.getElementById('score').innerHTML = "You answered " + score + " questions correctly. "
    }
    // document.getElementById('score').innerHTML = "You answered " + score + " questions correctly. "


    let queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const Username = urlParams.get('Username')
    const subject = urlParams.get('subject')


// get the current date and time as a string




    // Build formData object.
    let formData = new FormData();
    formData.append('subject', subject);
    formData.append('Username', Username);
    formData.append('score', score);



    //set options for fetch
    let options = {
        method: 'POST',
        body: formData
    };
    fetch('importScores.py', options)
        .then(response => {
            // Check if the request was successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the response as JSON
            return response.json();
        })
        .then(data => {
            // Handle the JSON data
            console.log(data);


            // loadPosts()
            // console.log("Not loading posts!")




        })
        .catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('Fetch error:', error);
        });

}

function returnHome(){
    let queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const Username = urlParams.get('Username')
    const First_Name = urlParams.get('First_Name')
    const Last_Name = urlParams.get('Last_Name')

    window.location.href = "home.html?Username=" + Username  + "&First_Name=" + First_Name  + "&Last_Name=" + Last_Name
}

function redirect(link){
    window.location.href = link
}