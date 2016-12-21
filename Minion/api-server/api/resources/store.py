from flask_restful import Resource

class Store(Resource):
	def get(self):
		return {'hello': 'store'}
	def post(self):
		pass
