
function checkEmailDuplicate(val){
    let info={};
    info.email=val;


    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){

        if(this.readyState ==4 && this.status == 200){
            //set error message display to none
            document.getElementById("user_duplicate_fail_message").style.display = "none";
            console.log("email OK");

        }else if(this.readyState ==4 && this.status == 500){
            //display error message
            document.getElementById("user_duplicate_fail_message").style.display = "block";
            console.log("email exits");
        }

    };


    xhttp.open("POST","/check_for_duplicates_email",true);
    //set content type to JSON
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(info));
}


function manager_checkEmailDuplicate(val){
    let info={};
    info.email=val;


    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){

        if(this.readyState ==4 && this.status == 200){
            //set error message display to none
            document.getElementById("manager_duplicate_fail_message").style.display = "none";
            console.log("email OK");

        }else if(this.readyState ==4 && this.status == 500){
            //display error message
            document.getElementById('manager_duplicate_fail_message').style.display = "block";
            console.log("email exits");
        }

    };


    xhttp.open("POST","/check_for_duplicates_email",true);
    //set content type to JSON
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(info));
}

function checkUsernameDuplicate(val){
    let info={};
    info.username=val;


    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){

        if(this.readyState ==4 && this.status == 200){
            //set error message display to none
            document.getElementById("user_duplicate_fail_message").style.display = "none";
            console.log("username OK");

        }else if(this.readyState ==4 && this.status == 500){
            //display error message
            document.getElementById("user_duplicate_fail_message").style.display = "block";
            console.log("username exits");
        }

    };


    xhttp.open("POST","/check_for_duplicates_username",true);
    //set content type to JSON
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(info));
}


function manager_checkUsernameDuplicate(val){
    let info={};
    info.username=val;


    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){

        if(this.readyState ==4 && this.status == 200){
            //set error message display to none
            document.getElementById("manager_duplicate_fail_message").style.display = "none";
            console.log("username OK");

        }else if(this.readyState ==4 && this.status == 500){
            //display error message
            document.getElementById("manager_duplicate_fail_message").style.display = "block";
            console.log("username exits");
        }

    };


    xhttp.open("POST","/check_for_duplicates_username",true);
    //set content type to JSON
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(info));
}

// -------------manager and user sign up request------------
// received information and clear error message
function check_repeat_pass(){

        document.getElementById("user_psw_repeat_fail_message").style.display="none";
          if(document.getElementById("Vy-Userpassword").value === document.getElementById("Vy-repeatedpassword").value){
            document.getElementById("Vy_user_signup_fail").style.display="none";
          }else{
              document.getElementById("Vy_user_signup_fail").style.display="block";
          }

}

function manger_check_pass(){

    document.getElementById('manager_password_fail_message').style.display='none';
    document.getElementById('manager_psw_repeat_fail_message').style.display='none';
      if(document.getElementById('Vy-Managerpassword').value === document.getElementById('Vy_manager_repeat_password').value){
        document.getElementById('Vy_manager_signup_fail').style.display='none';
      }else{
          document.getElementById('Vy_manager_signup_fail').style.display='block';
      }

  }


// submit_manager_signup ()

function submit_manager_signup(){
    //perform client side validation
    // m_clearErrorMessage();
    // m_clearErrorMessage1();
    // m_clearErrorMessage2();
    // m_clearErrorMessage3();
    // m_clearErrorMessage4();
    // m_clearErrorMessage5();
    // m_clearErrorMessage6();
    // m_clearErrorMessage7();
    // m_clearErrorMessage8();
    // m_clearErrorMessage9();

    let first_name = document.getElementById("Vy-Managerfirstname").value;
    let last_name = document.getElementById("Vy-Managerlastname").value;
    let username=document.getElementById("Vy-Managerusername").value;
    let phone = document.getElementById("Vy-Managerphone").value;
    let email = document.getElementById("Vy-Manageremail").value;
    let DOB = document.getElementById("Vy-ManagerDOB").value;
    let address = document.getElementById("Vy-Manageraddress").value;
    // console.log(address);
    let password = document.getElementById("Vy-Managerpassword").value;
    let psw_repeat = document.getElementById("Vy_manager_repeat_password").value;



    // console.log(first_name);
      if (first_name.length <1 || last_name.length <1 || username.length <1 ||
        phone.length <1 || email.length <1 || DOB.length <1 ||
        address.length <1 || password.length <1 || psw_repeat.length <1 ||psw_repeat !== password) {

        //add like submit_user_signup
        if(first_name.length<1){

            document.getElementById("manager_firstname_fail_message").style.display = "block";
        }

        if(last_name.length<1){

            document.getElementById("manager_lastname_fail_message").style.display = "block";
        }

        if(username.length<1){

            document.getElementById("manager_username_fail_message").style.display = "block";
        }

        if(phone.length<1){

            document.getElementById("manager_phone_fail_message").style.display = "block";

        }

        if(email.length<1){
            document.getElementById("manager_email_fail_message").style.display = "block";

        }

        if(DOB.length<1){
            document.getElementById("manager_DOB_fail_message").style.display = "block";

        }

        if(address.length<1){
            document.getElementById("manager_address_fail_message").style.display = "block";

        }

        if(password.length<1){
            document.getElementById("manager_password_fail_message").style.display = "block";

        }

        if(psw_repeat.length<1 ){
            document.getElementById("manager_psw_repeat_fail_message").style.display = "block";

        }
        if(psw_repeat !== password){
            document.getElementById("Vy_manager_signup_fail").style.display = "block";
        }

        window.alert("Please fill in all fields correctly.");
        return;
    }
    else{
        var info = {};
        info.first_name = first_name;
        info.last_name = last_name;
        info.username = username;
        info.phone = phone;
        info.email = email;
        info.DOB = DOB;
        info.address = address;
        info.password = password;
        info.psw_repeat = psw_repeat;


        //no, no duplicate. insert.
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){

            if(this.readyState ==4 && this.status == 200){
                window.location.href='https://ide-2b9585f19c4541d4867c07204cbf0f8a-8080.cs50.ws/login';

            }else if(this.readyState ==4 && this.status == 500){
                // window.alert('Sign-up failed: Email/username already exists.');
                window.alert('Sign-up failed.');
            }
            //change back to before 5pm
            else if (this.readyState ==4 && this.status == 502){
                // else if (this.responseText==="duplicate"){
             window.alert('Sign-up failed: Email/username already exists.');
            //  document.getElementById("user_duplicate_fail_message").style.display = "block";
            }
        };


        xhttp.open("POST","/manager_signup",true);
        //set content type to JSON
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(JSON.stringify(info));

        }
}
//end change like user
//old version
//             }else if(this.readyState ==4 && this.status == 500){
//                 //yes, there is duplicate
//               window.alert('Sign-up failed: Email/username already exists.');
//             }
//         };

//         xhttp.open("POST","/check_for_duplicates",true);
//         //set content type to JSON
//         xhttp.setRequestHeader("Content-type", "application/json");
//         xhttp.send(JSON.stringify(info));

//     }
// }

// function m_clearErrorMessage(){
//     document.getElementById("Vy_manager_signup_fail2").style.display="none";

// }
// function m_clearErrorMessage1(){
//     m_clearErrorMessage();
//     document.getElementById("manager_firstname_fail_message").style.display="none";

// }
// function m_clearErrorMessage2(){
//      m_clearErrorMessage();
//     document.getElementById("manager_lastname_fail_message").style.display="none";

// }
// function m_clearErrorMessage3(){
//      m_clearErrorMessage();
//     document.getElementById("manager_username_fail_message").style.display="none";

// }
// function m_clearErrorMessage4(){
//      m_clearErrorMessage();
//     document.getElementById("manager_phone_fail_message").style.display="none";

// }
// function m_clearErrorMessage5(){
//      m_clearErrorMessage();
//     document.getElementById("manager_email_fail_message").style.display="none";

// }

