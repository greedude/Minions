from flask import Flask
from flask_restful import Api
from resources.coin import Coin
from resources.minion import Minion
from resources.store import Store
from resources.user import User

app = Flask(__name__)
api = Api(app)

api.add_resource(Coin, '/api/Coin')
api.add_resource(Minion, '/api/Minion')
api.add_resource(Store, '/api/Store')
api.add_resource(User, '/api/User')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
