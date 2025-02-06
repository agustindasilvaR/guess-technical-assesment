
    document.addEventListener("DOMContentLoaded", function () {
        const languageSelect = document.getElementById("selectLanguage");
        const textElement = document.getElementById("dynamicText");
        const subElement = document.getElementById("dynamicSubtitle");
    
        const translationsTitle = {
        en: "Analog in Rome",
        es: "Analógico en Roma",
        it: "Analogico a Roma"
        };

        const translationsSubtitle = {
            en: "discover the current world, through an old lens.",
            es: "descubre el mundo actual, a través de un lente antiguo.",
            it: "scopri il mondo attuale, attraverso una vecchia lente."
        };
    

        textElement.textContent = translationsTitle[languageSelect.value] || translationsTitle.en;
        subElement.textContent = translationsSubtitle[languageSelect.value] || translationsSubtitle.en;
    
        languageSelect.addEventListener("change", function () {
        const selectedLang = languageSelect.value;
        textElement.textContent = translationsTitle[selectedLang] || translationsTitle.en;
        subElement.textContent = translationsSubtitle[selectedLang] || translationsSubtitle.en;
        });
    });
    