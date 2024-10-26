from flask import Blueprint, render_template, request, redirect, url_for, flash
from flask_login import login_user, logout_user
from werkzeug.security import generate_password_hash, check_password_hash
from . import db
from .models import User

# User registration route
auth = Blueprint("auth", __name__)


@auth.route("/", methods=["GET"])
def authenticate():
    return redirect(url_for("auth.login"))

@auth.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        # getting the user details 
        
        email = request.form["email"]
        password = request.form["password"]
        
        # checking if user exists in the database
        check_user = User.query.filter_by(email=email).first()
        
        if check_user:
            # comparing the password hash
            if check_password_hash(check_user.password_hash, password):
                # if password is correct, log the user in
                login_user(check_user)
                return redirect(url_for("views.home"))
            else:
                flash("Invalid credentials", "error")
                return redirect(url_for("auth.login"))
        else:
            flash("User not found.", "error")
            return redirect(url_for("auth.login"))
        
    else:
        return render_template("auth-temps/login.html")
    
    
@auth.route("/logout", methods=["GET"])
def logout():
    logout_user()
    return redirect(url_for("auth.login"))

@auth.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        # getting the user details
        
        name = request.form["name"]
        email = request.form["email"]
        password = request.form["password"]
        confirm_password = request.form["confirm_password"]
        
        # checking if the email already exists in the database
        check_user = User.query.filter_by(email=email).first()
        
        if check_user:
            flash("Email already exists.", "error")
            return redirect(url_for("auth.register"))
            
        elif password != confirm_password:
            flash("Passwords do not match.", "error")
            return redirect(url_for("auth.register"))
            
        else:
            # generating a password hash
            hashed_password = generate_password_hash(password, method="pbkdf2:sha256")
            # creating a new user object
            new_user = User(name=name, email=email, password_hash=hashed_password)
            
            db.session.add(new_user)
                        
            # adding the user to the database
            
            try:
                db.session.commit()   
                
                flash("User created. You can now login", "success")
                
                return redirect(url_for("auth.login"))
            except Exception as e:
                db.session.rollback()
                flash(f"An error occurred: {str(e)}", "error")
                return redirect(url_for("auth.register"))
            
            
            # logging the user in
    else:
        return render_template("auth-temps/signup.html")