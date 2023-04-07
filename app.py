from flask import Flask
from flask_cors import CORS
from comboparser import ACombo as cp
from comboparser import main_specific

app = Flask(__name__)
CORS(app)


@app.route("/")
def hello_world():
    return {"data": "hello flask"}

@app.route('/<stage>/<characterPicked>/<charactersAgainst>/<minHits>/<slippiSource>')
def getCombos(stage, characterPicked, charactersAgainst, minHits, slippiSource):
    allcombos, newComboList = main_specific(characterPicked, stage, minHits, charactersAgainst, slippiSource)
    return {"allcombos": allcombos, "newComboList": newComboList}