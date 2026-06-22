const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.innerHTML = "☀ Clair";
    } else {
        themeBtn.innerHTML = "🌙 Sombre";
    }

});
// =======================
// FORMULAIRE + WHATSAPP
// =======================

document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(".order-one");

    if (!form) return;

    const btnContainer = document.createElement("div");
    btnContainer.className = "text-center mt-4";

    btnContainer.innerHTML = `
      

        <button type="button" id="btnWhatsapp" class="btn btn-primary">
            Envoyer la commande
            
        </button>
    `;

    form.appendChild(btnContainer);


    document.getElementById("btnWhatsapp").addEventListener("click", function () {

        const inputs = form.querySelectorAll("input");
        const selects = form.querySelectorAll("select");
        const textarea = form.querySelector("textarea");

        const nom = inputs[0].value;
        const email = inputs[1].value;
        const telephone = inputs[2].value;
        const adresse = inputs[3].value;
        const precision1 = inputs[4].value;
        const precision2 = inputs[5].value;

        const menu = selects[0].value;
        const personnes = selects[1].value;

        const commentaire = textarea.value;

        const message = `
Nouvelle commande

Nom : ${nom}
Email : ${email}
Téléphone : ${telephone}
Adresse : ${adresse}

Menu : ${menu}
Nombre de personnes : ${personnes}

Précision 1 : ${precision1}
Précision 2 : ${precision2}

Commentaire :
${commentaire}
`;

        const numero = "237658891211";

        window.open(
            `https://wa.me/${numero}?text=${encodeURIComponent(message)}`,
            "_blank"
        );
    });

});