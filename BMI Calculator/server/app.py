from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/')
def welcome():
    return render_template("BMI_Calculator.html")


@app.route('/calculate/<weight>/<height>')
def calculate(weight,height):
    
    bmi = float(weight) / ((float(height))*(float(height)))
    print(bmi)
    return {
        "result": str(bmi)
    }
    

if __name__ == "__main__":
    app.run()