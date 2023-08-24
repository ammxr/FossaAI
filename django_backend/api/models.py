from django.db import models

class FossaStore(models.Model):
    product_name = models.CharField(max_length=255)
    product_description = models.TextField()
    product_link = models.CharField(max_length=255)

    def __str__(self):
        return self.product_name
    class Meta:
        app_label = 'api'