from app.extensions import db

class TeamMembers(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
        }