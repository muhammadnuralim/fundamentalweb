from app.project import projectsBp
from flask import request, jsonify

from app.extensions import db

from app.models.project import Projects

@projectsBp.route("", methods=["GET"], strict_slashes= False,)
def get_all_projects():
    """
    Fungsi untuk mengambil semua task dari tabel tasks
    
    """
    limit = request.args.get("limit", 10)
    if type(limit) is not int:
        return jsonify({"message": "invalid parameter"}), 422
    
    projects = db.session.execute(
        db.select(Projects).limit(limit) #ORM
    ).scalars()

    results = []
    for project in projects:    
        results.append(project.serialize())

    response = jsonify(
        success = True,
        data = results
    )

    return response, 200


@projectsBp.route("", methods=["POST"], strict_slashes= False,)
def create_project():
    """
    Fungsi untuk membuat task baru
    """
    data = request.get_json()
    input_title = data.get("title")


    # validasi data input
    if not input_title:
        return jsonify({"message": "Data is incomplete"}), 422
    

    newProject = Projects(
        title=input_title, 
        )
    db.session.add(newProject)
    db.session.commit()

    response = jsonify(
        success = True,
        data = newProject.serialize(),
        message= "Data berhasil dibuat!"
    )

    return response, 200