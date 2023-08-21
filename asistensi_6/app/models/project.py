from app.extensions import db


class Projects(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    # tasks = db.relationship('Task', backref='project', lazy=True)
    # team_members = db.relationship('TeamMember', secondary='project_team_member', backref='projects', lazy=True)

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            # "tasks": [task.serialize() for task in self.tasks],
            # "team_members": [team_member.serialize() for team_member in self.team_members]
        }

