from flask_restful import Resource

class Minion(Resource):
	def get(self):
		return {"hello": "world"}
	def post(self):
		pass