// function m_clearErrorMessage6(){
//      m_clearErrorMessage();
//     document.getElementById("manager_DOB_fail_message").style.display = "none";
// }
// function m_clearErrorMessage7(){
//      m_clearErrorMessage();
//     document.getElementById("manager_address_fail_message").style.display="none";

// }
// function m_clearErrorMessage8(){
//      m_clearErrorMessage();
//     document.getElementById("manager_password_fail_message").style.display="none";

// }
// function m_clearErrorMessage9(){
//      m_clearErrorMessage();
//     document.getElementById("manager_psw_repeat_fail_message").style.display="none";

// }
// function m_clearErrorMessage10(){
//     clearErrorMessage();
//     document.getElementById("manager_duplicate_fail_message").style.display="none";
// }




function submit_user_signup(){



    let first_name = document.getElementById("Vy-Userfirstname").value;
    let last_name = document.getElementById("Vy-Userlastname").value;
    let username = document.getElementById("Vy-Userusername").value;
    let phone = document.getElementById("Vy-Userphone").value;
    let email = document.getElementById("Vy-Useremail").value;
    let DOB = document.getElementById("Vy-UserDOB").value;
    let address = document.getElementById("Vy-Useraddress").value;
    let password = document.getElementById("Vy-Userpassword").value;
    let psw_repeat = document.getElementById("Vy-repeatedpassword").value;

     if (first_name.length <1 || last_name.length <1 || username.length <1 ||
        phone.length <1 || email.length <1 || DOB.length <1 ||
        address.length <1 || password.length <1 || psw_repeat.length <1||psw_repeat !== password) {

        if(first_name.length<1){

            document.getElementById("user_firstname_fail_message").style.display = "block";
        }

        if(last_name.length<1){

            document.getElementById("user_lastname_fail_message").style.display = "block";
        }

        if(username.length<1){

            document.getElementById("user_username_fail_message").style.display = "block";
        }

        if(phone.length<1){

            document.getElementById("user_phone_fail_message").style.display = "block";

        }

        if(email.length<1){
            document.getElementById("user_email_fail_message").style.display = "block";

        }

        if(DOB.length<1){
            document.getElementById("user_DOB_fail_message").style.display = "block";

        }

        if(address.length<1){
            document.getElementById("user_address_fail_message").style.display = "block";

        }

        if(password.length<1){
            document.getElementById("user_password_fail_message").style.display = "block";

        }

        if(psw_repeat.length<1){
            document.getElementById("user_psw_repeat_fail_message").style.display = "block";

        }
        if(psw_repeat !== password){
            document.getElementById("Vy_user_signup_fail").style.display = "block";
        }

        window.alert("Please fill in all fields.");
        return;
    }

    else {
        var info = {};
        info.first_name = first_name;
        info.last_name = last_name;
        info.username = username;
        info.phone = phone;
        info.email = email;
        info.DOB = DOB;
        info.address = address;
        info.password = password;
        info.psw_repeat = psw_repeat;


                // no, no duplicate. insert.
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){

            if(this.readyState ==4 && this.status == 200){
                window.location.href='https://ide-2b9585f19c4541d4867c07204cbf0f8a-8080.cs50.ws/login';

            }else if(this.readyState ==4 && this.status == 500){
                // window.alert('Sign-up failed: Email/username already exists.');
                window.alert('Sign-up failed.');
            }
            //change back to before 5pm
            else if (this.readyState ==4 && this.status == 502){
                // else if (this.responseText==="duplicate"){
             window.alert('Sign-up failed: Email/username already exists.');
            //  document.getElementById("user_duplicate_fail_message").style.display = "block";
            }
            //end change back
        };


        xhttp.open("POST","/user_signup",true);
        //set content type to JSON
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(JSON.stringify(info));
    }
}


function clearErrorMessage(){
    document.getElementById("Vy_user_signup_fail2").style.display="none";

}
function clearErrorMessage1(){
    clearErrorMessage();
    document.getElementById("user_firstname_fail_message").style.display="none";

}
function clearErrorMessage2(){
     clearErrorMessage();
    document.getElementById("user_lastname_fail_message").style.display="none";

}
function clearErrorMessage3(){
     clearErrorMessage();
    document.getElementById("user_username_fail_message").style.display="none";

}
function clearErrorMessage4(){
     clearErrorMessage();
    document.getElementById("user_phone_fail_message").style.display="none";

}
function clearErrorMessage5(){
     clearErrorMessage();
    document.getElementById("user_email_fail_message").style.display="none";

}

function clearErrorMessage6(){
     clearErrorMessage();
    document.getElementById("user_DOB_fail_message").style.display = "none";
}
function clearErrorMessage7(){
     clearErrorMessage();
    document.getElementById("user_address_fail_message").style.display="none";

}
function clearErrorMessage8(){
     clearErrorMessage();
    document.getElementById("user_password_fail_message").style.display="none";

}
function clearErrorMessage9(){
     clearErrorMessage();
    document.getElementById("user_psw_repeat_fail_message").style.display="none";

}
function clearErrorMessage10(){
    clearErrorMessage();
    document.getElementById("user_duplicate_fail_message").style.display="none";
}

// ----------------manager and user sign up request finish-----------------




function get_history_user() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          var data=JSON.parse(this.responseText);
            document.getElementById("table_body").innerHTML='';
            for (var i=0; i<Object.keys(data).length; i++) {
                document.getElementById("table_body").innerHTML+=
                `<tr>
                  <td>${data[i].first_name}</td>
                  <td>${data[i].last_name}</td>
                 </tr>
                `;
            }
        }
    };
    xhttp.open("GET", "/users/get_history_user", true);
    xhttp.send();

}

