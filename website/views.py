from flask import Blueprint, flash, redirect, url_for, render_template
from flask_login import login_required, current_user

views = Blueprint("views", __name__)

@login_required
@views.route('/home/', methods=['GET', 'POST'])
def home():
    flash("Welcome to the home page!", "success")
    return render_template('home-temps/home-lio.html')