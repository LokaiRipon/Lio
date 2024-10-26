from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from os import path
from flask_migrate import Migrate

db = SQLAlchemy()
db_name = "Users.db"

login_manager = LoginManager()

def create_app():
    app = Flask(__name__)
    app.config["SECRET_KEY"] = "your-secret-key"
    app.config["SQLALCHEMY_DATABASE_URI"] = f"sqlite:///{db_name}"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    
    # initializing db and app
    db.init_app(app)
    login_manager.init_app(app)
    
    Migrate(app, db)
    # 
    # registering the blueprints
    from .auth import auth
    from .views import views
# 
    # getting the User table from the models    
    from .models import User
    # 
    app.register_blueprint(auth)
    app.register_blueprint(views)
    # 
    @login_manager.user_loader
    def load_user(user_id):
        return User.query.get(int(user_id))
    # 
    login_manager.login_view = "auth.login"
    
    with app.app_context():
        
        create_database()
        
        return app
    
    
def create_database():
    if not path.exists("website/"+ db_name):
        
        db.create_all()
        
        print(" _- Database created !")