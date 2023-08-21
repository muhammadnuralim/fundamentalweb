from flask import Flask

from app.extensions import db, migrate

from config import Config

# import bluerpint
from app.project import projectsBp

def create_app(confg_class=Config):
    app = Flask(__name__)

    app.config.from_object(confg_class)

    # menghubungkan flask sqlalchemu & flask migrate
    db.init_app(app)
    migrate.init_app(app, db)

    # daftar blueprint
    app.register_blueprint(projectsBp, url_prefix="/projects")

    return app