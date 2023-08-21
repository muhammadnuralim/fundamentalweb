from flask import Blueprint

projectsBp = Blueprint('projects', __name__)

from app.project import routes