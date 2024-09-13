from flask import Flask, render_template, request

app = Flask(__name__)

# This list will hold the submitted answers
answers = []

@app.route('/')
def home():
    return render_template('index.html', answers=answers)

@app.route('/submit', methods=['POST'])
def submit():
    # Fetching the query text from the form
    query_text = request.form['query']

    # Add the query result to the answers list
    answers.append(f"Query submitted: {query_text}")

    # Render the template and pass the updated answers list
    return render_template('index.html', answers=answers)

if __name__ == '__main__':
    app.run(debug=True)
