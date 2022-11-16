
# GeoDjango Nearby Shops

A GeoDjango project, that uses Spatial map locations to show nearby shops in any area. Makes use of django gis library.

## Installation

1. Clone the repository

    ```bash
    git clone https://github.com/devvspaces/geodjango-nearbyshops
    cd geodjango-nearbyshops
    ```

2. Create a virtual environment

    ```bash
    python3 -m venv env
    ```

    or

    ```bash
    virtualenv venv
    ```

3. Activate the virtual environment

    Linux

    ```bash
    source env/bin/activate
    ```

    Windows

    ```bash
    venv\Scripts\activate
        ```

4. Install the requirements

    ```bash
    pip install -r requirements.txt
    ```

5. Run the migrations

    ```bash
    python manage.py migrate
    ```

6. Create a superuser

    ```bash
    python manage.py createsuperuser
    ```

7. Run the server

    ```bash
    python manage.py runserver
    ```

8. Open the browser and go to `http://localhost:8000/admin/` and login with the superuser credentials.

9. Add a few shops with their locations.

10. Open the browser and go to `http://localhost:8000/` and you will see the nearby shops in the area.

> Note: The area can be edited in the file `shops/views.py`. Edit the user location variable.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
