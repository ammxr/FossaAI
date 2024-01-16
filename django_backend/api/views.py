from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
import json
from django.views.decorators.http import require_http_methods
from main import recommendation

def index(request):
    return render(request,'index.html')

def output(request):
    print("ENTEREDDDDD")
    """
    product_name = request.GET.get('productName')
    product_description = request.GET.get('productDescription')
    
    print(product_name)
    print(product_description)
    """
    recommendation_result = recommendation()
    print(recommendation_result)
    return JsonResponse({'recommendation': recommendation_result})
