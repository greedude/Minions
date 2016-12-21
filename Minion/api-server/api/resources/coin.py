from flask_restful import Resource

class Coin(Resource):
	def get(self):
		return {'hello': 'coin'}
	def post(self):
		pass
