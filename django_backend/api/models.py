from django.db import models

class FossaStore(models.Model):
    product_name = models.CharField(max_length=255)
    product_description = models.TextField()
    product_link = models.TextField()

    def __str__(self):
        return self.product_name
    class Meta:
            db_table='fossa_store'