var adminVue = new Vue({
    el: "#app",
    data: {
        // ------------admin data--------------------
        role: 0,

        admin_name: '',
        admin_DOB: '',
        admin_address: '',
        admin_phone: '',
        admin_email: '',

        adminProfile:{},
        adminProfile2:{},


        admin_checkin_history:[],
        admin_checkin_history_venue:[],
        admin_show_popup6: false,
        admin_show_popup7:false,

        show_dropdown_account: false,
        hotspot_selected: true, //hotspot tab is selected by default when login
        // admin_view_hotspot_selected:true,
        admin_add_hotspot_selected: false,
        admin_delete_hotspot_selected: false,
        Admin_show_all_hotspots:true,
        admin_show_hotspot_list:false,
        admin_show_active_hotspots_only:false,
        admin_show_update_profile:false,
        admin_show_profile:false,

        // for admin search for venues---------
        admin_search_word: "",
        admin_search_word_venue:"",
        admin_search_word_manager2:"",
        admin_search_word_person:"",

        admin_choice: -1,
        admin_venue_choices_id:-1,
        admin_venue_list:[],
        // for admin search for venues end---------


        // -----admin add hotspot----------
        admin_newhotspot_start_date: "",
        admin_newhotspot_start_time:"",
        admin_newhotspot_end_date:"",
        admin_newhotspot_end_time:"",
        // admin_newhotspot_timeframe: -1,
        // -----admin add hotspot end------


        // -----admin reset hotspot---
        admin_reset_hotspot_start_date: "",
        admin_reset_hotspot_start_time:"",
        admin_reset_hotspot_end_date: "",
        admin_reset_hotspot_end_time:"",
        // ---admin reset hotspot end-------------

        people_selected:false,
        admin_show_personal_accounts:false,
        admin_show_business_accounts:false,
        admin_people_list: [],
        // admin_search_person_selected: true,
        // admin_add_person_selected:false,
        // admin_delete_person_selected:false,
        // admin_people_view_checkin_history_selected:false,



        venue_selected: false,
        venue_search_selected: true,
        venue_add_venue_selected:false,
        venue_delete_venue_selected:false,
        admin_venue_view_checkin_history_selected: false,

        // popups--------
        admin_show_popup:false,
        admin_show_add_venue_popup:false,
        admin_show_reset_timeframe_popup:false,
        admin_add_hotspot_popup:false,
        admin_edit_manager_popup: false,
        admin_show_history_person_popup:false,
        admin_show_history_venue_popup:false,

        // -----edit manager----------
        admin_manager_list: [],
        admin_venueID_chosen:-1,
        admin_managerID_chosen:-1,



        // ------------edit person---
        admin_personID_chosen: -1,




        // --------search for managers----------
        admin_search_word_manager: "",
        // -------search for managers end----------

        new_venue_coordinates: [],
        new_venue_address: '',
        queryVenue_id:-1,
        queryVenue_code:-1,
        hotspots_list: [],
        admin_hotspotID_chosen: -1,




        // account_dropdown_list: [{title:"Manage account", url:""}, {title:"Create new admin", url:""}, {title:"Logout", url:""}],
        // firstname: "",
        // lastname: "",
        // userID:"",
        // postcode: "",
        // phone: "",
        // // people: [{userID: "a1", firstname:"John", lastname:"Smith", postcode:"5000", phone:"12345678",address:"10 haha Road Lalaland"},{userID: "a2", firstname:"Eve", lastname:"Smith", postcode:"5000", phone:"98765432",address:"10 haha Road Lalaland"} ],
        // fake_hotspots: [{ID:"#12345", name:"Charlie's chocolate factory", address:"3 Chocolate Fountain Road, Marshmellow Road, Sugartown", timeframe:"7days"}],
        // searchPersonResult: [],


        // ------------------LONG--------------------

        history_items: ['Number', 'Date', 'Place', 'Address', 'Warning'],
        history_individual: [],


        chosen_service:'hotspots',
        chosen_checkin:'',
        update_profile:false,
        change_color:'profile',
        individual: {
            first_name:'',
            last_name:'',
            DOB:'',
            address: '',
            email: '',
            phone: '',
            username: ''
        },
        code_type:0,
        checkin:{},
        nav_hotspots:true,
        nav_checkin:false,
        nav_history:false,

        // --------------------VY--------------------------
        welcome:'mainpage',
        slogan_size:'100',
        curr_position: {longitude:0,latitude:0},

        // -----------------------Chris-----------------------
        // checkin history
        // move slider to control of number of history display
        show_num_entries_venue: 50,

        // fake checkin history
        checkinv: [
            {checkin_date: '2021-06-03', time: '01:22:57'},
            {checkin_date: '2021-06-06', time: '01:22:57'},
            {checkin_date: '2021-06-06', time: '01:22:57'},
            {checkin_date: '2021-06-06', time: '01:22:57'},
            {checkin_date: '2021-06-07', time: '01:22:57'},
        ],

        //manage venue information
        managev: {
            name : '',
            number_venue: '',
            street : '',
            suburb : '',
            postcode: '',
            city: '',
            state: '',
            longitude: '',
            latitude: '',
        },

        // show "Waiting for approval from Health Official" after clicked submit
        approval: 'Waiting for approval from Health Official',

        // profile - venue
        venue: {
            first_name: '',
            last_name: '',
            DOB:'',
            email: '',
            address: '',
            phone: '',
            username: ''
        },

        manage_update_venue: ''

    },

    methods: {

// --------------admin method-----------------------------
        updateAdmin:function(){
            let p = document.getElementById("admin_pass").value;
            let rp = document.getElementById("admin_rep_pass").value;
            if(p !== rp){
                window.alert("Password doesn't match");
                return;
            }
            if(p.length < 8){
                window.alert("Password needs to have at least 8 charactors.");
                return;
            }
            let info=adminVue.adminProfile2;
            info.password = p;
            // update_profile
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    alert("Your account has been successfully updated. Please refresh page.");
                    window.location.reload();

                }else if(this.readyState == 4 && this.status == 500){
                    alert("Failed to update.");
                }
            };
            xhttp.open("POST", "/admin/update_profile", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(info));



        },
        admin_show_profile_func:function(){
            //show the div
            this.admin_show_profile = true;
            this.admin_show_profile2 = true;
            this.admin_show_update_profile = false;
            this.hotspot_selected = false;
            this.people_selected = false;
            this.venue_selected = false;
            this.admin_show_hotspot_list = false;
            document.getElementById('map').style.display='none';

            this.update_profile='profile';

            getAdminProfile();
        },

         admin_show_profile_func2: function(){
             this.admin_show_update_profile=false;
             this.admin_show_profile2=true;
             this.update_profile='profile';
         },

        admin_show_update_profile_func: function(){
            //show the div
            this.admin_show_update_profile = true;
            this.admin_show_profile2 = false;
            this.update_profile='update';


        },

        adminUpdateManager: function(){
          let info={};
          let names = this.admin_name.split(" ");
          info.first_name = names[0];
          info.last_name = names[names.length-1];
          info.DOB = this.admin_DOB;
          info.address= this.admin_address;
          info.phone = this.admin_phone;
          info.email = this.admin_email;
          info.id = adminVue.admin_managerID_chosen;

            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    alert("Business account successfully updated. Please refresh page.");

                }else if(this.readyState == 4 && this.status == 500){
                    alert("Failed to update.");
                }
            };
            xhttp.open("POST", "/admin/update_manager", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(info));
        },


        adminUpdatePerson: function(){
          let info={};
          let names = this.admin_name.split(" ");
          info.first_name = names[0];
          info.last_name = names[names.length-1];
          info.DOB = this.admin_DOB;
          info.address= this.admin_address;
          info.phone = this.admin_phone;
          info.email = this.admin_email;
          info.id = adminVue.admin_personID_chosen;

            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    alert("Personal account successfully updated. Please refresh page.");

                }else if(this.readyState == 4 && this.status == 500){
                    alert("Failed to update.");
                }
            };
            xhttp.open("POST", "/admin/update_user", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(info));
        },

        getClass: function(a){
            if(a === "yes"){
                this.class="admin_red";
                return this.class;
            }
        },

        admin_get_all_people: function(){
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    adminVue.admin_people_list = JSON.parse(this.response);
                }
            };
            xhttp.open("GET", "/admin/getPeople", true);
            xhttp.send();
        },
        admin_show_personal_accounts_func: function(){
            this.admin_show_hotspot_list = false;
            this.admin_show_personal_accounts = true;
            this.admin_show_business_accounts = false;
            document.getElementById("map").style.display="none";

        },

        admin_show_business_accounts_func: function(){
            this.admin_show_hotspot_list = false;
            this.admin_show_personal_accounts = false;
            this.admin_show_business_accounts = true;
            document.getElementById("map").style.display="none";
            this.adminGetManagers();

        },

        adminRemoveManagerFromVenue: function(){
            let info={};
            info.venueID = this.admin_venueID_chosen;
            console.log(info.admin_venueID_chosen);
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    alert("Manager succuessfully removed. Refresh page.");
                    window.location.reload();
                }else if(this.readyState == 4 && this.status == 500){
                    alert("Failed to remove manager.");
                }
            };
            xhttp.open("POST", "/admin/remove_manager_from_venue", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(info));
        },
        admin_edit_manager_confirm: function(){

            let info={};
            info.venueID = this.admin_venueID_chosen;
            info.managerID = this.admin_choice;
            console.log(info.managerID);
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    alert("Manager succuessfully updated. Refresh page.");
                    window.location.reload();
                }else if(this.readyState == 4 && this.status == 500){
                    alert("Failed to update manager.");
                }
            };
            xhttp.open("POST", "/admin/add_manager", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(info));
        },

        adminGetManagers: function(){
            this.admin_manager_list = [];

            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    adminVue.admin_manager_list = JSON.parse(this.response);
                    adminVue.admin_manager_list.forEach((el) =>{

                        let name = "";
                        if(el.first_name){
                            name += el.first_name;
                        }
                        if(el.last_name){
                            name += " "+el.last_name;
                        }
                        el.name = name;

                        if(!el.venue){
                            el.venue =" ";
                        }else{
                            el.venue = el.venue + "(Venue ID: " + el.venue_id + ")";
                        }


                    });
                }
            };
            xhttp.open("GET", "/admin/get_managers", true);
            xhttp.send();

        },

        admin_close_popup: function(){
            this.admin_show_popup=false;
            this.admin_add_hotspot_popup =false;
            this.admin_show_reset_timeframe_popup=false;
            this.admin_show_add_venue_popup=false;
            this.admin_edit_manager_popup= false;
            this.admin_show_history_person_popup=false;
            this.admin_show_history_venue_popup =false;
            this.admin_show_popup6 = false;
            this.admin_show_popup7=false;
        },
        admin_add_new_hotspot: function(){
            console.log("ran function admin add new hotspot");
            let info ={};

            if(this.admin_choice !== -1){
                info.id = this.admin_choice;
            }else{
                alert("please select a venue.");
                return;
            }

            if(this.admin_newhotspot_start_date.length>0){
                info.start_date = this.admin_newhotspot_start_date;
            }else{
                alert("please select a start date.");
                return;
            }
            if(this.admin_newhotspot_start_time.length > 0){
                info.start_date = info.start_date + " " + this.admin_newhotspot_start_time;
            }else{
                alert("please select a start time.");
                return;
            }

            if(this.admin_newhotspot_end_date.length>0){
                info.end_date = this.admin_newhotspot_end_date;
            }else{
                alert("please select a end date.");
                return;
            }
            if(this.admin_newhotspot_end_time.length > 0){
                info.end_date = info.end_date + " " + this.admin_newhotspot_end_time;
            }else{
                alert("please select a end time.");
                return;
            }
            // if(this.admin_newhotspot_timeframe !== -1){
            //     info.timeframe = this.admin_newhotspot_timeframe;
            // }else{
            //     alert("please set timeframe.");
            //     return;
            // }

            var xhttp = new XMLHttpRequest();
            var _this = this;
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    alert("Hotspot succuessfully updated. Refresh page.");
                    window.location.reload();
                }else if(this.readyState == 4 && this.status == 500){
                    alert("Failed to add new hotspot to database.");
                }
            };
            xhttp.open("POST", "/admin/add_new_hotspot", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(info));
        },

        adminGetVenues: function(){
            //empty list first
            adminVue.admin_venue_list = [];
            // console.log("run function: adminGetVenues");


            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    adminVue.admin_venue_list = JSON.parse(this.response);
                    adminVue.admin_venue_list.forEach((el) =>{
                        let address = "";
                        let manager = "";
                        if(el.number_venue){
                            address += el.number_venue;
                        }
                        if(el.street){
                            address += " "+el.street;
                        }
                        if(el.suburb){
                            address += " "+ el.suburb;
                        }
                        if(el.postcode){
                            address += " "+el.postcode;
                        }
                        if(el.state){
                            address += " "+el.state;
                        }
                        if(el.first_name){
                            manager += el.first_name;
                        }
                        if(el.last_name){
                            manager += " " + el.last_name;
                        }
                        el.address = address;
                        el.manager = manager;
                        // console.log(el.name);

                    });
                }
            };
            xhttp.open("GET", "/admin/get_venues", true);
            xhttp.send();

        },



        chooseHotspot: function(){
            this.hotspot_selected = true;
            this.people_selected = false;
            this.venue_selected = false;
            this.admin_show_hotspot_list = false;
            document.getElementById('map').style.display='block';
            this.admin_show_update_profile = false;
            this.admin_show_profile = false;
            this.admin_show_profile2 = true;
            // var xhttp = new XMLHttpRequest();
            // xhttp.onreadystatechange = function() {
            //     if (this.readyState == 4 && this.status == 200) {
            //       // Typical action to be performed when the document is ready:

            //         document.getElementById("admin_workspace").innerHTML=this.responseText;

            //     }
            // };
            // xhttp.open("GET", "/admin/get_hotspot_page", true);
            // xhttp.send();
        },

        admin_get_all_hotspots: function(){
            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    let address = "";
                    adminVue.hotspots_list=JSON.parse(this.responseText);
                    adminVue.hotspots_list.forEach((el) =>{
                        address = "";
                        if(el.active === 0){
                            el.active = 'no';
                        }else{
                            el.active = 'yes';
                        }

                        if(el.number_venue){
                            address += el.number_venue;
                        }
                        if(el.street){
                            address += " "+el.street;
                        }
                        if(el.suburb){
                            address += " "+ el.suburb;
                        }
                        if(el.postcode){
                            address += " "+el.postcode;
                        }
                        if(el.state){
                            address += " "+el.state;
                        }
                        el.address = address;
                        // console.log(el.address);

                    });

                }

            };
            xhttp.open("GET", "/admin/get_all_hotspots", true);
            xhttp.send();
        },


        admin_show_hotspot_list_func: function(){
            this.admin_show_hotspot_list = true;
            document.getElementById("map").style.display="none";
            this.admin_get_all_hotspots();
        },
        admin_showmap: function() {
            document.getElementById("map").style.display="block";
            // document.getElementById("hotspot_list").style.display="none";
            this.admin_show_hotspot_list = false;

        },

        admin_extend_timeframe: function(){

            if(this.admin_reset_hotspot_start_date.length <1){
                alert("please select a start date.");
                return;
            }
            if(this.admin_reset_hotspot_start_time.length <1){
                alert("please select a start time.");
                return;
            }

            if(this.admin_reset_hotspot_end_date.length<1){
                alert("please select a end date.");
                return;
            }
            if(this.admin_reset_hotspot_end_time.length <1){
                alert("please select a end time.");
                return;
            }

            let info ={};
            info.start_date = this.admin_reset_hotspot_start_date + " " + this.admin_reset_hotspot_start_time;
            info.end_date = this.admin_reset_hotspot_end_date+" "+this.admin_reset_hotspot_end_time;
            info.exID = this.admin_hotspotID_chosen;
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    alert("Timeframe succuessfully updated. Please refresh page.");
                }
            };
            xhttp.open("POST", "/admin/extend_timeframe", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(info));
        },

        admin_add_hotspot_popup_func: function(){
            this.admin_add_hotspot_popup = true;
            this.admin_show_popup=true;

            //get list of venues
            this.adminGetVenues();
        },





        choosePeople: function(){
            this.hotspot_selected = false;
            this.people_selected = true;
            this.venue_selected = false;
            this.admin_show_personal_accounts = true;
            document.getElementById('map').style.display='none';
            this.admin_get_all_people();
            this.admin_show_update_profile = false;
            this.admin_show_profile = false;
            this.admin_show_profile2 = false;
        },

        chooseVenue: function(){
            this.hotspot_selected = false;
            this.people_selected = false;
            this.venue_selected = true;
            this.admin_show_hotspot_list = false;
            document.getElementById('map').style.display='none';
            this.admin_show_update_profile = false;
            this.admin_show_profile = false;
            this.admin_show_profile2 = false;

            //get all venues
            this.adminGetVenues();
        },


        // searchPerson: function(){
        //     this.searchPersonResult = [];
        //     for(var i=0;i<this.people.length; i++){

        //         if(this.people[i].userID === this.userID || this.people[i].firstname === this.firstname ||this.people[i].lastname === this.lastname || this.people[i].postcode === this.postcode || this.people[i].phone === this.phone){
        //             this.searchPersonResult.push(this.people[i]);
        //         }
        //     }
        // },

        // //get the page for updating account
        // admin_manageAccount: function(){
        //     var xhttp = new XMLHttpRequest();
        //     xhttp.onreadystatechange = function() {
        //         if (this.readyState == 4 && this.status == 200) {
        //             // get_profile_user();
        //         }
        //     };
        //     xhttp.open("GET", "/admin/manage_account", true);
        //     xhttp.send();
        // },



        /////////LONG's method/////////////
        updateUser: function() { //REUSE FOR 3 TYPES OF USERS with some changes (UPDATE_PROFILE)
            //POST
            // write HTTP post call
            var xhttp = new XMLHttpRequest();
            var _this = this;
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var data=this.responseText;
                    if (data==='updated successfully') {
                        document.getElementById('profile_individual_update').innerText="Updated successfully";
                    } else {
                        document.getElementById("profile_individual_update").innerText="Update failed!";
                    }
                }
            };
            xhttp.open("POST", "/users/update_user", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(this.individual));

        },

        get_profile_user: function () { //REUSE FOR 3 TYPES OF USERS with some changes (GET_PROFILE)
            var xhttp = new XMLHttpRequest();
            var _this = this;
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    // Typical action to be performed when the document is ready:
                    var data=JSON.parse(this.responseText);
                    _this.individual.first_name=data[0].first_name;
                    _this.individual.last_name=data[0].last_name;
                    _this.individual.phone=data[0].phone;
                    _this.individual.address=data[0].address;
                    _this.individual.DOB=data[0].DOB;
                    _this.individual.email=data[0].email;
                    _this.individual.username=data[0].username;

                }else if(this.readyState == 4 && this.status == 401){

                    window.location.href="https://ide-2b9585f19c4541d4867c07204cbf0f8a-8080.cs50.ws/login";
                    window.alert("Please log in.");
                }
            };
            xhttp.open("GET", "/users/get_profile_user", true);
            xhttp.send();
        },

        get_code_type: function(e) {
            e.preventDefault();
            var xhttp = new XMLHttpRequest();
            var _this = this;
            var d_checkin=new Date();
            var check=false;
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var data=this.responseText;
                    if (data==="successfully checkin") {
                        document.getElementById("information_code_typing").innerText='Successfully checkin';
                    } else {
                        document.getElementById("information_code_typing").innerText='Checkin failed!';
                    }

                }
            };
            // this.history+=checkin;
            xhttp.open("GET", "/users/get_code_type?code="+_this.code_type, true);
            xhttp.send();
        },

        get_history_individual: function() {
            var xhttp = new XMLHttpRequest();
            var _this = this;

            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    // Typical action to be performed when the document is ready:
                    var data=JSON.parse(this.responseText);
                    var checkin={};
                    _this.history_individual=[];

                    // var number=1;
                    for (var i=data.length-1; i>=0; i--) {
                        checkin={Number: data.length-i,
                                Date: data[i].Date,
                                Place: data[i].name,
                                Address: data[i].number_venue+" "+data[i].street+" "+data[i].suburb+" "+data[i].postcode+" "+data[i].city+" "+data[i].state,
                                Warning:'-'
                        };
                        if (data[i].id!==null) {
                            checkin.Warning='SOS';
                        } else {
                            checkin.Warning='-';
                        }

                        _this.history_individual.push(checkin);
                    }

                }
            };
            xhttp.open("GET", "/users/get_history_individual", true);
            xhttp.send();
        },
            //GPS

            showError: function (error) {

                  switch(error.code) {
                    case error.PERMISSION_DENIED:
                      document.getElementById("information_GPS").innerText = "User denied the request for Geolocation.";
                      break;
                    case error.POSITION_UNAVAILABLE:
                      document.getElementById("information_GPS").innerText = "Location information is unavailable.";
                      break;
                    case error.TIMEOUT:
                      document.getElementById("information_GPS").innerText = "The request to get user location timed out.";
                      break;
                    case error.UNKNOWN_ERROR:
                      document.getElementById("information_GPS").innerText = "An unknown error occurred.";
                      break;
                  }
            },

          getPosition: function (position){

                    this.curr_position.latitude = position.coords.latitude;
                    this.curr_position.longitude = position.coords.longitude;

                    var _this=this;
                    var xhttp = new XMLHttpRequest();
                    xhttp.onreadystatechange = function() {
                        if (this.readyState == 4 && this.status == 200) {
                            var data=this.responseText;
                            if (data==="successfully checkin") {
                                document.getElementById("information_GPS").innerText='Successfully checkin';
                            } else {
                                document.getElementById("information_GPS").innerText='Checkin failed!';
                            }
                        }
                    };
                      xhttp.open("POST", "/users/getgps", true);
                      xhttp.setRequestHeader("Content-type", "application/json");
                      xhttp.send(JSON.stringify(_this.curr_position));

          },
          sendLocation: function (){
                  if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(this.getPosition);
                    // navigator.geolocation.getCurrentPosition( showError);
                    // document.getElementById("information_GPS").innerText="Hello";


                  } else {
                    document.getElementById("information_GPS").innerText = "Geolocation is not supported by this browser.";
                  }
            },

    /////////////Chris' method////////////////////////

    // show venue profile
        get_profile_venue: function () { //REUSE FOR 3 TYPES OF USERS with some changes (GET_PROFILE)
            var xhttp = new XMLHttpRequest();
            var _this = this;
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    // Typical action to be performed when the document is ready:
                    var data=JSON.parse(this.responseText);
                    _this.venue.first_name=data[0].first_name;
                    _this.venue.last_name=data[0].last_name;
                    _this.venue.DOB=data[0].DOB;
                    _this.venue.phone=data[0].phone;
                    _this.venue.address=data[0].address;
                    _this.venue.email=data[0].email;
                    _this.venue.username=data[0].username;
                }else if(this.readyState == 4 && this.status == 401){

                    window.location.href="https://ide-2b9585f19c4541d4867c07204cbf0f8a-8080.cs50.ws/login";
                    window.alert("Please log in.");
                }
            };
            xhttp.open("GET", "/venue/get_vprofile", true);
            xhttp.send();
        },

        // update venue profile
        send_profile: function() { //REUSE FOR 3 TYPES OF USERS with some changes (UPDATE_PROFILE)
            //POST
            // write HTTP post call
            var xhttp = new XMLHttpRequest();
            var _this = this;
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    // get_profile_user();
                    var data=this.responseText;
                    if (data==='updated successfully') {
                        document.getElementById('profile_individual_update').innerText="Updated successfully";
                    } else {
                        document.getElementById("profile_individual_update").innerText="Update failed!";
                    }
                }
            };
            xhttp.open("POST", "/venue/update_profile_venue", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(this.venue));

        },

        // submit button show "Waiting for approval from Health Official"  in p tag
        send_venueinfo: function(e) {
            // stop refresh
            e.preventDefault();
            // show
            var str = "Waiting for approval from Health Official";
            var enc = window.btoa(str);
            var dec = window.atob(enc);
            document.getElementById("submit_clicked").innerHTML = dec;
        },

        // post venue information to change vue
        get_venueinfo: function () {
            var xhttp = new XMLHttpRequest();
            var _this = this;
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    // Typical action to be performed when the document is ready:
                    var data=JSON.parse(this.responseText);
                    _this.managev.name=data[0].name; // business name
                    _this.managev.number_venue=data[0].number_venue;
                    _this.managev.street=data[0].street;
                    _this.managev.suburb=data[0].suburb;
                    _this.managev.postcode=data[0].postcode;
                    _this.managev.city=data[0].city;
                    _this.managev.state=data[0].state;
                }
            };
            xhttp.open("GET", "/venue/get_venueinfo", true);
            xhttp.send();
        },

        // show checkin history
        get_checkinhistory: function () {
            var xhttp = new XMLHttpRequest();
            var _this = this;
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    // Typical action to be performed when the document is ready:
                    var data=JSON.parse(this.responseText);
                    _this.checkinv=[];
                    // show history
                    for (var i=0; i<data.length; i++) {
                        var checkin={};
                        checkin.DatePart=data[i].DatePart;
                        checkin.TimePart=data[i].TimePart;
                        _this.checkinv.push(checkin);
                    }
                }
            };
            xhttp.open("GET", "/venue/get_checkin", true);
            xhttp.send();
        },
    },

    computed: {
        // ------------------------Ran's computed-----------------------------
        admin_venue_List_sorted:function(){

            let result=[];
            if(this.admin_search_word_venue == ""){
                return this.admin_venue_list;
            }else{
                this.admin_venue_list.forEach((item)=>{

                    if(String(item.venue_id).match(this.admin_search_word_venue)){
                        result.push(item);
                    }

                    if(item.name.match(this.admin_search_word_venue)){
                        result.push(item);
                    }
                    if(item.address.match(this.admin_search_word_venue)){
                        result.push(item);
                    }
                    if(String(item.code).match(this.admin_search_word_venue)){
                        result.push(item);
                    }
                    if(item.manager.match(this.admin_search_word_venue)){
                        result.push(item);
                    }
                });
            }

            return result;
        },
        admin_manager_list_sorted: function(){
            let result=[];
            if(this.admin_search_word_manager2 == ""){
                return this.admin_manager_list;
            }else{
                this.admin_manager_list.forEach((item)=>{

                    if(String(item.manager_id).match(this.admin_search_word_manager2)){
                        result.push(item);
                    }

                    if(item.name.match(this.admin_search_word_manager2)){
                        result.push(item);
                    }
                    if(item.email.match(this.admin_search_word_manager2)){
                        result.push(item);
                    }
                    if(String(item.phone).match(this.admin_search_word_manager2)){
                        result.push(item);
                    }
                });
            }

            return result;
        },

        admin_people_list_sorted: function(){
            let result=[];
            if(this.admin_search_word_person == ""){
                return this.admin_people_list;
            }else{
                this.admin_people_list.forEach((item)=>{

                    if(String(item.id).match(this.admin_search_word_person)){
                        result.push(item);
                    }

                    if(item.name.match(this.admin_search_word_person)){
                        result.push(item);
                    }
                    if(item.address.match(this.admin_search_word_person)){
                        result.push(item);
                    }
                    if(item.email.match(this.admin_search_word_person)){
                        result.push(item);
                    }
                });
            }

            return result;

        },

        admin_search_result_manager: function(){
            let result=[];
            if(this.admin_search_word_manager == ""){
                return this.admin_manager_list;
            }else{
                this.admin_manager_list.forEach((item)=>{
                    // console.log(item.manager_id);
                    if(String(item.manager_id).match(this.admin_search_word_manager)){
                        result.push(item);
                    }

                    if(item.name.match(this.admin_search_word_manager)){
                        result.push(item);
                    }
                });
            }

            return result;
        },


        hotspots_list_sorted: function(){
            if(this.admin_show_active_hotspots_only){
                let result = [];
                this.hotspots_list.forEach((item)=>{
                    if(item.active === 'yes'){
                        result.push(item);
                    }
                });

                return result;
            }else{
                return this.hotspots_list;
            }

        },

        admin_search_result:function(){
            let result=[];
            if(this.admin_search_word == ""){
                return this.admin_venue_list;
            }else{
                for(i=0; i<this.admin_venue_list.length;i++){
                    let a;
                    if(this.admin_venue_list[i].name !== null){
                        a = this.admin_venue_list[i].name;
                        if(a.match(this.admin_search_word)){
                            result.push(this.admin_venue_list[i]);
                        }
                    }
                    if(this.admin_venue_list[i].venue_id !== null){
                        a = String(this.admin_venue_list[i].venue_id);
                        if(a.match(this.admin_search_word)){
                            result.push(this.admin_venue_list[i]);
                        }
                    }
                    if(this.admin_venue_list[i].suburb !== null){
                        a = this.admin_venue_list[i].suburb;
                        if(a.match(this.admin_search_word)){
                            result.push(this.admin_venue_list[i]);
                        }
                    }
                    if(this.admin_venue_list[i].postcode !== null){
                        a = String(this.admin_venue_list[i].postcode);
                        if(a.match(this.admin_search_word)){
                            result.push(this.admin_venue_list[i]);
                        }
                    }
                    if(this.admin_venue_list[i].state !== null){
                        a = this.admin_venue_list[i].state;
                        if(a.match(this.admin_search_word)){
                            result.push(this.admin_venue_list[i]);
                        }
                    }
                }
                return result;
            }

        },

        //  admin_view_hotspot_show: function(){
        //      if(this. hotspot_selected ==  true && this.admin_view_hotspot_selected == true){
        //         return true;
        //      }else{
        //         return false;
        //      }
        //  },

        //  admin_add_hotspot_show: function(){
        //      if(this. hotspot_selected ==  true && this.admin_add_hotspot_selected == true){
        //         return true;
        //      }else{
        //         return false;
        //      }
        //  },

        //  admin_venue_search_show: function(){
        //      if(this. venue_selected ==  true && this.venue_search_selected == true){
        //         return true;
        //      }else{
        //         return false;
        //      }
        //  },

        //  admin_delete_hotspot_show: function(){
        //      if(this. hotspot_selected ==  true && this.admin_delete_hotspot_selected == true){
        //         return true;
        //      }else{
        //         return false;
        //      }
        //  },


    }
});

