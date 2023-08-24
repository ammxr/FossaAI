import os
import csv
from django.core.wsgi import get_wsgi_application
from django.conf import settings



os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'django_backend.settings')
application = get_wsgi_application()

from api.models import FossaStore

csv_file_path = os.path.join(settings.BASE_DIR, 'django_backend/sample.csv')

with open(csv_file_path, 'r') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    for row in csv_reader:
        FossaStore.objects.create(
            product_name=row['product_name'],
            product_description=row['product_description'],
            product_link=row['product_link']
        )