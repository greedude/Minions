from flask_restful import Resource

class User(Resource):
	def get(self):
		return {'hello': 'user'}
	def post(self):
		pass