// --------------map box showing hotspots---------------

//to store hotspots geo location
var geojson = {   //MAPS USED for 3 types of users
  type: 'FeatureCollection',
  features: []
};
mapboxgl.accessToken = 'pk.eyJ1Ijoid2RjbHZjciIsImEiOiJja29ndngxeTAwZWlkMndydGhuZWxjanRrIn0.vP5stZqvUDNWXsOqzOPbyg';
var map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: [138.599503, -34.921230], // starting position [lng, lat]
// adelaide position url: https://www.latlong.net/category/cities-14-15.html
zoom: 12 // starting zoom
});

//load map with hotspots data retrived from database
map.on('load', function() {
    document.getElementById("hotspots_button_indi").onclick= function() {
        map.resize();
    };
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        //get response
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.response);
            for(let i=0;i<data.length; i++){
                let temp={
                        type: 'Feature',
                        geometry: {
                          type: 'Point',
                          coordinates: [0, 0]
                        },
                        properties: {
                          title: ' ',
                          description: ' ',
                          start_date: '',
                          end_date:'',
                          hotspot_id: 0,
                        }
                      };
                temp.geometry.coordinates[0] = data[i].longitude;
                temp.geometry.coordinates[1] = data[i].latitude;
                temp.properties.title = data[i].name;
                if(data[i].num_venue){
                    temp.properties.description += data[i].number_venue + " ";
                }
                if(data[i].street){
                    temp.properties.description += data[i].street +' ';
                }
                if(data[i].suburb){
                    temp.properties.description +=data[i].suburb + ' ';
                }

                if(data[i].city){
                    temp.properties.description +=data[i].city + ' ';
                }

                if(data[i].postcode){
                    temp.properties.description +=data[i].postcode + ' ';
                }

                if(data[i].state){
                    temp.properties.description +=data[i].state + ' ';
                }

                temp.properties.start_date=data[i].start_date ;

                temp.properties.end_date = data[i].end_date;
                temp.properties.hotspot_id=data[i].id;


                geojson.features.push(temp);

            }


            //add to map
            map.addSource('single-point', {
                type: 'geojson',
                data: geojson
              });


            map.addLayer({
                id: 'point',
                source: 'single-point',
                type: 'circle',
                paint: {
                  'circle-radius': 10,
                  'circle-color': 'red'
                }
             });

            //set up geocoder
             var geocoder = new MapboxGeocoder({
                // Initialize the geocoder
                accessToken: mapboxgl.accessToken, // Set the access token
                mapboxgl: mapboxgl, // Set the mapbox-gl instance
                marker: false, // Do not use the default marker style
                placeholder: 'Search for places in South Australia', // Placeholder text for the search bar
                // bbox: [-122.30937, 37.84214, -122.23715, 37.89838], // Boundary for Berkeley
                // proximity: {
                // longitude: -122.25948,
                // latitude: 37.87221
                // } // Coordinates of UC Berkeley
                }
            );


            //  search---
                        map.addSource('search', {
                type: 'geojson',
                data: {
                  type: 'FeatureCollection',
                  features: []
                }
              });

              map.addLayer({
                id: 'search_layer',
                source: 'search',
                type: 'circle',
                paint: {
                  'circle-radius': 10,
                  'circle-color': 'blue'
                }
              });

            // Add the geocoder to the map
            map.addControl(geocoder);
            var ecoordinates;
            geocoder.on('result', function(e) {
               map.getSource('search').setData(e.result.geometry);
                ecoordinates = e.result.geometry;
                adminVue.new_venue_coordinates = ecoordinates.coordinates;
                adminVue.new_venue_address = e.result.place_name;
            //   console.log(e.result);
            });

            map.on('click', 'point', function (e) {
                var coordinates = e.features[0].geometry.coordinates.slice();
                var description = e.features[0].properties.description;

                // Ensure that if the map is zoomed out such that multiple
                // copies of the feature are visible, the popup appears
                // over the copy being pointed to.
                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }

                new mapboxgl.Popup()
                .setLngLat(coordinates)
                .setHTML('<h2 style="color:red;"><i class="fab fa-hotjar"></i> Current Hotspot</h2> <h3>' + e.features[0].properties.title + '</h3><p>' + description + '</p>')
                .addTo(map);
                }
            );

            if(adminVue.role == 0){
                map.on('click', 'search_layer', function (e) {
                    new mapboxgl.Popup()
                    .setLngLat(ecoordinates.coordinates)
                    .setHTML('<a href="#" onclick="goto_venue_page_and_add_venue()"><h3>add this venue to database</h3></a>')
                    .addTo(map);
                    }
                );
            }


        }
    };
    xhttp.open("GET", "/get_hotspots", true);
    xhttp.send();

});




