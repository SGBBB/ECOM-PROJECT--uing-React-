# ECOM PROJECT (uing React)
 
For Backend:
1. used virtual environment(pipenv ) to isolate the associated dependencies from other directories.
2. Download pipenv from cmd "pip install pipenv"
3. To use it type cmd "pipenv shell"
4. install all the packages you find in pip file on Project
5. Go to project directory where you have manage.py file
6. Fire these cmd's "python manage.py makemigrations" ,"python manage.py migrate"
7.  Run "python manage.py runserver"
8.  Initially you wont be able to login to admi panel for that purpose u just create a new super userusing cmd "python manage.py createsuperuser". 

NOTE:Django follows MVT Architecture.


ecom is the website .
Following are the app used inside the Web-app:
1.Category
2.Products
3. User
4. Order


CATEGORY: (Categories like summer collection ,winter collection ):

Model:
1. Name 
2. DEscription

Products :
Model:
1.Category (linked to Category table via foreign key relation)
2. Price
3. Description
4. isInStock


Order :
Model:
1. user(linked to user model via foreign key)
2. product_names
3. total_amount
4. total_products
