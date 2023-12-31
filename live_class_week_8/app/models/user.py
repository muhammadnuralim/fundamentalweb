from app.extension import db

# table database user
class Users(db.Model):
    user_id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(64), unique = True, nullable=False)
    email = db.Column(db.String(128), nullable=False)
    password = db.Column(db.String(1024), nullable=False)
    tasks = db.relationship('Tasks', back_populates='user')

    # fungsi serialize untuk mengembalikan data dictionary
    def serialize(self): 
        return {
            "user_id": self.user_id,
            "name": self.name,
            "email":self.email,
            "password":self.password
        }