// --------------map box showing hotspots finishes ---------------



//////////////////
var geojson1 = {  //REUSE map from HOTSPOTS to HISTORY (individual)
  type: 'FeatureCollection',
  features: []
};
var map1 = new mapboxgl.Map({
container: 'map1', // container id
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: [138.599503, -34.921230], // starting position [lng, lat]
// adelaide position url: https://www.latlong.net/category/cities-14-15.html
zoom: 10 // starting zoom
});

map1.on('load', function() {
    document.getElementById("history_button_indi").onclick= function() {
        map1.resize();
    };
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        //get response
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.response);
            for(let i=0;i<data.length; i++){
                let temp={
                        type: 'Feature',
                        geometry: {
                          type: 'Point',
                          coordinates: [-77.032, 38.913]
                        },
                        properties: {
                          title: 'Mapbox',
                          description: 'Washington, D.C.'

                        }
                      };
                temp.geometry.coordinates[0] = data[i].longitude;
                temp.geometry.coordinates[1] = data[i].latitude;
                temp.properties.title = data[i].name;
                temp.properties.description = data[i].number_venue + " " + data[i].street+ " " + data[i].suburb+ " " +data[i].city+ " " + data[i].postcode+ " " + data[i].state;
                // console.log(temp);

                geojson1.features.push(temp);

            }
            //console.log(geojson.features);

            //add to map
            map1.addSource('single-point', {
                type: 'geojson',
                data: geojson1
              });
            map1.addLayer({
                id: 'point1',
                source: 'single-point',
                type: 'circle',
                paint: {
                  'circle-radius': 7,
                  'circle-color': 'blue'
                }
             });

            map1.on('click', 'point1', function (e) {
                var coordinates = e.features[0].geometry.coordinates.slice();
                var description = e.features[0].properties.description;
                // Ensure that if the map is zoomed out such that multiple
                // copies of the feature are visible, the popup appears
                // over the copy being pointed to.
                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }
                new mapboxgl.Popup()
                .setLngLat(coordinates)
                .setHTML('<h4><i class="fab fa-hotjar" style="color:red;"></i> ' + e.features[0].properties.title + '</h4><p>' + description + '</p>')
                .addTo(map1);
                }
            );
        console.log(geojson1);

        }
    };
    xhttp.open("GET", "/users/get_history_individual", true);
    xhttp.send();

});








