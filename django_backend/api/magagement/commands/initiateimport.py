from django.core.management.base import BaseCommand
from api.views import import_csv

class Command(BaseCommand):
    help = 'Initiate CSV import process'

    def handle(self, *args, **options):
        import_csv()  # Call the import_csv function
        self.stdout.write(self.style.SUCCESS('CSV import initiated'))
