
const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (currentTheme === "dark") {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
    }
}

toggleSwitch.addEventListener("change", switchTheme, false);

function telephoneCheck(str) {
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    console.log(regex.test(str));

    if (regex.test(str) === true) {
        return (document.getElementById("print").innerHTML =
            "<span style='color: green;'>El telefono es valido</span>");
    }
    return (document.getElementById("print").innerHTML =
        "<span style='color: red;'>El telefono no es valido</span>");
}