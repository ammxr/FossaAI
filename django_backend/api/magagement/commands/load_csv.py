# api/management/commands/load_csv.py
import csv
from django.core.management.base import BaseCommand
from api.models import FossaStore

class Command(BaseCommand):
    help = 'Loads data from a CSV file to the database'

    def handle(self, *args, **options):
        csv_file_path = 'path/to/sample.csv'  # Specify the correct path to your CSV file

        with open(csv_file_path, 'r', encoding='utf-8') as file:
            csv_reader = csv.reader(file)
            next(csv_reader)  # Skip header row

            for row in csv_reader:
                product_name = row[0]
                product_description = row[1]
                product_link = row[2]
                
                FossaStore.objects.create(
                    product_name=product_name,
                    product_description=product_description,
                    product_link=product_link
                )

        self.stdout.write(self.style.SUCCESS('Data imported successfully'))