// -----------------admin Javascript------------------
//goal: set up user's role, load hotspot data
function getAdminProfile(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            adminVue.adminProfile = JSON.parse(this.response);

            //make a copy, for updating profile
            adminVue.adminProfile2 = JSON.parse(this.response);
        }else if(this.readyState == 4 && this.status == 401){

            window.location.href="https://ide-2b9585f19c4541d4867c07204cbf0f8a-8080.cs50.ws/login";
            window.alert("Please log in.");
        }
    };
    xhttp.open("GET", "/admin/get_admin_profile", true);
    xhttp.send();
}



function admin_view_history_person(el){
    //get person id that is to be edited
    let rIndex = el.parentElement.parentElement.rowIndex;
    // console.log(rIndex);
    let table = document.getElementById("admin_personal_account_table");
    adminVue.admin_personID_chosen = table.rows[rIndex].cells[0].innerHTML;
    // console.log(adminVue.admin_personID_chosen);

    //get person's history
    let info={};
    info.id = adminVue.admin_personID_chosen;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            adminVue.admin_checkin_history = JSON.parse(this.response);
            // console.log(adminVue.admin_checkin_history);
            //concat address
            adminVue.admin_checkin_history.forEach((el) =>{
                        address = "";
                        if(el.isHotspot === 0){
                            el.isHotspot = 'no';
                        }else{
                            el.isHotspot = 'yes';
                        }

                        if(el.number_venue){
                            address += el.number_venue;
                        }
                        if(el.street){
                            address += " "+el.street;
                        }
                        if(el.suburb){
                            address += " "+ el.suburb;
                        }
                        if(el.postcode){
                            address += " "+el.postcode;
                        }

                        el.address = address;
                        // console.log(el.address);

                    });

        }else{
            adminVue.admin_checkin_history= [];
        }
    };
    xhttp.open("POST", "/admin/get_history_person", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(info));


    //show pop up
    adminVue.admin_show_popup = true;
    adminVue.admin_show_history_person_popup = true;

}

