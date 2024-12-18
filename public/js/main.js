// /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\
// 
//      CE FICHIER JAVASCRIPT N'EST PAS DU NODEJS
// 
// /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\
"use strict";

// Recupère tous les formulaires <form> du document
document.querySelectorAll('form').forEach(form => {

    const controls = form.querySelectorAll('input, textarea, select');

    controls.forEach(control => {
        const parent = control.parentNode;
        const label = parent.querySelector('label');

        if (control.required) {
            label.classList.add('required');
        }
    });
    
})