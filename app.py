from flask import Flask, redirect, url_for, request, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/index.html')
def indexxx():
    return render_template('index.html')

@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/<uid>')
def message(uid):
    return render_template('submit.html', id = uid )