function admin_view_history_venue(el){
    //get person id that is to be edited
    let rIndex = el.parentElement.parentElement.rowIndex;
    // console.log(rIndex);
    let table = document.getElementById("admin_venue_table");
    adminVue.admin_venueID_chosen = table.rows[rIndex].cells[0].innerHTML;
    // console.log(adminVue.admin_venueID_chosen);

    //get venue's history
    let info={};
    info.id = adminVue.admin_venueID_chosen;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            adminVue.admin_checkin_history_venue = JSON.parse(this.response);
            // console.log(adminVue.admin_checkin_history_venue);
            adminVue.admin_checkin_history_venue.forEach((el) =>{

                if(el.isHotspot === 0){
                    el.isHotspot = 'no';
                }else{
                    el.isHotspot = 'yes';
                }

            });



        }else{
            adminVue.admin_checkin_history_venue= [];
        }
    };
    xhttp.open("POST", "/admin/get_history_venue", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(info));


    //show pop up
    adminVue.admin_show_popup = true;
    adminVue.admin_show_history_venue_popup = true;

}

function admin_edit_person(el){
    let rIndex = el.parentElement.parentElement.rowIndex;
    let table = document.getElementById("admin_personal_account_table");
    adminVue.admin_personID_chosen = table.rows[rIndex].cells[0].innerHTML;
    adminVue.admin_name = table.rows[rIndex].cells[1].innerHTML;
    adminVue.admin_DOB =  table.rows[rIndex].cells[2].innerHTML;
    adminVue.admin_address =  table.rows[rIndex].cells[3].innerHTML;
    adminVue.admin_phone =  table.rows[rIndex].cells[4].innerHTML;
    adminVue.admin_email =  table.rows[rIndex].cells[5].childNodes[0].innerHTML;


    adminVue.admin_show_popup6 = true;
    adminVue.admin_show_popup = true;

}

function admin_edit_manager_account(el){
    let rIndex = el.parentElement.parentElement.rowIndex;
    let table = document.getElementById("admin_business_account_table");
    adminVue.admin_managerID_chosen = table.rows[rIndex].cells[0].innerHTML;
    adminVue.admin_name = table.rows[rIndex].cells[1].innerHTML;
    adminVue.admin_DOB =  table.rows[rIndex].cells[2].innerHTML;
    adminVue.admin_phone =  table.rows[rIndex].cells[3].innerHTML;
    adminVue.admin_email =  table.rows[rIndex].cells[4].childNodes[0].innerHTML;

    adminVue.admin_show_popup7 = true;
    adminVue.admin_show_popup = true;
}



