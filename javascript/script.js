const tabs = document.querySelectorAll(".text");

tabs.forEach((tab) => {
    tab.addEventListener("click", function () {

        // Barcha tablardan active ni olib tashlash
        tabs.forEach((item) => {
            item.classList.remove("active");
        });

        // Bosilgan tabga active qo'shish
        this.classList.add("active");

    });
});