from app.extensions import db


class Tasks(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    project_id = db.Column(db.Integer, db.ForeignKey('projects.id'), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "project_id": self.project_id,
        }