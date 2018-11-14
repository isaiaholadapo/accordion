var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

let conBtn = document.querySelector(".showConfirm");
let disBtn = document.querySelector(".showall");
let payNo = document.querySelector(".paydet");
let closeItm = document.querySelector(".closeAll");
let payNow = document.querySelector(".nowPay");

$(".pay-btn").click(function() {
    disBtn.style.display = "block";
    closeItm.style.display = "block";
    payNo.style.display = 'none';
    conBtn.style.display = "none";
});

  $(".closeAll").click(function() {
    disBtn.style.display = "none";
    payNo.style.display = 'none';
    conBtn.style.display = "none";
    payNow.style.display = "none";
});

$(".confirmBtn").click(function() {
    conBtn.style.display = "block";
    payNow.style.display = 'block';
    disBtn.style.display = "none";
});

$(".nowPay").click(function() {
    disBtn.style.display = 'none';
    payNo.style.display = 'block';
    payNow.style.display = 'none';

});

$('#airtimeSelect').click(function() {
    $("#airtimeAmount").prop("disabled", false);
})

  $("#airtimeAmount").keyup(function(data) {
        if ($(this).val() != "") {
            $("#airtimeNumber").removeAttr("disabled");
        } else {
            $("#airtimeNumber").attr("disabled", "disabled");
        }
    });

  $("#airtimeNumber").keyup(function(data) {
        if ($(this).val() != "") {
            $("#airtimeEmail").removeAttr("disabled");
        } else {
            $("#airtimeEmail").attr("disabled", "disabled");
        }
    });