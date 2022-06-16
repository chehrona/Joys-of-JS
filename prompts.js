 let steakAnswer = confirm ("Do you eat steak?");
        if (steakAnswer) {
            document.write("Here's a Steak Sandwich!");
        } else {
            document.write("Here's a Tofu Stir-Fry!");
        }
        let ageAnswer = prompt("What year were you born?");
        if ((2022 - parseInt(ageAnswer)) < 21) {
            alert("Np Sake for you!");
        }