function admin_delete_person(el){
    let rIndex = el.parentElement.parentElement.rowIndex;
    let table = document.getElementById("admin_personal_account_table");
    adminVue.admin_personID_chosen = table.rows[rIndex].cells[0].innerHTML;

    //confirm
    let confirm = window.confirm("Are you sure you want to delete this account? All data will be permanently lost.");
    if(confirm){
        let info = {};
        info.id=adminVue.admin_personID_chosen;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                window.alert("Personal account successfully deleted. Reload page.");
                window.location.reload();
            }
        };
        xhttp.open("POST", "/admin/delete_person", true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(JSON.stringify(info));
    }
}

function adminDeleteHotspot(el){
    let rIndex = el.parentElement.parentElement.rowIndex;
    let table = document.getElementById("current_hotspots_table");
    adminVue.admin_hotspotID_chosen = table.rows[rIndex].cells[0].innerHTML;

    //confirm
    let confirm = window.confirm("Are you sure you want to delete this hotspot? All data will be permanently lost.");
    if(confirm){
        let info = {};
        info.id=adminVue.admin_hotspotID_chosen;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                window.alert("Hotspot successfully deleted. Reload page.");
                window.location.reload();
            }
        };
        xhttp.open("POST", "/admin/delete_hotspot", true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(JSON.stringify(info));
    }
}

function admin_delete_manager(el){
    let rIndex = el.parentElement.parentElement.rowIndex;
    let table = document.getElementById("admin_business_account_table");
    adminVue.admin_managerID_chosen = table.rows[rIndex].cells[0].innerHTML;

    //confirm
    let confirm = window.confirm("Are you sure you want to delete this account? All data will be permanently lost.");
    if(confirm){
        let info = {};
        info.id=adminVue.admin_managerID_chosen;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                window.alert("Personal account successfully deleted. Reload page.");
                window.location.reload();
            }
        };
        xhttp.open("POST", "/admin/delete_manager", true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(JSON.stringify(info));
    }
}


function admin_edit_manager(el){
    //get venue id that is to be edited
    let rIndex = el.parentElement.parentElement.rowIndex;
    // console.log(rIndex);
    let table = document.getElementById("admin_venue_table");
    adminVue.admin_venueID_chosen = table.rows[rIndex].cells[0].innerHTML;

    // get all managers
    adminVue.adminGetManagers();
    adminVue.admin_show_popup=true;
    adminVue.admin_edit_manager_popup = true;
}

function admin_delete_venue(el){
    let confirm = window.confirm("are you sure you want to delete this venue?");
    if(confirm){
        let rIndex = el.parentElement.parentElement.rowIndex;
        // console.log(rIndex);
        let table = document.getElementById("admin_venue_table");
        adminVue.admin_venueID_chosen = table.rows[rIndex].cells[0].innerHTML;
        // console.log(table.rows[rIndex].cells[0]);
        let info={};
        info.id = adminVue.admin_venueID_chosen;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                alert("Venue succuessfully deleted. Refresh page.");
                window.location.reload();
            }
        };
        xhttp.open("POST", "/admin/delete_venue", true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(JSON.stringify(info));
        }

}


function admin_show_extend_timeframe_popup_func(el){

    adminVue.admin_show_popup=true;
    adminVue.admin_show_reset_timeframe_popup=true;

    //set up the hotspot to be extended
    let rIndex = el.parentElement.parentElement.rowIndex;

    let table = document.getElementById("current_hotspots_table");

    adminVue.admin_hotspotID_chosen = table.rows[rIndex].cells[0].innerHTML;

}

// function admin_deactivate_hotspot(el){
//     let ans = confirm("Are you sure you want to deactivate this hotspot now?");
//     //cancel
//     if (!ans){return;}

//     //set up the hotspot to be extended
//     let rIndex = el.parentElement.parentElement.rowIndex;
//     let table = document.getElementById("current_hotspots_table");
//     let info={};
//     info.daID = table.rows[rIndex].cells[0].innerHTML;
//     var xhttp = new XMLHttpRequest();
//     var _this = this;
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             alert("Hotspot succuessfully deactivated. Refresh page.");
//         }
//         window.location.reload();
//     };
//     xhttp.open("POST", "/admin/deactivate_hotspot", true);
//     xhttp.setRequestHeader("Content-type", "application/json");
//     xhttp.send(JSON.stringify(info));
// }






// function admin_showHostspotList(){
//     document.getElementById("map").style.display="none";
//     document.getElementById("hotspot_list").style.display="block";

//     // Vue v-for didn't work because this page is served dynamically
//     var table = document.getElementsByTagName('TBODY')[0];
//     var data = geojson.features;
//     var content = "";
//     for(i=0;i<data.length;i++){
//         console.log(data[i]);
//         content = content + "<tr><td>"+data[i].properties.hotspot_id+"</td>" +
//          "<td>"+data[i].properties.description+"</td>" +
//          "<td>"+data[i].properties.title+"</td>" +
//          "<td>"+data[i].properties.start_date+"</td>" +
//          "<td>"+data[i].properties.end_date+"</td>" +
//          "<td><button onclick='admin_extend_timeFrame_show()'><i class='fas fa-clock'></i> Extend</button><button><i class='fas fa-trash-alt'></i> deactivate</button></td></tr>";
//     }
//     table.innerHTML = content;

//     //get request for all hotspots
//     console.log(geojson.features);
// }

function goto_venue_page_and_add_venue(){
    // adminVue.chooseVenue();
    // console.log(adminVue.new_venue_address,adminVue.new_venue_coordinates);

    // document.getElementsByClassName('admin_popup')[0].style.display='block';
    adminVue.admin_show_popup=true;
    adminVue.admin_show_add_venue_popup = true;
}


function admin_add_venue(){
    // console.log("added");
    let name=document.getElementById("admin_new_venue_name").value;
    if(name.length > 0){
        let info = {};
        // req.body.name, req.body.number_venue, req.body.street,req.body.suburb,req.body.postcode,req.body.longitude,req.body.latitude
        let add1=adminVue.new_venue_address.split(',')[0];
        let add2 = adminVue.new_venue_address.split(',')[1];
        let add3=adminVue.new_venue_address.split(',')[2];
        info.name =name;
        info.number_venue = add1.split(' ')[0];
        // console.log(add2.split(' '));
        info.street = add1.split(' ')[1];
        let add22= add2.split(' ');
        info.suburb = add22[1];
        info.postcode = add22[add22.length-1];
        info.longitude = adminVue.new_venue_coordinates[0];
        info.latitude = adminVue.new_venue_coordinates[1];



        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){

            if(this.readyState ==4 && this.status == 200){
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function(){

                    if(this.readyState ==4 && this.status == 200){

                        let id = JSON.parse(this.response).venue_id;
                        let code = JSON.parse(this.response).code;
                        document.getElementsByClassName('admin_popup_after')[0].innerHTML=`<h2>New venue successfully added</h2><p>Venue: ${name}</p><p>address: ${adminVue.new_venue_address}</p><p>id: ${id}</p><p>Unique check-in code: ${code}</p>`;
                    }
                };

                xhttp.open("GET","/admin/venue_info?businessName="+name,true);

                xhttp.send();


            }else if(this.readyState ==4 && this.status != 200){
                document.getElementsByClassName('admin_popup_after')[0].innerText='Unsuccessful. Please check and make sure the address contains street number and street name';
            }
        };

        xhttp.open("POST","/admin/add_venue",true);
        //set content type to JSON
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(JSON.stringify(info));

    }else{
        return;
    }

}

function retrieveVenueInfo(businessName){
    var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){

            if(this.readyState ==4 && this.status == 200){
                adminVue.queryVenue_id = JSON.parse(this.response).venue_id;
                adminVue.queryVenue_code = JSON.parse(this.response).code;
            }
        };

        xhttp.open("GET","/admin/venue_info?businessName="+businessName,true);

        xhttp.send();
}


// function admin_extend_timeFrame_show(){
//     console.log("dsdsf");
//     document.getElementsByClassName("admin_popup")[1].style.display="block";
//     // document.getElementById("admin_extend_popup").display="block";
// }

// --------------end of Admin Javascript-----------------


