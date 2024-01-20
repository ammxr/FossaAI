from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
import json
from django.views.decorators.http import require_http_methods
from main import recommendation
from django.views.decorators.csrf import csrf_exempt

def index(request):
    return render(request,'index.html')

@csrf_exempt 
# Remove @csrf_exempt decorator
def output(request):
    print("ENTERED")
    print("METHOD REQUEST: ", request.method)
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        product_name = data.get('productName')
        product_description = data.get('productDescription')
        print("ABOUT TO GET RECCOMENDATION")
        recommendation_result = recommendation(product_name, product_description)
        print(recommendation_result)
        data_sent = True
        return JsonResponse({'recommendation': recommendation_result})
    return JsonResponse({'error': 'Invalid request method'})