async function calculate() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    if (weight > 0 && height > 0) {

        // static calculation
        // height = document.getElementById("height").value / 100;
        // var bmi = ((weight) / (Math.pow(height, 2)));

        const bmi = await fetchData(weight, height/100);
        document.getElementById("result").innerText = `Your BMI is ${bmi}`;
        document.getElementById("result").style.color = "blue";
    }
    else {
        document.getElementById("result").innerText = "Please enter the valid inputs";
        document.getElementById("result").style.color = "red";
    }
}

async function fetchData(weight, height) {
    try {
        let response = await fetch(`/calculate/${weight}/${height}`, {
            mode: 'no-cors',
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        })
        try{
            const data = await response.json();
            const bmi = data.result;
            return bmi;
        }
        catch(error){

        }
        
    } catch (error) {
        
    }    
}
