from flask import Flask
from flask import jsonify
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)
# 
# 
# 
# 

page = requests.get("https://www.cnbctv18.com/market-live/")
sensex = requests.get("https://economictimes.indiatimes.com/indices/sensex_30_companies?from=mdr")
nifty = requests.get("https://economictimes.indiatimes.com/markets/nifty-50/indexsummary/indexid-2369,exchange-50.cms")
# 
soup = BeautifulSoup(page.content, "lxml")
# 
sop = BeautifulSoup(sensex.content, "lxml")
SensexIN=sop.find(id="ltp").get_text()
# 
# 
nop = BeautifulSoup(nifty.content, "lxml")
NiftyIN=nop.find(id="ltp").get_text()
# 
# 
# 
ActiveStockNSE = soup.find(class_="most_active_rhs").find(
    id="NSE").find("table").find("tbody").find_all("tr")
ActiveStockBSE = soup.find(class_="most_active_rhs").find(
    id="BSE").find("table").find("tbody").find_all("tr")
# 
# 
# 

TopStockNSE = soup.find(class_="top_gainer_rhs").find(
    id="NSE").find("table").find("tbody").find_all("tr")
TopStockBSE = soup.find(class_="top_gainer_rhs").find(
    id="BSE").find("table").find("tbody").find_all("tr")
# # 
# # 
# # 
TopLoserNSE = soup.find(class_="top_loser_rhs").find(
    id="NSE").find("table").find("tbody").find_all("tr")
TopLoserBSE = soup.find(class_="top_loser_rhs").find(
    id="BSE").find("table").find("tbody").find_all("tr")
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
ActivedataNSE = []
for row in ActiveStockNSE:
    cols = row.find_all('td')
    cols = [ele.text.strip() for ele in cols]
    ActivedataNSE.append([ele for ele in cols if ele])
# 
ActivedataBSE = []
for row in ActiveStockBSE:
    cols = row.find_all('td')
    cols = [ele.text.strip() for ele in cols]
    ActivedataBSE.append([ele for ele in cols if ele])
# 
TopDataNSE = []
for row in TopStockNSE:
    cols = row.find_all('td')
    cols = [ele.text.strip() for ele in cols]
    TopDataNSE.append([ele for ele in cols if ele])
# # 
TopDataBSE = []
for row in TopStockBSE:
    cols = row.find_all('td')
    cols = [ele.text.strip() for ele in cols]
    TopDataBSE.append([ele for ele in cols if ele])
# # 
TopLostNSE = []
for row in TopLoserNSE:
    cols = row.find_all('td')
    cols = [ele.text.strip() for ele in cols]
    TopLostNSE.append([ele for ele in cols if ele])
# # 
TopLostBSE = []
for row in TopLoserBSE:
    cols = row.find_all('td')
    cols = [ele.text.strip() for ele in cols]
    TopLostBSE.append([ele for ele in cols if ele])

# 
# 
# 
# 

@app.route('/activeNSE', methods=['GET'])
def activeNSE():
    return jsonify(ActivedataNSE)

@app.route('/activeBSE', methods=['GET'])
def activeBSE():
    return jsonify(ActivedataBSE)

@app.route('/topNSE', methods=['GET'])
def topNSE():
    return jsonify(TopDataNSE)

@app.route('/topBSE', methods=['GET'])
def topBSE():
    return jsonify(TopDataBSE)

@app.route('/lostNSE', methods=['GET'])
def lostNSE():
    return jsonify(TopLostNSE)

@app.route('/lostBSE', methods=['GET'])
def lostBSE():
    return jsonify(TopLostBSE)
# 
@app.route('/sensexval', methods=['GET'])
def BSE():
    return jsonify(SensexIN)

@app.route('/niftyval', methods=['GET'])
def NSE():
    return jsonify(NiftyIN)
# 
# 
if __name__ == '__main__':
    app.run(debug=True, port=7000)
    