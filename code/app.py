from flask import Flask, render_template, jsonify

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/data')
def data():
    student = {'name':'link', 'age':12}
    result = jsonify(student)
    return result

if __name__ == '__main__':
    app.run(debug=True)