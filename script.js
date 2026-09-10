function toggleMenu() {
    const nav = document.getElementById("navMenu");
    nav.classList.toggle("active");
}


// STUDENT CHECKLIST

const checklistItems = document.querySelectorAll(".checklist input");

function updateProgress() {
    const total = checklistItems.length;

    let completed = 0;

    checklistItems.forEach((item, index) => {

        if (item.checked) {
            completed++;
            localStorage.setItem("research_step_" + index, "done");
        } else {
            localStorage.removeItem("research_step_" + index);
        }

    });

    const percentage = total === 0
        ? 0
        : Math.round((completed / total) * 100);

    console.log("Research Progress: " + percentage + "%");
}


// LOAD SAVED CHECKLIST

checklistItems.forEach((item, index) => {

    const saved = localStorage.getItem("research_step_" + index);

    if (saved === "done") {
        item.checked = true;
    }

    item.addEventListener("change", updateProgress);

});


// CLOSE MOBILE MENU AFTER CLICK

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", function() {

        document.getElementById("navMenu").classList.remove("active");

    });

});


// START

updateProgress();

